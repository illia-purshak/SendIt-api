import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { ZodValidationException } from "nestjs-zod";
export declare class ZodValidationFilter implements ExceptionFilter {
    catch(exception: ZodValidationException, host: ArgumentsHost): void;
}
