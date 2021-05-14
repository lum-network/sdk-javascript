# Namespace: LumTypes

## Table of contents

### Interfaces

- [Account](../interfaces/lumtypes.account.md)
- [Coin](../interfaces/lumtypes.coin.md)
- [Commission](../interfaces/lumtypes.commission.md)
- [CommissionRates](../interfaces/lumtypes.commissionrates.md)
- [Description](../interfaces/lumtypes.description.md)
- [Doc](../interfaces/lumtypes.doc.md)
- [DocSigner](../interfaces/lumtypes.docsigner.md)
- [Fee](../interfaces/lumtypes.fee.md)
- [Log](../interfaces/lumtypes.log.md)
- [LogAttribute](../interfaces/lumtypes.logattribute.md)
- [LogEvent](../interfaces/lumtypes.logevent.md)
- [PubKey](../interfaces/lumtypes.pubkey.md)
- [SignDoc](../interfaces/lumtypes.signdoc.md)
- [SignMsg](../interfaces/lumtypes.signmsg.md)
- [Tx](../interfaces/lumtypes.tx.md)

### Variables

- [PubKey](lumtypes.md#pubkey)
- [Tx](lumtypes.md#tx)

## Variables

### PubKey

• **PubKey**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*PubKey*](lumtypes.md#pubkey) |
`encode` | (`message`: [*PubKey*](lumtypes.md#pubkey), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*PubKey*](lumtypes.md#pubkey) |
`fromPartial` | (`object`: { `key`: *undefined* \| *Uint8Array*  }) => [*PubKey*](lumtypes.md#pubkey) |
`toJSON` | (`message`: [*PubKey*](lumtypes.md#pubkey)) => *unknown* |

___

### Tx

• **Tx**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*Tx*](lumtypes.md#tx) |
`encode` | (`message`: [*Tx*](lumtypes.md#tx), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*Tx*](lumtypes.md#tx) |
`fromPartial` | (`object`: { `authInfo?`: *undefined* \| { signerInfos?: { publicKey?: { typeUrl?: string \| undefined; value?: Uint8Array \| undefined; } \| undefined; modeInfo?: { single?: { mode?: SignMode \| undefined; } \| undefined; multi?: { ...; } \| undefined; } \| undefined; sequence?: Long \| undefined; }[] \| undefined; fee?: { ...; } \| undefined; } ; `body?`: *undefined* \| { messages?: { typeUrl?: string \| undefined; value?: Uint8Array \| undefined; }[] \| undefined; memo?: string \| undefined; timeoutHeight?: Long \| undefined; extensionOptions?: { ...; }[] \| undefined; nonCriticalExtensionOptions?: { ...; }[] \| undefined; } ; `signatures`: *undefined* \| *Uint8Array*[]  }) => [*Tx*](lumtypes.md#tx) |
`toJSON` | (`message`: [*Tx*](lumtypes.md#tx)) => *unknown* |
