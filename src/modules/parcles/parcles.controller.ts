import { Controller, Get, Post, Patch, Param, Delete } from "@nestjs/common";
import { ParclesService } from "./parcles.service";

@Controller("parcles")
export class ParclesController {
  constructor(private readonly parclesService: ParclesService) {}

  @Post()
  create() {
    return this.parclesService.create();
  }

  @Get()
  findAll() {
    return this.parclesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.parclesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string) {
    return this.parclesService.update(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.parclesService.remove(+id);
  }
}
