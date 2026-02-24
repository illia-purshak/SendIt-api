import { Test, TestingModule } from "@nestjs/testing";
import { ParclesService } from "./parcles.service";

describe("ParclesService", () => {
  let service: ParclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParclesService],
    }).compile();

    service = module.get<ParclesService>(ParclesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
