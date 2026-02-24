import { Test, TestingModule } from "@nestjs/testing";
import { ParclesController } from "./parcles.controller";
import { ParclesService } from "./parcles.service";

describe("ParclesController", () => {
  let controller: ParclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParclesController],
      providers: [ParclesService],
    }).compile();

    controller = module.get<ParclesController>(ParclesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
