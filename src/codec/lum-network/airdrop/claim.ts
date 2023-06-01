/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';

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
        case Action.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface ClaimRecord {
    address: string;
    initialClaimableAmount: Coin[];
    actionCompleted: boolean[];
}

function createBaseClaimRecord(): ClaimRecord {
    return { address: '', initialClaimableAmount: [], actionCompleted: [] };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag === 24) {
                        message.actionCompleted.push(reader.bool());

                        continue;
                    }

                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actionCompleted.push(reader.bool());
                        }

                        continue;
                    }

                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ClaimRecord {
        return {
            address: isSet(object.address) ? String(object.address) : '',
            initialClaimableAmount: Array.isArray(object?.initialClaimableAmount) ? object.initialClaimableAmount.map((e: any) => Coin.fromJSON(e)) : [],
            actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e: any) => Boolean(e)) : [],
        };
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

    create<I extends Exact<DeepPartial<ClaimRecord>, I>>(base?: I): ClaimRecord {
        return ClaimRecord.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<ClaimRecord>, I>>(object: I): ClaimRecord {
        const message = createBaseClaimRecord();
        message.address = object.address ?? '';
        message.initialClaimableAmount = object.initialClaimableAmount?.map((e) => Coin.fromPartial(e)) || [];
        message.actionCompleted = object.actionCompleted?.map((e) => e) || [];
        return message;
    },
};

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
