export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly DELETED: "DELETED";
    readonly BANNED: "BANNED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const UserRole: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ADMIN: "ADMIN";
    readonly OPERATOR: "OPERATOR";
    readonly COURIER: "COURIER";
    readonly CLIENT: "CLIENT";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const UserType: {
    readonly INDIVIDUAL: "INDIVIDUAL";
    readonly ORGANIZATION: "ORGANIZATION";
};
export type UserType = (typeof UserType)[keyof typeof UserType];
