import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IndividualProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$IndividualProfilePayload>;
export type AggregateIndividualProfile = {
    _count: IndividualProfileCountAggregateOutputType | null;
    _avg: IndividualProfileAvgAggregateOutputType | null;
    _sum: IndividualProfileSumAggregateOutputType | null;
    _min: IndividualProfileMinAggregateOutputType | null;
    _max: IndividualProfileMaxAggregateOutputType | null;
};
export type IndividualProfileAvgAggregateOutputType = {
    userId: number | null;
};
export type IndividualProfileSumAggregateOutputType = {
    userId: number | null;
};
export type IndividualProfileMinAggregateOutputType = {
    userId: number | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    firstNameLat: string | null;
    lastNameLat: string | null;
    birthDate: Date | null;
};
export type IndividualProfileMaxAggregateOutputType = {
    userId: number | null;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    firstNameLat: string | null;
    lastNameLat: string | null;
    birthDate: Date | null;
};
export type IndividualProfileCountAggregateOutputType = {
    userId: number;
    firstName: number;
    middleName: number;
    lastName: number;
    firstNameLat: number;
    lastNameLat: number;
    birthDate: number;
    _all: number;
};
export type IndividualProfileAvgAggregateInputType = {
    userId?: true;
};
export type IndividualProfileSumAggregateInputType = {
    userId?: true;
};
export type IndividualProfileMinAggregateInputType = {
    userId?: true;
    firstName?: true;
    middleName?: true;
    lastName?: true;
    firstNameLat?: true;
    lastNameLat?: true;
    birthDate?: true;
};
export type IndividualProfileMaxAggregateInputType = {
    userId?: true;
    firstName?: true;
    middleName?: true;
    lastName?: true;
    firstNameLat?: true;
    lastNameLat?: true;
    birthDate?: true;
};
export type IndividualProfileCountAggregateInputType = {
    userId?: true;
    firstName?: true;
    middleName?: true;
    lastName?: true;
    firstNameLat?: true;
    lastNameLat?: true;
    birthDate?: true;
    _all?: true;
};
export type IndividualProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndividualProfileWhereInput;
    orderBy?: Prisma.IndividualProfileOrderByWithRelationInput | Prisma.IndividualProfileOrderByWithRelationInput[];
    cursor?: Prisma.IndividualProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IndividualProfileCountAggregateInputType;
    _avg?: IndividualProfileAvgAggregateInputType;
    _sum?: IndividualProfileSumAggregateInputType;
    _min?: IndividualProfileMinAggregateInputType;
    _max?: IndividualProfileMaxAggregateInputType;
};
export type GetIndividualProfileAggregateType<T extends IndividualProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateIndividualProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIndividualProfile[P]> : Prisma.GetScalarType<T[P], AggregateIndividualProfile[P]>;
};
export type IndividualProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndividualProfileWhereInput;
    orderBy?: Prisma.IndividualProfileOrderByWithAggregationInput | Prisma.IndividualProfileOrderByWithAggregationInput[];
    by: Prisma.IndividualProfileScalarFieldEnum[] | Prisma.IndividualProfileScalarFieldEnum;
    having?: Prisma.IndividualProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IndividualProfileCountAggregateInputType | true;
    _avg?: IndividualProfileAvgAggregateInputType;
    _sum?: IndividualProfileSumAggregateInputType;
    _min?: IndividualProfileMinAggregateInputType;
    _max?: IndividualProfileMaxAggregateInputType;
};
export type IndividualProfileGroupByOutputType = {
    userId: number;
    firstName: string;
    middleName: string | null;
    lastName: string;
    firstNameLat: string | null;
    lastNameLat: string | null;
    birthDate: Date | null;
    _count: IndividualProfileCountAggregateOutputType | null;
    _avg: IndividualProfileAvgAggregateOutputType | null;
    _sum: IndividualProfileSumAggregateOutputType | null;
    _min: IndividualProfileMinAggregateOutputType | null;
    _max: IndividualProfileMaxAggregateOutputType | null;
};
type GetIndividualProfileGroupByPayload<T extends IndividualProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IndividualProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IndividualProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IndividualProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IndividualProfileGroupByOutputType[P]>;
}>>;
export type IndividualProfileWhereInput = {
    AND?: Prisma.IndividualProfileWhereInput | Prisma.IndividualProfileWhereInput[];
    OR?: Prisma.IndividualProfileWhereInput[];
    NOT?: Prisma.IndividualProfileWhereInput | Prisma.IndividualProfileWhereInput[];
    userId?: Prisma.IntFilter<"IndividualProfile"> | number;
    firstName?: Prisma.StringFilter<"IndividualProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"IndividualProfile"> | string | null;
    lastName?: Prisma.StringFilter<"IndividualProfile"> | string;
    firstNameLat?: Prisma.StringNullableFilter<"IndividualProfile"> | string | null;
    lastNameLat?: Prisma.StringNullableFilter<"IndividualProfile"> | string | null;
    birthDate?: Prisma.DateTimeNullableFilter<"IndividualProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type IndividualProfileOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    firstNameLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastNameLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type IndividualProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: number;
    AND?: Prisma.IndividualProfileWhereInput | Prisma.IndividualProfileWhereInput[];
    OR?: Prisma.IndividualProfileWhereInput[];
    NOT?: Prisma.IndividualProfileWhereInput | Prisma.IndividualProfileWhereInput[];
    firstName?: Prisma.StringFilter<"IndividualProfile"> | string;
    middleName?: Prisma.StringNullableFilter<"IndividualProfile"> | string | null;
    lastName?: Prisma.StringFilter<"IndividualProfile"> | string;
    firstNameLat?: Prisma.StringNullableFilter<"IndividualProfile"> | string | null;
    lastNameLat?: Prisma.StringNullableFilter<"IndividualProfile"> | string | null;
    birthDate?: Prisma.DateTimeNullableFilter<"IndividualProfile"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "userId">;
export type IndividualProfileOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    firstNameLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastNameLat?: Prisma.SortOrderInput | Prisma.SortOrder;
    birthDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.IndividualProfileCountOrderByAggregateInput;
    _avg?: Prisma.IndividualProfileAvgOrderByAggregateInput;
    _max?: Prisma.IndividualProfileMaxOrderByAggregateInput;
    _min?: Prisma.IndividualProfileMinOrderByAggregateInput;
    _sum?: Prisma.IndividualProfileSumOrderByAggregateInput;
};
export type IndividualProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.IndividualProfileScalarWhereWithAggregatesInput | Prisma.IndividualProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.IndividualProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IndividualProfileScalarWhereWithAggregatesInput | Prisma.IndividualProfileScalarWhereWithAggregatesInput[];
    userId?: Prisma.IntWithAggregatesFilter<"IndividualProfile"> | number;
    firstName?: Prisma.StringWithAggregatesFilter<"IndividualProfile"> | string;
    middleName?: Prisma.StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null;
    lastName?: Prisma.StringWithAggregatesFilter<"IndividualProfile"> | string;
    firstNameLat?: Prisma.StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null;
    lastNameLat?: Prisma.StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null;
    birthDate?: Prisma.DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null;
};
export type IndividualProfileCreateInput = {
    firstName: string;
    middleName?: string | null;
    lastName: string;
    firstNameLat?: string | null;
    lastNameLat?: string | null;
    birthDate?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutIndividualProfileInput;
};
export type IndividualProfileUncheckedCreateInput = {
    userId: number;
    firstName: string;
    middleName?: string | null;
    lastName: string;
    firstNameLat?: string | null;
    lastNameLat?: string | null;
    birthDate?: Date | string | null;
};
export type IndividualProfileUpdateInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    firstNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutIndividualProfileNestedInput;
};
export type IndividualProfileUncheckedUpdateInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    firstNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IndividualProfileCreateManyInput = {
    userId: number;
    firstName: string;
    middleName?: string | null;
    lastName: string;
    firstNameLat?: string | null;
    lastNameLat?: string | null;
    birthDate?: Date | string | null;
};
export type IndividualProfileUpdateManyMutationInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    firstNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IndividualProfileUncheckedUpdateManyInput = {
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    firstNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IndividualProfileNullableScalarRelationFilter = {
    is?: Prisma.IndividualProfileWhereInput | null;
    isNot?: Prisma.IndividualProfileWhereInput | null;
};
export type IndividualProfileCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    firstNameLat?: Prisma.SortOrder;
    lastNameLat?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
};
export type IndividualProfileAvgOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type IndividualProfileMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    firstNameLat?: Prisma.SortOrder;
    lastNameLat?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
};
export type IndividualProfileMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    middleName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    firstNameLat?: Prisma.SortOrder;
    lastNameLat?: Prisma.SortOrder;
    birthDate?: Prisma.SortOrder;
};
export type IndividualProfileSumOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
};
export type IndividualProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.IndividualProfileCreateWithoutUserInput, Prisma.IndividualProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.IndividualProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.IndividualProfileWhereUniqueInput;
};
export type IndividualProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.IndividualProfileCreateWithoutUserInput, Prisma.IndividualProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.IndividualProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.IndividualProfileWhereUniqueInput;
};
export type IndividualProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.IndividualProfileCreateWithoutUserInput, Prisma.IndividualProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.IndividualProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.IndividualProfileUpsertWithoutUserInput;
    disconnect?: Prisma.IndividualProfileWhereInput | boolean;
    delete?: Prisma.IndividualProfileWhereInput | boolean;
    connect?: Prisma.IndividualProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IndividualProfileUpdateToOneWithWhereWithoutUserInput, Prisma.IndividualProfileUpdateWithoutUserInput>, Prisma.IndividualProfileUncheckedUpdateWithoutUserInput>;
};
export type IndividualProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.IndividualProfileCreateWithoutUserInput, Prisma.IndividualProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.IndividualProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.IndividualProfileUpsertWithoutUserInput;
    disconnect?: Prisma.IndividualProfileWhereInput | boolean;
    delete?: Prisma.IndividualProfileWhereInput | boolean;
    connect?: Prisma.IndividualProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IndividualProfileUpdateToOneWithWhereWithoutUserInput, Prisma.IndividualProfileUpdateWithoutUserInput>, Prisma.IndividualProfileUncheckedUpdateWithoutUserInput>;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type IndividualProfileCreateWithoutUserInput = {
    firstName: string;
    middleName?: string | null;
    lastName: string;
    firstNameLat?: string | null;
    lastNameLat?: string | null;
    birthDate?: Date | string | null;
};
export type IndividualProfileUncheckedCreateWithoutUserInput = {
    firstName: string;
    middleName?: string | null;
    lastName: string;
    firstNameLat?: string | null;
    lastNameLat?: string | null;
    birthDate?: Date | string | null;
};
export type IndividualProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.IndividualProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndividualProfileCreateWithoutUserInput, Prisma.IndividualProfileUncheckedCreateWithoutUserInput>;
};
export type IndividualProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.IndividualProfileUpdateWithoutUserInput, Prisma.IndividualProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.IndividualProfileCreateWithoutUserInput, Prisma.IndividualProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.IndividualProfileWhereInput;
};
export type IndividualProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.IndividualProfileWhereInput;
    data: Prisma.XOR<Prisma.IndividualProfileUpdateWithoutUserInput, Prisma.IndividualProfileUncheckedUpdateWithoutUserInput>;
};
export type IndividualProfileUpdateWithoutUserInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    firstNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IndividualProfileUncheckedUpdateWithoutUserInput = {
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    middleName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    firstNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastNameLat?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    birthDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type IndividualProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    firstName?: boolean;
    middleName?: boolean;
    lastName?: boolean;
    firstNameLat?: boolean;
    lastNameLat?: boolean;
    birthDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["individualProfile"]>;
export type IndividualProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    firstName?: boolean;
    middleName?: boolean;
    lastName?: boolean;
    firstNameLat?: boolean;
    lastNameLat?: boolean;
    birthDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["individualProfile"]>;
export type IndividualProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    firstName?: boolean;
    middleName?: boolean;
    lastName?: boolean;
    firstNameLat?: boolean;
    lastNameLat?: boolean;
    birthDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["individualProfile"]>;
export type IndividualProfileSelectScalar = {
    userId?: boolean;
    firstName?: boolean;
    middleName?: boolean;
    lastName?: boolean;
    firstNameLat?: boolean;
    lastNameLat?: boolean;
    birthDate?: boolean;
};
export type IndividualProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "firstName" | "middleName" | "lastName" | "firstNameLat" | "lastNameLat" | "birthDate", ExtArgs["result"]["individualProfile"]>;
export type IndividualProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IndividualProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IndividualProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $IndividualProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IndividualProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: number;
        firstName: string;
        middleName: string | null;
        lastName: string;
        firstNameLat: string | null;
        lastNameLat: string | null;
        birthDate: Date | null;
    }, ExtArgs["result"]["individualProfile"]>;
    composites: {};
};
export type IndividualProfileGetPayload<S extends boolean | null | undefined | IndividualProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload, S>;
export type IndividualProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IndividualProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IndividualProfileCountAggregateInputType | true;
};
export interface IndividualProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IndividualProfile'];
        meta: {
            name: 'IndividualProfile';
        };
    };
    findUnique<T extends IndividualProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, IndividualProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IndividualProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IndividualProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IndividualProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, IndividualProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IndividualProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IndividualProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IndividualProfileFindManyArgs>(args?: Prisma.SelectSubset<T, IndividualProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IndividualProfileCreateArgs>(args: Prisma.SelectSubset<T, IndividualProfileCreateArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IndividualProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, IndividualProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IndividualProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IndividualProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IndividualProfileDeleteArgs>(args: Prisma.SelectSubset<T, IndividualProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IndividualProfileUpdateArgs>(args: Prisma.SelectSubset<T, IndividualProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IndividualProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, IndividualProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IndividualProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, IndividualProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IndividualProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IndividualProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IndividualProfileUpsertArgs>(args: Prisma.SelectSubset<T, IndividualProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__IndividualProfileClient<runtime.Types.Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IndividualProfileCountArgs>(args?: Prisma.Subset<T, IndividualProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IndividualProfileCountAggregateOutputType> : number>;
    aggregate<T extends IndividualProfileAggregateArgs>(args: Prisma.Subset<T, IndividualProfileAggregateArgs>): Prisma.PrismaPromise<GetIndividualProfileAggregateType<T>>;
    groupBy<T extends IndividualProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IndividualProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: IndividualProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IndividualProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndividualProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IndividualProfileFieldRefs;
}
export interface Prisma__IndividualProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IndividualProfileFieldRefs {
    readonly userId: Prisma.FieldRef<"IndividualProfile", 'Int'>;
    readonly firstName: Prisma.FieldRef<"IndividualProfile", 'String'>;
    readonly middleName: Prisma.FieldRef<"IndividualProfile", 'String'>;
    readonly lastName: Prisma.FieldRef<"IndividualProfile", 'String'>;
    readonly firstNameLat: Prisma.FieldRef<"IndividualProfile", 'String'>;
    readonly lastNameLat: Prisma.FieldRef<"IndividualProfile", 'String'>;
    readonly birthDate: Prisma.FieldRef<"IndividualProfile", 'DateTime'>;
}
export type IndividualProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where: Prisma.IndividualProfileWhereUniqueInput;
};
export type IndividualProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where: Prisma.IndividualProfileWhereUniqueInput;
};
export type IndividualProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where?: Prisma.IndividualProfileWhereInput;
    orderBy?: Prisma.IndividualProfileOrderByWithRelationInput | Prisma.IndividualProfileOrderByWithRelationInput[];
    cursor?: Prisma.IndividualProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IndividualProfileScalarFieldEnum | Prisma.IndividualProfileScalarFieldEnum[];
};
export type IndividualProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where?: Prisma.IndividualProfileWhereInput;
    orderBy?: Prisma.IndividualProfileOrderByWithRelationInput | Prisma.IndividualProfileOrderByWithRelationInput[];
    cursor?: Prisma.IndividualProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IndividualProfileScalarFieldEnum | Prisma.IndividualProfileScalarFieldEnum[];
};
export type IndividualProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where?: Prisma.IndividualProfileWhereInput;
    orderBy?: Prisma.IndividualProfileOrderByWithRelationInput | Prisma.IndividualProfileOrderByWithRelationInput[];
    cursor?: Prisma.IndividualProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IndividualProfileScalarFieldEnum | Prisma.IndividualProfileScalarFieldEnum[];
};
export type IndividualProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IndividualProfileCreateInput, Prisma.IndividualProfileUncheckedCreateInput>;
};
export type IndividualProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IndividualProfileCreateManyInput | Prisma.IndividualProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IndividualProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    data: Prisma.IndividualProfileCreateManyInput | Prisma.IndividualProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IndividualProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IndividualProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IndividualProfileUpdateInput, Prisma.IndividualProfileUncheckedUpdateInput>;
    where: Prisma.IndividualProfileWhereUniqueInput;
};
export type IndividualProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IndividualProfileUpdateManyMutationInput, Prisma.IndividualProfileUncheckedUpdateManyInput>;
    where?: Prisma.IndividualProfileWhereInput;
    limit?: number;
};
export type IndividualProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IndividualProfileUpdateManyMutationInput, Prisma.IndividualProfileUncheckedUpdateManyInput>;
    where?: Prisma.IndividualProfileWhereInput;
    limit?: number;
    include?: Prisma.IndividualProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IndividualProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where: Prisma.IndividualProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndividualProfileCreateInput, Prisma.IndividualProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IndividualProfileUpdateInput, Prisma.IndividualProfileUncheckedUpdateInput>;
};
export type IndividualProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
    where: Prisma.IndividualProfileWhereUniqueInput;
};
export type IndividualProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndividualProfileWhereInput;
    limit?: number;
};
export type IndividualProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndividualProfileSelect<ExtArgs> | null;
    omit?: Prisma.IndividualProfileOmit<ExtArgs> | null;
    include?: Prisma.IndividualProfileInclude<ExtArgs> | null;
};
export {};
