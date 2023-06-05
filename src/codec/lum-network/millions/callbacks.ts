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
        case TransferType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
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

function createBaseSplitDelegation(): SplitDelegation {
    return { validatorAddress: '', amount: '' };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSplitDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.validatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.amount = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SplitDelegation {
        return {
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : '',
            amount: isSet(object.amount) ? String(object.amount) : '',
        };
    },

    toJSON(message: SplitDelegation): unknown {
        const obj: any = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },

    create<I extends Exact<DeepPartial<SplitDelegation>, I>>(base?: I): SplitDelegation {
        return SplitDelegation.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<SplitDelegation>, I>>(object: I): SplitDelegation {
        const message = createBaseSplitDelegation();
        message.validatorAddress = object.validatorAddress ?? '';
        message.amount = object.amount ?? '';
        return message;
    },
};

function createBaseDelegateCallback(): DelegateCallback {
    return { poolId: Long.UZERO, depositId: Long.UZERO, splitDelegations: [] };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegateCallback();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DelegateCallback {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
            splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : [],
        };
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

    create<I extends Exact<DeepPartial<DelegateCallback>, I>>(base?: I): DelegateCallback {
        return DelegateCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<DelegateCallback>, I>>(object: I): DelegateCallback {
        const message = createBaseDelegateCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.splitDelegations = object.splitDelegations?.map((e) => SplitDelegation.fromPartial(e)) || [];
        return message;
    },
};

function createBaseUndelegateCallback(): UndelegateCallback {
    return { poolId: Long.UZERO, withdrawalId: Long.UZERO, splitDelegations: [] };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUndelegateCallback();
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.splitDelegations.push(SplitDelegation.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): UndelegateCallback {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO,
            splitDelegations: Array.isArray(object?.splitDelegations) ? object.splitDelegations.map((e: any) => SplitDelegation.fromJSON(e)) : [],
        };
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

    create<I extends Exact<DeepPartial<UndelegateCallback>, I>>(base?: I): UndelegateCallback {
        return UndelegateCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<UndelegateCallback>, I>>(object: I): UndelegateCallback {
        const message = createBaseUndelegateCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        message.splitDelegations = object.splitDelegations?.map((e) => SplitDelegation.fromPartial(e)) || [];
        return message;
    },
};

function createBaseRedelegateCallback(): RedelegateCallback {
    return { poolId: Long.UZERO, splitDelegation: undefined };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegateCallback();
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

                    message.splitDelegation = SplitDelegation.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): RedelegateCallback {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            splitDelegation: isSet(object.splitDelegation) ? SplitDelegation.fromJSON(object.splitDelegation) : undefined,
        };
    },

    toJSON(message: RedelegateCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.splitDelegation !== undefined && (obj.splitDelegation = message.splitDelegation ? SplitDelegation.toJSON(message.splitDelegation) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<RedelegateCallback>, I>>(base?: I): RedelegateCallback {
        return RedelegateCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<RedelegateCallback>, I>>(object: I): RedelegateCallback {
        const message = createBaseRedelegateCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.splitDelegation = object.splitDelegation !== undefined && object.splitDelegation !== null ? SplitDelegation.fromPartial(object.splitDelegation) : undefined;
        return message;
    },
};

function createBaseClaimRewardsCallback(): ClaimRewardsCallback {
    return { poolId: Long.UZERO, drawId: Long.UZERO };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRewardsCallback();
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

    fromJSON(object: any): ClaimRewardsCallback {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
        };
    },

    toJSON(message: ClaimRewardsCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<ClaimRewardsCallback>, I>>(base?: I): ClaimRewardsCallback {
        return ClaimRewardsCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<ClaimRewardsCallback>, I>>(object: I): ClaimRewardsCallback {
        const message = createBaseClaimRewardsCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        return message;
    },
};

function createBaseTransferToNativeCallback(): TransferToNativeCallback {
    return { poolId: Long.UZERO, depositId: Long.UZERO };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferToNativeCallback();
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

    fromJSON(object: any): TransferToNativeCallback {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
        };
    },

    toJSON(message: TransferToNativeCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<TransferToNativeCallback>, I>>(base?: I): TransferToNativeCallback {
        return TransferToNativeCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<TransferToNativeCallback>, I>>(object: I): TransferToNativeCallback {
        const message = createBaseTransferToNativeCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        return message;
    },
};

function createBaseTransferFromNativeCallback(): TransferFromNativeCallback {
    return { type: 0, poolId: Long.UZERO, drawId: Long.UZERO, withdrawalId: Long.UZERO };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferFromNativeCallback();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.type = reader.int32() as any;
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
                    if (tag !== 32) {
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

    fromJSON(object: any): TransferFromNativeCallback {
        return {
            type: isSet(object.type) ? transferTypeFromJSON(object.type) : 0,
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO,
        };
    },

    toJSON(message: TransferFromNativeCallback): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<TransferFromNativeCallback>, I>>(base?: I): TransferFromNativeCallback {
        return TransferFromNativeCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<TransferFromNativeCallback>, I>>(object: I): TransferFromNativeCallback {
        const message = createBaseTransferFromNativeCallback();
        message.type = object.type ?? 0;
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
};

function createBaseSetWithdrawAddressCallback(): SetWithdrawAddressCallback {
    return { poolId: Long.UZERO };
}

export const SetWithdrawAddressCallback = {
    encode(message: SetWithdrawAddressCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetWithdrawAddressCallback {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetWithdrawAddressCallback();
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

    fromJSON(object: any): SetWithdrawAddressCallback {
        return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
    },

    toJSON(message: SetWithdrawAddressCallback): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<SetWithdrawAddressCallback>, I>>(base?: I): SetWithdrawAddressCallback {
        return SetWithdrawAddressCallback.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<SetWithdrawAddressCallback>, I>>(object: I): SetWithdrawAddressCallback {
        const message = createBaseSetWithdrawAddressCallback();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
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
