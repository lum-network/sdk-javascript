/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'ibc.applications.interchain_accounts.v1';

/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
    /** version defines the ICS27 protocol version */
    version: string;
    /** controller_connection_id is the connection identifier associated with the controller chain */
    controllerConnectionId: string;
    /** host_connection_id is the connection identifier associated with the host chain */
    hostConnectionId: string;
    /**
     * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
     * NOTE: the address field is empty on the OnChanOpenInit handshake step
     */
    address: string;
    /** encoding defines the supported codec format */
    encoding: string;
    /** tx_type defines the type of transactions the interchain account can execute */
    txType: string;
}

const baseMetadata: object = { version: '', controllerConnectionId: '', hostConnectionId: '', address: '', encoding: '', txType: '' };

export const Metadata = {
    encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        if (message.controllerConnectionId !== '') {
            writer.uint32(18).string(message.controllerConnectionId);
        }
        if (message.hostConnectionId !== '') {
            writer.uint32(26).string(message.hostConnectionId);
        }
        if (message.address !== '') {
            writer.uint32(34).string(message.address);
        }
        if (message.encoding !== '') {
            writer.uint32(42).string(message.encoding);
        }
        if (message.txType !== '') {
            writer.uint32(50).string(message.txType);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMetadata } as Metadata;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.controllerConnectionId = reader.string();
                    break;
                case 3:
                    message.hostConnectionId = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.encoding = reader.string();
                    break;
                case 6:
                    message.txType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Metadata {
        const message = { ...baseMetadata } as Metadata;
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        } else {
            message.version = '';
        }
        if (object.controllerConnectionId !== undefined && object.controllerConnectionId !== null) {
            message.controllerConnectionId = String(object.controllerConnectionId);
        } else {
            message.controllerConnectionId = '';
        }
        if (object.hostConnectionId !== undefined && object.hostConnectionId !== null) {
            message.hostConnectionId = String(object.hostConnectionId);
        } else {
            message.hostConnectionId = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.encoding !== undefined && object.encoding !== null) {
            message.encoding = String(object.encoding);
        } else {
            message.encoding = '';
        }
        if (object.txType !== undefined && object.txType !== null) {
            message.txType = String(object.txType);
        } else {
            message.txType = '';
        }
        return message;
    },

    toJSON(message: Metadata): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        message.controllerConnectionId !== undefined && (obj.controllerConnectionId = message.controllerConnectionId);
        message.hostConnectionId !== undefined && (obj.hostConnectionId = message.hostConnectionId);
        message.address !== undefined && (obj.address = message.address);
        message.encoding !== undefined && (obj.encoding = message.encoding);
        message.txType !== undefined && (obj.txType = message.txType);
        return obj;
    },

    fromPartial(object: DeepPartial<Metadata>): Metadata {
        const message = { ...baseMetadata } as Metadata;
        message.version = object.version ?? '';
        message.controllerConnectionId = object.controllerConnectionId ?? '';
        message.hostConnectionId = object.hostConnectionId ?? '';
        message.address = object.address ?? '';
        message.encoding = object.encoding ?? '';
        message.txType = object.txType ?? '';
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
