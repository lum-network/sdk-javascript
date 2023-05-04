/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.millions';

export enum TransferType {
    TRANSFER_TYPE_UNSPECIFIED = 0,
    TRANSFER_TYPE_CLAIM = 1,
    TRANSFER_TYPE_WITHDRAW = 2,
    UNRECOGNIZED = -1,
}

export function transferTypeFromJSON(object: any): TransferType {
    switch (object) {
        case 0:
        case 'TRANSFER_TYPE_UNSPECIFIED':
            return TransferType.TRANSFER_TYPE_UNSPECIFIED;
        case 1:
        case 'TRANSFER_TYPE_CLAIM':
            return TransferType.TRANSFER_TYPE_CLAIM;
        case 2:
        case 'TRANSFER_TYPE_WITHDRAW':
            return TransferType.TRANSFER_TYPE_WITHDRAW;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return TransferType.UNRECOGNIZED;
    }
}

export function transferTypeToJSON(object: TransferType): string {
    switch (object) {
        case TransferType.TRANSFER_TYPE_UNSPECIFIED:
            return 'TRANSFER_TYPE_UNSPECIFIED';
        case TransferType.TRANSFER_TYPE_CLAIM:
            return 'TRANSFER_TYPE_CLAIM';
        case TransferType.TRANSFER_TYPE_WITHDRAW:
            return 'TRANSFER_TYPE_WITHDRAW';
        default:
            return 'UNKNOWN';
    }
}

export interface SplitDelegation {
    validatorAddress: string;
    amount: string;
}

export interface DelegateCallback {
    poolId: Long;
    depositId: Long;
    splitDelegations: SplitDelegation[];
}

export interface UndelegateCallback {
    poolId: Long;
    withdrawalId: Long;
    splitDelegations: SplitDelegation[];
}

export interface RedelegateCallback {
    poolId: Long;
    splitDelegation?: SplitDelegation;
}

export interface ClaimRewardsCallback {
    poolId: Long;
    drawId: Long;
}

export interface TransferToNativeCallback {
    poolId: Long;
    depositId: Long;
}

export interface TransferFromNativeCallback {
    type: TransferType;
    poolId: Long;
    drawId: Long;
    withdrawalId: Long;
}

export interface SetWithdrawAddressCallback {
    poolId: Long;
}

const baseSplitDelegation: object = { validatorAddress: '', amount: '' };

export const SplitDelegation = {
    encode(message: SplitDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.validatorAddress !== '') {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SplitDelegation {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSplitDelegation } as SplitDelegation;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SplitDelegation {
        const message = { ...baseSplitDelegation } as SplitDelegation;
        if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        } else {
            message.validatorAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        } else {
            message.amount = '';
        }
        return message;
    },

    toJSON(message: SplitDelegation): unknown {
        const obj: any = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },

    fromPartial(object: DeepPartial<SplitDelegation>): SplitDelegation {
        const message = { ...baseSplitDelegation } as SplitDelegation;
        message.validatorAddress = object.validatorAddress ?? '';
        message.amount = object.amount ?? '';
        return message;
    },
};

const baseDelegateCallback: object = { poolId: Long.UZERO, depositId: Long.UZERO };

