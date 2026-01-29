import {
  Controller,
  Post,
  Body,
  Patch,
  Res,
  Req,
  Get,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ForgotPasswordDto,
  IndividualProfileDto,
  LoginDto,
  OrganizationProfileDto,
  RegDto,
  ResetPasswordDto,
} from "./auth.dto.js";
import type { Response } from "express";
import { ZodValidationPipe } from "nestjs-zod";
import { AccessUser, RefreshContext } from "src/common/decorators";
import { AccessTokenGuard, RefreshTokenGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AccessTokenGuard)
  @Get("me")
  async me(@AccessUser() user: AccessUser) {
    return this.authService.me(user);
  }

  @Post("login")
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, tokenId } =
      await this.authService.login(loginDto);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/auth/refresh",
    });

    res.cookie("tokenId", tokenId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/auth/refresh",
    });

    return {
      success: true,
      data: { accessToken },
    };
  }

  @Post("register")
  register(@Body(new ZodValidationPipe(RegDto)) registerDto: RegDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(AccessTokenGuard)
  @Post("complite-individual-profile")
  compliteIndividualProfile(
    @AccessUser() user: AccessUser,
    @Body(new ZodValidationPipe(IndividualProfileDto))
    dto: IndividualProfileDto,
  ) {
    return this.authService.compliteIndividualProfile(user, dto);
  }

  @UseGuards(AccessTokenGuard)
  @Post("complite-organization-profile")
  compliteOrganizationProfile(
    @AccessUser() user: AccessUser,
    @Body(new ZodValidationPipe(OrganizationProfileDto))
    dto: OrganizationProfileDto,
  ) {
    return this.authService.compliteOrganizationProfile(user, dto);
  }

  @Post("forgot-password")
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Patch("reset-password")
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Post("refresh")
  async refreshAccessToken(
    @RefreshContext() ctx: RefreshContext,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, tokenId } =
      await this.authService.refreshAccessToken(
        ctx.sub,
        ctx.refreshToken,
        ctx.tokenId,
      );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/auth/refresh",
    });

    res.cookie("tokenId", tokenId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/auth/refresh",
    });

    return {
      success: true,
      data: {
        accessToken,
      },
    };
  }
}
