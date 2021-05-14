# Class: LumLedgerWallet

## Hierarchy

* [*LumWallet*](lumwallet.md)

  ↳ **LumLedgerWallet**

## Table of contents

### Constructors

- [constructor](lumledgerwallet.md#constructor)

### Properties

- [address](lumledgerwallet.md#address)
- [cosmosApp](lumledgerwallet.md#cosmosapp)
- [hdPath](lumledgerwallet.md#hdpath)
- [publicKey](lumledgerwallet.md#publickey)

### Methods

- [canChangeAccount](lumledgerwallet.md#canchangeaccount)
- [getAddress](lumledgerwallet.md#getaddress)
- [getAppConfiguration](lumledgerwallet.md#getappconfiguration)
- [getPublicKey](lumledgerwallet.md#getpublickey)
- [sign](lumledgerwallet.md#sign)
- [signMessage](lumledgerwallet.md#signmessage)
- [signTransaction](lumledgerwallet.md#signtransaction)
- [signingMode](lumledgerwallet.md#signingmode)
- [useAccount](lumledgerwallet.md#useaccount)

## Constructors

### constructor

\+ **new LumLedgerWallet**(`transport`: *Transport*<string\>): [*LumLedgerWallet*](lumledgerwallet.md)

#### Parameters:

Name | Type |
:------ | :------ |
`transport` | *Transport*<string\> |

**Returns:** [*LumLedgerWallet*](lumledgerwallet.md)

Inherited from: [LumWallet](lumwallet.md)

## Properties

### address

• `Protected` `Optional` **address**: *undefined* \| *string*

Inherited from: [LumWallet](lumwallet.md).[address](lumwallet.md#address)

___

### cosmosApp

• **cosmosApp**: *default*

___

### hdPath

• `Private` `Optional` **hdPath**: *undefined* \| *string*

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

### getAppConfiguration

▸ **getAppConfiguration**(): *Promise*<{ `device_locked`: *boolean* ; `major`: *string* ; `test_mode`: *boolean* ; `version`: *string*  }\>

Gets the connected application configuration

**Returns:** *Promise*<{ `device_locked`: *boolean* ; `major`: *string* ; `test_mode`: *boolean* ; `version`: *string*  }\>

___

### getPublicKey

▸ **getPublicKey**(): *Uint8Array*

Gets the current wallet public key

**`see`** [LumWallet.useAccount](lumwallet.md#useaccount)

**Returns:** *Uint8Array*

wallet public key (secp256k1)

Inherited from: [LumWallet](lumwallet.md)

___

### sign

▸ **sign**(): *Promise*<Uint8Array\>

**Returns:** *Promise*<Uint8Array\>

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

▸ **useAccount**(`hdPath`: *string*, `addressPrefix`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`hdPath` | *string* |
`addressPrefix` | *string* |

**Returns:** *Promise*<boolean\>

Inherited from: [LumWallet](lumwallet.md)