export const DelegateCallback = {
    encode(message: DelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        for (const v of message.splitDelegations) {
            SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DelegateCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDelegateCallback } as DelegateCallback;
        message.splitDelegations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.depositId = reader.uint64() as Long;
                    break;
                case 3:
                    message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DelegateCallback {
        const message = { ...baseDelegateCallback } as DelegateCallback;
        message.splitDelegations = [];
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
        if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
            for (const e of object.splitDelegations) {
                message.splitDelegations.push(SplitDelegation.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: DelegateCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        if (message.splitDelegations) {
            obj.splitDelegations = message.splitDelegations.map((e) => (e ? SplitDelegation.toJSON(e) : undefined));
        } else {
            obj.splitDelegations = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<DelegateCallback>): DelegateCallback {
        const message = { ...baseDelegateCallback } as DelegateCallback;
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
        message.splitDelegations = [];
        if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
            for (const e of object.splitDelegations) {
                message.splitDelegations.push(SplitDelegation.fromPartial(e));
            }
        }
        return message;
    },
};

const baseUndelegateCallback: object = { poolId: Long.UZERO, withdrawalId: Long.UZERO };

export const UndelegateCallback = {
    encode(message: UndelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        for (const v of message.splitDelegations) {
            SplitDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUndelegateCallback } as UndelegateCallback;
        message.splitDelegations = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                case 3:
                    message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UndelegateCallback {
        const message = { ...baseUndelegateCallback } as UndelegateCallback;
        message.splitDelegations = [];
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
        if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
            for (const e of object.splitDelegations) {
                message.splitDelegations.push(SplitDelegation.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: UndelegateCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        if (message.splitDelegations) {
            obj.splitDelegations = message.splitDelegations.map((e) => (e ? SplitDelegation.toJSON(e) : undefined));
        } else {
            obj.splitDelegations = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<UndelegateCallback>): UndelegateCallback {
        const message = { ...baseUndelegateCallback } as UndelegateCallback;
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
        message.splitDelegations = [];
        if (object.splitDelegations !== undefined && object.splitDelegations !== null) {
            for (const e of object.splitDelegations) {
                message.splitDelegations.push(SplitDelegation.fromPartial(e));
            }
        }
        return message;
    },
};

const baseRedelegateCallback: object = { poolId: Long.UZERO };

export const RedelegateCallback = {
    encode(message: RedelegateCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.splitDelegation !== undefined) {
            SplitDelegation.encode(message.splitDelegation, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegateCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRedelegateCallback } as RedelegateCallback;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.splitDelegation = SplitDelegation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RedelegateCallback {
        const message = { ...baseRedelegateCallback } as RedelegateCallback;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.splitDelegation !== undefined && object.splitDelegation !== null) {
            message.splitDelegation = SplitDelegation.fromJSON(object.splitDelegation);
        } else {
            message.splitDelegation = undefined;
        }
        return message;
    },

    toJSON(message: RedelegateCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.splitDelegation !== undefined && (obj.splitDelegation = message.splitDelegation ? SplitDelegation.toJSON(message.splitDelegation) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<RedelegateCallback>): RedelegateCallback {
        const message = { ...baseRedelegateCallback } as RedelegateCallback;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.splitDelegation !== undefined && object.splitDelegation !== null) {
            message.splitDelegation = SplitDelegation.fromPartial(object.splitDelegation);
        } else {
            message.splitDelegation = undefined;
        }
        return message;
    },
};

const baseClaimRewardsCallback: object = { poolId: Long.UZERO, drawId: Long.UZERO };

export const ClaimRewardsCallback = {
    encode(message: ClaimRewardsCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimRewardsCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClaimRewardsCallback } as ClaimRewardsCallback;
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

    fromJSON(object: any): ClaimRewardsCallback {
        const message = { ...baseClaimRewardsCallback } as ClaimRewardsCallback;
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

    toJSON(message: ClaimRewardsCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<ClaimRewardsCallback>): ClaimRewardsCallback {
        const message = { ...baseClaimRewardsCallback } as ClaimRewardsCallback;
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

const baseTransferToNativeCallback: object = { poolId: Long.UZERO, depositId: Long.UZERO };

export const TransferToNativeCallback = {
    encode(message: TransferToNativeCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TransferToNativeCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransferToNativeCallback } as TransferToNativeCallback;
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

    fromJSON(object: any): TransferToNativeCallback {
        const message = { ...baseTransferToNativeCallback } as TransferToNativeCallback;
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

    toJSON(message: TransferToNativeCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<TransferToNativeCallback>): TransferToNativeCallback {
        const message = { ...baseTransferToNativeCallback } as TransferToNativeCallback;
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

const baseTransferFromNativeCallback: object = { type: 0, poolId: Long.UZERO, drawId: Long.UZERO, withdrawalId: Long.UZERO };

export const TransferFromNativeCallback = {
    encode(message: TransferFromNativeCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(24).uint64(message.drawId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(32).uint64(message.withdrawalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TransferFromNativeCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransferFromNativeCallback } as TransferFromNativeCallback;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32() as any;
                    break;
                case 2:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 3:
                    message.drawId = reader.uint64() as Long;
                    break;
                case 4:
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TransferFromNativeCallback {
        const message = { ...baseTransferFromNativeCallback } as TransferFromNativeCallback;
        if (object.type !== undefined && object.type !== null) {
            message.type = transferTypeFromJSON(object.type);
        } else {
            message.type = 0;
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
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = Long.fromString(object.withdrawalId);
        } else {
            message.withdrawalId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: TransferFromNativeCallback): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<TransferFromNativeCallback>): TransferFromNativeCallback {
        const message = { ...baseTransferFromNativeCallback } as TransferFromNativeCallback;
        message.type = object.type ?? 0;
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
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = object.withdrawalId as Long;
        } else {
            message.withdrawalId = Long.UZERO;
        }
        return message;
    },
};

const baseSetWithdrawAddressCallback: object = { poolId: Long.UZERO };

export const SetWithdrawAddressCallback = {
    encode(message: SetWithdrawAddressCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetWithdrawAddressCallback {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSetWithdrawAddressCallback } as SetWithdrawAddressCallback;
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

    fromJSON(object: any): SetWithdrawAddressCallback {
        const message = { ...baseSetWithdrawAddressCallback } as SetWithdrawAddressCallback;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: SetWithdrawAddressCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<SetWithdrawAddressCallback>): SetWithdrawAddressCallback {
        const message = { ...baseSetWithdrawAddressCallback } as SetWithdrawAddressCallback;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
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
