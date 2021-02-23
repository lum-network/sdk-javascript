# Namespace: LumConstants

## Table of contents

### Variables

- [HDPath](lumconstants.md#hdpath)
- [LumAddressPrefix](lumconstants.md#lumaddressprefix)
- [LumDenom](lumconstants.md#lumdenom)
- [PrivateKeyLength](lumconstants.md#privatekeylength)

### Functions

- [getLumHdPath](lumconstants.md#getlumhdpath)

## Variables

### HDPath

• `Const` **HDPath**: *m/44'/837'/0'/0/*= "m/44'/837'/0'/0/"

Lum Network HDPath

**`see`** https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

___

### LumAddressPrefix

• `Const` **LumAddressPrefix**: *lum*= 'lum'

Lum Network address prefix

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
