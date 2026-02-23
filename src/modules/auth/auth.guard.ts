import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { AccessUserContext } from "src/common/decorators";

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.extractToken(request);
    if (!token) {
      throw new UnauthorizedException("Access token missing");
    }

    try {
      const payload = await this.jwtService.verifyAsync<AccessUserContext>(token);
      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException("Invalid or expired access token");
    }
  }

  extractToken(request: Request) {
    const authHeader = request.headers["authorization"];

    if (!authHeader) return null;

    const header = Array.isArray(authHeader) ? authHeader[0] : authHeader;

    const [type, token] = header.split(" ");

    if (type !== "Bearer" || !token) return null;

    return token;
  }
}

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();

    const { refreshToken, tokenId: tokenIdRaw } = request.cookies ?? {};

    if (!refreshToken || !tokenIdRaw) {
      throw new UnauthorizedException("Refresh cookies missing");
    }

    const tokenId = Number(tokenIdRaw);
    if (!Number.isInteger(tokenId)) {
      throw new UnauthorizedException("Invalid tokenId cookie");
    }

    request.tokenId = tokenId;
    request.refreshToken = refreshToken;

    return true;
  }
}

@Injectable()
export class ResetPasswordTokenGuard implements CanActivate {
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest();

    const token = request.query?.token;

    if (!token || typeof token !== "string") {
      throw new UnauthorizedException("Reset password token missing");
    }

    return true;
  }
}
