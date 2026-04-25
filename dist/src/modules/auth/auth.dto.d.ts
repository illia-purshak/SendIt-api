import z from "zod";
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const RegSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INDIVIDUAL: "INDIVIDUAL";
        ORGANIZATION: "ORGANIZATION";
    }>;
    password: z.ZodString;
}, z.core.$strip>;
export declare const OrganizationProfileSchema: z.ZodObject<{
    companyName: z.ZodString;
    companyNameLat: z.ZodNullable<z.ZodString>;
    edrpou: z.ZodString;
    taxNumber: z.ZodNullable<z.ZodString>;
    legalAddress: z.ZodString;
    contactPersonName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const IndividualProfileSchema: z.ZodObject<{
    firstName: z.ZodString;
    middleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastName: z.ZodString;
    firstNameLat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastNameLat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    birthDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export declare const ForgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, z.core.$strip>;
export declare const ResetPasswordSchema: z.ZodObject<{
    password: z.ZodString;
}, z.core.$strip>;
declare const LoginDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>, false>;
export declare class LoginDto extends LoginDto_base {
}
declare const RegDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INDIVIDUAL: "INDIVIDUAL";
        ORGANIZATION: "ORGANIZATION";
    }>;
    password: z.ZodString;
}, z.core.$strip>, false>;
export declare class RegDto extends RegDto_base {
}
declare const OrganizationProfileDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    companyName: z.ZodString;
    companyNameLat: z.ZodNullable<z.ZodString>;
    edrpou: z.ZodString;
    taxNumber: z.ZodNullable<z.ZodString>;
    legalAddress: z.ZodString;
    contactPersonName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, false>;
export declare class OrganizationProfileDto extends OrganizationProfileDto_base {
}
declare const IndividualProfileDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    firstName: z.ZodString;
    middleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastName: z.ZodString;
    firstNameLat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastNameLat: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    birthDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>, false>;
export declare class IndividualProfileDto extends IndividualProfileDto_base {
}
declare const ForgotPasswordDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodString;
}, z.core.$strip>, false>;
export declare class ForgotPasswordDto extends ForgotPasswordDto_base {
}
declare const ResetPasswordDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    password: z.ZodString;
}, z.core.$strip>, false>;
export declare class ResetPasswordDto extends ResetPasswordDto_base {
}
export {};
