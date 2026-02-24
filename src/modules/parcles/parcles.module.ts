import { Module } from "@nestjs/common";
import { ParclesService } from "./parcles.service";
import { ParclesController } from "./parcles.controller";

@Module({
  controllers: [ParclesController],
  providers: [ParclesService],
})
export class ParclesModule {}
