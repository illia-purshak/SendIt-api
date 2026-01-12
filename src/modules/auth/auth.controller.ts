import {
  Controller,
  Post,
  Body,
  Patch,
  Res,
  Req,
  Headers,
} from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import {
  ForgotPasswordDto,
  LoginDto,
  RegDto,
  ResetPasswordDto,
} from "./auth.dto.js";
import type { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response
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

  @Post("/register")
  register(@Body() registerDto: RegDto) {
    return this.authService.register(registerDto);
  }

  @Post("/forgot-password")
  forgotPassword(
    @Headers() authorization: string,
    @Body() forgotPasswordDto: ForgotPasswordDto
  ) {
    const normilizedToken = authorization.split(" ")[1];
    return this.authService.forgotPassword(normilizedToken, forgotPasswordDto);
  }

  @Patch("/reset-password")
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  @Post("/refresh")
  async refreshAccessToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const { accessToken, refreshToken, tokenId } =
      await this.authService.refreshAccessToken(req);

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
