import z from "zod";
import {
  JWT_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from "../../constants/regex.js";
import { createZodDto } from "nestjs-zod";

const PasswordSchema = z
  .string()
  .min(6, "Password has to more than 6 characters long")
  .regex(
    PASSWORD_REGEX,
    "Password must include only uppercase, lowercase and number"
  );

export const LoginSchema = z.object({
  email: z.email("Email is not valid"),
  password: PasswordSchema,
});

export const RegSchema = z
  .object({
    email: z.email("Email is not valid").optional(),
    phone: z
      .string()
      .regex(PHONE_REGEX, "Phone number is not valid")
      .optional(),
    type: z.enum(["INDIVIDUAL", "ORGANIZATION"]),
    password: PasswordSchema,
  })
  .refine((data) => data.email || data.phone, {
    message: "Email or phone is required",
  });

export const GoogleAuthSchema = z.object({
  googleId: z.string(),
  email: z.email("Email is not valid"),
});

export const ForgotPasswordSchema = z.object({
  email: z.email("Email is not valid"),
});

export const ResetPasswordSchema = z.object({
  token: z.jwt().regex(JWT_REGEX, "This reset token is invalid"),
  password: PasswordSchema,
});

export class LoginDto extends createZodDto(LoginSchema) {}
export class RegDto extends createZodDto(RegSchema) {}
export class GoogleAuthDto extends createZodDto(GoogleAuthSchema) {}
export class ForgotPasswordDto extends createZodDto(ForgotPasswordSchema) {}
export class ResetPasswordDto extends createZodDto(ResetPasswordSchema) {}
