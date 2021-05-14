# Class: LumWallet

## Hierarchy

* **LumWallet**

  ↳ [*LumLedgerWallet*](lumledgerwallet.md)

  ↳ [*LumPaperWallet*](lumpaperwallet.md)

## Table of contents

### Constructors

- [constructor](lumwallet.md#constructor)

### Properties

- [address](lumwallet.md#address)
- [publicKey](lumwallet.md#publickey)

### Methods

- [canChangeAccount](lumwallet.md#canchangeaccount)
- [getAddress](lumwallet.md#getaddress)
- [getPublicKey](lumwallet.md#getpublickey)
- [sign](lumwallet.md#sign)
- [signMessage](lumwallet.md#signmessage)
- [signTransaction](lumwallet.md#signtransaction)
- [signingMode](lumwallet.md#signingmode)
- [useAccount](lumwallet.md#useaccount)

## Constructors

### constructor

\+ **new LumWallet**(): [*LumWallet*](lumwallet.md)

**Returns:** [*LumWallet*](lumwallet.md)

## Properties

### address

• `Protected` `Optional` **address**: *undefined* \| *string*

___

### publicKey

• `Protected` `Optional` **publicKey**: *undefined* \| *Uint8Array*

## Methods

### canChangeAccount

▸ `Abstract`**canChangeAccount**(): *boolean*

Whether or not the wallet support changing account
Basically only wallet initialized using a private key should not be able to do so

**`see`** [LumWallet.useAccount](lumwallet.md#useaccount)

**Returns:** *boolean*

___

### getAddress

▸ **getAddress**(): *string*

Gets the current wallet address

**`see`** [LumWallet.useAccount](lumwallet.md#useaccount)

**Returns:** *string*

wallet address (Bech32)

___

### getPublicKey

▸ **getPublicKey**(): *Uint8Array*

Gets the current wallet public key

**`see`** [LumWallet.useAccount](lumwallet.md#useaccount)

**Returns:** *Uint8Array*

wallet public key (secp256k1)

___

### sign

▸ `Abstract`**sign**(`data`: *Uint8Array*): *Promise*<Uint8Array\>

Sign a raw payload.
This method might not be available for all types of wallets such as Ledger.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *Uint8Array* | the payload to sign directly    |

**Returns:** *Promise*<Uint8Array\>

___

### signMessage

▸ `Abstract`**signMessage**(`msg`: *string*): *Promise*<[*SignMsg*](../interfaces/lumtypes.signmsg.md)\>

Sign a message using a LumWallet
Provided for signature generation and verification as signature will depend on the wallet payload implementation

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`msg` | *string* | message to sign    |

**Returns:** *Promise*<[*SignMsg*](../interfaces/lumtypes.signmsg.md)\>

___

### signTransaction

▸ `Abstract`**signTransaction**(`doc`: [*Doc*](../interfaces/lumtypes.doc.md)): *Promise*<Uint8Array\>

Sign a transaction document using a LumWallet

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`doc` | [*Doc*](../interfaces/lumtypes.doc.md) | document to sign    |

**Returns:** *Promise*<Uint8Array\>

___

### signingMode

▸ `Abstract`**signingMode**(): SignMode

Gets the wallet signin mode

**Returns:** SignMode

___

### useAccount

▸ `Abstract`**useAccount**(`hdPath`: *string*, `addressPrefix`: *string*): *Promise*<boolean\>

Change the wallet to use

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hdPath` | *string* | BIP44 HD Path   |
`addressPrefix` | *string* | prefix to use (ex: lum)    |

**Returns:** *Promise*<boolean\>
