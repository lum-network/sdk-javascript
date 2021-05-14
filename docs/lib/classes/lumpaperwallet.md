# Class: LumPaperWallet

## Hierarchy

* [*LumWallet*](lumwallet.md)

  ↳ **LumPaperWallet**

## Table of contents

### Constructors

- [constructor](lumpaperwallet.md#constructor)

### Properties

- [address](lumpaperwallet.md#address)
- [mnemonic](lumpaperwallet.md#mnemonic)
- [privateKey](lumpaperwallet.md#privatekey)
- [publicKey](lumpaperwallet.md#publickey)

### Methods

- [canChangeAccount](lumpaperwallet.md#canchangeaccount)
- [getAddress](lumpaperwallet.md#getaddress)
- [getPublicKey](lumpaperwallet.md#getpublickey)
- [signMessage](lumpaperwallet.md#signmessage)
- [signTransaction](lumpaperwallet.md#signtransaction)
- [signingMode](lumpaperwallet.md#signingmode)
- [useAccount](lumpaperwallet.md#useaccount)

## Constructors

### constructor

\+ **new LumPaperWallet**(`mnemonicOrPrivateKey`: *string* \| *Uint8Array*): [*LumPaperWallet*](lumpaperwallet.md)

Create a LumPaperWallet instance based on a mnemonic or a private key
This constructor is not intended to be used directly as it does not initialize the underlying key pair
Better use the provided static LumPaperWallet builders

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`mnemonicOrPrivateKey` | *string* \| *Uint8Array* | mnemonic (string) used to derive the private key or private key (Uint8Array)    |

**Returns:** [*LumPaperWallet*](lumpaperwallet.md)

Inherited from: [LumWallet](lumwallet.md)

## Properties

### address

• `Protected` `Optional` **address**: *undefined* \| *string*

Inherited from: [LumWallet](lumwallet.md).[address](lumwallet.md#address)

___

### mnemonic

• `Private` `Optional` `Readonly` **mnemonic**: *undefined* \| *string*

___

### privateKey

• `Optional` **privateKey**: *undefined* \| *Uint8Array*

___

### publicKey

• `Protected` `Optional` **publicKey**: *undefined* \| *Uint8Array*

Inherited from: [LumWallet](lumwallet.md).[publicKey](lumwallet.md#publickey)

## Methods

### canChangeAccount

▸ **canChangeAccount**(): *boolean*

**Returns:** *boolean*

Inherited from: [LumWallet](lumwallet.md)

___

### getAddress

▸ **getAddress**(): *string*

Gets the current wallet address

**`see`** [LumWallet.useAccount](lumwallet.md#useaccount)

**Returns:** *string*

wallet address (Bech32)

Inherited from: [LumWallet](lumwallet.md)

___

### getPublicKey

▸ **getPublicKey**(): *Uint8Array*

Gets the current wallet public key

**`see`** [LumWallet.useAccount](lumwallet.md#useaccount)

**Returns:** *Uint8Array*

wallet public key (secp256k1)

Inherited from: [LumWallet](lumwallet.md)

___

### signMessage

▸ **signMessage**(`msg`: *string*): *Promise*<[*SignMsg*](../interfaces/lumtypes.signmsg.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | *string* |

**Returns:** *Promise*<[*SignMsg*](../interfaces/lumtypes.signmsg.md)\>

Inherited from: [LumWallet](lumwallet.md)

___

### signTransaction

▸ **signTransaction**(`doc`: [*Doc*](../interfaces/lumtypes.doc.md)): *Promise*<Uint8Array\>

#### Parameters:

Name | Type |
:------ | :------ |
`doc` | [*Doc*](../interfaces/lumtypes.doc.md) |

**Returns:** *Promise*<Uint8Array\>

Inherited from: [LumWallet](lumwallet.md)

___

### signingMode

▸ **signingMode**(): SignMode

**Returns:** SignMode

Inherited from: [LumWallet](lumwallet.md)

___

### useAccount

▸ **useAccount**(`hdPath?`: *string*, `addressPrefix?`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`hdPath` | *string* |
`addressPrefix` | *string* |

**Returns:** *Promise*<boolean\>

Inherited from: [LumWallet](lumwallet.md)
