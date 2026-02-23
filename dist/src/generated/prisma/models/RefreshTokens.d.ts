import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RefreshTokensModel = runtime.Types.Result.DefaultSelection<Prisma.$RefreshTokensPayload>;
export type AggregateRefreshTokens = {
    _count: RefreshTokensCountAggregateOutputType | null;
    _avg: RefreshTokensAvgAggregateOutputType | null;
    _sum: RefreshTokensSumAggregateOutputType | null;
    _min: RefreshTokensMinAggregateOutputType | null;
    _max: RefreshTokensMaxAggregateOutputType | null;
};
export type RefreshTokensAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type RefreshTokensSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type RefreshTokensMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    refreshTokenHash: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    revokedAt: Date | null;
};
export type RefreshTokensMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    refreshTokenHash: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    revokedAt: Date | null;
};
export type RefreshTokensCountAggregateOutputType = {
    id: number;
    userId: number;
    refreshTokenHash: number;
    expiresAt: number;
    createdAt: number;
    revokedAt: number;
    _all: number;
};
export type RefreshTokensAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type RefreshTokensSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type RefreshTokensMinAggregateInputType = {
    id?: true;
    userId?: true;
    refreshTokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
    revokedAt?: true;
};
export type RefreshTokensMaxAggregateInputType = {
    id?: true;
    userId?: true;
    refreshTokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
    revokedAt?: true;
};
export type RefreshTokensCountAggregateInputType = {
    id?: true;
    userId?: true;
    refreshTokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
    revokedAt?: true;
    _all?: true;
};
export type RefreshTokensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokensWhereInput;
    orderBy?: Prisma.RefreshTokensOrderByWithRelationInput | Prisma.RefreshTokensOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RefreshTokensCountAggregateInputType;
    _avg?: RefreshTokensAvgAggregateInputType;
    _sum?: RefreshTokensSumAggregateInputType;
    _min?: RefreshTokensMinAggregateInputType;
    _max?: RefreshTokensMaxAggregateInputType;
};
export type GetRefreshTokensAggregateType<T extends RefreshTokensAggregateArgs> = {
    [P in keyof T & keyof AggregateRefreshTokens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRefreshTokens[P]> : Prisma.GetScalarType<T[P], AggregateRefreshTokens[P]>;
};
export type RefreshTokensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokensWhereInput;
    orderBy?: Prisma.RefreshTokensOrderByWithAggregationInput | Prisma.RefreshTokensOrderByWithAggregationInput[];
    by: Prisma.RefreshTokensScalarFieldEnum[] | Prisma.RefreshTokensScalarFieldEnum;
    having?: Prisma.RefreshTokensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefreshTokensCountAggregateInputType | true;
    _avg?: RefreshTokensAvgAggregateInputType;
    _sum?: RefreshTokensSumAggregateInputType;
    _min?: RefreshTokensMinAggregateInputType;
    _max?: RefreshTokensMaxAggregateInputType;
};
export type RefreshTokensGroupByOutputType = {
    id: number;
    userId: number;
    refreshTokenHash: string;
    expiresAt: Date;
    createdAt: Date;
    revokedAt: Date | null;
    _count: RefreshTokensCountAggregateOutputType | null;
    _avg: RefreshTokensAvgAggregateOutputType | null;
    _sum: RefreshTokensSumAggregateOutputType | null;
    _min: RefreshTokensMinAggregateOutputType | null;
    _max: RefreshTokensMaxAggregateOutputType | null;
};
type GetRefreshTokensGroupByPayload<T extends RefreshTokensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RefreshTokensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RefreshTokensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RefreshTokensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RefreshTokensGroupByOutputType[P]>;
}>>;
export type RefreshTokensWhereInput = {
    AND?: Prisma.RefreshTokensWhereInput | Prisma.RefreshTokensWhereInput[];
    OR?: Prisma.RefreshTokensWhereInput[];
    NOT?: Prisma.RefreshTokensWhereInput | Prisma.RefreshTokensWhereInput[];
    id?: Prisma.IntFilter<"RefreshTokens"> | number;
    userId?: Prisma.IntFilter<"RefreshTokens"> | number;
    refreshTokenHash?: Prisma.StringFilter<"RefreshTokens"> | string;
    expiresAt?: Prisma.DateTimeFilter<"RefreshTokens"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RefreshTokens"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"RefreshTokens"> | Date | string | null;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type RefreshTokensOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
};
export type RefreshTokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RefreshTokensWhereInput | Prisma.RefreshTokensWhereInput[];
    OR?: Prisma.RefreshTokensWhereInput[];
    NOT?: Prisma.RefreshTokensWhereInput | Prisma.RefreshTokensWhereInput[];
    userId?: Prisma.IntFilter<"RefreshTokens"> | number;
    refreshTokenHash?: Prisma.StringFilter<"RefreshTokens"> | string;
    expiresAt?: Prisma.DateTimeFilter<"RefreshTokens"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RefreshTokens"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"RefreshTokens"> | Date | string | null;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type RefreshTokensOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RefreshTokensCountOrderByAggregateInput;
    _avg?: Prisma.RefreshTokensAvgOrderByAggregateInput;
    _max?: Prisma.RefreshTokensMaxOrderByAggregateInput;
    _min?: Prisma.RefreshTokensMinOrderByAggregateInput;
    _sum?: Prisma.RefreshTokensSumOrderByAggregateInput;
};
export type RefreshTokensScalarWhereWithAggregatesInput = {
    AND?: Prisma.RefreshTokensScalarWhereWithAggregatesInput | Prisma.RefreshTokensScalarWhereWithAggregatesInput[];
    OR?: Prisma.RefreshTokensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RefreshTokensScalarWhereWithAggregatesInput | Prisma.RefreshTokensScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"RefreshTokens"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"RefreshTokens"> | number;
    refreshTokenHash?: Prisma.StringWithAggregatesFilter<"RefreshTokens"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"RefreshTokens"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RefreshTokens"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RefreshTokens"> | Date | string | null;
};
export type RefreshTokensCreateInput = {
    refreshTokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    revokedAt?: Date | string | null;
    User: Prisma.UserCreateNestedOneWithoutRefreshTokensInput;
};
export type RefreshTokensUncheckedCreateInput = {
    id?: number;
    userId: number;
    refreshTokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    revokedAt?: Date | string | null;
};
export type RefreshTokensUpdateInput = {
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    User?: Prisma.UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
};
export type RefreshTokensUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefreshTokensCreateManyInput = {
    id?: number;
    userId: number;
    refreshTokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    revokedAt?: Date | string | null;
};
export type RefreshTokensUpdateManyMutationInput = {
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefreshTokensUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefreshTokensListRelationFilter = {
    every?: Prisma.RefreshTokensWhereInput;
    some?: Prisma.RefreshTokensWhereInput;
    none?: Prisma.RefreshTokensWhereInput;
};
export type RefreshTokensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RefreshTokensCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RefreshTokensAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RefreshTokensMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RefreshTokensMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    refreshTokenHash?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RefreshTokensSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RefreshTokensCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RefreshTokensCreateWithoutUserInput, Prisma.RefreshTokensUncheckedCreateWithoutUserInput> | Prisma.RefreshTokensCreateWithoutUserInput[] | Prisma.RefreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RefreshTokensCreateOrConnectWithoutUserInput | Prisma.RefreshTokensCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RefreshTokensCreateManyUserInputEnvelope;
    connect?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
};
export type RefreshTokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RefreshTokensCreateWithoutUserInput, Prisma.RefreshTokensUncheckedCreateWithoutUserInput> | Prisma.RefreshTokensCreateWithoutUserInput[] | Prisma.RefreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RefreshTokensCreateOrConnectWithoutUserInput | Prisma.RefreshTokensCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RefreshTokensCreateManyUserInputEnvelope;
    connect?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
};
export type RefreshTokensUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RefreshTokensCreateWithoutUserInput, Prisma.RefreshTokensUncheckedCreateWithoutUserInput> | Prisma.RefreshTokensCreateWithoutUserInput[] | Prisma.RefreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RefreshTokensCreateOrConnectWithoutUserInput | Prisma.RefreshTokensCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RefreshTokensUpsertWithWhereUniqueWithoutUserInput | Prisma.RefreshTokensUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RefreshTokensCreateManyUserInputEnvelope;
    set?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    disconnect?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    delete?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    connect?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    update?: Prisma.RefreshTokensUpdateWithWhereUniqueWithoutUserInput | Prisma.RefreshTokensUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RefreshTokensUpdateManyWithWhereWithoutUserInput | Prisma.RefreshTokensUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RefreshTokensScalarWhereInput | Prisma.RefreshTokensScalarWhereInput[];
};
export type RefreshTokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RefreshTokensCreateWithoutUserInput, Prisma.RefreshTokensUncheckedCreateWithoutUserInput> | Prisma.RefreshTokensCreateWithoutUserInput[] | Prisma.RefreshTokensUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RefreshTokensCreateOrConnectWithoutUserInput | Prisma.RefreshTokensCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RefreshTokensUpsertWithWhereUniqueWithoutUserInput | Prisma.RefreshTokensUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RefreshTokensCreateManyUserInputEnvelope;
    set?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    disconnect?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    delete?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    connect?: Prisma.RefreshTokensWhereUniqueInput | Prisma.RefreshTokensWhereUniqueInput[];
    update?: Prisma.RefreshTokensUpdateWithWhereUniqueWithoutUserInput | Prisma.RefreshTokensUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RefreshTokensUpdateManyWithWhereWithoutUserInput | Prisma.RefreshTokensUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RefreshTokensScalarWhereInput | Prisma.RefreshTokensScalarWhereInput[];
};
export type RefreshTokensCreateWithoutUserInput = {
    refreshTokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    revokedAt?: Date | string | null;
};
export type RefreshTokensUncheckedCreateWithoutUserInput = {
    id?: number;
    refreshTokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    revokedAt?: Date | string | null;
};
export type RefreshTokensCreateOrConnectWithoutUserInput = {
    where: Prisma.RefreshTokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefreshTokensCreateWithoutUserInput, Prisma.RefreshTokensUncheckedCreateWithoutUserInput>;
};
export type RefreshTokensCreateManyUserInputEnvelope = {
    data: Prisma.RefreshTokensCreateManyUserInput | Prisma.RefreshTokensCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RefreshTokensUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RefreshTokensWhereUniqueInput;
    update: Prisma.XOR<Prisma.RefreshTokensUpdateWithoutUserInput, Prisma.RefreshTokensUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RefreshTokensCreateWithoutUserInput, Prisma.RefreshTokensUncheckedCreateWithoutUserInput>;
};
export type RefreshTokensUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RefreshTokensWhereUniqueInput;
    data: Prisma.XOR<Prisma.RefreshTokensUpdateWithoutUserInput, Prisma.RefreshTokensUncheckedUpdateWithoutUserInput>;
};
export type RefreshTokensUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RefreshTokensScalarWhereInput;
    data: Prisma.XOR<Prisma.RefreshTokensUpdateManyMutationInput, Prisma.RefreshTokensUncheckedUpdateManyWithoutUserInput>;
};
export type RefreshTokensScalarWhereInput = {
    AND?: Prisma.RefreshTokensScalarWhereInput | Prisma.RefreshTokensScalarWhereInput[];
    OR?: Prisma.RefreshTokensScalarWhereInput[];
    NOT?: Prisma.RefreshTokensScalarWhereInput | Prisma.RefreshTokensScalarWhereInput[];
    id?: Prisma.IntFilter<"RefreshTokens"> | number;
    userId?: Prisma.IntFilter<"RefreshTokens"> | number;
    refreshTokenHash?: Prisma.StringFilter<"RefreshTokens"> | string;
    expiresAt?: Prisma.DateTimeFilter<"RefreshTokens"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RefreshTokens"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"RefreshTokens"> | Date | string | null;
};
export type RefreshTokensCreateManyUserInput = {
    id?: number;
    refreshTokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    revokedAt?: Date | string | null;
};
export type RefreshTokensUpdateWithoutUserInput = {
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefreshTokensUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefreshTokensUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    refreshTokenHash?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type RefreshTokensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    refreshTokenHash?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    revokedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refreshTokens"]>;
export type RefreshTokensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    refreshTokenHash?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    revokedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refreshTokens"]>;
export type RefreshTokensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    refreshTokenHash?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    revokedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["refreshTokens"]>;
export type RefreshTokensSelectScalar = {
    id?: boolean;
    userId?: boolean;
    refreshTokenHash?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    revokedAt?: boolean;
};
export type RefreshTokensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "refreshTokenHash" | "expiresAt" | "createdAt" | "revokedAt", ExtArgs["result"]["refreshTokens"]>;
export type RefreshTokensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RefreshTokensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RefreshTokensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RefreshTokensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RefreshTokens";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        refreshTokenHash: string;
        expiresAt: Date;
        createdAt: Date;
        revokedAt: Date | null;
    }, ExtArgs["result"]["refreshTokens"]>;
    composites: {};
};
export type RefreshTokensGetPayload<S extends boolean | null | undefined | RefreshTokensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload, S>;
export type RefreshTokensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RefreshTokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RefreshTokensCountAggregateInputType | true;
};
export interface RefreshTokensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RefreshTokens'];
        meta: {
            name: 'RefreshTokens';
        };
    };
    findUnique<T extends RefreshTokensFindUniqueArgs>(args: Prisma.SelectSubset<T, RefreshTokensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RefreshTokensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RefreshTokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RefreshTokensFindFirstArgs>(args?: Prisma.SelectSubset<T, RefreshTokensFindFirstArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RefreshTokensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RefreshTokensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RefreshTokensFindManyArgs>(args?: Prisma.SelectSubset<T, RefreshTokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RefreshTokensCreateArgs>(args: Prisma.SelectSubset<T, RefreshTokensCreateArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RefreshTokensCreateManyArgs>(args?: Prisma.SelectSubset<T, RefreshTokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RefreshTokensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RefreshTokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RefreshTokensDeleteArgs>(args: Prisma.SelectSubset<T, RefreshTokensDeleteArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RefreshTokensUpdateArgs>(args: Prisma.SelectSubset<T, RefreshTokensUpdateArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RefreshTokensDeleteManyArgs>(args?: Prisma.SelectSubset<T, RefreshTokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RefreshTokensUpdateManyArgs>(args: Prisma.SelectSubset<T, RefreshTokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RefreshTokensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RefreshTokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RefreshTokensUpsertArgs>(args: Prisma.SelectSubset<T, RefreshTokensUpsertArgs<ExtArgs>>): Prisma.Prisma__RefreshTokensClient<runtime.Types.Result.GetResult<Prisma.$RefreshTokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RefreshTokensCountArgs>(args?: Prisma.Subset<T, RefreshTokensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RefreshTokensCountAggregateOutputType> : number>;
    aggregate<T extends RefreshTokensAggregateArgs>(args: Prisma.Subset<T, RefreshTokensAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokensAggregateType<T>>;
    groupBy<T extends RefreshTokensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RefreshTokensGroupByArgs['orderBy'];
    } : {
        orderBy?: RefreshTokensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RefreshTokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RefreshTokensFieldRefs;
}
export interface Prisma__RefreshTokensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RefreshTokensFieldRefs {
    readonly id: Prisma.FieldRef<"RefreshTokens", 'Int'>;
    readonly userId: Prisma.FieldRef<"RefreshTokens", 'Int'>;
    readonly refreshTokenHash: Prisma.FieldRef<"RefreshTokens", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"RefreshTokens", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RefreshTokens", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"RefreshTokens", 'DateTime'>;
}
export type RefreshTokensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    where: Prisma.RefreshTokensWhereUniqueInput;
};
export type RefreshTokensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    where: Prisma.RefreshTokensWhereUniqueInput;
};
export type RefreshTokensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefreshTokensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefreshTokensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RefreshTokensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefreshTokensCreateInput, Prisma.RefreshTokensUncheckedCreateInput>;
};
export type RefreshTokensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RefreshTokensCreateManyInput | Prisma.RefreshTokensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RefreshTokensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    data: Prisma.RefreshTokensCreateManyInput | Prisma.RefreshTokensCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RefreshTokensIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RefreshTokensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefreshTokensUpdateInput, Prisma.RefreshTokensUncheckedUpdateInput>;
    where: Prisma.RefreshTokensWhereUniqueInput;
};
export type RefreshTokensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RefreshTokensUpdateManyMutationInput, Prisma.RefreshTokensUncheckedUpdateManyInput>;
    where?: Prisma.RefreshTokensWhereInput;
    limit?: number;
};
export type RefreshTokensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RefreshTokensUpdateManyMutationInput, Prisma.RefreshTokensUncheckedUpdateManyInput>;
    where?: Prisma.RefreshTokensWhereInput;
    limit?: number;
    include?: Prisma.RefreshTokensIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RefreshTokensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    where: Prisma.RefreshTokensWhereUniqueInput;
    create: Prisma.XOR<Prisma.RefreshTokensCreateInput, Prisma.RefreshTokensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RefreshTokensUpdateInput, Prisma.RefreshTokensUncheckedUpdateInput>;
};
export type RefreshTokensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
    where: Prisma.RefreshTokensWhereUniqueInput;
};
export type RefreshTokensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokensWhereInput;
    limit?: number;
};
export type RefreshTokensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokensSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokensOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokensInclude<ExtArgs> | null;
};
export {};
