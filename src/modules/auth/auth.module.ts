import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service.js";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "../../prisma.module";
import { NodemailerService } from "src/common/nodemail.service";

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? "CHANGE_ME",
      signOptions: {
        expiresIn: "1h",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, NodemailerService],
})
export class AuthModule {}
