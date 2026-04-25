"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordDto = exports.ForgotPasswordDto = exports.IndividualProfileDto = exports.OrganizationProfileDto = exports.RegDto = exports.LoginDto = exports.ResetPasswordSchema = exports.ForgotPasswordSchema = exports.IndividualProfileSchema = exports.OrganizationProfileSchema = exports.RegSchema = exports.LoginSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const regex_js_1 = require("../../constants/regex.js");
const nestjs_zod_1 = require("nestjs-zod");
const PasswordSchema = zod_1.default
    .string()
    .min(6, "Password has to more than 6 characters long")
    .regex(regex_js_1.PASSWORD_REGEX, "Password must include only uppercase, lowercase and number");
exports.LoginSchema = zod_1.default.object({
    email: zod_1.default.string().email("Email is not valid"),
    password: PasswordSchema,
});
exports.RegSchema = zod_1.default
    .object({
    email: zod_1.default.string().email("Email is not valid").optional(),
    phone: zod_1.default.string().regex(regex_js_1.PHONE_REGEX, "Phone number is not valid").optional(),
    type: zod_1.default.enum(["INDIVIDUAL", "ORGANIZATION"]),
    password: PasswordSchema,
})
    .refine((data) => data.email || data.phone, {
    message: "Email or phone is required",
});
exports.OrganizationProfileSchema = zod_1.default.object({
    companyName: zod_1.default.string(),
    companyNameLat: zod_1.default.string().nullable(),
    edrpou: zod_1.default.string(),
    taxNumber: zod_1.default.string().nullable(),
    legalAddress: zod_1.default.string(),
    contactPersonName: zod_1.default.string().nullable(),
});
const BirthDateSchema = zod_1.default.coerce.date();
BirthDateSchema._zod.toJSONSchema = () => ({
    type: "string",
    format: "date-time",
});
exports.IndividualProfileSchema = zod_1.default.object({
    firstName: zod_1.default.string().min(1),
    middleName: zod_1.default.string().nullable().optional(),
    lastName: zod_1.default.string().min(1),
    firstNameLat: zod_1.default.string().nullable().optional(),
    lastNameLat: zod_1.default.string().nullable().optional(),
    birthDate: BirthDateSchema.optional(),
});
exports.ForgotPasswordSchema = zod_1.default.object({
    email: zod_1.default.string().email("Email is not valid"),
});
exports.ResetPasswordSchema = zod_1.default.object({ password: PasswordSchema });
class LoginDto extends (0, nestjs_zod_1.createZodDto)(exports.LoginSchema) {
}
exports.LoginDto = LoginDto;
class RegDto extends (0, nestjs_zod_1.createZodDto)(exports.RegSchema) {
}
exports.RegDto = RegDto;
class OrganizationProfileDto extends (0, nestjs_zod_1.createZodDto)(exports.OrganizationProfileSchema) {
}
exports.OrganizationProfileDto = OrganizationProfileDto;
class IndividualProfileDto extends (0, nestjs_zod_1.createZodDto)(exports.IndividualProfileSchema) {
}
exports.IndividualProfileDto = IndividualProfileDto;
class ForgotPasswordDto extends (0, nestjs_zod_1.createZodDto)(exports.ForgotPasswordSchema) {
}
exports.ForgotPasswordDto = ForgotPasswordDto;
class ResetPasswordDto extends (0, nestjs_zod_1.createZodDto)(exports.ResetPasswordSchema) {
}
exports.ResetPasswordDto = ResetPasswordDto;
//# sourceMappingURL=auth.dto.js.map