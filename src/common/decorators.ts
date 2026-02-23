import { createParamDecorator, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { UserRole, UserType } from "src/generated/prisma/enums";

export interface AccessUserContext {
  sub: number;
  role: UserRole;
  type: UserType;
}

export const AccessUserContext = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): AccessUserContext => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user as AccessUserContext;
  },
);

export type RefreshTokenContext = Readonly<{
  tokenId: number;
  refreshToken: string;
}>;

export const RefreshTokenContext = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): RefreshTokenContext => {
    const req = ctx.switchToHttp().getRequest<Request>();

    const tokenId = req.tokenId;
    const refreshToken = req.refreshToken;

    if (!tokenId || !refreshToken) throw new UnauthorizedException("Refresh cookies missing");

    return { tokenId, refreshToken };
  },
);
