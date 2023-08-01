/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { BeamData, BeamState, beamStateFromJSON, beamStateToJSON } from './beam';

export const protobufPackage = 'lum.network.beam';

export interface MsgOpenBeam {
    id: string;
    creatorAddress: string;
    secret: string;
    amount?: Coin | undefined;
    schema: string;
    data?: BeamData | undefined;
    claimAddress: string;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
}

export interface MsgOpenBeamResponse {}

export interface MsgUpdateBeam {
    id: string;
    updaterAddress: string;
    amount?: Coin | undefined;
    status: BeamState;
    cancelReason: string;
    hideContent: boolean;
    data?: BeamData | undefined;
    claimAddress: string;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
}

export interface MsgUpdateBeamResponse {}

export interface MsgClaimBeam {
    id: string;
    claimerAddress: string;
    secret: string;
}

export interface MsgClaimBeamResponse {}

function createBaseMsgOpenBeam(): MsgOpenBeam {
    return {
        id: '',
        creatorAddress: '',
        secret: '',
        amount: undefined,
        schema: '',
        data: undefined,
        claimAddress: '',
        claimExpiresAtBlock: 0,
        closesAtBlock: 0,
    };
}

export const MsgOpenBeam = {
    encode(message: MsgOpenBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.creatorAddress !== '') {
            writer.uint32(18).string(message.creatorAddress);
        }
        if (message.secret !== '') {
            writer.uint32(26).string(message.secret);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        if (message.schema !== '') {
            writer.uint32(42).string(message.schema);
        }
        if (message.data !== undefined) {
            BeamData.encode(message.data, writer.uint32(50).fork()).ldelim();
        }
        if (message.claimAddress !== '') {
            writer.uint32(58).string(message.claimAddress);
        }
        if (message.claimExpiresAtBlock !== 0) {
            writer.uint32(64).int32(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            writer.uint32(72).int32(message.closesAtBlock);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeam {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.creatorAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.secret = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.schema = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.data = BeamData.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.claimAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.claimExpiresAtBlock = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.closesAtBlock = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgOpenBeam {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : '',
            secret: isSet(object.secret) ? String(object.secret) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            schema: isSet(object.schema) ? String(object.schema) : '',
            data: isSet(object.data) ? BeamData.fromJSON(object.data) : undefined,
            claimAddress: isSet(object.claimAddress) ? String(object.claimAddress) : '',
            claimExpiresAtBlock: isSet(object.claimExpiresAtBlock) ? Number(object.claimExpiresAtBlock) : 0,
            closesAtBlock: isSet(object.closesAtBlock) ? Number(object.closesAtBlock) : 0,
        };
    },

    toJSON(message: MsgOpenBeam): unknown {
        const obj: any = {};
        if (message.id !== '') {
            obj.id = message.id;
        }
        if (message.creatorAddress !== '') {
            obj.creatorAddress = message.creatorAddress;
        }
        if (message.secret !== '') {
            obj.secret = message.secret;
        }
        if (message.amount !== undefined) {
            obj.amount = Coin.toJSON(message.amount);
        }
        if (message.schema !== '') {
            obj.schema = message.schema;
        }
        if (message.data !== undefined) {
            obj.data = BeamData.toJSON(message.data);
        }
        if (message.claimAddress !== '') {
            obj.claimAddress = message.claimAddress;
        }
        if (message.claimExpiresAtBlock !== 0) {
            obj.claimExpiresAtBlock = Math.round(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            obj.closesAtBlock = Math.round(message.closesAtBlock);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgOpenBeam>, I>>(base?: I): MsgOpenBeam {
        return MsgOpenBeam.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgOpenBeam>, I>>(object: I): MsgOpenBeam {
        const message = createBaseMsgOpenBeam();
        message.id = object.id ?? '';
        message.creatorAddress = object.creatorAddress ?? '';
        message.secret = object.secret ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.schema = object.schema ?? '';
        message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
        message.claimAddress = object.claimAddress ?? '';
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        return message;
    },
};

function createBaseMsgOpenBeamResponse(): MsgOpenBeamResponse {
    return {};
}

export const MsgOpenBeamResponse = {
    encode(_: MsgOpenBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeamResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgOpenBeamResponse();
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

    fromJSON(_: any): MsgOpenBeamResponse {
        return {};
    },

    toJSON(_: MsgOpenBeamResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgOpenBeamResponse>, I>>(base?: I): MsgOpenBeamResponse {
        return MsgOpenBeamResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgOpenBeamResponse>, I>>(_: I): MsgOpenBeamResponse {
        const message = createBaseMsgOpenBeamResponse();
        return message;
    },
};

function createBaseMsgUpdateBeam(): MsgUpdateBeam {
    return {
        id: '',
        updaterAddress: '',
        amount: undefined,
        status: 0,
        cancelReason: '',
        hideContent: false,
        data: undefined,
        claimAddress: '',
        claimExpiresAtBlock: 0,
        closesAtBlock: 0,
    };
}

export const MsgUpdateBeam = {
    encode(message: MsgUpdateBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.updaterAddress !== '') {
            writer.uint32(18).string(message.updaterAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.cancelReason !== '') {
            writer.uint32(42).string(message.cancelReason);
        }
        if (message.hideContent === true) {
            writer.uint32(48).bool(message.hideContent);
        }
        if (message.data !== undefined) {
            BeamData.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        if (message.claimAddress !== '') {
            writer.uint32(66).string(message.claimAddress);
        }
        if (message.claimExpiresAtBlock !== 0) {
            writer.uint32(72).int32(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            writer.uint32(80).int32(message.closesAtBlock);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeam {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.updaterAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.status = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.cancelReason = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.hideContent = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.data = BeamData.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.claimAddress = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.claimExpiresAtBlock = reader.int32();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.closesAtBlock = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateBeam {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            updaterAddress: isSet(object.updaterAddress) ? String(object.updaterAddress) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            status: isSet(object.status) ? beamStateFromJSON(object.status) : 0,
            cancelReason: isSet(object.cancelReason) ? String(object.cancelReason) : '',
            hideContent: isSet(object.hideContent) ? Boolean(object.hideContent) : false,
            data: isSet(object.data) ? BeamData.fromJSON(object.data) : undefined,
            claimAddress: isSet(object.claimAddress) ? String(object.claimAddress) : '',
            claimExpiresAtBlock: isSet(object.claimExpiresAtBlock) ? Number(object.claimExpiresAtBlock) : 0,
            closesAtBlock: isSet(object.closesAtBlock) ? Number(object.closesAtBlock) : 0,
        };
    },

    toJSON(message: MsgUpdateBeam): unknown {
        const obj: any = {};
        if (message.id !== '') {
            obj.id = message.id;
        }
        if (message.updaterAddress !== '') {
            obj.updaterAddress = message.updaterAddress;
        }
        if (message.amount !== undefined) {
            obj.amount = Coin.toJSON(message.amount);
        }
        if (message.status !== 0) {
            obj.status = beamStateToJSON(message.status);
        }
        if (message.cancelReason !== '') {
            obj.cancelReason = message.cancelReason;
        }
        if (message.hideContent === true) {
            obj.hideContent = message.hideContent;
        }
        if (message.data !== undefined) {
            obj.data = BeamData.toJSON(message.data);
        }
        if (message.claimAddress !== '') {
            obj.claimAddress = message.claimAddress;
        }
        if (message.claimExpiresAtBlock !== 0) {
            obj.claimExpiresAtBlock = Math.round(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            obj.closesAtBlock = Math.round(message.closesAtBlock);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateBeam>, I>>(base?: I): MsgUpdateBeam {
        return MsgUpdateBeam.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateBeam>, I>>(object: I): MsgUpdateBeam {
        const message = createBaseMsgUpdateBeam();
        message.id = object.id ?? '';
        message.updaterAddress = object.updaterAddress ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.status = object.status ?? 0;
        message.cancelReason = object.cancelReason ?? '';
        message.hideContent = object.hideContent ?? false;
        message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
        message.claimAddress = object.claimAddress ?? '';
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        return message;
    },
};

function createBaseMsgUpdateBeamResponse(): MsgUpdateBeamResponse {
    return {};
}

export const MsgUpdateBeamResponse = {
    encode(_: MsgUpdateBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeamResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateBeamResponse();
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

    fromJSON(_: any): MsgUpdateBeamResponse {
        return {};
    },

    toJSON(_: MsgUpdateBeamResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateBeamResponse>, I>>(base?: I): MsgUpdateBeamResponse {
        return MsgUpdateBeamResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateBeamResponse>, I>>(_: I): MsgUpdateBeamResponse {
        const message = createBaseMsgUpdateBeamResponse();
        return message;
    },
};

function createBaseMsgClaimBeam(): MsgClaimBeam {
    return { id: '', claimerAddress: '', secret: '' };
}

export const MsgClaimBeam = {
    encode(message: MsgClaimBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.claimerAddress !== '') {
            writer.uint32(18).string(message.claimerAddress);
        }
        if (message.secret !== '') {
            writer.uint32(26).string(message.secret);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeam {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.claimerAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.secret = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgClaimBeam {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            claimerAddress: isSet(object.claimerAddress) ? String(object.claimerAddress) : '',
            secret: isSet(object.secret) ? String(object.secret) : '',
        };
    },

    toJSON(message: MsgClaimBeam): unknown {
        const obj: any = {};
        if (message.id !== '') {
            obj.id = message.id;
        }
        if (message.claimerAddress !== '') {
            obj.claimerAddress = message.claimerAddress;
        }
        if (message.secret !== '') {
            obj.secret = message.secret;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgClaimBeam>, I>>(base?: I): MsgClaimBeam {
        return MsgClaimBeam.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgClaimBeam>, I>>(object: I): MsgClaimBeam {
        const message = createBaseMsgClaimBeam();
        message.id = object.id ?? '';
        message.claimerAddress = object.claimerAddress ?? '';
        message.secret = object.secret ?? '';
        return message;
    },
};

function createBaseMsgClaimBeamResponse(): MsgClaimBeamResponse {
    return {};
}

export const MsgClaimBeamResponse = {
    encode(_: MsgClaimBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeamResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimBeamResponse();
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

    fromJSON(_: any): MsgClaimBeamResponse {
        return {};
    },

    toJSON(_: MsgClaimBeamResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgClaimBeamResponse>, I>>(base?: I): MsgClaimBeamResponse {
        return MsgClaimBeamResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgClaimBeamResponse>, I>>(_: I): MsgClaimBeamResponse {
        const message = createBaseMsgClaimBeamResponse();
        return message;
    },
};

export interface Msg {
    OpenBeam(request: MsgOpenBeam): Promise<MsgOpenBeamResponse>;
    UpdateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse>;
    ClaimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse>;
}

export const MsgServiceName = 'lum.network.beam.Msg';
export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.OpenBeam = this.OpenBeam.bind(this);
        this.UpdateBeam = this.UpdateBeam.bind(this);
        this.ClaimBeam = this.ClaimBeam.bind(this);
    }
    OpenBeam(request: MsgOpenBeam): Promise<MsgOpenBeamResponse> {
        const data = MsgOpenBeam.encode(request).finish();
        const promise = this.rpc.request(this.service, 'OpenBeam', data);
        return promise.then((data) => MsgOpenBeamResponse.decode(_m0.Reader.create(data)));
    }

    UpdateBeam(request: MsgUpdateBeam): Promise<MsgUpdateBeamResponse> {
        const data = MsgUpdateBeam.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpdateBeam', data);
        return promise.then((data) => MsgUpdateBeamResponse.decode(_m0.Reader.create(data)));
    }

    ClaimBeam(request: MsgClaimBeam): Promise<MsgClaimBeamResponse> {
        const data = MsgClaimBeam.encode(request).finish();
        const promise = this.rpc.request(this.service, 'ClaimBeam', data);
        return promise.then((data) => MsgClaimBeamResponse.decode(_m0.Reader.create(data)));
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
