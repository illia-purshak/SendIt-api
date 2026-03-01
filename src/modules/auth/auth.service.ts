import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "src/modules/prisma/prisma.service";
import {
  ForgotPasswordDto,
  IndividualProfileDto,
  LoginDto,
  OrganizationProfileDto,
  RegDto,
  ResetPasswordDto,
} from "./auth.dto";
import argon2 from "argon2";
import { createToken, hashThis } from "src/utils/helper";

import { JwtService } from "@nestjs/jwt";
import { Prisma, UserRole, UserStatus, UserType } from "src/generated/prisma/client";
import { MINUTE, setDeadlineFromNow, WEEK } from "src/constants/time";
import { AccessUserContext } from "src/common/decorators";
import { createHash } from "crypto";

import { API_ROUTES } from "src/constants/apiRoutes";
import { MailService } from "../mail/mail.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async me(user: AccessUserContext) {
    const userData = await this.prisma.user.findFirst({
      where: { id: user.sub },
    });
    if (userData?.profileCompleted) {
      const userDetails =
        userData.type === UserType.ORGANIZATION
          ? await this.prisma.organizationProfile.findFirst({
              where: { userId: user.sub },
            })
          : await this.prisma.individualProfile.findFirst({
              where: { userId: user.sub },
            });
      return {
        success: true,
        data: [userData, userDetails],
      };
    }
    return userData;
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user)
      throw new UnauthorizedException({
        success: false,
        error: {
          code: 401,
          message: "Invalid credentials",
        },
      });

    const userCredentials = await this.prisma.userCredentials.findUnique({
      where: { userId: user.id },
    });

    if (!userCredentials)
      throw new UnauthorizedException({
        success: false,
        error: {
          code: 401,
          message: "Invalid credentials",
        },
      });

    const passwordValid = await argon2.verify(userCredentials.passwordHash, dto.password);

    if (!passwordValid)
      throw new UnauthorizedException({
        success: false,
        error: {
          code: 401,
          message: "Wrong password",
        },
      });

    const refreshToken = createToken();
    const tokenHash = await hashThis(refreshToken);

    await this.prisma.refreshTokens.updateMany({
      where: { userId: user.id },
      data: { revokedAt: new Date() },
    });

    const tokenRecord = await this.prisma.refreshTokens.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now() + WEEK),
      },
    });

    const accessToken = this.jwtService.sign({
      sub: user.id,
      role: user.role,
      type: user.type,
    });

    return {
      accessToken,
      refreshToken,
      tokenId: tokenRecord.id,
    };
  }

  async register(dto: RegDto) {
    const { email, phone, type, password } = dto;

    const passwordHash = await hashThis(password);

    try {
      const user = await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            email,
            phoneNumber: phone,
            status: UserStatus.ACTIVE,
            role: UserRole.CLIENT,
            type,
          },
        });

        await tx.userCredentials.create({
          data: {
            userId: user.id,
            passwordHash,
          },
        });

        return user;
      });

      return {
        success: true,
        data: {
          id: user.id,
          type: user.type,
        },
      };
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          throw new BadRequestException({
            success: false,
            error: {
              code: 400,
              message: "Email or phone number is already taken",
            },
          });
        }
      }

      throw new InternalServerErrorException({
        success: false,
        error: {
          code: 500,
          message: err.message,
        },
      });
    }
  }

  async compliteIndividualProfile(user: AccessUserContext, dto: IndividualProfileDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.individualProfile.create({
          data: { userId: user.sub, ...dto },
        });

        await tx.user.update({
          where: { id: user.sub },
          data: { profileCompleted: true },
        });
      });
      return { success: true };
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          throw new BadRequestException({
            success: false,
            error: {
              code: 400,
              message: "Profile for this user already exists",
            },
          });
        }
      }

      throw err;
    }
  }

  async compliteOrganizationProfile(user: AccessUserContext, dto: OrganizationProfileDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.organizationProfile.create({
          data: { userId: user.sub, ...dto },
        });
        await tx.user.update({
          where: { id: user.sub },
          data: { profileCompleted: true },
        });
      });
      return { success: true };
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          throw new BadRequestException({
            success: false,
            error: {
              code: 400,
              message: "Profile for this user already exists",
            },
          });
        }
      }

      throw err;
    }
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user?.email) return { success: true };

    const token = createToken();
    const tokenHash = await argon2.hash(token);
    const tokenLookupHash = String(createHash("sha256").update(token).digest("hex"));

    try {
      await this.prisma.$transaction(async (tx) => {
        await tx.resetPasswordTokens.updateMany({
          where: { userId: user.id, usedAt: null },
          data: { usedAt: new Date() },
        });

        await tx.resetPasswordTokens.create({
          data: {
            userId: user.id,
            tokenHash,
            tokenLookupHash,
            expiresAt: setDeadlineFromNow(MINUTE * 15),
          },
        });
      });

      const encodedToken = encodeURIComponent(token);
      const base = process.env.FRONTEND_URL ?? "http://localhost:3000";
      const link = `${base}${API_ROUTES.AUTH.RESET_PASSWORD}?token=${encodedToken}`;

      await this.mailService.sendEmail(
        user.email,
        "Wanna reset your sendIt password?",
        "reset-password-email.pug",
        { name: "noreply-sendIt", resetLink: link },
      );

      return { success: true };
    } catch {
      throw new InternalServerErrorException("An error occurred while processing password reset");
    }
  }

  async resetPassword(tokenLookup: string, dto: ResetPasswordDto) {
    const tokenLookupHash = String(createHash("sha256").update(tokenLookup).digest("hex"));

    const passwordHash = await hashThis(dto.password);
    try {
      await this.prisma.$transaction(async (tx) => {
        const record = await tx.resetPasswordTokens.findUnique({
          where: { tokenLookupHash },
        });

        if (!record || record.usedAt || record.expiresAt < new Date())
          throw new BadRequestException("Invalid reset password token");

        const ok = await argon2.verify(record.tokenHash, tokenLookup);

        if (!ok) throw new BadRequestException("Invalid reset password token");

        await tx.resetPasswordTokens.update({
          where: { id: record.id },
          data: { usedAt: new Date() },
        });

        await tx.userCredentials.update({
          where: { userId: record.userId },
          data: { passwordHash },
        });

        await tx.refreshTokens.updateMany({
          where: { userId: record.userId },
          data: { revokedAt: new Date() },
        });
      });
      return { success: true };
    } catch (err) {
      if (err instanceof BadRequestException) {
        throw err;
      }

      throw new InternalServerErrorException("An error occurred while changing the password");
    }
  }

  async refreshAccessToken(refreshToken: string, tokenId: number) {
    const token = await this.prisma.refreshTokens.findUnique({
      where: { id: tokenId },
    });

    if (!token) {
      throw new UnauthorizedException();
    }

    const userId = token.userId;

    if (token.revokedAt) {
      await this.prisma.refreshTokens.updateMany({
        where: { userId },
        data: { revokedAt: new Date() },
      });

      throw new UnauthorizedException("Refresh token reuse detected");
    }

    if (token.expiresAt < new Date()) {
      throw new UnauthorizedException();
    }

    const isValid = await argon2.verify(token.tokenHash, refreshToken);

    if (!isValid) {
      throw new UnauthorizedException();
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true, type: true },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const newRefreshToken = createToken();
    const newHash = await hashThis(newRefreshToken);

    const newToken = await this.prisma.$transaction(async (tx) => {
      await tx.refreshTokens.update({
        where: { id: token.id },
        data: { revokedAt: new Date() },
      });

      return tx.refreshTokens.create({
        data: {
          userId,
          tokenHash: newHash,
          expiresAt: setDeadlineFromNow(WEEK),
        },
      });
    });

    const accessToken = this.jwtService.sign({
      sub: user.id,
      role: user.role,
      type: user.type,
    });

    return {
      accessToken,
      refreshToken: newRefreshToken,
      tokenId: newToken.id,
    };
  }
}
