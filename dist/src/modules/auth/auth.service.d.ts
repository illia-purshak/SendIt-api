import { PrismaService } from "src/prisma.service";
import { ForgotPasswordDto, LoginDto, RegDto, ResetPasswordDto } from "./auth.dto";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        tokenId: number;
    }>;
    register(dto: RegDto): Promise<{
        success: boolean;
    }>;
    forgotPassword(token: string, dto: ForgotPasswordDto): Promise<(string | ForgotPasswordDto)[]>;
    resetPassword(dto: ResetPasswordDto): Promise<ResetPasswordDto>;
    refreshAccessToken(req: Request): Promise<{
        accessToken: string;
        refreshToken: any;
        tokenId: number;
    }>;
}
