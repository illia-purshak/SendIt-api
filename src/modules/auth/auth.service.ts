import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import {
  ForgotPasswordDto,
  IndividualProfileDto,
  LoginDto,
  OrganizationProfileDto,
  RegDto,
  ResetPasswordDto,
} from "./auth.dto";
import argon2 from "argon2";
import { createRefreshToken, hashThis } from "src/utils/helper";

import { JwtService } from "@nestjs/jwt";
import { UserRole, UserStatus } from "src/generated/prisma/enums";
import { Prisma } from "src/generated/prisma/client";
import { NodemailerService } from "src/common/nodemail.service";
import { setDeadlineFromNow, WEEK } from "src/constants/time";
import { AccessUser } from "src/common/decorators";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private nodemailer: NodemailerService,
  ) {}

  async me(user: AccessUser) {
    const userData = await this.prisma.user.findFirst({
      where: { id: user.sub },
    });
    if (userData?.profileCompleted) {
      const userDetails = await this.prisma.individualProfile.findFirst({
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

    const passwordValid = await argon2.verify(
      userCredentials.passwordHash,
      dto.password,
    );

    if (!passwordValid)
      throw new UnauthorizedException({
        success: false,
        error: {
          code: 401,
          message: "Wrong password",
        },
      });

    const refreshToken = createRefreshToken();
    const refreshTokenHash = await hashThis(refreshToken);

    await this.prisma.refreshTokens.updateMany({
      where: { userId: user.id },
      data: { revokedAt: new Date() },
    });

    const token = await this.prisma.refreshTokens.create({
      data: {
        userId: user.id,
        refreshTokenHash,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
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
      tokenId: token.id,
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

  async compliteIndividualProfile(user: AccessUser, dto: IndividualProfileDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        tx.individualProfile.create({
          data: { userId: user.sub, ...dto },
        });

        tx.user.update({
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

  async compliteOrganizationProfile(
    user: AccessUser,
    dto: OrganizationProfileDto,
  ) {
    try {
      await this.prisma.organizationProfile.create({
        data: { userId: user.sub, ...dto },
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
    const userExist = await this.prisma.user.findFirstOrThrow({ where: dto });

    if (!userExist) {
      throw new BadRequestException({
        success: false,
        error: {
          code: 404,
          message: "Can't find user with such email",
        },
      });
    }

    try {
      this.jwtService.sign({
        sub: new Date().getTime(),
        email: dto.email,
      });
      this.nodemailer.sendMail({
        from: "SendIt",
        to: userExist.email!,
        subject: "Forgot your password?",
        text: "Click here",
      });
    } catch (err) {
      throw new InternalServerErrorException({
        success: false,
        error: {
          code: 500,
          message: "Error occured when while sending email",
        },
      });
    }

    return {
      success: true,
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    return dto;
  }

  async refreshAccessToken(
    userId: number,
    refreshToken: string,
    tokenId: number,
  ) {
    const token = await this.prisma.refreshTokens.findUnique({
      where: { id: tokenId },
    });

    if (!token || token.userId !== userId) {
      throw new UnauthorizedException();
    }

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

    const isValid = await argon2.verify(refreshToken, token.refreshTokenHash);

    if (!isValid) {
      throw new UnauthorizedException();
    }

    const newRefreshToken = createRefreshToken();
    const newHash = await hashThis(newRefreshToken);

    const newToken = await this.prisma.$transaction(async (tx) => {
      await tx.refreshTokens.update({
        where: { id: token.id },
        data: { revokedAt: new Date() },
      });

      return tx.refreshTokens.create({
        data: {
          userId,
          refreshTokenHash: newHash,
          expiresAt: setDeadlineFromNow(WEEK),
        },
      });
    });

    const accessToken = this.jwtService.sign({
      sub: userId,
    });

    return {
      accessToken,
      refreshToken: newRefreshToken,
      tokenId: newToken.id,
    };
  }
}
