/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Params } from '../../lum-network/millions/params';
import { Pool } from '../../lum-network/millions/pool';
import { PageResponse, PageRequest } from '../../cosmos/base/query/v1beta1/pagination';
import { Deposit } from '../../lum-network/millions/deposit';
import { Draw } from '../../lum-network/millions/draw';
import { Prize } from '../../lum-network/millions/prize';
import { Withdrawal } from '../../lum-network/millions/withdrawal';

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

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
    encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryParamsResponse {
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
    encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): QueryParamsRequest {
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        return message;
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        return message;
    },
};

const baseQueryPoolResponse: object = {};

export const QueryPoolResponse = {
    encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolResponse {
        const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Pool.fromJSON(object.pool);
        } else {
            message.pool = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolResponse): unknown {
        const obj: any = {};
        message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse {
        const message = { ...baseQueryPoolResponse } as QueryPoolResponse;
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Pool.fromPartial(object.pool);
        } else {
            message.pool = undefined;
        }
        return message;
    },
};

const baseQueryPoolsResponse: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolsResponse } as QueryPoolsResponse;
        message.pools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Pool.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolsResponse {
        const message = { ...baseQueryPoolsResponse } as QueryPoolsResponse;
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(Pool.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse {
        const message = { ...baseQueryPoolsResponse } as QueryPoolsResponse;
        message.pools = [];
        if (object.pools !== undefined && object.pools !== null) {
            for (const e of object.pools) {
                message.pools.push(Pool.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolRequest: object = { poolId: Long.UZERO };

export const QueryPoolRequest = {
    encode(message: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolRequest {
        const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: QueryPoolRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolRequest>): QueryPoolRequest {
        const message = { ...baseQueryPoolRequest } as QueryPoolRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        return message;
    },
};

const baseQueryPoolsRequest: object = {};

export const QueryPoolsRequest = {
    encode(message: QueryPoolsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolsRequest } as QueryPoolsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolsRequest {
        const message = { ...baseQueryPoolsRequest } as QueryPoolsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest {
        const message = { ...baseQueryPoolsRequest } as QueryPoolsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryDepositResponse: object = {};

export const QueryDepositResponse = {
    encode(message: QueryDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.deposit !== undefined) {
            Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDepositResponse } as QueryDepositResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryDepositResponse {
        const message = { ...baseQueryDepositResponse } as QueryDepositResponse;
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Deposit.fromJSON(object.deposit);
        } else {
            message.deposit = undefined;
        }
        return message;
    },

    toJSON(message: QueryDepositResponse): unknown {
        const obj: any = {};
        message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
        const message = { ...baseQueryDepositResponse } as QueryDepositResponse;
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Deposit.fromPartial(object.deposit);
        } else {
            message.deposit = undefined;
        }
        return message;
    },
};

const baseQueryDepositsResponse: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDepositsResponse } as QueryDepositsResponse;
        message.deposits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryDepositsResponse {
        const message = { ...baseQueryDepositsResponse } as QueryDepositsResponse;
        message.deposits = [];
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(Deposit.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
        const message = { ...baseQueryDepositsResponse } as QueryDepositsResponse;
        message.deposits = [];
        if (object.deposits !== undefined && object.deposits !== null) {
            for (const e of object.deposits) {
                message.deposits.push(Deposit.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryDepositsRequest: object = {};

export const QueryDepositsRequest = {
    encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDepositsRequest } as QueryDepositsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryDepositsRequest {
        const message = { ...baseQueryDepositsRequest } as QueryDepositsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryDepositsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
        const message = { ...baseQueryDepositsRequest } as QueryDepositsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolDepositRequest: object = { poolId: Long.UZERO, depositId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolDepositRequest } as QueryPoolDepositRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.depositId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDepositRequest {
        const message = { ...baseQueryPoolDepositRequest } as QueryPoolDepositRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = Long.fromString(object.depositId);
        } else {
            message.depositId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: QueryPoolDepositRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolDepositRequest>): QueryPoolDepositRequest {
        const message = { ...baseQueryPoolDepositRequest } as QueryPoolDepositRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = object.depositId as Long;
        } else {
            message.depositId = Long.UZERO;
        }
        return message;
    },
};

const baseQueryPoolDepositsRequest: object = { poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolDepositsRequest } as QueryPoolDepositsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDepositsRequest {
        const message = { ...baseQueryPoolDepositsRequest } as QueryPoolDepositsRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolDepositsRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolDepositsRequest>): QueryPoolDepositsRequest {
        const message = { ...baseQueryPoolDepositsRequest } as QueryPoolDepositsRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountDepositsRequest: object = { depositorAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountDepositsRequest } as QueryAccountDepositsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountDepositsRequest {
        const message = { ...baseQueryAccountDepositsRequest } as QueryAccountDepositsRequest;
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountDepositsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountDepositsRequest>): QueryAccountDepositsRequest {
        const message = { ...baseQueryAccountDepositsRequest } as QueryAccountDepositsRequest;
        message.depositorAddress = object.depositorAddress ?? '';
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountPoolDepositsRequest: object = { depositorAddress: '', poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountPoolDepositsRequest } as QueryAccountPoolDepositsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolDepositsRequest {
        const message = { ...baseQueryAccountPoolDepositsRequest } as QueryAccountPoolDepositsRequest;
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountPoolDepositsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountPoolDepositsRequest>): QueryAccountPoolDepositsRequest {
        const message = { ...baseQueryAccountPoolDepositsRequest } as QueryAccountPoolDepositsRequest;
        message.depositorAddress = object.depositorAddress ?? '';
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryDrawResponse: object = {};

export const QueryDrawResponse = {
    encode(message: QueryDrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.draw !== undefined) {
            Draw.encode(message.draw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDrawResponse } as QueryDrawResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.draw = Draw.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryDrawResponse {
        const message = { ...baseQueryDrawResponse } as QueryDrawResponse;
        if (object.draw !== undefined && object.draw !== null) {
            message.draw = Draw.fromJSON(object.draw);
        } else {
            message.draw = undefined;
        }
        return message;
    },

    toJSON(message: QueryDrawResponse): unknown {
        const obj: any = {};
        message.draw !== undefined && (obj.draw = message.draw ? Draw.toJSON(message.draw) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryDrawResponse>): QueryDrawResponse {
        const message = { ...baseQueryDrawResponse } as QueryDrawResponse;
        if (object.draw !== undefined && object.draw !== null) {
            message.draw = Draw.fromPartial(object.draw);
        } else {
            message.draw = undefined;
        }
        return message;
    },
};

const baseQueryDrawsResponse: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDrawsResponse } as QueryDrawsResponse;
        message.draws = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.draws.push(Draw.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryDrawsResponse {
        const message = { ...baseQueryDrawsResponse } as QueryDrawsResponse;
        message.draws = [];
        if (object.draws !== undefined && object.draws !== null) {
            for (const e of object.draws) {
                message.draws.push(Draw.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryDrawsResponse>): QueryDrawsResponse {
        const message = { ...baseQueryDrawsResponse } as QueryDrawsResponse;
        message.draws = [];
        if (object.draws !== undefined && object.draws !== null) {
            for (const e of object.draws) {
                message.draws.push(Draw.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryDrawsRequest: object = {};

export const QueryDrawsRequest = {
    encode(message: QueryDrawsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDrawsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDrawsRequest } as QueryDrawsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryDrawsRequest {
        const message = { ...baseQueryDrawsRequest } as QueryDrawsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryDrawsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryDrawsRequest>): QueryDrawsRequest {
        const message = { ...baseQueryDrawsRequest } as QueryDrawsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolDrawsRequest: object = { poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolDrawsRequest } as QueryPoolDrawsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawsRequest {
        const message = { ...baseQueryPoolDrawsRequest } as QueryPoolDrawsRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolDrawsRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolDrawsRequest>): QueryPoolDrawsRequest {
        const message = { ...baseQueryPoolDrawsRequest } as QueryPoolDrawsRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolDrawRequest: object = { poolId: Long.UZERO, drawId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolDrawRequest } as QueryPoolDrawRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.drawId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawRequest {
        const message = { ...baseQueryPoolDrawRequest } as QueryPoolDrawRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = Long.fromString(object.drawId);
        } else {
            message.drawId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: QueryPoolDrawRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolDrawRequest>): QueryPoolDrawRequest {
        const message = { ...baseQueryPoolDrawRequest } as QueryPoolDrawRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = object.drawId as Long;
        } else {
            message.drawId = Long.UZERO;
        }
        return message;
    },
};

const baseQueryPrizeResponse: object = {};

export const QueryPrizeResponse = {
    encode(message: QueryPrizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.prize !== undefined) {
            Prize.encode(message.prize, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizeResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPrizeResponse } as QueryPrizeResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prize = Prize.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPrizeResponse {
        const message = { ...baseQueryPrizeResponse } as QueryPrizeResponse;
        if (object.prize !== undefined && object.prize !== null) {
            message.prize = Prize.fromJSON(object.prize);
        } else {
            message.prize = undefined;
        }
        return message;
    },

    toJSON(message: QueryPrizeResponse): unknown {
        const obj: any = {};
        message.prize !== undefined && (obj.prize = message.prize ? Prize.toJSON(message.prize) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPrizeResponse>): QueryPrizeResponse {
        const message = { ...baseQueryPrizeResponse } as QueryPrizeResponse;
        if (object.prize !== undefined && object.prize !== null) {
            message.prize = Prize.fromPartial(object.prize);
        } else {
            message.prize = undefined;
        }
        return message;
    },
};

const baseQueryPrizesResponse: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPrizesResponse } as QueryPrizesResponse;
        message.prizes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizes.push(Prize.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPrizesResponse {
        const message = { ...baseQueryPrizesResponse } as QueryPrizesResponse;
        message.prizes = [];
        if (object.prizes !== undefined && object.prizes !== null) {
            for (const e of object.prizes) {
                message.prizes.push(Prize.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryPrizesResponse>): QueryPrizesResponse {
        const message = { ...baseQueryPrizesResponse } as QueryPrizesResponse;
        message.prizes = [];
        if (object.prizes !== undefined && object.prizes !== null) {
            for (const e of object.prizes) {
                message.prizes.push(Prize.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolDrawPrizeRequest: object = { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolDrawPrizeRequest } as QueryPoolDrawPrizeRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.drawId = reader.uint64() as Long;
                    break;
                case 3:
                    message.prizeId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawPrizeRequest {
        const message = { ...baseQueryPoolDrawPrizeRequest } as QueryPoolDrawPrizeRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = Long.fromString(object.drawId);
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.prizeId !== undefined && object.prizeId !== null) {
            message.prizeId = Long.fromString(object.prizeId);
        } else {
            message.prizeId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: QueryPoolDrawPrizeRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolDrawPrizeRequest>): QueryPoolDrawPrizeRequest {
        const message = { ...baseQueryPoolDrawPrizeRequest } as QueryPoolDrawPrizeRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = object.drawId as Long;
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.prizeId !== undefined && object.prizeId !== null) {
            message.prizeId = object.prizeId as Long;
        } else {
            message.prizeId = Long.UZERO;
        }
        return message;
    },
};

const baseQueryPrizesRequest: object = {};

export const QueryPrizesRequest = {
    encode(message: QueryPrizesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPrizesRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPrizesRequest } as QueryPrizesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPrizesRequest {
        const message = { ...baseQueryPrizesRequest } as QueryPrizesRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPrizesRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPrizesRequest>): QueryPrizesRequest {
        const message = { ...baseQueryPrizesRequest } as QueryPrizesRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolPrizesRequest: object = { poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolPrizesRequest } as QueryPoolPrizesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolPrizesRequest {
        const message = { ...baseQueryPoolPrizesRequest } as QueryPoolPrizesRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolPrizesRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolPrizesRequest>): QueryPoolPrizesRequest {
        const message = { ...baseQueryPoolPrizesRequest } as QueryPoolPrizesRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolDrawPrizesRequest: object = { poolId: Long.UZERO, drawId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolDrawPrizesRequest } as QueryPoolDrawPrizesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.drawId = reader.uint64() as Long;
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolDrawPrizesRequest {
        const message = { ...baseQueryPoolDrawPrizesRequest } as QueryPoolDrawPrizesRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = Long.fromString(object.drawId);
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolDrawPrizesRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolDrawPrizesRequest>): QueryPoolDrawPrizesRequest {
        const message = { ...baseQueryPoolDrawPrizesRequest } as QueryPoolDrawPrizesRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = object.drawId as Long;
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountPrizesRequest: object = { winnerAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountPrizesRequest } as QueryAccountPrizesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winnerAddress = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPrizesRequest {
        const message = { ...baseQueryAccountPrizesRequest } as QueryAccountPrizesRequest;
        if (object.winnerAddress !== undefined && object.winnerAddress !== null) {
            message.winnerAddress = String(object.winnerAddress);
        } else {
            message.winnerAddress = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountPrizesRequest): unknown {
        const obj: any = {};
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountPrizesRequest>): QueryAccountPrizesRequest {
        const message = { ...baseQueryAccountPrizesRequest } as QueryAccountPrizesRequest;
        message.winnerAddress = object.winnerAddress ?? '';
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountPoolPrizesRequest: object = { winnerAddress: '', poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountPoolPrizesRequest } as QueryAccountPoolPrizesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winnerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolPrizesRequest {
        const message = { ...baseQueryAccountPoolPrizesRequest } as QueryAccountPoolPrizesRequest;
        if (object.winnerAddress !== undefined && object.winnerAddress !== null) {
            message.winnerAddress = String(object.winnerAddress);
        } else {
            message.winnerAddress = '';
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountPoolPrizesRequest): unknown {
        const obj: any = {};
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountPoolPrizesRequest>): QueryAccountPoolPrizesRequest {
        const message = { ...baseQueryAccountPoolPrizesRequest } as QueryAccountPoolPrizesRequest;
        message.winnerAddress = object.winnerAddress ?? '';
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountPoolDrawPrizesRequest: object = { winnerAddress: '', poolId: Long.UZERO, drawId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountPoolDrawPrizesRequest } as QueryAccountPoolDrawPrizesRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.winnerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 3:
                    message.drawId = reader.uint64() as Long;
                    break;
                case 4:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolDrawPrizesRequest {
        const message = { ...baseQueryAccountPoolDrawPrizesRequest } as QueryAccountPoolDrawPrizesRequest;
        if (object.winnerAddress !== undefined && object.winnerAddress !== null) {
            message.winnerAddress = String(object.winnerAddress);
        } else {
            message.winnerAddress = '';
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = Long.fromString(object.drawId);
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountPoolDrawPrizesRequest): unknown {
        const obj: any = {};
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountPoolDrawPrizesRequest>): QueryAccountPoolDrawPrizesRequest {
        const message = { ...baseQueryAccountPoolDrawPrizesRequest } as QueryAccountPoolDrawPrizesRequest;
        message.winnerAddress = object.winnerAddress ?? '';
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = object.drawId as Long;
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryWithdrawalResponse: object = {};

export const QueryWithdrawalResponse = {
    encode(message: QueryWithdrawalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.withdrawal !== undefined) {
            Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryWithdrawalResponse } as QueryWithdrawalResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawal = Withdrawal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryWithdrawalResponse {
        const message = { ...baseQueryWithdrawalResponse } as QueryWithdrawalResponse;
        if (object.withdrawal !== undefined && object.withdrawal !== null) {
            message.withdrawal = Withdrawal.fromJSON(object.withdrawal);
        } else {
            message.withdrawal = undefined;
        }
        return message;
    },

    toJSON(message: QueryWithdrawalResponse): unknown {
        const obj: any = {};
        message.withdrawal !== undefined && (obj.withdrawal = message.withdrawal ? Withdrawal.toJSON(message.withdrawal) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryWithdrawalResponse>): QueryWithdrawalResponse {
        const message = { ...baseQueryWithdrawalResponse } as QueryWithdrawalResponse;
        if (object.withdrawal !== undefined && object.withdrawal !== null) {
            message.withdrawal = Withdrawal.fromPartial(object.withdrawal);
        } else {
            message.withdrawal = undefined;
        }
        return message;
    },
};

const baseQueryWithdrawalsResponse: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryWithdrawalsResponse } as QueryWithdrawalsResponse;
        message.withdrawals = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryWithdrawalsResponse {
        const message = { ...baseQueryWithdrawalsResponse } as QueryWithdrawalsResponse;
        message.withdrawals = [];
        if (object.withdrawals !== undefined && object.withdrawals !== null) {
            for (const e of object.withdrawals) {
                message.withdrawals.push(Withdrawal.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryWithdrawalsResponse>): QueryWithdrawalsResponse {
        const message = { ...baseQueryWithdrawalsResponse } as QueryWithdrawalsResponse;
        message.withdrawals = [];
        if (object.withdrawals !== undefined && object.withdrawals !== null) {
            for (const e of object.withdrawals) {
                message.withdrawals.push(Withdrawal.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolWithdrawalRequest: object = { poolId: Long.UZERO, withdrawalId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolWithdrawalRequest } as QueryPoolWithdrawalRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolWithdrawalRequest {
        const message = { ...baseQueryPoolWithdrawalRequest } as QueryPoolWithdrawalRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = Long.fromString(object.withdrawalId);
        } else {
            message.withdrawalId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: QueryPoolWithdrawalRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolWithdrawalRequest>): QueryPoolWithdrawalRequest {
        const message = { ...baseQueryPoolWithdrawalRequest } as QueryPoolWithdrawalRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = object.withdrawalId as Long;
        } else {
            message.withdrawalId = Long.UZERO;
        }
        return message;
    },
};

const baseQueryWithdrawalsRequest: object = {};

export const QueryWithdrawalsRequest = {
    encode(message: QueryWithdrawalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryWithdrawalsRequest } as QueryWithdrawalsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryWithdrawalsRequest {
        const message = { ...baseQueryWithdrawalsRequest } as QueryWithdrawalsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryWithdrawalsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryWithdrawalsRequest>): QueryWithdrawalsRequest {
        const message = { ...baseQueryWithdrawalsRequest } as QueryWithdrawalsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryPoolWithdrawalsRequest: object = { poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPoolWithdrawalsRequest } as QueryPoolWithdrawalsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryPoolWithdrawalsRequest {
        const message = { ...baseQueryPoolWithdrawalsRequest } as QueryPoolWithdrawalsRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryPoolWithdrawalsRequest): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryPoolWithdrawalsRequest>): QueryPoolWithdrawalsRequest {
        const message = { ...baseQueryPoolWithdrawalsRequest } as QueryPoolWithdrawalsRequest;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountWithdrawalsRequest: object = { depositorAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountWithdrawalsRequest } as QueryAccountWithdrawalsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountWithdrawalsRequest {
        const message = { ...baseQueryAccountWithdrawalsRequest } as QueryAccountWithdrawalsRequest;
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountWithdrawalsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountWithdrawalsRequest>): QueryAccountWithdrawalsRequest {
        const message = { ...baseQueryAccountWithdrawalsRequest } as QueryAccountWithdrawalsRequest;
        message.depositorAddress = object.depositorAddress ?? '';
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAccountPoolWithdrawalsRequest: object = { depositorAddress: '', poolId: Long.UZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAccountPoolWithdrawalsRequest } as QueryAccountPoolWithdrawalsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAccountPoolWithdrawalsRequest {
        const message = { ...baseQueryAccountPoolWithdrawalsRequest } as QueryAccountPoolWithdrawalsRequest;
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAccountPoolWithdrawalsRequest): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAccountPoolWithdrawalsRequest>): QueryAccountPoolWithdrawalsRequest {
        const message = { ...baseQueryAccountPoolWithdrawalsRequest } as QueryAccountPoolWithdrawalsRequest;
        message.depositorAddress = object.depositorAddress ?? '';
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
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
    constructor(rpc: Rpc) {
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
        const promise = this.rpc.request('lum.network.millions.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }

    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
        const data = QueryPoolsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'Pools', data);
        return promise.then((data) => QueryPoolsResponse.decode(new _m0.Reader(data)));
    }

    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
        const data = QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'Pool', data);
        return promise.then((data) => QueryPoolResponse.decode(new _m0.Reader(data)));
    }

    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'Deposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }

    PoolDeposits(request: QueryPoolDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolDeposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }

    PoolDeposit(request: QueryPoolDepositRequest): Promise<QueryDepositResponse> {
        const data = QueryPoolDepositRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolDeposit', data);
        return promise.then((data) => QueryDepositResponse.decode(new _m0.Reader(data)));
    }

    AccountDeposits(request: QueryAccountDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryAccountDepositsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountDeposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }

    AccountPoolDeposits(request: QueryAccountPoolDepositsRequest): Promise<QueryDepositsResponse> {
        const data = QueryAccountPoolDepositsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountPoolDeposits', data);
        return promise.then((data) => QueryDepositsResponse.decode(new _m0.Reader(data)));
    }

    Draws(request: QueryDrawsRequest): Promise<QueryDrawsResponse> {
        const data = QueryDrawsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'Draws', data);
        return promise.then((data) => QueryDrawsResponse.decode(new _m0.Reader(data)));
    }

    PoolDraws(request: QueryPoolDrawsRequest): Promise<QueryDrawsResponse> {
        const data = QueryPoolDrawsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolDraws', data);
        return promise.then((data) => QueryDrawsResponse.decode(new _m0.Reader(data)));
    }

    PoolDraw(request: QueryPoolDrawRequest): Promise<QueryDrawResponse> {
        const data = QueryPoolDrawRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolDraw', data);
        return promise.then((data) => QueryDrawResponse.decode(new _m0.Reader(data)));
    }

    Prizes(request: QueryPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryPrizesRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'Prizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }

    PoolPrizes(request: QueryPoolPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }

    PoolDrawPrizes(request: QueryPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolDrawPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }

    PoolDrawPrize(request: QueryPoolDrawPrizeRequest): Promise<QueryPrizeResponse> {
        const data = QueryPoolDrawPrizeRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolDrawPrize', data);
        return promise.then((data) => QueryPrizeResponse.decode(new _m0.Reader(data)));
    }

    AccountPrizes(request: QueryAccountPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryAccountPrizesRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }

    AccountPoolPrizes(request: QueryAccountPoolPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryAccountPoolPrizesRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountPoolPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }

    AccountPoolDrawPrizes(request: QueryAccountPoolDrawPrizesRequest): Promise<QueryPrizesResponse> {
        const data = QueryAccountPoolDrawPrizesRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountPoolDrawPrizes', data);
        return promise.then((data) => QueryPrizesResponse.decode(new _m0.Reader(data)));
    }

    Withdrawals(request: QueryWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'Withdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }

    PoolWithdrawals(request: QueryPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolWithdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }

    PoolWithdrawal(request: QueryPoolWithdrawalRequest): Promise<QueryWithdrawalResponse> {
        const data = QueryPoolWithdrawalRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'PoolWithdrawal', data);
        return promise.then((data) => QueryWithdrawalResponse.decode(new _m0.Reader(data)));
    }

    AccountWithdrawals(request: QueryAccountWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryAccountWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountWithdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }

    AccountPoolWithdrawals(request: QueryAccountPoolWithdrawalsRequest): Promise<QueryWithdrawalsResponse> {
        const data = QueryAccountPoolWithdrawalsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Query', 'AccountPoolWithdrawals', data);
        return promise.then((data) => QueryWithdrawalsResponse.decode(new _m0.Reader(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
