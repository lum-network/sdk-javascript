/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';

export const protobufPackage = 'lum.network.airdrop';

export enum Action {
    ActionVote = 0,
    ActionDelegateStake = 1,
    UNRECOGNIZED = -1,
}

export function actionFromJSON(object: any): Action {
    switch (object) {
        case 0:
        case 'ActionVote':
            return Action.ActionVote;
        case 1:
        case 'ActionDelegateStake':
            return Action.ActionDelegateStake;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Action.UNRECOGNIZED;
    }
}

export function actionToJSON(object: Action): string {
    switch (object) {
        case Action.ActionVote:
            return 'ActionVote';
        case Action.ActionDelegateStake:
            return 'ActionDelegateStake';
        default:
            return 'UNKNOWN';
    }
}

export interface ClaimRecord {
    address: string;
    initialClaimableAmount: Coin[];
    actionCompleted: boolean[];
}

const baseClaimRecord: object = { address: '', actionCompleted: false };

export const ClaimRecord = {
    encode(message: ClaimRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.initialClaimableAmount) {
            Coin.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.actionCompleted) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRecord {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClaimRecord } as ClaimRecord;
        message.initialClaimableAmount = [];
        message.actionCompleted = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actionCompleted.push(reader.bool());
                        }
                    } else {
                        message.actionCompleted.push(reader.bool());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClaimRecord {
        const message = { ...baseClaimRecord } as ClaimRecord;
        message.initialClaimableAmount = [];
        message.actionCompleted = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.initialClaimableAmount !== undefined && object.initialClaimableAmount !== null) {
            for (const e of object.initialClaimableAmount) {
                message.initialClaimableAmount.push(Coin.fromJSON(e));
            }
        }
        if (object.actionCompleted !== undefined && object.actionCompleted !== null) {
            for (const e of object.actionCompleted) {
                message.actionCompleted.push(Boolean(e));
            }
        }
        return message;
    },

    toJSON(message: ClaimRecord): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.initialClaimableAmount) {
            obj.initialClaimableAmount = message.initialClaimableAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.initialClaimableAmount = [];
        }
        if (message.actionCompleted) {
            obj.actionCompleted = message.actionCompleted.map((e) => e);
        } else {
            obj.actionCompleted = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ClaimRecord>): ClaimRecord {
        const message = { ...baseClaimRecord } as ClaimRecord;
        message.address = object.address ?? '';
        message.initialClaimableAmount = [];
        if (object.initialClaimableAmount !== undefined && object.initialClaimableAmount !== null) {
            for (const e of object.initialClaimableAmount) {
                message.initialClaimableAmount.push(Coin.fromPartial(e));
            }
        }
        message.actionCompleted = [];
        if (object.actionCompleted !== undefined && object.actionCompleted !== null) {
            for (const e of object.actionCompleted) {
                message.actionCompleted.push(e);
            }
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
