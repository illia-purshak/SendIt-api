import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserCredentialsModel = runtime.Types.Result.DefaultSelection<Prisma.$UserCredentialsPayload>;
export type AggregateUserCredentials = {
    _count: UserCredentialsCountAggregateOutputType | null;
    _avg: UserCredentialsAvgAggregateOutputType | null;
    _sum: UserCredentialsSumAggregateOutputType | null;
    _min: UserCredentialsMinAggregateOutputType | null;
    _max: UserCredentialsMaxAggregateOutputType | null;
};
export type UserCredentialsAvgAggregateOutputType = {
    userId: number | null;
};
export type UserCredentialsSumAggregateOutputType = {
    userId: number | null;
};
export type UserCredentialsMinAggregateOutputType = {
    userId: number | null;
    passwordHash: string | null;
    twoFactorEnabled: boolean | null;
    twoFactorToken: string | null;
    googleEmail: string | null;
    googleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCredentialsMaxAggregateOutputType = {
    userId: number | null;
    passwordHash: string | null;
    twoFactorEnabled: boolean | null;
    twoFactorToken: string | null;
    googleEmail: string | null;
    googleId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCredentialsCountAggregateOutputType = {
    userId: number;
    passwordHash: number;
    twoFactorEnabled: number;
    twoFactorToken: number;
    googleEmail: number;
    googleId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserCredentialsAvgAggregateInputType = {
    userId?: true;
};
export type UserCredentialsSumAggregateInputType = {
    userId?: true;
};
export type UserCredentialsMinAggregateInputType = {
    userId?: true;
    passwordHash?: true;
    twoFactorEnabled?: true;
    twoFactorToken?: true;
    googleEmail?: true;
    googleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCredentialsMaxAggregateInputType = {
    userId?: true;
    passwordHash?: true;
    twoFactorEnabled?: true;
    twoFactorToken?: true;
    googleEmail?: true;
    googleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCredentialsCountAggregateInputType = {
    userId?: true;
    passwordHash?: true;
    twoFactorEnabled?: true;
    twoFactorToken?: true;
    googleEmail?: true;
    googleId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserCredentialsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCredentialsWhereInput;
    orderBy?: Prisma.UserCredentialsOrderByWithRelationInput | Prisma.UserCredentialsOrderByWithRelationInput[];
    cursor?: Prisma.UserCredentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCredentialsCountAggregateInputType;
    _avg?: UserCredentialsAvgAggregateInputType;
    _sum?: UserCredentialsSumAggregateInputType;
    _min?: UserCredentialsMinAggregateInputType;
    _max?: UserCredentialsMaxAggregateInputType;
};
export type GetUserCredentialsAggregateType<T extends UserCredentialsAggregateArgs> = {
    [P in keyof T & keyof AggregateUserCredentials]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserCredentials[P]> : Prisma.GetScalarType<T[P], AggregateUserCredentials[P]>;
};
export type UserCredentialsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCredentialsWhereInput;
    orderBy?: Prisma.UserCredentialsOrderByWithAggregationInput | Prisma.UserCredentialsOrderByWithAggregationInput[];
    by: Prisma.UserCredentialsScalarFieldEnum[] | Prisma.UserCredentialsScalarFieldEnum;
    having?: Prisma.UserCredentialsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCredentialsCountAggregateInputType | true;
    _avg?: UserCredentialsAvgAggregateInputType;
    _sum?: UserCredentialsSumAggregateInputType;
    _min?: UserCredentialsMinAggregateInputType;
    _max?: UserCredentialsMaxAggregateInputType;
};
export type UserCredentialsGroupByOutputType = {
    userId: number;
    passwordHash: string | null;
    twoFactorEnabled: boolean;
    twoFactorToken: string | null;
    googleEmail: string | null;
    googleId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCredentialsCountAggregateOutputType | null;
    _avg: UserCredentialsAvgAggregateOutputType | null;
    _sum: UserCredentialsSumAggregateOutputType | null;
    _min: UserCredentialsMinAggregateOutputType | null;
    _max: UserCredentialsMaxAggregateOutputType | null;
};
type GetUserCredentialsGroupByPayload<T extends UserCredentialsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserCredentialsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserCredentialsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserCredentialsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserCredentialsGroupByOutputType[P]>;
}>>;
export type UserCredentialsWhereInput = {
    AND?: Prisma.UserCredentialsWhereInput | Prisma.UserCredentialsWhereInput[];
    OR?: Prisma.UserCredentialsWhereInput[];
    NOT?: Prisma.UserCredentialsWhereInput | Prisma.UserCredentialsWhereInput[];
    userId?: Prisma.IntFilter<"UserCredentials"> | number;
    passwordHash?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    twoFactorEnabled?: Prisma.BoolFilter<"UserCredentials"> | boolean;
    twoFactorToken?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    googleEmail?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    googleId?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserCredentials"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserCredentials"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserCredentialsOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    twoFactorToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserCredentialsWhereUniqueInput = Prisma.AtLeast<{
    userId?: number;
    googleId?: string;
    AND?: Prisma.UserCredentialsWhereInput | Prisma.UserCredentialsWhereInput[];
    OR?: Prisma.UserCredentialsWhereInput[];
    NOT?: Prisma.UserCredentialsWhereInput | Prisma.UserCredentialsWhereInput[];
    passwordHash?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    twoFactorEnabled?: Prisma.BoolFilter<"UserCredentials"> | boolean;
    twoFactorToken?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    googleEmail?: Prisma.StringNullableFilter<"UserCredentials"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"UserCredentials"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserCredentials"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId" | "googleId">;
export type UserCredentialsOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    twoFactorToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    googleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCredentialsCountOrderByAggregateInput;
    _avg?: Prisma.UserCredentialsAvgOrderByAggregateInput;
    _max?: Prisma.UserCredentialsMaxOrderByAggregateInput;
    _min?: Prisma.UserCredentialsMinOrderByAggregateInput;
    _sum?: Prisma.UserCredentialsSumOrderByAggregateInput;
};
export type UserCredentialsScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserCredentialsScalarWhereWithAggregatesInput | Prisma.UserCredentialsScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserCredentialsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserCredentialsScalarWhereWithAggregatesInput | Prisma.UserCredentialsScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"UserCredentials"> | number;
    passwordHash?: Prisma.StringNullableWithAggregatesFilter<"UserCredentials"> | string | null;
    twoFactorEnabled?: Prisma.BoolWithAggregatesFilter<"UserCredentials"> | boolean;
    twoFactorToken?: Prisma.StringNullableWithAggregatesFilter<"UserCredentials"> | string | null;
    googleEmail?: Prisma.StringNullableWithAggregatesFilter<"UserCredentials"> | string | null;
    googleId?: Prisma.StringNullableWithAggregatesFilter<"UserCredentials"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserCredentials"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserCredentials"> | Date | string;
};
export type UserCredentialsCreateInput = {
    passwordHash?: string | null;
    twoFactorEnabled?: boolean;
    twoFactorToken?: string | null;
    googleEmail?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCredentialsInput;
};
export type UserCredentialsUncheckedCreateInput = {
    userId: number;
    passwordHash?: string | null;
    twoFactorEnabled?: boolean;
    twoFactorToken?: string | null;
    googleEmail?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserCredentialsUpdateInput = {
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    twoFactorToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCredentialsNestedInput;
};
export type UserCredentialsUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    twoFactorToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCredentialsCreateManyInput = {
    userId: number;
    passwordHash?: string | null;
    twoFactorEnabled?: boolean;
    twoFactorToken?: string | null;
    googleEmail?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserCredentialsUpdateManyMutationInput = {
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    twoFactorToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCredentialsUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    twoFactorToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCredentialsNullableScalarRelationFilter = {
    is?: Prisma.UserCredentialsWhereInput | null;
    isNot?: Prisma.UserCredentialsWhereInput | null;
};
export type UserCredentialsCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    twoFactorToken?: Prisma.SortOrder;
    googleEmail?: Prisma.SortOrder;
    googleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserCredentialsAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type UserCredentialsMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    twoFactorToken?: Prisma.SortOrder;
    googleEmail?: Prisma.SortOrder;
    googleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserCredentialsMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    twoFactorEnabled?: Prisma.SortOrder;
    twoFactorToken?: Prisma.SortOrder;
    googleEmail?: Prisma.SortOrder;
    googleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserCredentialsSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type UserCredentialsCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserCredentialsCreateWithoutUserInput, Prisma.UserCredentialsUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserCredentialsCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserCredentialsWhereUniqueInput;
};
export type UserCredentialsUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserCredentialsCreateWithoutUserInput, Prisma.UserCredentialsUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserCredentialsCreateOrConnectWithoutUserInput;
    connect?: Prisma.UserCredentialsWhereUniqueInput;
};
export type UserCredentialsUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCredentialsCreateWithoutUserInput, Prisma.UserCredentialsUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserCredentialsCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserCredentialsUpsertWithoutUserInput;
    disconnect?: Prisma.UserCredentialsWhereInput | boolean;
    delete?: Prisma.UserCredentialsWhereInput | boolean;
    connect?: Prisma.UserCredentialsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserCredentialsUpdateToOneWithWhereWithoutUserInput, Prisma.UserCredentialsUpdateWithoutUserInput>, Prisma.UserCredentialsUncheckedUpdateWithoutUserInput>;
};
export type UserCredentialsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserCredentialsCreateWithoutUserInput, Prisma.UserCredentialsUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.UserCredentialsCreateOrConnectWithoutUserInput;
    upsert?: Prisma.UserCredentialsUpsertWithoutUserInput;
    disconnect?: Prisma.UserCredentialsWhereInput | boolean;
    delete?: Prisma.UserCredentialsWhereInput | boolean;
    connect?: Prisma.UserCredentialsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserCredentialsUpdateToOneWithWhereWithoutUserInput, Prisma.UserCredentialsUpdateWithoutUserInput>, Prisma.UserCredentialsUncheckedUpdateWithoutUserInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UserCredentialsCreateWithoutUserInput = {
    passwordHash?: string | null;
    twoFactorEnabled?: boolean;
    twoFactorToken?: string | null;
    googleEmail?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserCredentialsUncheckedCreateWithoutUserInput = {
    passwordHash?: string | null;
    twoFactorEnabled?: boolean;
    twoFactorToken?: string | null;
    googleEmail?: string | null;
    googleId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserCredentialsCreateOrConnectWithoutUserInput = {
    where: Prisma.UserCredentialsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCredentialsCreateWithoutUserInput, Prisma.UserCredentialsUncheckedCreateWithoutUserInput>;
};
export type UserCredentialsUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.UserCredentialsUpdateWithoutUserInput, Prisma.UserCredentialsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserCredentialsCreateWithoutUserInput, Prisma.UserCredentialsUncheckedCreateWithoutUserInput>;
    where?: Prisma.UserCredentialsWhereInput;
};
export type UserCredentialsUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.UserCredentialsWhereInput;
    data: Prisma.XOR<Prisma.UserCredentialsUpdateWithoutUserInput, Prisma.UserCredentialsUncheckedUpdateWithoutUserInput>;
};
export type UserCredentialsUpdateWithoutUserInput = {
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    twoFactorToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCredentialsUncheckedUpdateWithoutUserInput = {
    passwordHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    twoFactorEnabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    twoFactorToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    googleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCredentialsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    passwordHash?: boolean;
    twoFactorEnabled?: boolean;
    twoFactorToken?: boolean;
    googleEmail?: boolean;
    googleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userCredentials"]>;
export type UserCredentialsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    passwordHash?: boolean;
    twoFactorEnabled?: boolean;
    twoFactorToken?: boolean;
    googleEmail?: boolean;
    googleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userCredentials"]>;
export type UserCredentialsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    passwordHash?: boolean;
    twoFactorEnabled?: boolean;
    twoFactorToken?: boolean;
    googleEmail?: boolean;
    googleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userCredentials"]>;
export type UserCredentialsSelectScalar = {
    userId?: boolean;
    passwordHash?: boolean;
    twoFactorEnabled?: boolean;
    twoFactorToken?: boolean;
    googleEmail?: boolean;
    googleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserCredentialsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "passwordHash" | "twoFactorEnabled" | "twoFactorToken" | "googleEmail" | "googleId" | "createdAt" | "updatedAt", ExtArgs["result"]["userCredentials"]>;
export type UserCredentialsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserCredentialsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserCredentialsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserCredentialsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserCredentials";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        passwordHash: string | null;
        twoFactorEnabled: boolean;
        twoFactorToken: string | null;
        googleEmail: string | null;
        googleId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userCredentials"]>;
    composites: {};
};
export type UserCredentialsGetPayload<S extends boolean | null | undefined | UserCredentialsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload, S>;
export type UserCredentialsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserCredentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCredentialsCountAggregateInputType | true;
};
export interface UserCredentialsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserCredentials'];
        meta: {
            name: 'UserCredentials';
        };
    };
    findUnique<T extends UserCredentialsFindUniqueArgs>(args: Prisma.SelectSubset<T, UserCredentialsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserCredentialsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserCredentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserCredentialsFindFirstArgs>(args?: Prisma.SelectSubset<T, UserCredentialsFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserCredentialsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserCredentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserCredentialsFindManyArgs>(args?: Prisma.SelectSubset<T, UserCredentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCredentialsCreateArgs>(args: Prisma.SelectSubset<T, UserCredentialsCreateArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCredentialsCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCredentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCredentialsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCredentialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserCredentialsDeleteArgs>(args: Prisma.SelectSubset<T, UserCredentialsDeleteArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserCredentialsUpdateArgs>(args: Prisma.SelectSubset<T, UserCredentialsUpdateArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserCredentialsDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserCredentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserCredentialsUpdateManyArgs>(args: Prisma.SelectSubset<T, UserCredentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserCredentialsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserCredentialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserCredentialsUpsertArgs>(args: Prisma.SelectSubset<T, UserCredentialsUpsertArgs<ExtArgs>>): Prisma.Prisma__UserCredentialsClient<runtime.Types.Result.GetResult<Prisma.$UserCredentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCredentialsCountArgs>(args?: Prisma.Subset<T, UserCredentialsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCredentialsCountAggregateOutputType> : number>;
    aggregate<T extends UserCredentialsAggregateArgs>(args: Prisma.Subset<T, UserCredentialsAggregateArgs>): Prisma.PrismaPromise<GetUserCredentialsAggregateType<T>>;
    groupBy<T extends UserCredentialsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserCredentialsGroupByArgs['orderBy'];
    } : {
        orderBy?: UserCredentialsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserCredentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCredentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserCredentialsFieldRefs;
}
export interface Prisma__UserCredentialsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserCredentialsFieldRefs {
    readonly userId: Prisma.FieldRef<"UserCredentials", 'Int'>;
    readonly passwordHash: Prisma.FieldRef<"UserCredentials", 'String'>;
    readonly twoFactorEnabled: Prisma.FieldRef<"UserCredentials", 'Boolean'>;
    readonly twoFactorToken: Prisma.FieldRef<"UserCredentials", 'String'>;
    readonly googleEmail: Prisma.FieldRef<"UserCredentials", 'String'>;
    readonly googleId: Prisma.FieldRef<"UserCredentials", 'String'>;
    readonly createdAt: Prisma.FieldRef<"UserCredentials", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserCredentials", 'DateTime'>;
}
export type UserCredentialsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where: Prisma.UserCredentialsWhereUniqueInput;
};
export type UserCredentialsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where: Prisma.UserCredentialsWhereUniqueInput;
};
export type UserCredentialsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where?: Prisma.UserCredentialsWhereInput;
    orderBy?: Prisma.UserCredentialsOrderByWithRelationInput | Prisma.UserCredentialsOrderByWithRelationInput[];
    cursor?: Prisma.UserCredentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserCredentialsScalarFieldEnum | Prisma.UserCredentialsScalarFieldEnum[];
};
export type UserCredentialsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where?: Prisma.UserCredentialsWhereInput;
    orderBy?: Prisma.UserCredentialsOrderByWithRelationInput | Prisma.UserCredentialsOrderByWithRelationInput[];
    cursor?: Prisma.UserCredentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserCredentialsScalarFieldEnum | Prisma.UserCredentialsScalarFieldEnum[];
};
export type UserCredentialsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where?: Prisma.UserCredentialsWhereInput;
    orderBy?: Prisma.UserCredentialsOrderByWithRelationInput | Prisma.UserCredentialsOrderByWithRelationInput[];
    cursor?: Prisma.UserCredentialsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserCredentialsScalarFieldEnum | Prisma.UserCredentialsScalarFieldEnum[];
};
export type UserCredentialsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCredentialsCreateInput, Prisma.UserCredentialsUncheckedCreateInput>;
};
export type UserCredentialsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCredentialsCreateManyInput | Prisma.UserCredentialsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCredentialsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    data: Prisma.UserCredentialsCreateManyInput | Prisma.UserCredentialsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserCredentialsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserCredentialsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCredentialsUpdateInput, Prisma.UserCredentialsUncheckedUpdateInput>;
    where: Prisma.UserCredentialsWhereUniqueInput;
};
export type UserCredentialsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserCredentialsUpdateManyMutationInput, Prisma.UserCredentialsUncheckedUpdateManyInput>;
    where?: Prisma.UserCredentialsWhereInput;
    limit?: number;
};
export type UserCredentialsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCredentialsUpdateManyMutationInput, Prisma.UserCredentialsUncheckedUpdateManyInput>;
    where?: Prisma.UserCredentialsWhereInput;
    limit?: number;
    include?: Prisma.UserCredentialsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserCredentialsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where: Prisma.UserCredentialsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCredentialsCreateInput, Prisma.UserCredentialsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserCredentialsUpdateInput, Prisma.UserCredentialsUncheckedUpdateInput>;
};
export type UserCredentialsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
    where: Prisma.UserCredentialsWhereUniqueInput;
};
export type UserCredentialsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserCredentialsWhereInput;
    limit?: number;
};
export type UserCredentialsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCredentialsSelect<ExtArgs> | null;
    omit?: Prisma.UserCredentialsOmit<ExtArgs> | null;
    include?: Prisma.UserCredentialsInclude<ExtArgs> | null;
};
export {};
