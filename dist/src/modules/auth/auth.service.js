"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon2_1 = __importDefault(require("argon2"));
const helper_1 = require("../../utils/helper");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("../../generated/prisma/client");
const time_1 = require("../../constants/time");
const crypto_1 = require("crypto");
const apiRoutes_1 = require("../../constants/apiRoutes");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    mailService;
    constructor(prisma, jwtService, mailService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async me(user) {
        const userData = await this.prisma.user.findFirst({
            where: { id: user.sub },
        });
        if (userData?.profileCompleted) {
            const userDetails = userData.type === client_1.UserType.ORGANIZATION
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
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user)
            throw new common_1.UnauthorizedException({
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
            throw new common_1.UnauthorizedException({
                success: false,
                error: {
                    code: 401,
                    message: "Invalid credentials",
                },
            });
        const passwordValid = await argon2_1.default.verify(userCredentials.passwordHash, dto.password);
        if (!passwordValid)
            throw new common_1.UnauthorizedException({
                success: false,
                error: {
                    code: 401,
                    message: "Wrong password",
                },
            });
        const refreshToken = (0, helper_1.createToken)();
        const tokenHash = await (0, helper_1.hashThis)(refreshToken);
        await this.prisma.refreshTokens.updateMany({
            where: { userId: user.id },
            data: { revokedAt: new Date() },
        });
        const tokenRecord = await this.prisma.refreshTokens.create({
            data: {
                userId: user.id,
                tokenHash,
                expiresAt: new Date(Date.now() + time_1.WEEK),
            },
        });
        const accessToken = this.jwtService.sign({
            sub: user.id,
            role: user.role,
            type: user.type,
            profileCompleted: user.profileCompleted,
        });
        return {
            accessToken,
            refreshToken,
            tokenId: tokenRecord.id,
        };
    }
    async register(dto) {
        const { email, phone, type, password } = dto;
        const passwordHash = await (0, helper_1.hashThis)(password);
        try {
            const user = await this.prisma.$transaction(async (tx) => {
                const user = await tx.user.create({
                    data: {
                        email,
                        phoneNumber: phone,
                        status: client_1.UserStatus.ACTIVE,
                        role: client_1.UserRole.CLIENT,
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
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    throw new common_1.BadRequestException({
                        success: false,
                        error: {
                            code: 400,
                            message: "Email or phone number is already taken",
                        },
                    });
                }
            }
            throw new common_1.InternalServerErrorException({
                success: false,
                error: {
                    code: 500,
                    message: err.message,
                },
            });
        }
    }
    async compliteIndividualProfile(user, dto) {
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
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    throw new common_1.BadRequestException({
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
    async compliteOrganizationProfile(user, dto) {
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
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (err.code === "P2002") {
                    throw new common_1.BadRequestException({
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
    async forgotPassword(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user?.email)
            return { success: true };
        const token = (0, helper_1.createToken)();
        const tokenHash = await argon2_1.default.hash(token);
        const tokenLookupHash = String((0, crypto_1.createHash)("sha256").update(token).digest("hex"));
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
                        expiresAt: (0, time_1.setDeadlineFromNow)(time_1.MINUTE * 15),
                    },
                });
            });
            const encodedToken = encodeURIComponent(token);
            const base = process.env.FRONTEND_URL ?? "http://localhost:3000";
            const link = `${base}${apiRoutes_1.API_ROUTES.AUTH.RESET_PASSWORD}?token=${encodedToken}`;
            await this.mailService.sendEmail(user.email, "Wanna reset your sendIt password?", "reset-password-email.pug", { name: "noreply-sendIt", resetLink: link });
            return { success: true };
        }
        catch {
            throw new common_1.InternalServerErrorException("An error occurred while processing password reset");
        }
    }
    async resetPassword(tokenLookup, dto) {
        const tokenLookupHash = String((0, crypto_1.createHash)("sha256").update(tokenLookup).digest("hex"));
        const passwordHash = await (0, helper_1.hashThis)(dto.password);
        try {
            await this.prisma.$transaction(async (tx) => {
                const record = await tx.resetPasswordTokens.findUnique({
                    where: { tokenLookupHash },
                });
                if (!record || record.usedAt || record.expiresAt < new Date())
                    throw new common_1.BadRequestException("Invalid reset password token");
                const ok = await argon2_1.default.verify(record.tokenHash, tokenLookup);
                if (!ok)
                    throw new common_1.BadRequestException("Invalid reset password token");
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
        }
        catch (err) {
            if (err instanceof common_1.BadRequestException) {
                throw err;
            }
            throw new common_1.InternalServerErrorException("An error occurred while changing the password");
        }
    }
    async refreshAccessToken(refreshToken, tokenId) {
        const token = await this.prisma.refreshTokens.findUnique({
            where: { id: tokenId },
        });
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        const userId = token.userId;
        if (token.revokedAt) {
            await this.prisma.refreshTokens.updateMany({
                where: { userId },
                data: { revokedAt: new Date() },
            });
            throw new common_1.UnauthorizedException("Refresh token reuse detected");
        }
        if (token.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException();
        }
        const isValid = await argon2_1.default.verify(token.tokenHash, refreshToken);
        if (!isValid) {
            throw new common_1.UnauthorizedException();
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, role: true, type: true, profileCompleted: true },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const newRefreshToken = (0, helper_1.createToken)();
        const newHash = await (0, helper_1.hashThis)(newRefreshToken);
        const newToken = await this.prisma.$transaction(async (tx) => {
            await tx.refreshTokens.update({
                where: { id: token.id },
                data: { revokedAt: new Date() },
            });
            return tx.refreshTokens.create({
                data: {
                    userId,
                    tokenHash: newHash,
                    expiresAt: (0, time_1.setDeadlineFromNow)(time_1.WEEK),
                },
            });
        });
        const accessToken = this.jwtService.sign({
            sub: user.id,
            role: user.role,
            type: user.type,
            profileCompleted: user.profileCompleted,
        });
        return {
            accessToken,
            refreshToken: newRefreshToken,
            tokenId: newToken.id,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map