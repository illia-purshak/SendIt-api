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
const prisma_service_1 = require("../../prisma.service");
const argon2_1 = __importDefault(require("argon2"));
const helper_1 = require("../../utils/helper");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user)
            throw new common_1.NotFoundException("Invalid credentials");
        const userCredentials = await this.prisma.userCredentials.findFirst({
            where: { userId: user.id },
        });
        if (!userCredentials)
            throw new common_1.NotFoundException("Invalid credentials");
        if (!userCredentials.passwordHash)
            throw new Error("Autorized with google");
        const passwordValid = await argon2_1.default.verify(userCredentials.passwordHash, dto.password);
        if (!passwordValid)
            throw new common_1.UnauthorizedException({
                success: false,
                error: {
                    code: 401,
                    message: "Wrong password",
                },
            });
        const refreshToken = (0, helper_1.createRefreshToken)();
        const refreshTokenHash = await (0, helper_1.hashThis)(refreshToken);
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
    async register(dto) {
        const { email, phone, type, password } = dto;
        if (!email && !phone) {
            throw new common_1.BadRequestException({
                success: false,
                error: {
                    code: 400,
                    message: "Email or phone number is required",
                },
            });
        }
        const or = [];
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
            throw new common_1.BadRequestException({
                success: false,
                error: {
                    code: 400,
                    message: `This ${email ? "email address" : "phone number"} is already taken`,
                },
            });
        }
        try {
            const passwordHash = await (0, helper_1.hashThis)(password);
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
        }
        catch (err) {
            throw new common_1.InternalServerErrorException({
                success: false,
                error: {
                    code: 500,
                    message: err.message,
                },
            });
        }
    }
    async forgotPassword(token, dto) {
        return [token, dto];
    }
    async resetPassword(dto) {
        return dto;
    }
    async refreshAccessToken(req) {
        const refreshToken = req.cookies?.refreshToken;
        const tokenId = Number(req.cookies.tokenId);
        if (!refreshToken || !tokenId) {
            throw new common_1.UnauthorizedException();
        }
        const token = await this.prisma.refreshTokens.findFirst({
            where: {
                id: tokenId,
                revokedAt: null,
                expiresAt: { gt: new Date() },
            },
        });
        if (!token) {
            throw new common_1.NotFoundException({
                success: false,
                erorr: {
                    code: 404,
                    message: "Can't find your access token",
                },
            });
        }
        const valid = await argon2_1.default.verify(token.refreshTokenHash, refreshToken);
        if (!valid) {
            await this.prisma.refreshTokens.updateMany({
                where: { userId: token.userId },
                data: { revokedAt: new Date() },
            });
            throw new common_1.UnauthorizedException();
        }
        const newRefreshToken = (0, helper_1.createRefreshToken)();
        const newHash = await (0, helper_1.hashThis)(newRefreshToken);
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map