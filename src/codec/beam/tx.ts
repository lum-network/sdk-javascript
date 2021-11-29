/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
import { BeamData, BeamState, beamStateFromJSON, beamStateToJSON } from '../beam/beam';

export const protobufPackage = 'lum.network.beam';

export interface MsgOpenBeam {
    id: string;
    creatorAddress: string;
    secret: string;
    amount?: Coin;
    schema: string;
    data?: BeamData;
    claimAddress: string;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
}

export interface MsgUpdateBeam {
    id: string;
    updaterAddress: string;
    amount?: Coin;
    status: BeamState;
    cancelReason: string;
    hideContent: boolean;
    data?: BeamData;
    claimAddress: string;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
}

export interface MsgClaimBeam {
    id: string;
    claimerAddress: string;
    secret: string;
}

const baseMsgOpenBeam: object = { id: '', creatorAddress: '', secret: '', schema: '', claimAddress: '', claimExpiresAtBlock: 0, closesAtBlock: 0 };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.creatorAddress = reader.string();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                case 4:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.schema = reader.string();
                    break;
                case 6:
                    message.data = BeamData.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.claimAddress = reader.string();
                    break;
                case 8:
                    message.claimExpiresAtBlock = reader.int32();
                    break;
                case 9:
                    message.closesAtBlock = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgOpenBeam {
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.creatorAddress !== undefined && object.creatorAddress !== null) {
            message.creatorAddress = String(object.creatorAddress);
        } else {
            message.creatorAddress = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = String(object.schema);
        } else {
            message.schema = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = BeamData.fromJSON(object.data);
        } else {
            message.data = undefined;
        }
        if (object.claimAddress !== undefined && object.claimAddress !== null) {
            message.claimAddress = String(object.claimAddress);
        } else {
            message.claimAddress = '';
        }
        if (object.claimExpiresAtBlock !== undefined && object.claimExpiresAtBlock !== null) {
            message.claimExpiresAtBlock = Number(object.claimExpiresAtBlock);
        } else {
            message.claimExpiresAtBlock = 0;
        }
        if (object.closesAtBlock !== undefined && object.closesAtBlock !== null) {
            message.closesAtBlock = Number(object.closesAtBlock);
        } else {
            message.closesAtBlock = 0;
        }
        return message;
    },

    toJSON(message: MsgOpenBeam): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
        message.secret !== undefined && (obj.secret = message.secret);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.schema !== undefined && (obj.schema = message.schema);
        message.data !== undefined && (obj.data = message.data ? BeamData.toJSON(message.data) : undefined);
        message.claimAddress !== undefined && (obj.claimAddress = message.claimAddress);
        message.claimExpiresAtBlock !== undefined && (obj.claimExpiresAtBlock = message.claimExpiresAtBlock);
        message.closesAtBlock !== undefined && (obj.closesAtBlock = message.closesAtBlock);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgOpenBeam>): MsgOpenBeam {
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        message.id = object.id ?? '';
        message.creatorAddress = object.creatorAddress ?? '';
        message.secret = object.secret ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        message.schema = object.schema ?? '';
        if (object.data !== undefined && object.data !== null) {
            message.data = BeamData.fromPartial(object.data);
        } else {
            message.data = undefined;
        }
        message.claimAddress = object.claimAddress ?? '';
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        return message;
    },
};

const baseMsgUpdateBeam: object = { id: '', updaterAddress: '', status: 0, cancelReason: '', hideContent: false, claimAddress: '', claimExpiresAtBlock: 0, closesAtBlock: 0 };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.updaterAddress = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.cancelReason = reader.string();
                    break;
                case 6:
                    message.hideContent = reader.bool();
                    break;
                case 7:
                    message.data = BeamData.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.claimAddress = reader.string();
                    break;
                case 9:
                    message.claimExpiresAtBlock = reader.int32();
                    break;
                case 10:
                    message.closesAtBlock = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateBeam {
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.updaterAddress !== undefined && object.updaterAddress !== null) {
            message.updaterAddress = String(object.updaterAddress);
        } else {
            message.updaterAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = beamStateFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.cancelReason !== undefined && object.cancelReason !== null) {
            message.cancelReason = String(object.cancelReason);
        } else {
            message.cancelReason = '';
        }
        if (object.hideContent !== undefined && object.hideContent !== null) {
            message.hideContent = Boolean(object.hideContent);
        } else {
            message.hideContent = false;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = BeamData.fromJSON(object.data);
        } else {
            message.data = undefined;
        }
        if (object.claimAddress !== undefined && object.claimAddress !== null) {
            message.claimAddress = String(object.claimAddress);
        } else {
            message.claimAddress = '';
        }
        if (object.claimExpiresAtBlock !== undefined && object.claimExpiresAtBlock !== null) {
            message.claimExpiresAtBlock = Number(object.claimExpiresAtBlock);
        } else {
            message.claimExpiresAtBlock = 0;
        }
        if (object.closesAtBlock !== undefined && object.closesAtBlock !== null) {
            message.closesAtBlock = Number(object.closesAtBlock);
        } else {
            message.closesAtBlock = 0;
        }
        return message;
    },

    toJSON(message: MsgUpdateBeam): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.updaterAddress !== undefined && (obj.updaterAddress = message.updaterAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.status !== undefined && (obj.status = beamStateToJSON(message.status));
        message.cancelReason !== undefined && (obj.cancelReason = message.cancelReason);
        message.hideContent !== undefined && (obj.hideContent = message.hideContent);
        message.data !== undefined && (obj.data = message.data ? BeamData.toJSON(message.data) : undefined);
        message.claimAddress !== undefined && (obj.claimAddress = message.claimAddress);
        message.claimExpiresAtBlock !== undefined && (obj.claimExpiresAtBlock = message.claimExpiresAtBlock);
        message.closesAtBlock !== undefined && (obj.closesAtBlock = message.closesAtBlock);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgUpdateBeam>): MsgUpdateBeam {
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        message.id = object.id ?? '';
        message.updaterAddress = object.updaterAddress ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        message.status = object.status ?? 0;
        message.cancelReason = object.cancelReason ?? '';
        message.hideContent = object.hideContent ?? false;
        if (object.data !== undefined && object.data !== null) {
            message.data = BeamData.fromPartial(object.data);
        } else {
            message.data = undefined;
        }
        message.claimAddress = object.claimAddress ?? '';
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        return message;
    },
};

const baseMsgClaimBeam: object = { id: '', claimerAddress: '', secret: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.claimerAddress = reader.string();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgClaimBeam {
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.claimerAddress !== undefined && object.claimerAddress !== null) {
            message.claimerAddress = String(object.claimerAddress);
        } else {
            message.claimerAddress = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        return message;
    },

    toJSON(message: MsgClaimBeam): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.claimerAddress !== undefined && (obj.claimerAddress = message.claimerAddress);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgClaimBeam>): MsgClaimBeam {
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        message.id = object.id ?? '';
        message.claimerAddress = object.claimerAddress ?? '';
        message.secret = object.secret ?? '';
        return message;
    },
};

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
