"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: ".env" });
(0, dotenv_1.config)({ path: ".env.local", override: true });
const core_1 = require("@nestjs/core");
const app_module_js_1 = require("./app.module.js");
const nestjs_zod_1 = require("nestjs-zod");
const zod_validation_filter_js_1 = require("./filters/zod-validation.filter.js");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_js_1.AppModule);
    const frontendOrigins = (process.env.FRONTEND_URLS ?? process.env.FRONTEND_URL ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter((value) => value.length > 0);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("SendIt-api")
        .setDescription("This is api documentation for SendIt project")
        .setVersion("1.0")
        .addTag("sendit")
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, documentFactory);
    app.use((0, cookie_parser_1.default)());
    app.useGlobalPipes(new nestjs_zod_1.ZodValidationPipe());
    app.useGlobalFilters(new zod_validation_filter_js_1.ZodValidationFilter());
    app.enableCors({
        origin: frontendOrigins.length > 0 ? frontendOrigins : undefined,
        credentials: true,
    });
    const port = Number(process.env.PORT ?? 3000);
    await app.listen(port, "0.0.0.0");
}
void bootstrap();
//# sourceMappingURL=main.js.map