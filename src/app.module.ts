import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module.js";
import { PrismaModule } from "./modules/prisma/prisma.module.js";
import { MailModule } from "./modules/mail/mail.module";
import { ConfigModule } from "@nestjs/config";
import { PingController } from "./ping.controller";

@Module({
  imports: [PrismaModule, AuthModule, MailModule, ConfigModule.forRoot()],
  controllers: [PingController],
})
export class AppModule {}
