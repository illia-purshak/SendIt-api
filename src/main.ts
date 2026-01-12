import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { ZodValidationPipe } from "nestjs-zod";
import { ZodValidationFilter } from "./filters/zod-validation.filter.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalFilters(new ZodValidationFilter());
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
