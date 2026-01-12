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
  LoginDto,
  RegDto,
  ResetPasswordDto,
} from "./auth.dto";
import { UserWhereInput } from "src/generated/prisma/models";
import argon2 from "argon2";
import { createRefreshToken, hashThis } from "src/utils/helper";
import { Request } from "express";

import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new NotFoundException("Invalid credentials");

    const userCredentials = await this.prisma.userCredentials.findFirst({
      where: { userId: user.id },
    });

    if (!userCredentials) throw new NotFoundException("Invalid credentials");

    if (!userCredentials.passwordHash) throw new Error("Autorized with google");

    const passwordValid = await argon2.verify(
      userCredentials.passwordHash,
      dto.password
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
      email: user.email,
    });

    return {
      accessToken,
      refreshToken,
      tokenId: token.id,
    };
  }

  async register(dto: RegDto) {
    const { email, phone, type, password } = dto;

    if (!email && !phone) {
      throw new BadRequestException({
        success: false,
        error: {
          code: 400,
          message: "Email or phone number is required",
        },
      });
    }

    const or: UserWhereInput[] = [];

    if (email) {
      or.push({ email });
    }

    if (phone) {
      or.push({ phoneNumber: phone });
    }

    const exist = await this.prisma.user.findFirst({
      where: {
        OR: or,
      },
    });

    if (exist) {
      throw new BadRequestException({
        success: false,
        error: {
          code: 400,
          message: `This ${email ? "email address" : "phone number"} is already taken`,
        },
      });
    }

    try {
      const passwordHash = await hashThis(password);

      const user = await this.prisma.user.create({
        data: {
          email,
          phoneNumber: phone,
          status: "ACTIVE",
          role: "CLIENT",
          type,
        },
      });

      await this.prisma.userCredentials.create({
        data: {
          userId: user.id,
          passwordHash,
        },
      });

      return {
        success: true,
      };
    } catch (err) {
      throw new InternalServerErrorException({
        success: false,
        error: {
          code: 500,
          message: err.message,
        },
      });
    }
  }

  async forgotPassword(token: string, dto: ForgotPasswordDto) {
    return [token, dto];
  }

  async resetPassword(dto: ResetPasswordDto) {
    return dto;
  }

  async refreshAccessToken(req: Request) {
    const refreshToken = req.cookies?.refreshToken;
    const tokenId = Number(req.cookies.tokenId);

    if (!refreshToken || !tokenId) {
      throw new UnauthorizedException();
    }

    const token = await this.prisma.refreshTokens.findFirst({
      where: {
        id: tokenId,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
    });

    if (!token) {
      throw new NotFoundException({
        success: false,
        erorr: {
          code: 404,
          message: "Can't find your access token",
        },
      });
    }

    const valid = await argon2.verify(token.refreshTokenHash, refreshToken);

    if (!valid) {
      await this.prisma.refreshTokens.updateMany({
        where: { userId: token.userId },
        data: { revokedAt: new Date() },
      });

      throw new UnauthorizedException();
    }

    const newRefreshToken = createRefreshToken();
    const newHash = await hashThis(newRefreshToken);

    const newToken = await this.prisma.refreshTokens.create({
      data: {
        userId: token.userId,
        refreshTokenHash: newHash,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const accessToken = this.jwtService.sign({
      sub: token.userId,
    });

    await this.prisma.refreshTokens.update({
      where: { id: token.id },
      data: { revokedAt: new Date() },
    });

    return {
      accessToken,
      refreshToken,
      tokenId: newToken.id,
    };
  }
}
