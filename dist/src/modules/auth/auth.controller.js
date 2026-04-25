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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_js_1 = require("./auth.dto.js");
const nestjs_zod_1 = require("nestjs-zod");
const decorators_1 = require("../../common/decorators");
const auth_guard_1 = require("./auth.guard");
const apiRoutes_1 = require("../../constants/apiRoutes");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async me(user) {
        return this.authService.me(user);
    }
    async login(loginDto, res) {
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
    register(registerDto) {
        return this.authService.register(registerDto);
    }
    compliteIndividualProfile(user, dto) {
        return this.authService.compliteIndividualProfile(user, dto);
    }
    compliteOrganizationProfile(user, dto) {
        return this.authService.compliteOrganizationProfile(user, dto);
    }
    async forgotPassword(forgotPasswordDto) {
        return await this.authService.forgotPassword(forgotPasswordDto);
    }
    resetPassword(token, resetPasswordDto) {
        if (!token) {
            throw new common_1.BadRequestException("Reset password token missing");
        }
        let decodedToken;
        try {
            decodedToken = decodeURIComponent(token);
        }
        catch {
            throw new common_1.BadRequestException("Invalid reset password token");
        }
        return this.authService.resetPassword(decodedToken, resetPasswordDto);
    }
    async refreshAccessToken(ctx, res) {
        const { accessToken, refreshToken, tokenId } = await this.authService.refreshAccessToken(ctx.refreshToken, ctx.tokenId);
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
};
exports.AuthController = AuthController;
__decorate([
    (0, decorators_1.SkipProfileCheck)(),
    (0, common_1.UseGuards)(auth_guard_1.AccessTokenGuard),
    (0, common_1.Get)(apiRoutes_1.API_ROUTES.AUTH.ME),
    __param(0, (0, decorators_1.AccessUserContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
__decorate([
    (0, common_1.Post)(apiRoutes_1.API_ROUTES.AUTH.LOGIN),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_js_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)(apiRoutes_1.API_ROUTES.AUTH.REGISTER),
    __param(0, (0, common_1.Body)(new nestjs_zod_1.ZodValidationPipe(auth_dto_js_1.RegDto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_js_1.RegDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, decorators_1.SkipProfileCheck)(),
    (0, common_1.UseGuards)(auth_guard_1.AccessTokenGuard),
    (0, common_1.Post)(apiRoutes_1.API_ROUTES.AUTH.COMPLITE_INDIVIDUAL_PROFILE),
    __param(0, (0, decorators_1.AccessUserContext)()),
    __param(1, (0, common_1.Body)(new nestjs_zod_1.ZodValidationPipe(auth_dto_js_1.IndividualProfileDto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_js_1.IndividualProfileDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "compliteIndividualProfile", null);
__decorate([
    (0, decorators_1.SkipProfileCheck)(),
    (0, common_1.UseGuards)(auth_guard_1.AccessTokenGuard),
    (0, common_1.Post)(apiRoutes_1.API_ROUTES.AUTH.COMPLITE_ORGANIZATION_PROFILE),
    __param(0, (0, decorators_1.AccessUserContext)()),
    __param(1, (0, common_1.Body)(new nestjs_zod_1.ZodValidationPipe(auth_dto_js_1.OrganizationProfileDto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_js_1.OrganizationProfileDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "compliteOrganizationProfile", null);
__decorate([
    (0, common_1.Post)(apiRoutes_1.API_ROUTES.AUTH.FORGOT_PASSWORD),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_js_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)(apiRoutes_1.API_ROUTES.AUTH.RESET_PASSWORD),
    __param(0, (0, common_1.Query)("token")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.RefreshTokenGuard),
    (0, common_1.Get)(apiRoutes_1.API_ROUTES.AUTH.REFRESH),
    __param(0, (0, decorators_1.RefreshTokenContext)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshAccessToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(apiRoutes_1.API_ROUTES.AUTH.BASE),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map