import { AccessUserType } from "@/auth/types/auth-user.type";
import { RefreshUserType } from "src/modules/auth/auth.dto";

declare global {
  namespace Express {
    interface Request {
      user?: AccessUserType | RefreshUserType;
      tokenId?: number;
      refreshToken?: string;
    }
  }
}
