import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    IndividualProfile: 'IndividualProfile',
    LegalProfile: 'LegalProfile',
    UserCredentials: 'UserCredentials',
    RefreshTokens: 'RefreshTokens'
};
export const TransactionIsolationLevel = {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
};
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phoneNumber: 'phoneNumber',
    role: 'role',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const IndividualProfileScalarFieldEnum = {
    userId: 'userId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    firstNameLat: 'firstNameLat',
    lastNameLat: 'lastNameLat',
    birthDate: 'birthDate'
};
export const LegalProfileScalarFieldEnum = {
    userId: 'userId',
    companyName: 'companyName',
    companyNameLat: 'companyNameLat',
    edrpou: 'edrpou',
    taxNumber: 'taxNumber',
    legalAddress: 'legalAddress',
    contactPersonName: 'contactPersonName'
};
export const UserCredentialsScalarFieldEnum = {
    userId: 'userId',
    passwordHash: 'passwordHash',
    twoFactorEnabled: 'twoFactorEnabled',
    twoFactorToken: 'twoFactorToken',
    googleEmail: 'googleEmail',
    googleId: 'googleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const RefreshTokensScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    revokedAt: 'revokedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map