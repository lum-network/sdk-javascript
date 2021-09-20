# Class: LumLedgerWallet

## Hierarchy

- [`LumWallet`](LumWallet.md)

  ↳ **`LumLedgerWallet`**

## Table of contents

### Constructors

- [constructor](LumLedgerWallet.md#constructor)

### Properties

- [address](LumLedgerWallet.md#address)
- [cosmosApp](LumLedgerWallet.md#cosmosapp)
- [hdPath](LumLedgerWallet.md#hdpath)
- [publicKey](LumLedgerWallet.md#publickey)

### Methods

- [canChangeAccount](LumLedgerWallet.md#canchangeaccount)
- [getAddress](LumLedgerWallet.md#getaddress)
- [getAppConfiguration](LumLedgerWallet.md#getappconfiguration)
- [getPublicKey](LumLedgerWallet.md#getpublickey)
- [sign](LumLedgerWallet.md#sign)
- [signMessage](LumLedgerWallet.md#signmessage)
- [signTransaction](LumLedgerWallet.md#signtransaction)
- [signingMode](LumLedgerWallet.md#signingmode)
- [useAccount](LumLedgerWallet.md#useaccount)

## Constructors

### constructor

• **new LumLedgerWallet**(`transport`, `scrambleKey?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transport` | `default` | `undefined` |
| `scrambleKey` | `string` | `'CSM'` |

#### Overrides

[LumWallet](LumWallet.md).[constructor](LumWallet.md#constructor)

## Properties

### address

• `Protected` `Optional` **address**: `string`

#### Inherited from

[LumWallet](LumWallet.md).[address](LumWallet.md#address)

___

### cosmosApp

• **cosmosApp**: `default`

___

### hdPath

• `Private` `Optional` **hdPath**: `string`

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

### getAppConfiguration

▸ **getAppConfiguration**(): `Promise`<`Object`\>

Gets the connected application configuration

#### Returns

`Promise`<`Object`\>

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

▸ **sign**(): `Promise`<`Uint8Array`\>

Sign a raw payload.
This method might not be available for all types of wallets such as Ledger.

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

▸ **signTransaction**(`doc`): `Promise`<`Uint8Array`\>

Sign a transaction document using a LumWallet

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | [`Doc`](../interfaces/LumTypes.Doc.md) |

#### Returns

`Promise`<`Uint8Array`\>

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

▸ **useAccount**(`hdPath`, `addressPrefix`): `Promise`<`boolean`\>

Change the wallet to use

#### Parameters

| Name | Type |
| :------ | :------ |
| `hdPath` | `string` |
| `addressPrefix` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Overrides

[LumWallet](LumWallet.md).[useAccount](LumWallet.md#useaccount)
