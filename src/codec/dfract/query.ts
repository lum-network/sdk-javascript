/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Deposit } from '../dfract/deposit';

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
        default:
            return 'UNKNOWN';
    }
}

export interface QueryGetDepositsForAddressRequest {
    address: string;
}

export interface QueryFetchDepositsRequest {
    pagination?: PageRequest;
    type: DepositsQueryType;
}

export interface QueryGetDepositsForAddressResponse {
    waitingProposalDeposits?: Deposit;
    waitingMintDeposits?: Deposit;
    mintedDeposits?: Deposit;
}

export interface QueryFetchDepositsResponse {
    deposits: Deposit[];
    pagination?: PageResponse;
}

const baseQueryGetDepositsForAddressRequest: object = { address: '' };

export const QueryGetDepositsForAddressRequest = {
    encode(message: QueryGetDepositsForAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDepositsForAddressRequest } as QueryGetDepositsForAddressRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryGetDepositsForAddressRequest {
        const message = { ...baseQueryGetDepositsForAddressRequest } as QueryGetDepositsForAddressRequest;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: QueryGetDepositsForAddressRequest): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryGetDepositsForAddressRequest>): QueryGetDepositsForAddressRequest {
        const message = { ...baseQueryGetDepositsForAddressRequest } as QueryGetDepositsForAddressRequest;
        message.address = object.address ?? '';
        return message;
    },
};

const baseQueryFetchDepositsRequest: object = { type: 0 };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryFetchDepositsRequest } as QueryFetchDepositsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.type = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryFetchDepositsRequest {
        const message = { ...baseQueryFetchDepositsRequest } as QueryFetchDepositsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = depositsQueryTypeFromJSON(object.type);
        } else {
            message.type = 0;
        }
        return message;
    },

    toJSON(message: QueryFetchDepositsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.type !== undefined && (obj.type = depositsQueryTypeToJSON(message.type));
        return obj;
    },

    fromPartial(object: DeepPartial<QueryFetchDepositsRequest>): QueryFetchDepositsRequest {
        const message = { ...baseQueryFetchDepositsRequest } as QueryFetchDepositsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        message.type = object.type ?? 0;
        return message;
    },
};

const baseQueryGetDepositsForAddressResponse: object = {};

export const QueryGetDepositsForAddressResponse = {
    encode(message: QueryGetDepositsForAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.waitingProposalDeposits !== undefined) {
            Deposit.encode(message.waitingProposalDeposits, writer.uint32(10).fork()).ldelim();
        }
        if (message.waitingMintDeposits !== undefined) {
            Deposit.encode(message.waitingMintDeposits, writer.uint32(18).fork()).ldelim();
        }
        if (message.mintedDeposits !== undefined) {
            Deposit.encode(message.mintedDeposits, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDepositsForAddressResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetDepositsForAddressResponse } as QueryGetDepositsForAddressResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.waitingProposalDeposits = Deposit.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.waitingMintDeposits = Deposit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mintedDeposits = Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryGetDepositsForAddressResponse {
        const message = { ...baseQueryGetDepositsForAddressResponse } as QueryGetDepositsForAddressResponse;
        if (object.waitingProposalDeposits !== undefined && object.waitingProposalDeposits !== null) {
            message.waitingProposalDeposits = Deposit.fromJSON(object.waitingProposalDeposits);
        } else {
            message.waitingProposalDeposits = undefined;
        }
        if (object.waitingMintDeposits !== undefined && object.waitingMintDeposits !== null) {
            message.waitingMintDeposits = Deposit.fromJSON(object.waitingMintDeposits);
        } else {
            message.waitingMintDeposits = undefined;
        }
        if (object.mintedDeposits !== undefined && object.mintedDeposits !== null) {
            message.mintedDeposits = Deposit.fromJSON(object.mintedDeposits);
        } else {
            message.mintedDeposits = undefined;
        }
        return message;
    },

    toJSON(message: QueryGetDepositsForAddressResponse): unknown {
        const obj: any = {};
        message.waitingProposalDeposits !== undefined && (obj.waitingProposalDeposits = message.waitingProposalDeposits ? Deposit.toJSON(message.waitingProposalDeposits) : undefined);
        message.waitingMintDeposits !== undefined && (obj.waitingMintDeposits = message.waitingMintDeposits ? Deposit.toJSON(message.waitingMintDeposits) : undefined);
        message.mintedDeposits !== undefined && (obj.mintedDeposits = message.mintedDeposits ? Deposit.toJSON(message.mintedDeposits) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryGetDepositsForAddressResponse>): QueryGetDepositsForAddressResponse {
        const message = { ...baseQueryGetDepositsForAddressResponse } as QueryGetDepositsForAddressResponse;
        if (object.waitingProposalDeposits !== undefined && object.waitingProposalDeposits !== null) {
            message.waitingProposalDeposits = Deposit.fromPartial(object.waitingProposalDeposits);
        } else {
            message.waitingProposalDeposits = undefined;
        }
        if (object.waitingMintDeposits !== undefined && object.waitingMintDeposits !== null) {
            message.waitingMintDeposits = Deposit.fromPartial(object.waitingMintDeposits);
        } else {
            message.waitingMintDeposits = undefined;
        }
        if (object.mintedDeposits !== undefined && object.mintedDeposits !== null) {
            message.mintedDeposits = Deposit.fromPartial(object.mintedDeposits);
        } else {
            message.mintedDeposits = undefined;
        }
        return message;
    },
};

const baseQueryFetchDepositsResponse: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryFetchDepositsResponse } as QueryFetchDepositsResponse;
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

    fromJSON(object: any): QueryFetchDepositsResponse {
        const message = { ...baseQueryFetchDepositsResponse } as QueryFetchDepositsResponse;
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

    fromPartial(object: DeepPartial<QueryFetchDepositsResponse>): QueryFetchDepositsResponse {
        const message = { ...baseQueryFetchDepositsResponse } as QueryFetchDepositsResponse;
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

export interface Query {
    GetDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse>;
    FetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.GetDepositsForAddress = this.GetDepositsForAddress.bind(this);
        this.FetchDeposits = this.FetchDeposits.bind(this);
    }
    GetDepositsForAddress(request: QueryGetDepositsForAddressRequest): Promise<QueryGetDepositsForAddressResponse> {
        const data = QueryGetDepositsForAddressRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.dfract.Query', 'GetDepositsForAddress', data);
        return promise.then((data) => QueryGetDepositsForAddressResponse.decode(new _m0.Reader(data)));
    }

    FetchDeposits(request: QueryFetchDepositsRequest): Promise<QueryFetchDepositsResponse> {
        const data = QueryFetchDepositsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.dfract.Query', 'FetchDeposits', data);
        return promise.then((data) => QueryFetchDepositsResponse.decode(new _m0.Reader(data)));
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
