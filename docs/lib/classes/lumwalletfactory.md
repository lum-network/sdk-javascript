# Class: LumWalletFactory

## Table of contents

### Constructors

- [constructor](LumWalletFactory.md#constructor)

### Methods

- [fromKeyStore](LumWalletFactory.md#fromkeystore)
- [fromLedgerTransport](LumWalletFactory.md#fromledgertransport)
- [fromMnemonic](LumWalletFactory.md#frommnemonic)
- [fromOfflineSigner](LumWalletFactory.md#fromofflinesigner)
- [fromPrivateKey](LumWalletFactory.md#fromprivatekey)

## Constructors

### constructor

• **new LumWalletFactory**()

## Methods

### fromKeyStore

▸ `Static` **fromKeyStore**(`keystore`, `password`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a keystore

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `keystore` | `string` \| [`KeyStore`](../interfaces/LumUtils.KeyStore.md) | `undefined` | keystore used to decypher the private key |
| `password` | `string` | `undefined` | keystore password |
| `addressPrefix` | `string` | `LumConstants.LumBech32PrefixAccAddr` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromLedgerTransport

▸ `Static` **fromLedgerTransport**(`transport`, `hdPath?`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a ledger transport

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `transport` | `default` | `undefined` | Ledger transport to use (https://github.com/LedgerHQ/ledgerjs) |
| `hdPath` | `string` | `undefined` | BIP44 derivation path |
| `addressPrefix` | `string` | `LumConstants.LumBech32PrefixAccAddr` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromMnemonic

▸ `Static` **fromMnemonic**(`mnemonic`, `hdPath?`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a mnemonic and a derivation path

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mnemonic` | `string` | `undefined` | mnemonic used to derive the private key |
| `hdPath` | `string` | `undefined` | BIP44 derivation path |
| `addressPrefix` | `string` | `LumConstants.LumBech32PrefixAccAddr` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromOfflineSigner

▸ `Static` **fromOfflineSigner**(`offlineSigner`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on an OfflineDirectSigner instance compatible with Comsjs based implementations.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offlineSigner` | `OfflineDirectSigner` | OfflineDirectSigner instance compatible with Comsjs based implementations |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>

___

### fromPrivateKey

▸ `Static` **fromPrivateKey**(`privateKey`, `addressPrefix?`): `Promise`<[`LumWallet`](LumWallet.md)\>

Create a LumWallet instance based on a private key (secp256k1)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `privateKey` | `Uint8Array` | `undefined` | wallet private key (secp256k1) |
| `addressPrefix` | `string` | `LumConstants.LumBech32PrefixAccAddr` | prefix to use to derive the address from the public key (ex: lum) |

#### Returns

`Promise`<[`LumWallet`](LumWallet.md)\>
