import type { AccessUserContext } from "../common/decorators";

declare global {
  namespace Express {
    interface Request {
      user?: AccessUserContext;
      tokenId?: number;
      refreshToken?: string;
    }
  }
}
