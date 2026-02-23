import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly IndividualProfile: "IndividualProfile";
    readonly LegalProfile: "LegalProfile";
    readonly UserCredentials: "UserCredentials";
    readonly RefreshTokens: "RefreshTokens";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly phoneNumber: "phoneNumber";
    readonly role: "role";
    readonly status: "status";
    readonly type: "type";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const IndividualProfileScalarFieldEnum: {
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly middleName: "middleName";
    readonly lastName: "lastName";
    readonly firstNameLat: "firstNameLat";
    readonly lastNameLat: "lastNameLat";
    readonly birthDate: "birthDate";
};
export type IndividualProfileScalarFieldEnum = (typeof IndividualProfileScalarFieldEnum)[keyof typeof IndividualProfileScalarFieldEnum];
export declare const LegalProfileScalarFieldEnum: {
    readonly userId: "userId";
    readonly companyName: "companyName";
    readonly companyNameLat: "companyNameLat";
    readonly edrpou: "edrpou";
    readonly taxNumber: "taxNumber";
    readonly legalAddress: "legalAddress";
    readonly contactPersonName: "contactPersonName";
};
export type LegalProfileScalarFieldEnum = (typeof LegalProfileScalarFieldEnum)[keyof typeof LegalProfileScalarFieldEnum];
export declare const UserCredentialsScalarFieldEnum: {
    readonly userId: "userId";
    readonly passwordHash: "passwordHash";
    readonly twoFactorEnabled: "twoFactorEnabled";
    readonly twoFactorToken: "twoFactorToken";
    readonly googleEmail: "googleEmail";
    readonly googleId: "googleId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserCredentialsScalarFieldEnum = (typeof UserCredentialsScalarFieldEnum)[keyof typeof UserCredentialsScalarFieldEnum];
export declare const RefreshTokensScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly refreshTokenHash: "refreshTokenHash";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly revokedAt: "revokedAt";
};
export type RefreshTokensScalarFieldEnum = (typeof RefreshTokensScalarFieldEnum)[keyof typeof RefreshTokensScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
