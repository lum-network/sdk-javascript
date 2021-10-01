# Class: LumWallet

## Hierarchy

- **`LumWallet`**

  ↳ [`LumLedgerWallet`](LumLedgerWallet.md)

  ↳ [`LumPaperWallet`](LumPaperWallet.md)

## Table of contents

### Constructors

- [constructor](LumWallet.md#constructor)

### Properties

- [address](LumWallet.md#address)
- [publicKey](LumWallet.md#publickey)

### Methods

- [canChangeAccount](LumWallet.md#canchangeaccount)
- [getAddress](LumWallet.md#getaddress)
- [getPublicKey](LumWallet.md#getpublickey)
- [sign](LumWallet.md#sign)
- [signMessage](LumWallet.md#signmessage)
- [signTransaction](LumWallet.md#signtransaction)
- [signingMode](LumWallet.md#signingmode)
- [useAccount](LumWallet.md#useaccount)

## Constructors

### constructor

• **new LumWallet**()

## Properties

### address

• `Protected` `Optional` **address**: `string`

___

### publicKey

• `Protected` `Optional` **publicKey**: `Uint8Array`

## Methods

### canChangeAccount

▸ `Abstract` **canChangeAccount**(): `boolean`

Whether or not the wallet support changing account
Basically only wallet initialized using a private key should not be able to do so

**`see`** [LumWallet.useAccount](LumWallet.md#useaccount)

#### Returns

`boolean`

___

### getAddress

▸ **getAddress**(): `string`

Gets the current wallet address

**`see`** [LumWallet.useAccount](LumWallet.md#useaccount)

#### Returns

`string`

wallet address (Bech32)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

Gets the current wallet public key

**`see`** [LumWallet.useAccount](LumWallet.md#useaccount)

#### Returns

`Uint8Array`

wallet public key (secp256k1)

___

### sign

▸ `Abstract` **sign**(`data`): `Promise`<`Uint8Array`\>

Sign a raw payload.
This method might not be available for all types of wallets such as Ledger.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | the payload to sign directly |

#### Returns

`Promise`<`Uint8Array`\>

___

### signMessage

▸ `Abstract` **signMessage**(`msg`): `Promise`<[`SignMsg`](../interfaces/LumTypes.SignMsg.md)\>

Sign a message using a LumWallet
Provided for signature generation and verification as signature will depend on the wallet payload implementation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | message to sign |

#### Returns

`Promise`<[`SignMsg`](../interfaces/LumTypes.SignMsg.md)\>

___

### signTransaction

▸ `Abstract` **signTransaction**(`doc`): `Promise`<[[`SignDoc`](../interfaces/LumTypes.SignDoc.md), `Uint8Array`]\>

Sign a transaction document using a LumWallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doc` | [`Doc`](../interfaces/LumTypes.Doc.md) | document to sign |

#### Returns

`Promise`<[[`SignDoc`](../interfaces/LumTypes.SignDoc.md), `Uint8Array`]\>

___

### signingMode

▸ `Abstract` **signingMode**(): `SignMode`

Gets the wallet signin mode

#### Returns

`SignMode`

___

### useAccount

▸ `Abstract` **useAccount**(`hdPath`, `addressPrefix`): `Promise`<`boolean`\>

Change the wallet to use

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | BIP44 HD Path |
| `addressPrefix` | `string` | prefix to use (ex: lum) |

#### Returns

`Promise`<`boolean`\>
