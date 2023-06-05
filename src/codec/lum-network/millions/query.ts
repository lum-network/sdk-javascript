/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination';
import { Deposit } from './deposit';
import { Draw } from './draw';
import { Params } from './params';
import { Pool } from './pool';
import { Prize } from './prize';
import { Withdrawal } from './withdrawal';

export const protobufPackage = 'lum.network.millions';

export interface QueryParamsResponse {
    params?: Params;
}

export interface QueryParamsRequest {}

export interface QueryPoolResponse {
    pool?: Pool;
}

export interface QueryPoolsResponse {
    pools: Pool[];
    pagination?: PageResponse;
}

export interface QueryPoolRequest {
    poolId: Long;
}

export interface QueryPoolsRequest {
    pagination?: PageRequest;
}

export interface QueryDepositResponse {
    deposit?: Deposit;
}

export interface QueryDepositsResponse {
    deposits: Deposit[];
    pagination?: PageResponse;
}

export interface QueryDepositsRequest {
    pagination?: PageRequest;
}

export interface QueryPoolDepositRequest {
    poolId: Long;
    depositId: Long;
}

export interface QueryPoolDepositsRequest {
    poolId: Long;
    pagination?: PageRequest;
}

export interface QueryAccountDepositsRequest {
    depositorAddress: string;
    pagination?: PageRequest;
}

export interface QueryAccountPoolDepositsRequest {
    depositorAddress: string;
    poolId: Long;
    pagination?: PageRequest;
}

export interface QueryDrawResponse {
    draw?: Draw;
}

export interface QueryDrawsResponse {
    draws: Draw[];
    pagination?: PageResponse;
}

export interface QueryDrawsRequest {
    pagination?: PageRequest;
}

export interface QueryPoolDrawsRequest {
    poolId: Long;
    pagination?: PageRequest;
}

export interface QueryPoolDrawRequest {
    poolId: Long;
    drawId: Long;
}

export interface QueryPrizeResponse {
    prize?: Prize;
}

export interface QueryPrizesResponse {
    prizes: Prize[];
    pagination?: PageResponse;
}

export interface QueryPoolDrawPrizeRequest {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
}

export interface QueryPrizesRequest {
    pagination?: PageRequest;
}

export interface QueryPoolPrizesRequest {
    poolId: Long;
    pagination?: PageRequest;
}

export interface QueryPoolDrawPrizesRequest {
    poolId: Long;
    drawId: Long;
    pagination?: PageRequest;
}

export interface QueryAccountPrizesRequest {
    winnerAddress: string;
    pagination?: PageRequest;
}

export interface QueryAccountPoolPrizesRequest {
    winnerAddress: string;
    poolId: Long;
    pagination?: PageRequest;
}

export interface QueryAccountPoolDrawPrizesRequest {
    winnerAddress: string;
    poolId: Long;
    drawId: Long;
    pagination?: PageRequest;
}

export interface QueryWithdrawalResponse {
    withdrawal?: Withdrawal;
}

export interface QueryWithdrawalsResponse {
    withdrawals: Withdrawal[];
    pagination?: PageResponse;
}

export interface QueryPoolWithdrawalRequest {
    poolId: Long;
    withdrawalId: Long;
}

export interface QueryWithdrawalsRequest {
    pagination?: PageRequest;
}

export interface QueryPoolWithdrawalsRequest {
    poolId: Long;
    pagination?: PageRequest;
}

export interface QueryAccountWithdrawalsRequest {
    depositorAddress: string;
    pagination?: PageRequest;
}

export interface QueryAccountPoolWithdrawalsRequest {
    depositorAddress: string;
    poolId: Long;
    pagination?: PageRequest;
}

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

function createBaseQueryPoolResponse(): QueryPoolResponse {
    return { pool: undefined };
}

