import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module.js";
import { PrismaModule } from "./prisma.module.js";
import { MailModule } from "./modules/mail/mail.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [PrismaModule, AuthModule, MailModule, ConfigModule.forRoot()],
})
export class AppModule {}
