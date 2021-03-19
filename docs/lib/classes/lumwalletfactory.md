# Class: LumWalletFactory

## Table of contents

### Constructors

- [constructor](lumwalletfactory.md#constructor)

### Methods

- [fromKeyStore](lumwalletfactory.md#fromkeystore)
- [fromLedgerTransport](lumwalletfactory.md#fromledgertransport)
- [fromMnemonic](lumwalletfactory.md#frommnemonic)
- [fromPrivateKey](lumwalletfactory.md#fromprivatekey)

## Constructors

### constructor

\+ **new LumWalletFactory**(): [*LumWalletFactory*](lumwalletfactory.md)

**Returns:** [*LumWalletFactory*](lumwalletfactory.md)

## Methods

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

### fromLedgerTransport

▸ `Static`**fromLedgerTransport**(`transport`: *Transport*<string\>, `hdPath?`: *string*, `addressPrefix?`: *string*): *Promise*<[*LumWallet*](lumwallet.md)\>

Create a LumWallet instance based on a ledger transport

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`transport` | *Transport*<string\> | Ledger transport to use (https://github.com/LedgerHQ/ledgerjs)   |
`hdPath` | *string* | BIP44 derivation path   |
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
