# Class: LumWallet

## Table of contents

### Constructors

- [constructor](lumwallet.md#constructor)

### Properties

- [address](lumwallet.md#address)
- [privateKey](lumwallet.md#privatekey)
- [publicKey](lumwallet.md#publickey)

### Methods

- [signTransaction](lumwallet.md#signtransaction)
- [fromKeyStore](lumwallet.md#fromkeystore)
- [fromMnemonic](lumwallet.md#frommnemonic)
- [fromPrivateKey](lumwallet.md#fromprivatekey)

## Constructors

### constructor

\+ **new LumWallet**(`privateKey`: *Uint8Array*, `publicKey`: *Uint8Array*, `addressPrefix?`: *string*): [*LumWallet*](lumwallet.md)

Create a LumWallet instance based on a private key and a public key
This constructor is not intended to be used directly as mismatching privateKey and publicKey will lead
to undesired behaviour
Better use the provided static LumWallet builders

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`privateKey` | *Uint8Array* | wallet private key (secp256k1)   |
`publicKey` | *Uint8Array* | wallet public key (secp256k1)   |
`addressPrefix` | *string* | prefix to use to derive the address from the public key (ex: lum)    |

**Returns:** [*LumWallet*](lumwallet.md)

## Properties

### address

• `Readonly` **address**: *string*

Adress (bech32)

___

### privateKey

• `Private` `Readonly` **privateKey**: *Uint8Array*

Private key (secp256k1)

___

### publicKey

• `Readonly` **publicKey**: *Uint8Array*

Public key (secp256k1)

## Methods

### signTransaction

▸ **signTransaction**(`hashedMessage`: *Uint8Array*): *Promise*<Uint8Array\>

Sign a transaction using the wallet private key

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hashedMessage` | *Uint8Array* | transaction hashed message (sha256)    |

**Returns:** *Promise*<Uint8Array\>

___

### fromKeyStore

▸ `Static`**fromKeyStore**(`keystore`: *string* \| [*KeyStore*](../interfaces/lumutils.keystore.md), `password`: *string*, `addressPrefix?`: *string*): *Promise*<[*LumWallet*](lumwallet.md)\>

Create a LumWallet instance based on a keystore

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`keystore` | *string* \| [*KeyStore*](../interfaces/lumutils.keystore.md) | keystore used to decypher the private key   |
`password` | *string* | keystore password   |
`addressPrefix` | *string* | prefix to use to derive the address from the public key (ex: lum)    |

**Returns:** *Promise*<[*LumWallet*](lumwallet.md)\>

___

### fromMnemonic

▸ `Static`**fromMnemonic**(`mnemonic`: *string*, `hdPath?`: *string*, `addressPrefix?`: *string*): *Promise*<[*LumWallet*](lumwallet.md)\>

Create a LumWallet instance based on a mnemonic and a derivation path

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`mnemonic` | *string* | mnemonic used to derive the private key   |
`hdPath` | *string* | BIP44 derivation path   |
`addressPrefix` | *string* | prefix to use to derive the address from the public key (ex: lum)    |

**Returns:** *Promise*<[*LumWallet*](lumwallet.md)\>

___

### fromPrivateKey

▸ `Static`**fromPrivateKey**(`privateKey`: *Uint8Array*, `addressPrefix?`: *string*): *Promise*<[*LumWallet*](lumwallet.md)\>

Create a LumWallet instance based on a private key (secp256k1)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`privateKey` | *Uint8Array* | wallet private key (secp256k1)   |
`addressPrefix` | *string* | prefix to use to derive the address from the public key (ex: lum)    |

**Returns:** *Promise*<[*LumWallet*](lumwallet.md)\>
