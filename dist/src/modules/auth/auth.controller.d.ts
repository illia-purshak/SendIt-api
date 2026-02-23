import { AuthService } from "./auth.service.js";
import { ForgotPasswordDto, LoginDto, RegDto, ResetPasswordDto } from "./auth.dto.js";
import type { Request, Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, res: Response): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
    register(registerDto: RegDto): Promise<{
        success: boolean;
    }>;
    forgotPassword(authorization: string, forgotPasswordDto: ForgotPasswordDto): Promise<(string | ForgotPasswordDto)[]>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<ResetPasswordDto>;
    refreshAccessToken(req: Request, res: Response): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
}
