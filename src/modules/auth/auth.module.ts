import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service.js";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "../../prisma.module";
import { MailModule } from "../mail/mail.module.js";
import { MailService } from "../mail/mail.service.js";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? "CHANGE_ME",
      signOptions: {
        expiresIn: "15m",
      },
    }),
    MailModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [AuthService, MailService],
})
export class AuthModule {}
