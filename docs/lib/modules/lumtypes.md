# Namespace: LumTypes

## Table of contents

### Interfaces

- [Account](../interfaces/LumTypes.Account.md)
- [Coin](../interfaces/LumTypes.Coin.md)
- [Commission](../interfaces/LumTypes.Commission.md)
- [CommissionRates](../interfaces/LumTypes.CommissionRates.md)
- [Description](../interfaces/LumTypes.Description.md)
- [Doc](../interfaces/LumTypes.Doc.md)
- [DocSigner](../interfaces/LumTypes.DocSigner.md)
- [Fee](../interfaces/LumTypes.Fee.md)
- [Log](../interfaces/LumTypes.Log.md)
- [LogAttribute](../interfaces/LumTypes.LogAttribute.md)
- [LogEvent](../interfaces/LumTypes.LogEvent.md)
- [PubKey](../interfaces/LumTypes.PubKey.md)
- [SignDoc](../interfaces/LumTypes.SignDoc.md)
- [SignMsg](../interfaces/LumTypes.SignMsg.md)
- [Tx](../interfaces/LumTypes.Tx.md)

### Variables

- [PubKey](LumTypes.md#pubkey)
- [Tx](LumTypes.md#tx)

## Variables

### PubKey

• **PubKey**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`PubKey`](LumTypes.md#pubkey) |
| `encode` | (`message`: [`PubKey`](LumTypes.md#pubkey), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`PubKey`](LumTypes.md#pubkey) |
| `fromPartial` | (`object`: { `key?`: `Uint8Array`  }) => [`PubKey`](LumTypes.md#pubkey) |
| `toJSON` | (`message`: [`PubKey`](LumTypes.md#pubkey)) => `unknown` |

___

### Tx

• **Tx**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `decode` | (`input`: `Uint8Array` \| `Reader`, `length?`: `number`) => [`Tx`](LumTypes.md#tx) |
| `encode` | (`message`: [`Tx`](LumTypes.md#tx), `writer`: `Writer`) => `Writer` |
| `fromJSON` | (`object`: `any`) => [`Tx`](LumTypes.md#tx) |
| `fromPartial` | (`object`: { `authInfo?`: { signerInfos?: { publicKey?: { typeUrl?: string \| undefined; value?: Uint8Array \| undefined; } \| undefined; modeInfo?: { single?: { mode?: SignMode \| undefined; } \| undefined; multi?: { ...; } \| undefined; } \| undefined; sequence?: Long \| undefined; }[] \| undefined; fee?: { ...; } \| undefined; tip?: { ...; } \| unde... ; `body?`: { messages?: { typeUrl?: string \| undefined; value?: Uint8Array \| undefined; }[] \| undefined; memo?: string \| undefined; timeoutHeight?: Long \| undefined; extensionOptions?: { ...; }[] \| undefined; nonCriticalExtensionOptions?: { ...; }[] \| undefined; } ; `signatures?`: `Uint8Array`[]  }) => [`Tx`](LumTypes.md#tx) |
| `toJSON` | (`message`: [`Tx`](LumTypes.md#tx)) => `unknown` |
