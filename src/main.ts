import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { ZodValidationPipe } from "nestjs-zod";
import { ZodValidationFilter } from "./filters/zod-validation.filter.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalFilters(new ZodValidationFilter());
  app.enableCors({
    origin: "http://localhost:5173",
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
