/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Deposit } from './deposit';
import { Params } from './params';

export const protobufPackage = 'lum.network.dfract';

export enum DepositsQueryType {
    PENDING_WITHDRAWAL = 0,
    PENDING_MINT = 1,
    MINTED = 2,
    UNRECOGNIZED = -1,
}

export function depositsQueryTypeFromJSON(object: any): DepositsQueryType {
    switch (object) {
        case 0:
        case 'PENDING_WITHDRAWAL':
            return DepositsQueryType.PENDING_WITHDRAWAL;
        case 1:
        case 'PENDING_MINT':
            return DepositsQueryType.PENDING_MINT;
        case 2:
        case 'MINTED':
            return DepositsQueryType.MINTED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DepositsQueryType.UNRECOGNIZED;
    }
}

export function depositsQueryTypeToJSON(object: DepositsQueryType): string {
    switch (object) {
        case DepositsQueryType.PENDING_WITHDRAWAL:
            return 'PENDING_WITHDRAWAL';
        case DepositsQueryType.PENDING_MINT:
            return 'PENDING_MINT';
        case DepositsQueryType.MINTED:
            return 'MINTED';
        case DepositsQueryType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface QueryModuleAccountBalanceRequest {}

export interface QueryModuleAccountBalanceResponse {
    moduleAccountBalance: Coin[];
}

export interface QueryParamsRequest {}

export interface QueryParamsResponse {
    params?: Params;
}

export interface QueryGetDepositsForAddressRequest {
    address: string;
}

export interface QueryFetchDepositsRequest {
    pagination?: PageRequest;
    type: DepositsQueryType;
}

export interface QueryGetDepositsForAddressResponse {
    depositsPendingWithdrawal?: Deposit;
    depositsPendingMint?: Deposit;
    depositsMinted?: Deposit;
}

export interface QueryFetchDepositsResponse {
    deposits: Deposit[];
    pagination?: PageResponse;
}

function createBaseQueryModuleAccountBalanceRequest(): QueryModuleAccountBalanceRequest {
    return {};
}

export const QueryModuleAccountBalanceRequest = {
    encode(_: QueryModuleAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): QueryModuleAccountBalanceRequest {
        return {};
    },

    toJSON(_: QueryModuleAccountBalanceRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryModuleAccountBalanceRequest>, I>>(base?: I): QueryModuleAccountBalanceRequest {
        return QueryModuleAccountBalanceRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryModuleAccountBalanceRequest>, I>>(_: I): QueryModuleAccountBalanceRequest {
        const message = createBaseQueryModuleAccountBalanceRequest();
        return message;
    },
};

function createBaseQueryModuleAccountBalanceResponse(): QueryModuleAccountBalanceResponse {
    return { moduleAccountBalance: [] };
}

export const QueryModuleAccountBalanceResponse = {
    encode(message: QueryModuleAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.moduleAccountBalance) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleAccountBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryModuleAccountBalanceResponse {
        return {
            moduleAccountBalance: Array.isArray(object?.moduleAccountBalance) ? object.moduleAccountBalance.map((e: any) => Coin.fromJSON(e)) : [],
        };
    },

    toJSON(message: QueryModuleAccountBalanceResponse): unknown {
        const obj: any = {};
        if (message.moduleAccountBalance) {
            obj.moduleAccountBalance = message.moduleAccountBalance.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.moduleAccountBalance = [];
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryModuleAccountBalanceResponse>, I>>(base?: I): QueryModuleAccountBalanceResponse {
        return QueryModuleAccountBalanceResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryModuleAccountBalanceResponse>, I>>(object: I): QueryModuleAccountBalanceResponse {
        const message = createBaseQueryModuleAccountBalanceResponse();
        message.moduleAccountBalance = object.moduleAccountBalance?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
    return {};
}

export const QueryParamsRequest = {
    encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): QueryParamsRequest {
        return {};
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
        return QueryParamsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
    return { params: undefined };
}

export const QueryParamsResponse = {
    encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.params = Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryParamsResponse {
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
        return QueryParamsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
};

function createBaseQueryGetDepositsForAddressRequest(): QueryGetDepositsForAddressRequest {
    return { address: '' };
}

export const QueryGetDepositsForAddressRequest = {
    encode(message: QueryGetDepositsForAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDepositsForAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.address = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryGetDepositsForAddressRequest {
        return { address: isSet(object.address) ? String(object.address) : '' };
    },

    toJSON(message: QueryGetDepositsForAddressRequest): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryGetDepositsForAddressRequest>, I>>(base?: I): QueryGetDepositsForAddressRequest {
        return QueryGetDepositsForAddressRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryGetDepositsForAddressRequest>, I>>(object: I): QueryGetDepositsForAddressRequest {
        const message = createBaseQueryGetDepositsForAddressRequest();
        message.address = object.address ?? '';
        return message;
    },
};

function createBaseQueryFetchDepositsRequest(): QueryFetchDepositsRequest {
    return { pagination: undefined, type: 0 };
}

export const QueryFetchDepositsRequest = {
    encode(message: QueryFetchDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchDepositsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.type = reader.int32() as any;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryFetchDepositsRequest {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            type: isSet(object.type) ? depositsQueryTypeFromJSON(object.type) : 0,
        };
    },

    toJSON(message: QueryFetchDepositsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.type !== undefined && (obj.type = depositsQueryTypeToJSON(message.type));
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryFetchDepositsRequest>, I>>(base?: I): QueryFetchDepositsRequest {
        return QueryFetchDepositsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryFetchDepositsRequest>, I>>(object: I): QueryFetchDepositsRequest {
        const message = createBaseQueryFetchDepositsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.type = object.type ?? 0;
        return message;
    },
};

function createBaseQueryGetDepositsForAddressResponse(): QueryGetDepositsForAddressResponse {
    return { depositsPendingWithdrawal: undefined, depositsPendingMint: undefined, depositsMinted: undefined };
}

export const QueryGetDepositsForAddressResponse = {
    encode(message: QueryGetDepositsForAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositsPendingWithdrawal !== undefined) {
            Deposit.encode(message.depositsPendingWithdrawal, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositsPendingMint !== undefined) {
            Deposit.encode(message.depositsPendingMint, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositsMinted !== undefined) {
            Deposit.encode(message.depositsMinted, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDepositsForAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositsPendingWithdrawal = Deposit.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.depositsPendingMint = Deposit.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.depositsMinted = Deposit.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryGetDepositsForAddressResponse {
        return {
            depositsPendingWithdrawal: isSet(object.depositsPendingWithdrawal) ? Deposit.fromJSON(object.depositsPendingWithdrawal) : undefined,
            depositsPendingMint: isSet(object.depositsPendingMint) ? Deposit.fromJSON(object.depositsPendingMint) : undefined,
            depositsMinted: isSet(object.depositsMinted) ? Deposit.fromJSON(object.depositsMinted) : undefined,
        };
    },

    toJSON(message: QueryGetDepositsForAddressResponse): unknown {
        const obj: any = {};
        message.depositsPendingWithdrawal !== undefined && (obj.depositsPendingWithdrawal = message.depositsPendingWithdrawal ? Deposit.toJSON(message.depositsPendingWithdrawal) : undefined);
        message.depositsPendingMint !== undefined && (obj.depositsPendingMint = message.depositsPendingMint ? Deposit.toJSON(message.depositsPendingMint) : undefined);
        message.depositsMinted !== undefined && (obj.depositsMinted = message.depositsMinted ? Deposit.toJSON(message.depositsMinted) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryGetDepositsForAddressResponse>, I>>(base?: I): QueryGetDepositsForAddressResponse {
        return QueryGetDepositsForAddressResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryGetDepositsForAddressResponse>, I>>(object: I): QueryGetDepositsForAddressResponse {
        const message = createBaseQueryGetDepositsForAddressResponse();
        message.depositsPendingWithdrawal =
            object.depositsPendingWithdrawal !== undefined && object.depositsPendingWithdrawal !== null ? Deposit.fromPartial(object.depositsPendingWithdrawal) : undefined;
        message.depositsPendingMint = object.depositsPendingMint !== undefined && object.depositsPendingMint !== null ? Deposit.fromPartial(object.depositsPendingMint) : undefined;
        message.depositsMinted = object.depositsMinted !== undefined && object.depositsMinted !== null ? Deposit.fromPartial(object.depositsMinted) : undefined;
        return message;
    },
};

function createBaseQueryFetchDepositsResponse(): QueryFetchDepositsResponse {
    return { deposits: [], pagination: undefined };
}

export const QueryFetchDepositsResponse = {
    encode(message: QueryFetchDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.deposits) {
            Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchDepositsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryFetchDepositsResponse {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryFetchDepositsResponse): unknown {
        const obj: any = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => (e ? Deposit.toJSON(e) : undefined));
        } else {
            obj.deposits = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryFetchDepositsResponse>, I>>(base?: I): QueryFetchDepositsResponse {
        return QueryFetchDepositsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryFetchDepositsResponse>, I>>(object: I): QueryFetchDepositsResponse {
        const message = createBaseQueryFetchDepositsResponse();
        message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

export interface Query {
    ModuleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse>;
    FetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || 'lum.network.dfract.Query';
        this.rpc = rpc;
        this.ModuleAccountBalance = this.ModuleAccountBalance.bind(this);
        this.Params = this.Params.bind(this);
        this.GetDepositsForAddress = this.GetDepositsForAddress.bind(this);
        this.FetchDeposits = this.FetchDeposits.bind(this);
    }
    ModuleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
        const data = QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'ModuleAccountBalance', data);
        return promise.then((data) => QueryModuleAccountBalanceResponse.decode(_m0.Reader.create(data)));
    }

    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }

    GetDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse> {
        const data = QueryGetDepositsForAddressRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'GetDepositsForAddress', data);
        return promise.then((data) => QueryGetDepositsForAddressResponse.decode(_m0.Reader.create(data)));
    }

    FetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse> {
        const data = QueryFetchDepositsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'FetchDeposits', data);
        return promise.then((data) => QueryFetchDepositsResponse.decode(_m0.Reader.create(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Long
    ? string | number | Long
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
