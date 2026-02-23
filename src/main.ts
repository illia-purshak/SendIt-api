import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { ZodValidationPipe } from "nestjs-zod";
import { ZodValidationFilter } from "./filters/zod-validation.filter.js";
import cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("SendIt-api")
    .setDescription("This is api documentation for SendIt project")
    .setVersion("1.0")
    .addTag("sendit")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  app.use(cookieParser());
  app.useGlobalPipes(new ZodValidationPipe());
  app.useGlobalFilters(new ZodValidationFilter());
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
