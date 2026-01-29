import z from "zod";
import {
  JWT_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from "../../constants/regex.js";
import { createZodDto } from "nestjs-zod";
import { UserRole, UserType } from "src/generated/prisma/enums.js";

const PasswordSchema = z
  .string()
  .min(6, "Password has to more than 6 characters long")
  .regex(
    PASSWORD_REGEX,
    "Password must include only uppercase, lowercase and number",
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

export const OrganizationProfileSchema = z.object({
  companyName: z.string(),
  comanyNameLat: z.string().nullable(),

  edrpou: z.string(),
  taxNumber: z.string().nullable(),

  legalAddress: z.string(),
  contactPersonName: z.string().nullable(),
});

export const IndividualProfileSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().nullable().optional(),
  lastName: z.string().min(1),

  firstNameLat: z.string().nullable().optional(),
  lastNameLat: z.string().nullable().optional(),

  birthDate: z.coerce.date().optional(),
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
export class OrganizationProfileDto extends createZodDto(
  OrganizationProfileSchema,
) {}
export class IndividualProfileDto extends createZodDto(
  IndividualProfileSchema,
) {}
export class ForgotPasswordDto extends createZodDto(ForgotPasswordSchema) {}
export class ResetPasswordDto extends createZodDto(ResetPasswordSchema) {}
