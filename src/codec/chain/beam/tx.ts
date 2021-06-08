/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { BeamSchemeReward, BeamSchemeReview, BeamState, beamStateFromJSON, beamStateToJSON } from './beam';

export const protobufPackage = 'lum.network.beam';

export interface MsgOpenBeam {
    id: string;
    creator: string;
    secret: string;
    amount?: Coin;
    schema: string;
    reward?: BeamSchemeReward;
    review?: BeamSchemeReview;
    owner: string;
}

export interface MsgUpdateBeam {
    updater: string;
    id: string;
    amount?: Coin;
    status: BeamState;
    reward?: BeamSchemeReward;
    review?: BeamSchemeReview;
}

export interface MsgClaimBeam {
    claimer: string;
    id: string;
    secret: string;
}

const baseMsgOpenBeam: object = { id: '', creator: '', secret: '', schema: '', owner: '' };

export const MsgOpenBeam = {
    encode(message: MsgOpenBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.creator !== '') {
            writer.uint32(18).string(message.creator);
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
        if (message.reward !== undefined) {
            BeamSchemeReward.encode(message.reward, writer.uint32(50).fork()).ldelim();
        }
        if (message.review !== undefined) {
            BeamSchemeReview.encode(message.review, writer.uint32(58).fork()).ldelim();
        }
        if (message.owner !== '') {
            writer.uint32(66).string(message.owner);
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
                    message.creator = reader.string();
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
                    message.reward = BeamSchemeReward.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.review = BeamSchemeReview.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.owner = reader.string();
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        } else {
            message.creator = '';
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
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamSchemeReward.fromJSON(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamSchemeReview.fromJSON(object.review);
        } else {
            message.review = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        } else {
            message.owner = '';
        }
        return message;
    },

    toJSON(message: MsgOpenBeam): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.creator !== undefined && (obj.creator = message.creator);
        message.secret !== undefined && (obj.secret = message.secret);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.schema !== undefined && (obj.schema = message.schema);
        message.reward !== undefined && (obj.reward = message.reward ? BeamSchemeReward.toJSON(message.reward) : undefined);
        message.review !== undefined && (obj.review = message.review ? BeamSchemeReview.toJSON(message.review) : undefined);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgOpenBeam>): MsgOpenBeam {
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        } else {
            message.creator = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        } else {
            message.secret = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        } else {
            message.schema = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamSchemeReward.fromPartial(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamSchemeReview.fromPartial(object.review);
        } else {
            message.review = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        } else {
            message.owner = '';
        }
        return message;
    },
};

const baseMsgUpdateBeam: object = { updater: '', id: '', status: 0 };

export const MsgUpdateBeam = {
    encode(message: MsgUpdateBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.updater !== '') {
            writer.uint32(10).string(message.updater);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.reward !== undefined) {
            BeamSchemeReward.encode(message.reward, writer.uint32(42).fork()).ldelim();
        }
        if (message.review !== undefined) {
            BeamSchemeReview.encode(message.review, writer.uint32(50).fork()).ldelim();
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
                    message.updater = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.reward = BeamSchemeReward.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.review = BeamSchemeReview.decode(reader, reader.uint32());
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
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = String(object.updater);
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
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
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamSchemeReward.fromJSON(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamSchemeReview.fromJSON(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },

    toJSON(message: MsgUpdateBeam): unknown {
        const obj: any = {};
        message.updater !== undefined && (obj.updater = message.updater);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.status !== undefined && (obj.status = beamStateToJSON(message.status));
        message.reward !== undefined && (obj.reward = message.reward ? BeamSchemeReward.toJSON(message.reward) : undefined);
        message.review !== undefined && (obj.review = message.review ? BeamSchemeReview.toJSON(message.review) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgUpdateBeam>): MsgUpdateBeam {
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = object.updater;
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = 0;
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamSchemeReward.fromPartial(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamSchemeReview.fromPartial(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },
};

const baseMsgClaimBeam: object = { claimer: '', id: '', secret: '' };

export const MsgClaimBeam = {
    encode(message: MsgClaimBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.claimer !== '') {
            writer.uint32(10).string(message.claimer);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
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
                    message.claimer = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
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
        if (object.claimer !== undefined && object.claimer !== null) {
            message.claimer = String(object.claimer);
        } else {
            message.claimer = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
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
        message.claimer !== undefined && (obj.claimer = message.claimer);
        message.id !== undefined && (obj.id = message.id);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgClaimBeam>): MsgClaimBeam {
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        if (object.claimer !== undefined && object.claimer !== null) {
            message.claimer = object.claimer;
        } else {
            message.claimer = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        } else {
            message.secret = '';
        }
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
