import z from "zod";
export declare const LoginSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export declare const RegSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INDIVIDUAL: "INDIVIDUAL";
        ORGANIZATION: "ORGANIZATION";
    }>;
    password: z.ZodString;
}, z.core.$strip>;
export declare const GoogleAuthSchema: z.ZodObject<{
    googleId: z.ZodString;
    email: z.ZodEmail;
}, z.core.$strip>;
export declare const ForgotPasswordSchema: z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>;
export declare const ResetPasswordSchema: z.ZodObject<{
    token: z.ZodJWT;
    password: z.ZodString;
}, z.core.$strip>;
declare const LoginDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>, false>;
export declare class LoginDto extends LoginDto_base {
}
declare const RegDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodOptional<z.ZodEmail>;
    phone: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        INDIVIDUAL: "INDIVIDUAL";
        ORGANIZATION: "ORGANIZATION";
    }>;
    password: z.ZodString;
}, z.core.$strip>, false>;
export declare class RegDto extends RegDto_base {
}
declare const GoogleAuthDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    googleId: z.ZodString;
    email: z.ZodEmail;
}, z.core.$strip>, false>;
export declare class GoogleAuthDto extends GoogleAuthDto_base {
}
declare const ForgotPasswordDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    email: z.ZodEmail;
}, z.core.$strip>, false>;
export declare class ForgotPasswordDto extends ForgotPasswordDto_base {
}
declare const ResetPasswordDto_base: import("nestjs-zod").ZodDto<z.ZodObject<{
    token: z.ZodJWT;
    password: z.ZodString;
}, z.core.$strip>, false>;
export declare class ResetPasswordDto extends ResetPasswordDto_base {
}
export {};
