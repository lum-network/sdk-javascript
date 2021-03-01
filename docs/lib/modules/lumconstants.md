# Namespace: LumConstants

## Table of contents

### Variables

- [HDPath](lumconstants.md#hdpath)
- [LumBech32PrefixAccAddr](lumconstants.md#lumbech32prefixaccaddr)
- [LumBech32PrefixAccPub](lumconstants.md#lumbech32prefixaccpub)
- [LumBech32PrefixConsAddr](lumconstants.md#lumbech32prefixconsaddr)
- [LumBech32PrefixConsPub](lumconstants.md#lumbech32prefixconspub)
- [LumBech32PrefixValAddr](lumconstants.md#lumbech32prefixvaladdr)
- [LumBech32PrefixValPub](lumconstants.md#lumbech32prefixvalpub)
- [LumDenom](lumconstants.md#lumdenom)
- [PrivateKeyLength](lumconstants.md#privatekeylength)

### Functions

- [getLumHdPath](lumconstants.md#getlumhdpath)

## Variables

### HDPath

• `Const` **HDPath**: *m/44'/837'/0'/0/*= "m/44'/837'/0'/0/"

Lum Network HDPath

**`see`** https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

**`see`** https://github.com/satoshilabs/slips/blob/master/slip-0044.md

___

### LumBech32PrefixAccAddr

• `Const` **LumBech32PrefixAccAddr**: *lum*= 'lum'

Lum Network Bech32 prefix of an account's address

___

### LumBech32PrefixAccPub

• `Const` **LumBech32PrefixAccPub**: *lumpub*= 'lumpub'

Lum Network Bech32 prefix of an account's public key

___

### LumBech32PrefixConsAddr

• `Const` **LumBech32PrefixConsAddr**: *lumvalcons*= 'lumvalcons'

Lum Network Bech32 prefix of a consensus node address

___

### LumBech32PrefixConsPub

• `Const` **LumBech32PrefixConsPub**: *lumvalconspub*= 'lumvalconspub'

Lum Network Bech32 prefix of a consensus node public key

___

### LumBech32PrefixValAddr

• `Const` **LumBech32PrefixValAddr**: *lumvaloper*= 'lumvaloper'

Lum Network Bech32 prefix of a validator's operator address

___

### LumBech32PrefixValPub

• `Const` **LumBech32PrefixValPub**: *lumvaloperpub*= 'lumvaloperpub'

Lum Network Bech32 prefix of a validator's operator public key

___

### LumDenom

• `Const` **LumDenom**: *lum*= 'lum'

Lum Coin denomination

___

### PrivateKeyLength

• `Const` **PrivateKeyLength**: *32*= 32

Private Key length

## Functions

### getLumHdPath

▸ `Const`**getLumHdPath**(`accountIndex?`: *number*): *string*

Get a Lum Network HDPath for a specified account index

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`accountIndex` | *number* | 0 | appended at the end of the default Lum derivation path    |

**Returns:** *string*
