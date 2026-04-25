import { PrismaService } from "src/modules/prisma/prisma.service";
import { ForgotPasswordDto, IndividualProfileDto, LoginDto, OrganizationProfileDto, RegDto, ResetPasswordDto } from "./auth.dto";
import { JwtService } from "@nestjs/jwt";
import { AccessUserContext } from "src/common/decorators";
import { MailService } from "../mail/mail.service";
export declare class AuthService {
    private prisma;
    private jwtService;
    private readonly mailService;
    constructor(prisma: PrismaService, jwtService: JwtService, mailService: MailService);
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
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        tokenId: number;
    }>;
    register(dto: RegDto): Promise<{
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
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        success: boolean;
    }>;
    resetPassword(tokenLookup: string, dto: ResetPasswordDto): Promise<{
        success: boolean;
    }>;
    refreshAccessToken(refreshToken: string, tokenId: number): Promise<{
        accessToken: string;
        refreshToken: string;
        tokenId: number;
    }>;
}
