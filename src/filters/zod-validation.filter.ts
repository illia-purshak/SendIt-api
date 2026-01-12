import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { ZodValidationException } from "nestjs-zod";
import type { Response } from "express";
import { ZodError } from "zod";

@Catch(ZodValidationException)
export class ZodValidationFilter implements ExceptionFilter {
  catch(exception: ZodValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const zodError = exception.getZodError() as ZodError;
    const messages = zodError.issues.map((issue) => issue.message);

    response.status(400).json({
      statusCode: 400,
      message: messages,
    });
  }
}