export const QueryPoolResponse = {
    encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pool = Pool.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolResponse {
        return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
    },

    toJSON(message: QueryPoolResponse): unknown {
        const obj: any = {};
        message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(base?: I): QueryPoolResponse {
        return QueryPoolResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        return message;
    },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
    return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
    encode(message: QueryPoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.pools) {
            Pool.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pools.push(Pool.decode(reader, reader.uint32()));
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

    fromJSON(object: any): QueryPoolsResponse {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPoolsResponse): unknown {
        const obj: any = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
        } else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(base?: I): QueryPoolsResponse {
        return QueryPoolsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(object: I): QueryPoolsResponse {
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
    return { poolId: Long.UZERO };
}

export const QueryPoolRequest = {
    encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolRequest {
        return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
    },

    toJSON(message: QueryPoolRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(base?: I): QueryPoolRequest {
        return QueryPoolRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest {
        const message = createBaseQueryPoolRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        return message;
    },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
    return { pagination: undefined };
}

export const QueryPoolsRequest = {
    encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolsRequest {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },

    toJSON(message: QueryPoolsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(base?: I): QueryPoolsRequest {
        return QueryPoolsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(object: I): QueryPoolsRequest {
        const message = createBaseQueryPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryDepositResponse(): QueryDepositResponse {
    return { deposit: undefined };
}

export const QueryDepositResponse = {
    encode(message: QueryDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.deposit = Deposit.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryDepositResponse {
        return { deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined };
    },

    toJSON(message: QueryDepositResponse): unknown {
        const obj: any = {};
        message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDepositResponse>, I>>(base?: I): QueryDepositResponse {
        return QueryDepositResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryDepositResponse>, I>>(object: I): QueryDepositResponse {
        const message = createBaseQueryDepositResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
        return message;
    },
};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
    return { deposits: [], pagination: undefined };
}

export const QueryDepositsResponse = {
    encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.deposits) {
            Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsResponse();
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

    fromJSON(object: any): QueryDepositsResponse {
        return {
            deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryDepositsResponse): unknown {
        const obj: any = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => (e ? Deposit.toJSON(e) : undefined));
        } else {
            obj.deposits = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDepositsResponse>, I>>(base?: I): QueryDepositsResponse {
        return QueryDepositsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryDepositsResponse>, I>>(object: I): QueryDepositsResponse {
        const message = createBaseQueryDepositsResponse();
        message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
    return { pagination: undefined };
}

export const QueryDepositsRequest = {
    encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryDepositsRequest {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },

    toJSON(message: QueryDepositsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDepositsRequest>, I>>(base?: I): QueryDepositsRequest {
        return QueryDepositsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryDepositsRequest>, I>>(object: I): QueryDepositsRequest {
        const message = createBaseQueryDepositsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolDepositRequest(): QueryPoolDepositRequest {
    return { poolId: Long.UZERO, depositId: Long.UZERO };
}

export const QueryPoolDepositRequest = {
    encode(message: QueryPoolDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDepositRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.depositId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDepositRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
        };
    },

    toJSON(message: QueryPoolDepositRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolDepositRequest>, I>>(base?: I): QueryPoolDepositRequest {
        return QueryPoolDepositRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolDepositRequest>, I>>(object: I): QueryPoolDepositRequest {
        const message = createBaseQueryPoolDepositRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        return message;
    },
};

function createBaseQueryPoolDepositsRequest(): QueryPoolDepositsRequest {
    return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolDepositsRequest = {
    encode(message: QueryPoolDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDepositsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDepositsRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPoolDepositsRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolDepositsRequest>, I>>(base?: I): QueryPoolDepositsRequest {
        return QueryPoolDepositsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolDepositsRequest>, I>>(object: I): QueryPoolDepositsRequest {
        const message = createBaseQueryPoolDepositsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountDepositsRequest(): QueryAccountDepositsRequest {
    return { depositorAddress: '', pagination: undefined };
}

export const QueryAccountDepositsRequest = {
    encode(message: QueryAccountDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositorAddress !== '') {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDepositsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountDepositsRequest {
        return {
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountDepositsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountDepositsRequest>, I>>(base?: I): QueryAccountDepositsRequest {
        return QueryAccountDepositsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountDepositsRequest>, I>>(object: I): QueryAccountDepositsRequest {
        const message = createBaseQueryAccountDepositsRequest();
        message.depositorAddress = object.depositorAddress ?? '';
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountPoolDepositsRequest(): QueryAccountPoolDepositsRequest {
    return { depositorAddress: '', poolId: Long.UZERO, pagination: undefined };
}

export const QueryAccountPoolDepositsRequest = {
    encode(message: QueryAccountPoolDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositorAddress !== '') {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolDepositsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolDepositsRequest {
        return {
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountPoolDepositsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountPoolDepositsRequest>, I>>(base?: I): QueryAccountPoolDepositsRequest {
        return QueryAccountPoolDepositsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountPoolDepositsRequest>, I>>(object: I): QueryAccountPoolDepositsRequest {
        const message = createBaseQueryAccountPoolDepositsRequest();
        message.depositorAddress = object.depositorAddress ?? '';
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryDrawResponse(): QueryDrawResponse {
    return { draw: undefined };
}

export const QueryDrawResponse = {
    encode(message: QueryDrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.draw !== undefined) {
            Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDrawResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.draw = Draw.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryDrawResponse {
        return { draw: isSet(object.draw) ? Draw.fromJSON(object.draw) : undefined };
    },

    toJSON(message: QueryDrawResponse): unknown {
        const obj: any = {};
        message.draw !== undefined && (obj.draw = message.draw ? Draw.toJSON(message.draw) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDrawResponse>, I>>(base?: I): QueryDrawResponse {
        return QueryDrawResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryDrawResponse>, I>>(object: I): QueryDrawResponse {
        const message = createBaseQueryDrawResponse();
        message.draw = object.draw !== undefined && object.draw !== null ? Draw.fromPartial(object.draw) : undefined;
        return message;
    },
};

function createBaseQueryDrawsResponse(): QueryDrawsResponse {
    return { draws: [], pagination: undefined };
}

export const QueryDrawsResponse = {
    encode(message: QueryDrawsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.draws) {
            Draw.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDrawsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.draws.push(Draw.decode(reader, reader.uint32()));
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

    fromJSON(object: any): QueryDrawsResponse {
        return {
            draws: Array.isArray(object?.draws) ? object.draws.map((e: any) => Draw.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryDrawsResponse): unknown {
        const obj: any = {};
        if (message.draws) {
            obj.draws = message.draws.map((e) => (e ? Draw.toJSON(e) : undefined));
        } else {
            obj.draws = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDrawsResponse>, I>>(base?: I): QueryDrawsResponse {
        return QueryDrawsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryDrawsResponse>, I>>(object: I): QueryDrawsResponse {
        const message = createBaseQueryDrawsResponse();
        message.draws = object.draws?.map((e) => Draw.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryDrawsRequest(): QueryDrawsRequest {
    return { pagination: undefined };
}

export const QueryDrawsRequest = {
    encode(message: QueryDrawsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDrawsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryDrawsRequest {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },

    toJSON(message: QueryDrawsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryDrawsRequest>, I>>(base?: I): QueryDrawsRequest {
        return QueryDrawsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryDrawsRequest>, I>>(object: I): QueryDrawsRequest {
        const message = createBaseQueryDrawsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolDrawsRequest(): QueryPoolDrawsRequest {
    return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolDrawsRequest = {
    encode(message: QueryPoolDrawsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawsRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPoolDrawsRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolDrawsRequest>, I>>(base?: I): QueryPoolDrawsRequest {
        return QueryPoolDrawsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolDrawsRequest>, I>>(object: I): QueryPoolDrawsRequest {
        const message = createBaseQueryPoolDrawsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolDrawRequest(): QueryPoolDrawRequest {
    return { poolId: Long.UZERO, drawId: Long.UZERO };
}

export const QueryPoolDrawRequest = {
    encode(message: QueryPoolDrawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.drawId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
        };
    },

    toJSON(message: QueryPoolDrawRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolDrawRequest>, I>>(base?: I): QueryPoolDrawRequest {
        return QueryPoolDrawRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolDrawRequest>, I>>(object: I): QueryPoolDrawRequest {
        const message = createBaseQueryPoolDrawRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        return message;
    },
};

function createBaseQueryPrizeResponse(): QueryPrizeResponse {
    return { prize: undefined };
}

export const QueryPrizeResponse = {
    encode(message: QueryPrizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.prize !== undefined) {
            Prize.encode(message.prize, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizeResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPrizeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.prize = Prize.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPrizeResponse {
        return { prize: isSet(object.prize) ? Prize.fromJSON(object.prize) : undefined };
    },

    toJSON(message: QueryPrizeResponse): unknown {
        const obj: any = {};
        message.prize !== undefined && (obj.prize = message.prize ? Prize.toJSON(message.prize) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPrizeResponse>, I>>(base?: I): QueryPrizeResponse {
        return QueryPrizeResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPrizeResponse>, I>>(object: I): QueryPrizeResponse {
        const message = createBaseQueryPrizeResponse();
        message.prize = object.prize !== undefined && object.prize !== null ? Prize.fromPartial(object.prize) : undefined;
        return message;
    },
};

function createBaseQueryPrizesResponse(): QueryPrizesResponse {
    return { prizes: [], pagination: undefined };
}

export const QueryPrizesResponse = {
    encode(message: QueryPrizesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.prizes) {
            Prize.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPrizesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.prizes.push(Prize.decode(reader, reader.uint32()));
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

    fromJSON(object: any): QueryPrizesResponse {
        return {
            prizes: Array.isArray(object?.prizes) ? object.prizes.map((e: any) => Prize.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPrizesResponse): unknown {
        const obj: any = {};
        if (message.prizes) {
            obj.prizes = message.prizes.map((e) => (e ? Prize.toJSON(e) : undefined));
        } else {
            obj.prizes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPrizesResponse>, I>>(base?: I): QueryPrizesResponse {
        return QueryPrizesResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPrizesResponse>, I>>(object: I): QueryPrizesResponse {
        const message = createBaseQueryPrizesResponse();
        message.prizes = object.prizes?.map((e) => Prize.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolDrawPrizeRequest(): QueryPoolDrawPrizeRequest {
    return { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO };
}

export const QueryPoolDrawPrizeRequest = {
    encode(message: QueryPoolDrawPrizeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawPrizeRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawPrizeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.drawId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.prizeId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawPrizeRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            prizeId: isSet(object.prizeId) ? Long.fromValue(object.prizeId) : Long.UZERO,
        };
    },

    toJSON(message: QueryPoolDrawPrizeRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolDrawPrizeRequest>, I>>(base?: I): QueryPoolDrawPrizeRequest {
        return QueryPoolDrawPrizeRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolDrawPrizeRequest>, I>>(object: I): QueryPoolDrawPrizeRequest {
        const message = createBaseQueryPoolDrawPrizeRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        return message;
    },
};

function createBaseQueryPrizesRequest(): QueryPrizesRequest {
    return { pagination: undefined };
}

export const QueryPrizesRequest = {
    encode(message: QueryPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPrizesRequest {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },

    toJSON(message: QueryPrizesRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPrizesRequest>, I>>(base?: I): QueryPrizesRequest {
        return QueryPrizesRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPrizesRequest>, I>>(object: I): QueryPrizesRequest {
        const message = createBaseQueryPrizesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolPrizesRequest(): QueryPoolPrizesRequest {
    return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolPrizesRequest = {
    encode(message: QueryPoolPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolPrizesRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPoolPrizesRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolPrizesRequest>, I>>(base?: I): QueryPoolPrizesRequest {
        return QueryPoolPrizesRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolPrizesRequest>, I>>(object: I): QueryPoolPrizesRequest {
        const message = createBaseQueryPoolPrizesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolDrawPrizesRequest(): QueryPoolDrawPrizesRequest {
    return { poolId: Long.UZERO, drawId: Long.UZERO, pagination: undefined };
}

export const QueryPoolDrawPrizesRequest = {
    encode(message: QueryPoolDrawPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolDrawPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolDrawPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.drawId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawPrizesRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPoolDrawPrizesRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolDrawPrizesRequest>, I>>(base?: I): QueryPoolDrawPrizesRequest {
        return QueryPoolDrawPrizesRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolDrawPrizesRequest>, I>>(object: I): QueryPoolDrawPrizesRequest {
        const message = createBaseQueryPoolDrawPrizesRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountPrizesRequest(): QueryAccountPrizesRequest {
    return { winnerAddress: '', pagination: undefined };
}

export const QueryAccountPrizesRequest = {
    encode(message: QueryAccountPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.winnerAddress !== '') {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPrizesRequest {
        return {
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountPrizesRequest): unknown {
        const obj: any = {};
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountPrizesRequest>, I>>(base?: I): QueryAccountPrizesRequest {
        return QueryAccountPrizesRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountPrizesRequest>, I>>(object: I): QueryAccountPrizesRequest {
        const message = createBaseQueryAccountPrizesRequest();
        message.winnerAddress = object.winnerAddress ?? '';
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountPoolPrizesRequest(): QueryAccountPoolPrizesRequest {
    return { winnerAddress: '', poolId: Long.UZERO, pagination: undefined };
}

export const QueryAccountPoolPrizesRequest = {
    encode(message: QueryAccountPoolPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.winnerAddress !== '') {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolPrizesRequest {
        return {
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountPoolPrizesRequest): unknown {
        const obj: any = {};
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountPoolPrizesRequest>, I>>(base?: I): QueryAccountPoolPrizesRequest {
        return QueryAccountPoolPrizesRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountPoolPrizesRequest>, I>>(object: I): QueryAccountPoolPrizesRequest {
        const message = createBaseQueryAccountPoolPrizesRequest();
        message.winnerAddress = object.winnerAddress ?? '';
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountPoolDrawPrizesRequest(): QueryAccountPoolDrawPrizesRequest {
    return { winnerAddress: '', poolId: Long.UZERO, drawId: Long.UZERO, pagination: undefined };
}

export const QueryAccountPoolDrawPrizesRequest = {
    encode(message: QueryAccountPoolDrawPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.winnerAddress !== '') {
            writer.uint32(10).string(message.winnerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(24).uint64(message.drawId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolDrawPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolDrawPrizesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.drawId = reader.uint64() as Long;
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolDrawPrizesRequest {
        return {
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountPoolDrawPrizesRequest): unknown {
        const obj: any = {};
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountPoolDrawPrizesRequest>, I>>(base?: I): QueryAccountPoolDrawPrizesRequest {
        return QueryAccountPoolDrawPrizesRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountPoolDrawPrizesRequest>, I>>(object: I): QueryAccountPoolDrawPrizesRequest {
        const message = createBaseQueryAccountPoolDrawPrizesRequest();
        message.winnerAddress = object.winnerAddress ?? '';
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryWithdrawalResponse(): QueryWithdrawalResponse {
    return { withdrawal: undefined };
}

export const QueryWithdrawalResponse = {
    encode(message: QueryWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.withdrawal !== undefined) {
            Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.withdrawal = Withdrawal.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryWithdrawalResponse {
        return { withdrawal: isSet(object.withdrawal) ? Withdrawal.fromJSON(object.withdrawal) : undefined };
    },

    toJSON(message: QueryWithdrawalResponse): unknown {
        const obj: any = {};
        message.withdrawal !== undefined && (obj.withdrawal = message.withdrawal ? Withdrawal.toJSON(message.withdrawal) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryWithdrawalResponse>, I>>(base?: I): QueryWithdrawalResponse {
        return QueryWithdrawalResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryWithdrawalResponse>, I>>(object: I): QueryWithdrawalResponse {
        const message = createBaseQueryWithdrawalResponse();
        message.withdrawal = object.withdrawal !== undefined && object.withdrawal !== null ? Withdrawal.fromPartial(object.withdrawal) : undefined;
        return message;
    },
};

function createBaseQueryWithdrawalsResponse(): QueryWithdrawalsResponse {
    return { withdrawals: [], pagination: undefined };
}

export const QueryWithdrawalsResponse = {
    encode(message: QueryWithdrawalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.withdrawals) {
            Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
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

    fromJSON(object: any): QueryWithdrawalsResponse {
        return {
            withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => Withdrawal.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryWithdrawalsResponse): unknown {
        const obj: any = {};
        if (message.withdrawals) {
            obj.withdrawals = message.withdrawals.map((e) => (e ? Withdrawal.toJSON(e) : undefined));
        } else {
            obj.withdrawals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryWithdrawalsResponse>, I>>(base?: I): QueryWithdrawalsResponse {
        return QueryWithdrawalsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryWithdrawalsResponse>, I>>(object: I): QueryWithdrawalsResponse {
        const message = createBaseQueryWithdrawalsResponse();
        message.withdrawals = object.withdrawals?.map((e) => Withdrawal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolWithdrawalRequest(): QueryPoolWithdrawalRequest {
    return { poolId: Long.UZERO, withdrawalId: Long.UZERO };
}

export const QueryPoolWithdrawalRequest = {
    encode(message: QueryPoolWithdrawalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolWithdrawalRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolWithdrawalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.withdrawalId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolWithdrawalRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO,
        };
    },

    toJSON(message: QueryPoolWithdrawalRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolWithdrawalRequest>, I>>(base?: I): QueryPoolWithdrawalRequest {
        return QueryPoolWithdrawalRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolWithdrawalRequest>, I>>(object: I): QueryPoolWithdrawalRequest {
        const message = createBaseQueryPoolWithdrawalRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
};

function createBaseQueryWithdrawalsRequest(): QueryWithdrawalsRequest {
    return { pagination: undefined };
}

export const QueryWithdrawalsRequest = {
    encode(message: QueryWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryWithdrawalsRequest {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },

    toJSON(message: QueryWithdrawalsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryWithdrawalsRequest>, I>>(base?: I): QueryWithdrawalsRequest {
        return QueryWithdrawalsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryWithdrawalsRequest>, I>>(object: I): QueryWithdrawalsRequest {
        const message = createBaseQueryWithdrawalsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryPoolWithdrawalsRequest(): QueryPoolWithdrawalsRequest {
    return { poolId: Long.UZERO, pagination: undefined };
}

export const QueryPoolWithdrawalsRequest = {
    encode(message: QueryPoolWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolWithdrawalsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryPoolWithdrawalsRequest {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryPoolWithdrawalsRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryPoolWithdrawalsRequest>, I>>(base?: I): QueryPoolWithdrawalsRequest {
        return QueryPoolWithdrawalsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryPoolWithdrawalsRequest>, I>>(object: I): QueryPoolWithdrawalsRequest {
        const message = createBaseQueryPoolWithdrawalsRequest();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountWithdrawalsRequest(): QueryAccountWithdrawalsRequest {
    return { depositorAddress: '', pagination: undefined };
}

export const QueryAccountWithdrawalsRequest = {
    encode(message: QueryAccountWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositorAddress !== '') {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountWithdrawalsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountWithdrawalsRequest {
        return {
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountWithdrawalsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountWithdrawalsRequest>, I>>(base?: I): QueryAccountWithdrawalsRequest {
        return QueryAccountWithdrawalsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountWithdrawalsRequest>, I>>(object: I): QueryAccountWithdrawalsRequest {
        const message = createBaseQueryAccountWithdrawalsRequest();
        message.depositorAddress = object.depositorAddress ?? '';
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryAccountPoolWithdrawalsRequest(): QueryAccountPoolWithdrawalsRequest {
    return { depositorAddress: '', poolId: Long.UZERO, pagination: undefined };
}

export const QueryAccountPoolWithdrawalsRequest = {
    encode(message: QueryAccountPoolWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositorAddress !== '') {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountPoolWithdrawalsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountPoolWithdrawalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolWithdrawalsRequest {
        return {
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryAccountPoolWithdrawalsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryAccountPoolWithdrawalsRequest>, I>>(base?: I): QueryAccountPoolWithdrawalsRequest {
        return QueryAccountPoolWithdrawalsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryAccountPoolWithdrawalsRequest>, I>>(object: I): QueryAccountPoolWithdrawalsRequest {
        const message = createBaseQueryAccountPoolWithdrawalsRequest();
        message.depositorAddress = object.depositorAddress ?? '';
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

export interface Query {
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    PoolDeposits(request: QueryPoolDepositsRequest): Promise<QueryDepositsResponse>;
    PoolDeposit(request: QueryPoolDepositRequest): Promise<QueryDepositResponse>;
    AccountDeposits(request: QueryAccountDepositsRequest): Promise<QueryDepositsResponse>;
    AccountPoolDeposits(request: QueryAccountPoolDepositsRequest): Promise<QueryDepositsResponse>;
    Draws(request: QueryDrawsRequest): Promise<QueryDrawsResponse>;
    PoolDraws(request: QueryPoolDrawsRequest): Promise<QueryDrawsResponse>;
    PoolDraw(request: QueryPoolDrawRequest): Promise<QueryDrawResponse>;
    Prizes(request: QueryPrizesRequest): Promise<QueryPrizesResponse>;
    PoolPrizes(request: QueryPoolPrizesRequest): Promise<QueryPrizesResponse>;
    PoolDrawPrizes(request: QueryPoolDrawPrizesRequest): Promise<QueryPrizesResponse>;
    PoolDrawPrize(request: QueryPoolDrawPrizeRequest): Promise<QueryPrizeResponse>;
    AccountPrizes(request: QueryAccountPrizesRequest): Promise<QueryPrizesResponse>;
    AccountPoolPrizes(request: QueryAccountPoolPrizesRequest): Promise<QueryPrizesResponse>;
    AccountPoolDrawPrizes(request: QueryAccountPoolDrawPrizesRequest): Promise<QueryPrizesResponse>;
    Withdrawals(request: QueryWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
    PoolWithdrawals(request: QueryPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
    PoolWithdrawal(request: QueryPoolWithdrawalRequest): Promise<QueryWithdrawalResponse>;
    AccountWithdrawals(request: QueryAccountWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
    AccountPoolWithdrawals(request: QueryAccountPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || 'lum.network.millions.Query';
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Pools = this.Pools.bind(this);
        this.Pool = this.Pool.bind(this);
        this.Deposits = this.Deposits.bind(this);
        this.PoolDeposits = this.PoolDeposits.bind(this);
        this.PoolDeposit = this.PoolDeposit.bind(this);
        this.AccountDeposits = this.AccountDeposits.bind(this);
        this.AccountPoolDeposits = this.AccountPoolDeposits.bind(this);
        this.Draws = this.Draws.bind(this);
        this.PoolDraws = this.PoolDraws.bind(this);
        this.PoolDraw = this.PoolDraw.bind(this);
        this.Prizes = this.Prizes.bind(this);
        this.PoolPrizes = this.PoolPrizes.bind(this);
        this.PoolDrawPrizes = this.PoolDrawPrizes.bind(this);
        this.PoolDrawPrize = this.PoolDrawPrize.bind(this);
        this.AccountPrizes = this.AccountPrizes.bind(this);
        this.AccountPoolPrizes = this.AccountPoolPrizes.bind(this);
        this.AccountPoolDrawPrizes = this.AccountPoolDrawPrizes.bind(this);
        this.Withdrawals = this.Withdrawals.bind(this);
        this.PoolWithdrawals = this.PoolWithdrawals.bind(this);
        this.PoolWithdrawal = this.PoolWithdrawal.bind(this);
        this.AccountWithdrawals = this.AccountWithdrawals.bind(this);
        this.AccountPoolWithdrawals = this.AccountPoolWithdrawals.bind(this);
    }
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
    }

    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
        const data = QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Pools', data);
        return promise.then((data) => QueryPoolsResponse.decode(_m0.Reader.create(data)));
    }

    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
        const data = QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Pool', data);
        return promise.then((data) => QueryPoolResponse.decode(_m0.Reader.create(data)));
    }

    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Deposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(_m0.Reader.create(data)));
    }

    PoolDeposits(request: QueryPoolDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolDeposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(_m0.Reader.create(data)));
    }

    PoolDeposit(request: QueryPoolDepositRequest): Promise<QueryDepositResponse> {
        const data = QueryPoolDepositRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolDeposit', data);
        return promise.then((data) => QueryDepositResponse.decode(_m0.Reader.create(data)));
    }

    AccountDeposits(request: QueryAccountDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryAccountDepositsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountDeposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(_m0.Reader.create(data)));
    }

    AccountPoolDeposits(request: QueryAccountPoolDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryAccountPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountPoolDeposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(_m0.Reader.create(data)));
    }

    Draws(request: QueryDrawsRequest): Promise<QueryDrawsResponse> {
        const data = QueryDrawsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Draws', data);
        return promise.then((data) => QueryDrawsResponse.decode(_m0.Reader.create(data)));
    }

    PoolDraws(request: QueryPoolDrawsRequest): Promise<QueryDrawsResponse> {
        const data = QueryPoolDrawsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolDraws', data);
        return promise.then((data) => QueryDrawsResponse.decode(_m0.Reader.create(data)));
    }

    PoolDraw(request: QueryPoolDrawRequest): Promise<QueryDrawResponse> {
        const data = QueryPoolDrawRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolDraw', data);
        return promise.then((data) => QueryDrawResponse.decode(_m0.Reader.create(data)));
    }

    Prizes(request: QueryPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryPrizesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Prizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(_m0.Reader.create(data)));
    }

    PoolPrizes(request: QueryPoolPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(_m0.Reader.create(data)));
    }

    PoolDrawPrizes(request: QueryPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolDrawPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(_m0.Reader.create(data)));
    }

    PoolDrawPrize(request: QueryPoolDrawPrizeRequest): Promise<QueryPrizeResponse> {
        const data = QueryPoolDrawPrizeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolDrawPrize', data);
        return promise.then((data) => QueryPrizeResponse.decode(_m0.Reader.create(data)));
    }

    AccountPrizes(request: QueryAccountPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryAccountPrizesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(_m0.Reader.create(data)));
    }

    AccountPoolPrizes(request: QueryAccountPoolPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryAccountPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountPoolPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(_m0.Reader.create(data)));
    }

    AccountPoolDrawPrizes(request: QueryAccountPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryAccountPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountPoolDrawPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(_m0.Reader.create(data)));
    }

    Withdrawals(request: QueryWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Withdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(_m0.Reader.create(data)));
    }

    PoolWithdrawals(request: QueryPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolWithdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(_m0.Reader.create(data)));
    }

    PoolWithdrawal(request: QueryPoolWithdrawalRequest): Promise<QueryWithdrawalResponse> {
        const data = QueryPoolWithdrawalRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'PoolWithdrawal', data);
        return promise.then((data) => QueryWithdrawalResponse.decode(_m0.Reader.create(data)));
    }

    AccountWithdrawals(request: QueryAccountWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryAccountWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountWithdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(_m0.Reader.create(data)));
    }

    AccountPoolWithdrawals(request: QueryAccountPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryAccountPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'AccountPoolWithdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(_m0.Reader.create(data)));
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
