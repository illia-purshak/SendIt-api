import { AuthService } from "./auth.service";
import { ForgotPasswordDto, IndividualProfileDto, LoginDto, OrganizationProfileDto, RegDto, type ResetPasswordDto } from "./auth.dto.js";
import type { Response } from "express";
import { AccessUserContext, RefreshTokenContext } from "src/common/decorators";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    me(user: AccessUserContext): Promise<{
        type: import("src/generated/prisma").$Enums.UserType;
        email: string | null;
        id: number;
        phoneNumber: string | null;
        role: import("src/generated/prisma").$Enums.UserRole;
        status: import("src/generated/prisma").$Enums.UserStatus;
        profileCompleted: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | {
        success: boolean;
        data: ({
            type: import("src/generated/prisma").$Enums.UserType;
            email: string | null;
            id: number;
            phoneNumber: string | null;
            role: import("src/generated/prisma").$Enums.UserRole;
            status: import("src/generated/prisma").$Enums.UserStatus;
            profileCompleted: boolean;
            createdAt: Date;
            updatedAt: Date;
        } | {
            companyName: string;
            companyNameLat: string | null;
            edrpou: string;
            taxNumber: string | null;
            legalAddress: string;
            contactPersonName: string | null;
            userId: number;
        } | {
            firstName: string;
            middleName: string | null;
            lastName: string;
            firstNameLat: string | null;
            lastNameLat: string | null;
            birthDate: Date | null;
            userId: number;
        } | null)[];
    } | null>;
    login(loginDto: LoginDto, res: Response): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
    register(registerDto: RegDto): Promise<{
        success: boolean;
        data: {
            id: number;
            type: import("src/generated/prisma").$Enums.UserType;
        };
    }>;
    compliteIndividualProfile(user: AccessUserContext, dto: IndividualProfileDto): Promise<{
        success: boolean;
    }>;
    compliteOrganizationProfile(user: AccessUserContext, dto: OrganizationProfileDto): Promise<{
        success: boolean;
    }>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<{
        success: boolean;
    }>;
    resetPassword(token: string, resetPasswordDto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    refreshAccessToken(ctx: RefreshTokenContext, res: Response): Promise<{
        success: boolean;
        data: {
            accessToken: string;
        };
    }>;
}
