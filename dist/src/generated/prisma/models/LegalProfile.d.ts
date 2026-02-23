import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LegalProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$LegalProfilePayload>;
export type AggregateLegalProfile = {
    _count: LegalProfileCountAggregateOutputType | null;
    _avg: LegalProfileAvgAggregateOutputType | null;
    _sum: LegalProfileSumAggregateOutputType | null;
    _min: LegalProfileMinAggregateOutputType | null;
    _max: LegalProfileMaxAggregateOutputType | null;
};
export type LegalProfileAvgAggregateOutputType = {
    userId: number | null;
};
export type LegalProfileSumAggregateOutputType = {
    userId: number | null;
};
export type LegalProfileMinAggregateOutputType = {
    userId: number | null;
    companyName: string | null;
    companyNameLat: string | null;
    edrpou: string | null;
    taxNumber: string | null;
    legalAddress: string | null;
    contactPersonName: string | null;
};
export type LegalProfileMaxAggregateOutputType = {
    userId: number | null;
    companyName: string | null;
    companyNameLat: string | null;
    edrpou: string | null;
    taxNumber: string | null;
    legalAddress: string | null;
    contactPersonName: string | null;
};
export type LegalProfileCountAggregateOutputType = {
    userId: number;
    companyName: number;
    companyNameLat: number;
    edrpou: number;
    taxNumber: number;
    legalAddress: number;
    contactPersonName: number;
    _all: number;
};
export type LegalProfileAvgAggregateInputType = {
    userId?: true;
};
export type LegalProfileSumAggregateInputType = {
    userId?: true;
};
export type LegalProfileMinAggregateInputType = {
    userId?: true;
    companyName?: true;
    companyNameLat?: true;
    edrpou?: true;
    taxNumber?: true;
    legalAddress?: true;
    contactPersonName?: true;
};
export type LegalProfileMaxAggregateInputType = {
    userId?: true;
    companyName?: true;
    companyNameLat?: true;
    edrpou?: true;
    taxNumber?: true;
    legalAddress?: true;
    contactPersonName?: true;
};
export type LegalProfileCountAggregateInputType = {
    userId?: true;
    companyName?: true;
    companyNameLat?: true;
    edrpou?: true;
    taxNumber?: true;
    legalAddress?: true;
    contactPersonName?: true;
    _all?: true;
};
export type LegalProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LegalProfileWhereInput;
    orderBy?: Prisma.LegalProfileOrderByWithRelationInput | Prisma.LegalProfileOrderByWithRelationInput[];
    cursor?: Prisma.LegalProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LegalProfileCountAggregateInputType;
    _avg?: LegalProfileAvgAggregateInputType;
    _sum?: LegalProfileSumAggregateInputType;
    _min?: LegalProfileMinAggregateInputType;
    _max?: LegalProfileMaxAggregateInputType;
};
export type GetLegalProfileAggregateType<T extends LegalProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateLegalProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLegalProfile[P]> : Prisma.GetScalarType<T[P], AggregateLegalProfile[P]>;
};
export type LegalProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LegalProfileWhereInput;
    orderBy?: Prisma.LegalProfileOrderByWithAggregationInput | Prisma.LegalProfileOrderByWithAggregationInput[];
    by: Prisma.LegalProfileScalarFieldEnum[] | Prisma.LegalProfileScalarFieldEnum;
    having?: Prisma.LegalProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LegalProfileCountAggregateInputType | true;
    _avg?: LegalProfileAvgAggregateInputType;
    _sum?: LegalProfileSumAggregateInputType;
    _min?: LegalProfileMinAggregateInputType;
    _max?: LegalProfileMaxAggregateInputType;
};
export type LegalProfileGroupByOutputType = {
    userId: number;
    companyName: string;
    companyNameLat: string | null;
    edrpou: string;
    taxNumber: string | null;
    legalAddress: string;
    contactPersonName: string | null;
    _count: LegalProfileCountAggregateOutputType | null;
    _avg: LegalProfileAvgAggregateOutputType | null;
    _sum: LegalProfileSumAggregateOutputType | null;
    _min: LegalProfileMinAggregateOutputType | null;
    _max: LegalProfileMaxAggregateOutputType | null;
};
type GetLegalProfileGroupByPayload<T extends LegalProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LegalProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LegalProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LegalProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LegalProfileGroupByOutputType[P]>;
}>>;
export type LegalProfileWhereInput = {
    AND?: Prisma.LegalProfileWhereInput | Prisma.LegalProfileWhereInput[];
    OR?: Prisma.LegalProfileWhereInput[];
    NOT?: Prisma.LegalProfileWhereInput | Prisma.LegalProfileWhereInput[];
    userId?: Prisma.IntFilter<"LegalProfile"> | number;
    companyName?: Prisma.StringFilter<"LegalProfile"> | string;
    companyNameLat?: Prisma.StringNullableFilter<"LegalProfile"> | string | null;
    edrpou?: Prisma.StringFilter<"LegalProfile"> | string;
    taxNumber?: Prisma.StringNullableFilter<"LegalProfile"> | string | null;
    legalAddress?: Prisma.StringFilter<"LegalProfile"> | string;
    contactPersonName?: Prisma.StringNullableFilter<"LegalProfile"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type LegalProfileOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyNameLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    edrpou?: Prisma.SortOrder;
    taxNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    legalAddress?: Prisma.SortOrder;
    contactPersonName?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type LegalProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: number;
    edrpou?: string;
    AND?: Prisma.LegalProfileWhereInput | Prisma.LegalProfileWhereInput[];
    OR?: Prisma.LegalProfileWhereInput[];
    NOT?: Prisma.LegalProfileWhereInput | Prisma.LegalProfileWhereInput[];
    companyName?: Prisma.StringFilter<"LegalProfile"> | string;
    companyNameLat?: Prisma.StringNullableFilter<"LegalProfile"> | string | null;
    taxNumber?: Prisma.StringNullableFilter<"LegalProfile"> | string | null;
    legalAddress?: Prisma.StringFilter<"LegalProfile"> | string;
    contactPersonName?: Prisma.StringNullableFilter<"LegalProfile"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId" | "edrpou">;
export type LegalProfileOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyNameLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    edrpou?: Prisma.SortOrder;
    taxNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    legalAddress?: Prisma.SortOrder;
    contactPersonName?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.LegalProfileCountOrderByAggregateInput;
    _avg?: Prisma.LegalProfileAvgOrderByAggregateInput;
    _max?: Prisma.LegalProfileMaxOrderByAggregateInput;
    _min?: Prisma.LegalProfileMinOrderByAggregateInput;
    _sum?: Prisma.LegalProfileSumOrderByAggregateInput;
};
export type LegalProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.LegalProfileScalarWhereWithAggregatesInput | Prisma.LegalProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.LegalProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LegalProfileScalarWhereWithAggregatesInput | Prisma.LegalProfileScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"LegalProfile"> | number;
    companyName?: Prisma.StringWithAggregatesFilter<"LegalProfile"> | string;
    companyNameLat?: Prisma.StringNullableWithAggregatesFilter<"LegalProfile"> | string | null;
    edrpou?: Prisma.StringWithAggregatesFilter<"LegalProfile"> | string;
    taxNumber?: Prisma.StringNullableWithAggregatesFilter<"LegalProfile"> | string | null;
    legalAddress?: Prisma.StringWithAggregatesFilter<"LegalProfile"> | string;
    contactPersonName?: Prisma.StringNullableWithAggregatesFilter<"LegalProfile"> | string | null;
};
export type LegalProfileCreateInput = {
    companyName: string;
    companyNameLat?: string | null;
    edrpou: string;
    taxNumber?: string | null;
    legalAddress: string;
    contactPersonName?: string | null;
    user: Prisma.UserCreateNestedOneWithoutLegalProfileInput;
};
export type LegalProfileUncheckedCreateInput = {
    userId: number;
    companyName: string;
    companyNameLat?: string | null;
    edrpou: string;
    taxNumber?: string | null;
    legalAddress: string;
    contactPersonName?: string | null;
};
export type LegalProfileUpdateInput = {
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    companyNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    edrpou?: Prisma.StringFieldUpdateOperationsInput | string;
    taxNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    legalAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPersonName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutLegalProfileNestedInput;
};
export type LegalProfileUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    companyNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    edrpou?: Prisma.StringFieldUpdateOperationsInput | string;
    taxNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    legalAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPersonName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LegalProfileCreateManyInput = {
    userId: number;
    companyName: string;
    companyNameLat?: string | null;
    edrpou: string;
    taxNumber?: string | null;
    legalAddress: string;
    contactPersonName?: string | null;
};
export type LegalProfileUpdateManyMutationInput = {
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    companyNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    edrpou?: Prisma.StringFieldUpdateOperationsInput | string;
    taxNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    legalAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPersonName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LegalProfileUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    companyNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    edrpou?: Prisma.StringFieldUpdateOperationsInput | string;
    taxNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    legalAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPersonName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LegalProfileNullableScalarRelationFilter = {
    is?: Prisma.LegalProfileWhereInput | null;
    isNot?: Prisma.LegalProfileWhereInput | null;
};
export type LegalProfileCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyNameLat?: Prisma.SortOrder;
    edrpou?: Prisma.SortOrder;
    taxNumber?: Prisma.SortOrder;
    legalAddress?: Prisma.SortOrder;
    contactPersonName?: Prisma.SortOrder;
};
export type LegalProfileAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type LegalProfileMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyNameLat?: Prisma.SortOrder;
    edrpou?: Prisma.SortOrder;
    taxNumber?: Prisma.SortOrder;
    legalAddress?: Prisma.SortOrder;
    contactPersonName?: Prisma.SortOrder;
};
export type LegalProfileMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    companyName?: Prisma.SortOrder;
    companyNameLat?: Prisma.SortOrder;
    edrpou?: Prisma.SortOrder;
    taxNumber?: Prisma.SortOrder;
    legalAddress?: Prisma.SortOrder;
    contactPersonName?: Prisma.SortOrder;
};
export type LegalProfileSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type LegalProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LegalProfileCreateWithoutUserInput, Prisma.LegalProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LegalProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.LegalProfileWhereUniqueInput;
};
export type LegalProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LegalProfileCreateWithoutUserInput, Prisma.LegalProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LegalProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.LegalProfileWhereUniqueInput;
};
export type LegalProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LegalProfileCreateWithoutUserInput, Prisma.LegalProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LegalProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.LegalProfileUpsertWithoutUserInput;
    disconnect?: Prisma.LegalProfileWhereInput | boolean;
    delete?: Prisma.LegalProfileWhereInput | boolean;
    connect?: Prisma.LegalProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LegalProfileUpdateToOneWithWhereWithoutUserInput, Prisma.LegalProfileUpdateWithoutUserInput>, Prisma.LegalProfileUncheckedUpdateWithoutUserInput>;
};
export type LegalProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LegalProfileCreateWithoutUserInput, Prisma.LegalProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.LegalProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.LegalProfileUpsertWithoutUserInput;
    disconnect?: Prisma.LegalProfileWhereInput | boolean;
    delete?: Prisma.LegalProfileWhereInput | boolean;
    connect?: Prisma.LegalProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LegalProfileUpdateToOneWithWhereWithoutUserInput, Prisma.LegalProfileUpdateWithoutUserInput>, Prisma.LegalProfileUncheckedUpdateWithoutUserInput>;
};
export type LegalProfileCreateWithoutUserInput = {
    companyName: string;
    companyNameLat?: string | null;
    edrpou: string;
    taxNumber?: string | null;
    legalAddress: string;
    contactPersonName?: string | null;
};
export type LegalProfileUncheckedCreateWithoutUserInput = {
    companyName: string;
    companyNameLat?: string | null;
    edrpou: string;
    taxNumber?: string | null;
    legalAddress: string;
    contactPersonName?: string | null;
};
export type LegalProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.LegalProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LegalProfileCreateWithoutUserInput, Prisma.LegalProfileUncheckedCreateWithoutUserInput>;
};
export type LegalProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.LegalProfileUpdateWithoutUserInput, Prisma.LegalProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LegalProfileCreateWithoutUserInput, Prisma.LegalProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.LegalProfileWhereInput;
};
export type LegalProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.LegalProfileWhereInput;
    data: Prisma.XOR<Prisma.LegalProfileUpdateWithoutUserInput, Prisma.LegalProfileUncheckedUpdateWithoutUserInput>;
};
export type LegalProfileUpdateWithoutUserInput = {
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    companyNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    edrpou?: Prisma.StringFieldUpdateOperationsInput | string;
    taxNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    legalAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPersonName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LegalProfileUncheckedUpdateWithoutUserInput = {
    companyName?: Prisma.StringFieldUpdateOperationsInput | string;
    companyNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    edrpou?: Prisma.StringFieldUpdateOperationsInput | string;
    taxNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    legalAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    contactPersonName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type LegalProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    companyName?: boolean;
    companyNameLat?: boolean;
    edrpou?: boolean;
    taxNumber?: boolean;
    legalAddress?: boolean;
    contactPersonName?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["legalProfile"]>;
export type LegalProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    companyName?: boolean;
    companyNameLat?: boolean;
    edrpou?: boolean;
    taxNumber?: boolean;
    legalAddress?: boolean;
    contactPersonName?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["legalProfile"]>;
export type LegalProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    companyName?: boolean;
    companyNameLat?: boolean;
    edrpou?: boolean;
    taxNumber?: boolean;
    legalAddress?: boolean;
    contactPersonName?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["legalProfile"]>;
export type LegalProfileSelectScalar = {
    userId?: boolean;
    companyName?: boolean;
    companyNameLat?: boolean;
    edrpou?: boolean;
    taxNumber?: boolean;
    legalAddress?: boolean;
    contactPersonName?: boolean;
};
export type LegalProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "companyName" | "companyNameLat" | "edrpou" | "taxNumber" | "legalAddress" | "contactPersonName", ExtArgs["result"]["legalProfile"]>;
export type LegalProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LegalProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LegalProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $LegalProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LegalProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        companyName: string;
        companyNameLat: string | null;
        edrpou: string;
        taxNumber: string | null;
        legalAddress: string;
        contactPersonName: string | null;
    }, ExtArgs["result"]["legalProfile"]>;
    composites: {};
};
export type LegalProfileGetPayload<S extends boolean | null | undefined | LegalProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload, S>;
export type LegalProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LegalProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LegalProfileCountAggregateInputType | true;
};
export interface LegalProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LegalProfile'];
        meta: {
            name: 'LegalProfile';
        };
    };
    findUnique<T extends LegalProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, LegalProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LegalProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LegalProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LegalProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, LegalProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LegalProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LegalProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LegalProfileFindManyArgs>(args?: Prisma.SelectSubset<T, LegalProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LegalProfileCreateArgs>(args: Prisma.SelectSubset<T, LegalProfileCreateArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LegalProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, LegalProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LegalProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LegalProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LegalProfileDeleteArgs>(args: Prisma.SelectSubset<T, LegalProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LegalProfileUpdateArgs>(args: Prisma.SelectSubset<T, LegalProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LegalProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, LegalProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LegalProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, LegalProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LegalProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LegalProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LegalProfileUpsertArgs>(args: Prisma.SelectSubset<T, LegalProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__LegalProfileClient<runtime.Types.Result.GetResult<Prisma.$LegalProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LegalProfileCountArgs>(args?: Prisma.Subset<T, LegalProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LegalProfileCountAggregateOutputType> : number>;
    aggregate<T extends LegalProfileAggregateArgs>(args: Prisma.Subset<T, LegalProfileAggregateArgs>): Prisma.PrismaPromise<GetLegalProfileAggregateType<T>>;
    groupBy<T extends LegalProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LegalProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: LegalProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LegalProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LegalProfileFieldRefs;
}
export interface Prisma__LegalProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LegalProfileFieldRefs {
    readonly userId: Prisma.FieldRef<"LegalProfile", 'Int'>;
    readonly companyName: Prisma.FieldRef<"LegalProfile", 'String'>;
    readonly companyNameLat: Prisma.FieldRef<"LegalProfile", 'String'>;
    readonly edrpou: Prisma.FieldRef<"LegalProfile", 'String'>;
    readonly taxNumber: Prisma.FieldRef<"LegalProfile", 'String'>;
    readonly legalAddress: Prisma.FieldRef<"LegalProfile", 'String'>;
    readonly contactPersonName: Prisma.FieldRef<"LegalProfile", 'String'>;
}
export type LegalProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where: Prisma.LegalProfileWhereUniqueInput;
};
export type LegalProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where: Prisma.LegalProfileWhereUniqueInput;
};
export type LegalProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where?: Prisma.LegalProfileWhereInput;
    orderBy?: Prisma.LegalProfileOrderByWithRelationInput | Prisma.LegalProfileOrderByWithRelationInput[];
    cursor?: Prisma.LegalProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LegalProfileScalarFieldEnum | Prisma.LegalProfileScalarFieldEnum[];
};
export type LegalProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where?: Prisma.LegalProfileWhereInput;
    orderBy?: Prisma.LegalProfileOrderByWithRelationInput | Prisma.LegalProfileOrderByWithRelationInput[];
    cursor?: Prisma.LegalProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LegalProfileScalarFieldEnum | Prisma.LegalProfileScalarFieldEnum[];
};
export type LegalProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where?: Prisma.LegalProfileWhereInput;
    orderBy?: Prisma.LegalProfileOrderByWithRelationInput | Prisma.LegalProfileOrderByWithRelationInput[];
    cursor?: Prisma.LegalProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LegalProfileScalarFieldEnum | Prisma.LegalProfileScalarFieldEnum[];
};
export type LegalProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LegalProfileCreateInput, Prisma.LegalProfileUncheckedCreateInput>;
};
export type LegalProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LegalProfileCreateManyInput | Prisma.LegalProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LegalProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    data: Prisma.LegalProfileCreateManyInput | Prisma.LegalProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LegalProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LegalProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LegalProfileUpdateInput, Prisma.LegalProfileUncheckedUpdateInput>;
    where: Prisma.LegalProfileWhereUniqueInput;
};
export type LegalProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LegalProfileUpdateManyMutationInput, Prisma.LegalProfileUncheckedUpdateManyInput>;
    where?: Prisma.LegalProfileWhereInput;
    limit?: number;
};
export type LegalProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LegalProfileUpdateManyMutationInput, Prisma.LegalProfileUncheckedUpdateManyInput>;
    where?: Prisma.LegalProfileWhereInput;
    limit?: number;
    include?: Prisma.LegalProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LegalProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where: Prisma.LegalProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.LegalProfileCreateInput, Prisma.LegalProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LegalProfileUpdateInput, Prisma.LegalProfileUncheckedUpdateInput>;
};
export type LegalProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
    where: Prisma.LegalProfileWhereUniqueInput;
};
export type LegalProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LegalProfileWhereInput;
    limit?: number;
};
export type LegalProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalProfileSelect<ExtArgs> | null;
    omit?: Prisma.LegalProfileOmit<ExtArgs> | null;
    include?: Prisma.LegalProfileInclude<ExtArgs> | null;
};
export {};
