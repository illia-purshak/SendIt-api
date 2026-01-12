import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    phoneNumber: string | null;
    role: $Enums.UserRole | null;
    status: $Enums.UserStatus | null;
    type: $Enums.UserType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    phoneNumber: string | null;
    role: $Enums.UserRole | null;
    status: $Enums.UserStatus | null;
    type: $Enums.UserType | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    phoneNumber: number;
    role: number;
    status: number;
    type: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    phoneNumber?: true;
    role?: true;
    status?: true;
    type?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    phoneNumber?: true;
    role?: true;
    status?: true;
    type?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    phoneNumber?: true;
    role?: true;
    status?: true;
    type?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    email: string | null;
    phoneNumber: string | null;
    role: $Enums.UserRole;
    status: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    phoneNumber?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFilter<"User"> | $Enums.UserType;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    individualProfile?: Prisma.XOR<Prisma.IndividualProfileNullableScalarRelationFilter, Prisma.IndividualProfileWhereInput> | null;
    legalProfile?: Prisma.XOR<Prisma.LegalProfileNullableScalarRelationFilter, Prisma.LegalProfileWhereInput> | null;
    RefreshTokens?: Prisma.RefreshTokensListRelationFilter;
    credentials?: Prisma.XOR<Prisma.UserCredentialsNullableScalarRelationFilter, Prisma.UserCredentialsWhereInput> | null;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    individualProfile?: Prisma.IndividualProfileOrderByWithRelationInput;
    legalProfile?: Prisma.LegalProfileOrderByWithRelationInput;
    RefreshTokens?: Prisma.RefreshTokensOrderByRelationAggregateInput;
    credentials?: Prisma.UserCredentialsOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    phoneNumber?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFilter<"User"> | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFilter<"User"> | $Enums.UserType;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    individualProfile?: Prisma.XOR<Prisma.IndividualProfileNullableScalarRelationFilter, Prisma.IndividualProfileWhereInput> | null;
    legalProfile?: Prisma.XOR<Prisma.LegalProfileNullableScalarRelationFilter, Prisma.LegalProfileWhereInput> | null;
    RefreshTokens?: Prisma.RefreshTokensListRelationFilter;
    credentials?: Prisma.XOR<Prisma.UserCredentialsNullableScalarRelationFilter, Prisma.UserCredentialsWhereInput> | null;
}, "id" | "email" | "phoneNumber">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phoneNumber?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    status?: Prisma.EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileCreateNestedOneWithoutUserInput;
    legalProfile?: Prisma.LegalProfileCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensCreateNestedManyWithoutUserInput;
    credentials?: Prisma.UserCredentialsCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedCreateNestedOneWithoutUserInput;
    legalProfile?: Prisma.LegalProfileUncheckedCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedCreateNestedManyWithoutUserInput;
    credentials?: Prisma.UserCredentialsUncheckedCreateNestedOneWithoutUserInput;
};
export type UserUpdateInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUpdateOneWithoutUserNestedInput;
    legalProfile?: Prisma.LegalProfileUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUpdateManyWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedUpdateOneWithoutUserNestedInput;
    legalProfile?: Prisma.LegalProfileUncheckedUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedUpdateManyWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus;
};
export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutIndividualProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIndividualProfileInput, Prisma.UserUncheckedCreateWithoutIndividualProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIndividualProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutIndividualProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutIndividualProfileInput, Prisma.UserUncheckedCreateWithoutIndividualProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutIndividualProfileInput;
    upsert?: Prisma.UserUpsertWithoutIndividualProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutIndividualProfileInput, Prisma.UserUpdateWithoutIndividualProfileInput>, Prisma.UserUncheckedUpdateWithoutIndividualProfileInput>;
};
export type UserCreateNestedOneWithoutLegalProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLegalProfileInput, Prisma.UserUncheckedCreateWithoutLegalProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLegalProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLegalProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLegalProfileInput, Prisma.UserUncheckedCreateWithoutLegalProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLegalProfileInput;
    upsert?: Prisma.UserUpsertWithoutLegalProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLegalProfileInput, Prisma.UserUpdateWithoutLegalProfileInput>, Prisma.UserUncheckedUpdateWithoutLegalProfileInput>;
};
export type UserCreateNestedOneWithoutCredentialsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCredentialsInput, Prisma.UserUncheckedCreateWithoutCredentialsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCredentialsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCredentialsInput, Prisma.UserUncheckedCreateWithoutCredentialsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCredentialsInput;
    upsert?: Prisma.UserUpsertWithoutCredentialsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCredentialsInput, Prisma.UserUpdateWithoutCredentialsInput>, Prisma.UserUncheckedUpdateWithoutCredentialsInput>;
};
export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.UserUpsertWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserCreateWithoutIndividualProfileInput = {
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    legalProfile?: Prisma.LegalProfileCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensCreateNestedManyWithoutUserInput;
    credentials?: Prisma.UserCredentialsCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutIndividualProfileInput = {
    id?: number;
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    legalProfile?: Prisma.LegalProfileUncheckedCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedCreateNestedManyWithoutUserInput;
    credentials?: Prisma.UserCredentialsUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutIndividualProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutIndividualProfileInput, Prisma.UserUncheckedCreateWithoutIndividualProfileInput>;
};
export type UserUpsertWithoutIndividualProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutIndividualProfileInput, Prisma.UserUncheckedUpdateWithoutIndividualProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutIndividualProfileInput, Prisma.UserUncheckedCreateWithoutIndividualProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutIndividualProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutIndividualProfileInput, Prisma.UserUncheckedUpdateWithoutIndividualProfileInput>;
};
export type UserUpdateWithoutIndividualProfileInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    legalProfile?: Prisma.LegalProfileUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUpdateManyWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutIndividualProfileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    legalProfile?: Prisma.LegalProfileUncheckedUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedUpdateManyWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutLegalProfileInput = {
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensCreateNestedManyWithoutUserInput;
    credentials?: Prisma.UserCredentialsCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutLegalProfileInput = {
    id?: number;
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedCreateNestedManyWithoutUserInput;
    credentials?: Prisma.UserCredentialsUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutLegalProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLegalProfileInput, Prisma.UserUncheckedCreateWithoutLegalProfileInput>;
};
export type UserUpsertWithoutLegalProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLegalProfileInput, Prisma.UserUncheckedUpdateWithoutLegalProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLegalProfileInput, Prisma.UserUncheckedCreateWithoutLegalProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLegalProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLegalProfileInput, Prisma.UserUncheckedUpdateWithoutLegalProfileInput>;
};
export type UserUpdateWithoutLegalProfileInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUpdateManyWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLegalProfileInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedUpdateManyWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCreateWithoutCredentialsInput = {
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileCreateNestedOneWithoutUserInput;
    legalProfile?: Prisma.LegalProfileCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCredentialsInput = {
    id?: number;
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedCreateNestedOneWithoutUserInput;
    legalProfile?: Prisma.LegalProfileUncheckedCreateNestedOneWithoutUserInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCredentialsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCredentialsInput, Prisma.UserUncheckedCreateWithoutCredentialsInput>;
};
export type UserUpsertWithoutCredentialsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCredentialsInput, Prisma.UserUncheckedUpdateWithoutCredentialsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCredentialsInput, Prisma.UserUncheckedCreateWithoutCredentialsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCredentialsInput, Prisma.UserUncheckedUpdateWithoutCredentialsInput>;
};
export type UserUpdateWithoutCredentialsInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUpdateOneWithoutUserNestedInput;
    legalProfile?: Prisma.LegalProfileUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCredentialsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedUpdateOneWithoutUserNestedInput;
    legalProfile?: Prisma.LegalProfileUncheckedUpdateOneWithoutUserNestedInput;
    RefreshTokens?: Prisma.RefreshTokensUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutRefreshTokensInput = {
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileCreateNestedOneWithoutUserInput;
    legalProfile?: Prisma.LegalProfileCreateNestedOneWithoutUserInput;
    credentials?: Prisma.UserCredentialsCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number;
    email?: string | null;
    phoneNumber?: string | null;
    role?: $Enums.UserRole;
    status?: $Enums.UserStatus;
    type: $Enums.UserType;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedCreateNestedOneWithoutUserInput;
    legalProfile?: Prisma.LegalProfileUncheckedCreateNestedOneWithoutUserInput;
    credentials?: Prisma.UserCredentialsUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
};
export type UserUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserUpdateWithoutRefreshTokensInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUpdateOneWithoutUserNestedInput;
    legalProfile?: Prisma.LegalProfileUpdateOneWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    status?: Prisma.EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus;
    type?: Prisma.EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    individualProfile?: Prisma.IndividualProfileUncheckedUpdateOneWithoutUserNestedInput;
    legalProfile?: Prisma.LegalProfileUncheckedUpdateOneWithoutUserNestedInput;
    credentials?: Prisma.UserCredentialsUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCountOutputType = {
    RefreshTokens: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    RefreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokensWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    role?: boolean;
    status?: boolean;
    type?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    individualProfile?: boolean | Prisma.User$individualProfileArgs<ExtArgs>;
    legalProfile?: boolean | Prisma.User$legalProfileArgs<ExtArgs>;
    RefreshTokens?: boolean | Prisma.User$RefreshTokensArgs<ExtArgs>;
    credentials?: boolean | Prisma.User$credentialsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    role?: boolean;
    status?: boolean;
    type?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    role?: boolean;
    status?: boolean;
    type?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
    role?: boolean;
    status?: boolean;
    type?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "phoneNumber" | "role" | "status" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    individualProfile?: boolean | Prisma.User$individualProfileArgs<ExtArgs>;
    legalProfile?: boolean | Prisma.User$legalProfileArgs<ExtArgs>;
    RefreshTokens?: boolean | Prisma.User$RefreshTokensArgs<ExtArgs>;
    credentials?: boolean | Prisma.User$credentialsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        individualProfile: Prisma.$IndividualProfilePayload<ExtArgs> | null;
        legalProfile: Prisma.$LegalProfilePayload<ExtArgs> | null;
        RefreshTokens: Prisma.$RefreshTokensPayload<ExtArgs>[];
        credentials: Prisma.$UserCredentialsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string | null;
        phoneNumber: string | null;
        role: $Enums.UserRole;
        status: $Enums.UserStatus;
        type: $Enums.UserType;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    individualProfile<T extends Prisma.User$individualProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$individualProfileArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    legalProfile<T extends Prisma.User$legalProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$legalProfileArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    RefreshTokens<T extends Prisma.User$RefreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$RefreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    credentials<T extends Prisma.User$credentialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$credentialsArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly status: Prisma.FieldRef<"User", 'UserStatus'>;
    readonly type: Prisma.FieldRef<"User", 'UserType'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$individualProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where?: Prisma.IndividualProfileWhereInput;
};
export type User$legalProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where?: Prisma.LegalProfileWhereInput;
};
export type User$RefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    where?: Prisma.RefreshTokensWhereInput;
    orderBy?: Prisma.RefreshTokensOrderByWithRelationInput | Prisma.RefreshTokensOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokensScalarFieldEnum | Prisma.RefreshTokensScalarFieldEnum[];
};
export type User$credentialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where?: Prisma.UserCredentialsWhereInput;
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
