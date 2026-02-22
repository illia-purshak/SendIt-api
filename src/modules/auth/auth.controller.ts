import {
  BadRequestException,
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  Query,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ForgotPasswordDto,
  IndividualProfileDto,
  LoginDto,
  OrganizationProfileDto,
  RegDto,
  type ResetPasswordDto,
} from "./auth.dto.js";
import type { Response } from "express";
import { ZodValidationPipe } from "nestjs-zod";
import { AccessUserContext, RefreshTokenContext } from "src/common/decorators";
import { AccessTokenGuard, RefreshTokenGuard } from "./auth.guard";
import { API_ROUTES } from "src/constants/apiRoutes";

@Controller(API_ROUTES.AUTH.BASE)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AccessTokenGuard)
  @Get(API_ROUTES.AUTH.ME)
  async me(@AccessUserContext() user: AccessUserContext) {
    return this.authService.me(user);
  }

  @Post(API_ROUTES.AUTH.LOGIN)
  async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken, refreshToken, tokenId } = await this.authService.login(loginDto);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/auth",
    });

    res.cookie("tokenId", tokenId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/auth",
    });

    return {
      success: true,
      data: { accessToken },
    };
  }

  @Post(API_ROUTES.AUTH.REGISTER)
  register(@Body(new ZodValidationPipe(RegDto)) registerDto: RegDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(AccessTokenGuard)
  @Post(API_ROUTES.AUTH.COMPLITE_INDIVIDUAL_PROFILE)
  compliteIndividualProfile(
    @AccessUserContext() user: AccessUserContext,
    @Body(new ZodValidationPipe(IndividualProfileDto))
    dto: IndividualProfileDto,
  ) {
    return this.authService.compliteIndividualProfile(user, dto);
  }

  @UseGuards(AccessTokenGuard)
  @Post(API_ROUTES.AUTH.COMPLITE_ORGANIZATION_PROFILE)
  compliteOrganizationProfile(
    @AccessUserContext() user: AccessUserContext,
    @Body(new ZodValidationPipe(OrganizationProfileDto))
    dto: OrganizationProfileDto,
  ) {
    return this.authService.compliteOrganizationProfile(user, dto);
  }

  @Post(API_ROUTES.AUTH.FORGOT_PASSWORD)
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return await this.authService.forgotPassword(forgotPasswordDto);
  }

  @Post(API_ROUTES.AUTH.RESET_PASSWORD)
  resetPassword(@Query("token") token: string, @Body() resetPasswordDto: ResetPasswordDto) {
    if (!token) {
      throw new BadRequestException("Reset password token missing");
    }

    let decodedToken: string;
    try {
      decodedToken = decodeURIComponent(token);
    } catch {
      throw new BadRequestException("Invalid reset password token");
    }

    return this.authService.resetPassword(decodedToken, resetPasswordDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Get(API_ROUTES.AUTH.REFRESH)
  async refreshAccessToken(
    @RefreshTokenContext() ctx: RefreshTokenContext,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, tokenId } = await this.authService.refreshAccessToken(
      ctx.refreshToken,
      ctx.tokenId,
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/auth",
    });

    res.cookie("tokenId", tokenId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/auth",
    });

    return {
      success: true,
      data: {
        accessToken,
      },
    };
  }
}
