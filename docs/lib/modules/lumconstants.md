# Namespace: LumConstants

## Table of contents

### Enumerations

- [LumMessageSigner](../enums/LumConstants.LumMessageSigner.md)

### Variables

- [HDPath](LumConstants.md#hdpath)
- [LumBech32PrefixAccAddr](LumConstants.md#lumbech32prefixaccaddr)
- [LumBech32PrefixAccPub](LumConstants.md#lumbech32prefixaccpub)
- [LumBech32PrefixConsAddr](LumConstants.md#lumbech32prefixconsaddr)
- [LumBech32PrefixConsPub](LumConstants.md#lumbech32prefixconspub)
- [LumBech32PrefixValAddr](LumConstants.md#lumbech32prefixvaladdr)
- [LumBech32PrefixValPub](LumConstants.md#lumbech32prefixvalpub)
- [LumDenom](LumConstants.md#lumdenom)
- [LumExponent](LumConstants.md#lumexponent)
- [LumWalletSigningVersion](LumConstants.md#lumwalletsigningversion)
- [MicroLumDenom](LumConstants.md#microlumdenom)
- [PrivateKeyLength](LumConstants.md#privatekeylength)

### Functions

- [getLumHdPath](LumConstants.md#getlumhdpath)

## Variables

### HDPath

• **HDPath**: ``"m/44'/837'/0'/"``

Lum Network HDPath

**`see`** https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

**`see`** https://github.com/satoshilabs/slips/blob/master/slip-0044.md

___

### LumBech32PrefixAccAddr

• **LumBech32PrefixAccAddr**: ``"lum"``

Lum Network Bech32 prefix of an account's address

___

### LumBech32PrefixAccPub

• **LumBech32PrefixAccPub**: ``"lumpub"``

Lum Network Bech32 prefix of an account's public key

___

### LumBech32PrefixConsAddr

• **LumBech32PrefixConsAddr**: ``"lumvalcons"``

Lum Network Bech32 prefix of a consensus node address

___

### LumBech32PrefixConsPub

• **LumBech32PrefixConsPub**: ``"lumvalconspub"``

Lum Network Bech32 prefix of a consensus node public key

___

### LumBech32PrefixValAddr

• **LumBech32PrefixValAddr**: ``"lumvaloper"``

Lum Network Bech32 prefix of a validator's operator address

___

### LumBech32PrefixValPub

• **LumBech32PrefixValPub**: ``"lumvaloperpub"``

Lum Network Bech32 prefix of a validator's operator public key

___

### LumDenom

• **LumDenom**: ``"lum"``

Lum Coin denomination

___

### LumExponent

• **LumExponent**: ``6``

Lum Exponent
1 lum = 10^6 ulum

___

### LumWalletSigningVersion

• **LumWalletSigningVersion**: ``"1"``

Signing version of the SDK

___

### MicroLumDenom

• **MicroLumDenom**: ``"ulum"``

Micro Lum Coin denomination

___

### PrivateKeyLength

• **PrivateKeyLength**: ``32``

Private Key length

## Functions

### getLumHdPath

▸ `Const` **getLumHdPath**(`accountIndex?`, `walletIndex?`): `string`

Get a Lum Network HDPath for a specified account index

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `accountIndex` | `number` | `0` | appended at the end of the default Lum derivation path |
| `walletIndex` | `number` | `0` | - |

#### Returns

`string`
