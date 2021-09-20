# Class: LumWalletFactory

## Table of contents

### Constructors

- [constructor](LumWalletFactory.md#constructor)

### Methods

- [fromKeyStore](LumWalletFactory.md#fromkeystore)
- [fromLedgerTransport](LumWalletFactory.md#fromledgertransport)
- [fromMnemonic](LumWalletFactory.md#frommnemonic)
- [fromPrivateKey](LumWalletFactory.md#fromprivatekey)

## Constructors

### constructor

• **new LumWalletFactory**()

## Methods

### fromKeyStore

▸ `Static` **fromKeyStore**(`keystore`, `password`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a keystore

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keystore` | `string` \| [`KeyStore`](../interfaces/LumUtils.KeyStore.md) | keystore used to decypher the private key |
| `password` | `string` | keystore password |
| `addressPrefix` | `string` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromLedgerTransport

▸ `Static` **fromLedgerTransport**(`transport`, `hdPath?`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a ledger transport

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transport` | `default` | Ledger transport to use (https://github.com/LedgerHQ/ledgerjs) |
| `hdPath` | `string` | BIP44 derivation path |
| `addressPrefix` | `string` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromMnemonic

▸ `Static` **fromMnemonic**(`mnemonic`, `hdPath?`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a mnemonic and a derivation path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mnemonic` | `string` | mnemonic used to derive the private key |
| `hdPath` | `string` | BIP44 derivation path |
| `addressPrefix` | `string` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromPrivateKey

▸ `Static` **fromPrivateKey**(`privateKey`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a private key (secp256k1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `privateKey` | `Uint8Array` | wallet private key (secp256k1) |
| `addressPrefix` | `string` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>
