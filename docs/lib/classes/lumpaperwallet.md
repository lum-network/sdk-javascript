# Class: LumPaperWallet

## Hierarchy

- [`LumWallet`](LumWallet.md)

  ↳ **`LumPaperWallet`**

## Table of contents

### Constructors

- [constructor](LumPaperWallet.md#constructor)

### Properties

- [address](LumPaperWallet.md#address)
- [mnemonic](LumPaperWallet.md#mnemonic)
- [privateKey](LumPaperWallet.md#privatekey)
- [publicKey](LumPaperWallet.md#publickey)

### Methods

- [canChangeAccount](LumPaperWallet.md#canchangeaccount)
- [getAddress](LumPaperWallet.md#getaddress)
- [getPublicKey](LumPaperWallet.md#getpublickey)
- [sign](LumPaperWallet.md#sign)
- [signMessage](LumPaperWallet.md#signmessage)
- [signTransaction](LumPaperWallet.md#signtransaction)
- [signingMode](LumPaperWallet.md#signingmode)
- [useAccount](LumPaperWallet.md#useaccount)

## Constructors

### constructor

• **new LumPaperWallet**(`mnemonicOrPrivateKey`)

Create a LumPaperWallet instance based on a mnemonic or a private key
This constructor is not intended to be used directly as it does not initialize the underlying key pair
Better use the provided static LumPaperWallet builders

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonicOrPrivateKey` | `string` \| `Uint8Array` | mnemonic (string) used to derive the private key or private key (Uint8Array) |

#### Overrides

[LumWallet](LumWallet.md).[constructor](LumWallet.md#constructor)

## Properties

### address

• `Protected` `Optional` **address**: `string`

#### Inherited from

[LumWallet](LumWallet.md).[address](LumWallet.md#address)

___

### mnemonic

• `Private` `Optional` `Readonly` **mnemonic**: `string`

___

### privateKey

• `Private` `Optional` **privateKey**: `Uint8Array`

___

### publicKey

• `Protected` `Optional` **publicKey**: `Uint8Array`

#### Inherited from

[LumWallet](LumWallet.md).[publicKey](LumWallet.md#publickey)

## Methods

### canChangeAccount

▸ **canChangeAccount**(): `boolean`

Whether or not the wallet support changing account
Basically only wallet initialized using a private key should not be able to do so

#### Returns

`boolean`

#### Overrides

[LumWallet](LumWallet.md).[canChangeAccount](LumWallet.md#canchangeaccount)

___

### getAddress

▸ **getAddress**(): `string`

Gets the current wallet address

**`see`** [LumWallet.useAccount](LumWallet.md#useaccount)

#### Returns

`string`

wallet address (Bech32)

#### Inherited from

[LumWallet](LumWallet.md).[getAddress](LumWallet.md#getaddress)

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

Gets the current wallet public key

**`see`** [LumWallet.useAccount](LumWallet.md#useaccount)

#### Returns

`Uint8Array`

wallet public key (secp256k1)

#### Inherited from

[LumWallet](LumWallet.md).[getPublicKey](LumWallet.md#getpublickey)

___

### sign

▸ **sign**(`data`): `Promise`<`Uint8Array`\>

Sign a raw payload.
This method might not be available for all types of wallets such as Ledger.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`Uint8Array`\>

#### Overrides

[LumWallet](LumWallet.md).[sign](LumWallet.md#sign)

___

### signMessage

▸ **signMessage**(`msg`): `Promise`<[`SignMsg`](../interfaces/LumTypes.SignMsg.md)\>

Sign a message using a LumWallet
Provided for signature generation and verification as signature will depend on the wallet payload implementation

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`Promise`<[`SignMsg`](../interfaces/LumTypes.SignMsg.md)\>

#### Overrides

[LumWallet](LumWallet.md).[signMessage](LumWallet.md#signmessage)

___

### signTransaction

▸ **signTransaction**(`doc`): `Promise`<[[`SignDoc`](../interfaces/LumTypes.SignDoc.md), `Uint8Array`]\>

Sign a transaction document using a LumWallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`Doc`](../interfaces/LumTypes.Doc.md) |

#### Returns

`Promise`<[[`SignDoc`](../interfaces/LumTypes.SignDoc.md), `Uint8Array`]\>

#### Overrides

[LumWallet](LumWallet.md).[signTransaction](LumWallet.md#signtransaction)

___

### signingMode

▸ **signingMode**(): `SignMode`

Gets the wallet signin mode

#### Returns

`SignMode`

#### Overrides

[LumWallet](LumWallet.md).[signingMode](LumWallet.md#signingmode)

___

### useAccount

▸ **useAccount**(`hdPath?`, `addressPrefix?`): `Promise`<`boolean`\>

Change the wallet to use

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hdPath` | `string` | `undefined` |
| `addressPrefix` | `string` | `LumConstants.LumBech32PrefixAccAddr` |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[LumWallet](LumWallet.md).[useAccount](LumWallet.md#useaccount)
