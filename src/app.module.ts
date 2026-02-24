import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module.js";
import { PrismaModule } from "./prisma.module.js";
import { MailModule } from "./modules/mail/mail.module";
import { ConfigModule } from "@nestjs/config";
import { ParcelsModule } from "./modules/parcels/parcels.module";
import { ParclesModule } from "./modules/parcles/parcles.module";

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MailModule,
    ConfigModule.forRoot(),
    ParcelsModule,
    ParclesModule,
  ],
})
export class AppModule {}
