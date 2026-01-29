import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { UserRole, UserType } from "src/generated/prisma/enums";

export interface AccessUser {
  sub: number;
  role: UserRole;
  type: UserType;
}

export const AccessUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): AccessUser => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user as AccessUser;
  },
);

export type RefreshContext = Readonly<{
  sub: number;
  tokenId: number;
  refreshToken: string;
}>;

export const RefreshContext = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): RefreshContext => {
    const req = ctx.switchToHttp().getRequest<Request>();

    const sub = req.user?.sub;
    const tokenId = req.tokenId;
    const refreshToken = req.refreshToken;

    if (!sub || !tokenId || !refreshToken) {
      throw new UnauthorizedException();
    }

    return { sub, tokenId, refreshToken };
  },
);
