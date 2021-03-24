# Namespace: LumUtils

## Table of contents

### Interfaces

- [KeyStore](../interfaces/lumutils.keystore.md)

### Functions

- [broadcastTxCommitSuccess](lumutils.md#broadcasttxcommitsuccess)
- [broadcastTxSyncSuccess](lumutils.md#broadcasttxsyncsuccess)
- [generateAuthInfoBytes](lumutils.md#generateauthinfobytes)
- [generateKeyStore](lumutils.md#generatekeystore)
- [generateMnemonic](lumutils.md#generatemnemonic)
- [generatePrivateKey](lumutils.md#generateprivatekey)
- [generateSignDoc](lumutils.md#generatesigndoc)
- [generateSignDocBytes](lumutils.md#generatesigndocbytes)
- [generateSignature](lumutils.md#generatesignature)
- [generateTxBytes](lumutils.md#generatetxbytes)
- [getAddressFromPublicKey](lumutils.md#getaddressfrompublickey)
- [getPrivateKeyFromKeystore](lumutils.md#getprivatekeyfromkeystore)
- [getPrivateKeyFromMnemonic](lumutils.md#getprivatekeyfrommnemonic)
- [getPrivateKeyFromSeed](lumutils.md#getprivatekeyfromseed)
- [getPublicKeyFromPrivateKey](lumutils.md#getpublickeyfromprivatekey)
- [getSeedFromMnemonic](lumutils.md#getseedfrommnemonic)
- [isAddressValid](lumutils.md#isaddressvalid)
- [keyFromHex](lumutils.md#keyfromhex)
- [keyToHex](lumutils.md#keytohex)
- [parseAttribute](lumutils.md#parseattribute)
- [parseEvent](lumutils.md#parseevent)
- [parseLog](lumutils.md#parselog)
- [parseLogs](lumutils.md#parselogs)
- [parseRawLogs](lumutils.md#parserawlogs)
- [publicKeyToProto](lumutils.md#publickeytoproto)
- [searchTxByBlockHeight](lumutils.md#searchtxbyblockheight)
- [searchTxByTags](lumutils.md#searchtxbytags)
- [searchTxFrom](lumutils.md#searchtxfrom)
- [searchTxTo](lumutils.md#searchtxto)
- [sha3](lumutils.md#sha3)
- [sortJSON](lumutils.md#sortjson)
- [toJSON](lumutils.md#tojson)
- [verifySignMsg](lumutils.md#verifysignmsg)
- [verifySignature](lumutils.md#verifysignature)

## Functions

### broadcastTxCommitSuccess

▸ `Const`**broadcastTxCommitSuccess**(`response`: BroadcastTxCommitResponse): *boolean*

Returns true if transaction made it successfully into a block
(i.e. success in `check_tx` and `deliver_tx` field)

#### Parameters:

Name | Type |
:------ | :------ |
`response` | BroadcastTxCommitResponse |

**Returns:** *boolean*

___

### broadcastTxSyncSuccess

▸ `Const`**broadcastTxSyncSuccess**(`res`: BroadcastTxSyncResponse): *boolean*

Returns true if transaction made it sucessfully into the transaction pool

#### Parameters:

Name | Type |
:------ | :------ |
`res` | BroadcastTxSyncResponse |

**Returns:** *boolean*

___

### generateAuthInfoBytes

▸ `Const`**generateAuthInfoBytes**(`publicKey`: *Uint8Array*, `fee`: [*Fee*](../interfaces/lumtypes.fee.md), `sequence`: *number*, `signMode`: SignMode): *Uint8Array*

Generate transaction auth info payload

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`publicKey` | *Uint8Array* | wallet public key (secp256k1)   |
`fee` | [*Fee*](../interfaces/lumtypes.fee.md) | requested fee   |
`sequence` | *number* | account sequence number    |
`signMode` | SignMode | - |

**Returns:** *Uint8Array*

___

### generateKeyStore

▸ `Const`**generateKeyStore**(`privateKey`: *Uint8Array*, `password`: *string*): [*KeyStore*](../interfaces/lumutils.keystore.md)

Generate a KeyStore using a privateKey and a password

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`privateKey` | *Uint8Array* | private key to encrypt in the keystore   |
`password` | *string* | keystore password    |

**Returns:** [*KeyStore*](../interfaces/lumutils.keystore.md)

___

### generateMnemonic

▸ `Const`**generateMnemonic**(`words?`: *12* \| *24*): *string*

Generate a random mnemonic of 12 or 24 words

**`see`** https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki#generating-the-mnemonic

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`words` | *12* \| *24* | 12 | The number of words requested    |

**Returns:** *string*

___

### generatePrivateKey

▸ `Const`**generatePrivateKey**(): *Uint8Array*

Generates a cryptographically secure random private key

**Returns:** *Uint8Array*

___

### generateSignDoc

▸ `Const`**generateSignDoc**(`doc`: [*Doc*](../interfaces/lumtypes.doc.md), `publicKey`: *Uint8Array*, `signMode`: SignMode): [*SignDoc*](../interfaces/lumtypes.signdoc.md)

Generate transaction doc to be signed

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`doc` | [*Doc*](../interfaces/lumtypes.doc.md) | document to create the sign version   |
`publicKey` | *Uint8Array* | public key used for signature   |
`signMode` | SignMode | signing mode for the transaction    |

**Returns:** [*SignDoc*](../interfaces/lumtypes.signdoc.md)

___

### generateSignDocBytes

▸ `Const`**generateSignDocBytes**(`signDoc`: [*SignDoc*](../interfaces/lumtypes.signdoc.md)): *Uint8Array*

Generate transaction sign doc bytes used to sign the transaction

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signDoc` | [*SignDoc*](../interfaces/lumtypes.signdoc.md) | sign doc (as generated by the generateSignDoc function)    |

**Returns:** *Uint8Array*

___

### generateSignature

▸ `Const`**generateSignature**(`hashedMessage`: *Uint8Array*, `privateKey`: *Uint8Array*): *Promise*<Uint8Array\>

Generate transaction signature

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hashedMessage` | *Uint8Array* | sha256 hash of the sign doc bytes (as generated by the generateSignDocBytes function)   |
`privateKey` | *Uint8Array* | private key used to sign the transaction (secp256k1)    |

**Returns:** *Promise*<Uint8Array\>

___

### generateTxBytes

▸ `Const`**generateTxBytes**(`signDoc`: [*SignDoc*](../interfaces/lumtypes.signdoc.md), `signature`: *Uint8Array*): *Uint8Array*

Generate transaction bytes to broadcast

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signDoc` | [*SignDoc*](../interfaces/lumtypes.signdoc.md) | sign doc (as generated by the generateSignDoc function)   |
`signature` | *Uint8Array* | transaction signature (as generated by the generateSignature function)    |

**Returns:** *Uint8Array*

___

### getAddressFromPublicKey

▸ `Const`**getAddressFromPublicKey**(`publicKey`: *Uint8Array*, `prefix?`: *string*): *string*

Derives a bech32 wallet address from a public key (secp256k1)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`publicKey` | *Uint8Array* | public key to derive the address from   |
`prefix` | *string* | address prefix to use (ex: lum)    |

**Returns:** *string*

___

### getPrivateKeyFromKeystore

▸ `Const`**getPrivateKeyFromKeystore**(`keystore`: *string* \| [*KeyStore*](../interfaces/lumutils.keystore.md), `password`: *string*): *Uint8Array*

Decyphers the private key from the provided KeyStore

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`keystore` | *string* \| [*KeyStore*](../interfaces/lumutils.keystore.md) | keystore data (either stringified or loaded)   |
`password` | *string* | keystore password    |

**Returns:** *Uint8Array*

___

### getPrivateKeyFromMnemonic

▸ `Const`**getPrivateKeyFromMnemonic**(`mnemonic`: *string*, `hdPath?`: *string*): *Promise*<Uint8Array\>

Get the derivated private key from the provided mnemonic

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`mnemonic` | *string* | mnemonic phrase   |
`hdPath` | *string* | derivation path to use    |

**Returns:** *Promise*<Uint8Array\>

___

### getPrivateKeyFromSeed

▸ `Const`**getPrivateKeyFromSeed**(`seed`: *Uint8Array*, `hdPath?`: *string*): *Uint8Array*

Get the derivated private key from the provided seed

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`seed` | *Uint8Array* | to derive the private key from   |
`hdPath` | *string* | derivation path to use    |

**Returns:** *Uint8Array*

___

### getPublicKeyFromPrivateKey

▸ `Const`**getPublicKeyFromPrivateKey**(`privateKey`: *Uint8Array*): *Promise*<Uint8Array\>

Get a public key from a private key (secp256k1)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`privateKey` | *Uint8Array* | private key to get the public key from    |

**Returns:** *Promise*<Uint8Array\>

___

### getSeedFromMnemonic

▸ `Const`**getSeedFromMnemonic**(`mnemonic`: *string*): *Promise*<Uint8Array\>

Get the seed from a mnemonic phrase

**`see`** https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`mnemonic` | *string* | english mnemonic phrase    |

**Returns:** *Promise*<Uint8Array\>

___

### isAddressValid

▸ `Const`**isAddressValid**(`address`: *string*, `prefix?`: *undefined* \| *string*): *boolean*

Verify that a wallet address is valid

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | address to check   |
`prefix` | *undefined* \| *string* | prefix to check (will not be checked if not provided)    |

**Returns:** *boolean*

___

### keyFromHex

▸ `Const`**keyFromHex**(`hexKey`: *string*): *Uint8Array*

Convert an hex key into its Uint8Array verison

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hexKey` | *string* | hexadecimal key to convert    |

**Returns:** *Uint8Array*

___

### keyToHex

▸ `Const`**keyToHex**(`key`: *Uint8Array*, `xPrefix?`: *boolean*): *string*

Convert a Uint8Array key into its hexadecimal version

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`key` | *Uint8Array* | - | (should be secp256k1 but works with anything though)   |
`xPrefix` | *boolean* | false | whether or not to prefix the returned hex value by "0x"    |

**Returns:** *string*

___

### parseAttribute

▸ `Const`**parseAttribute**(`input`: *unknown*): [*LogAttribute*](../interfaces/lumtypes.logattribute.md)

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *unknown* |

**Returns:** [*LogAttribute*](../interfaces/lumtypes.logattribute.md)

___

### parseEvent

▸ `Const`**parseEvent**(`input`: *unknown*): [*LogEvent*](../interfaces/lumtypes.logevent.md)

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *unknown* |

**Returns:** [*LogEvent*](../interfaces/lumtypes.logevent.md)

___

### parseLog

▸ `Const`**parseLog**(`input`: *unknown*): [*Log*](../interfaces/lumtypes.log.md)

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *unknown* |

**Returns:** [*Log*](../interfaces/lumtypes.log.md)

___

### parseLogs

▸ `Const`**parseLogs**(`input`: *unknown*): readonly [*Log*](../interfaces/lumtypes.log.md)[]

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *unknown* |

**Returns:** readonly [*Log*](../interfaces/lumtypes.log.md)[]

___

### parseRawLogs

▸ `Const`**parseRawLogs**(`input?`: *string*): readonly [*Log*](../interfaces/lumtypes.log.md)[]

Parse raw transaction logs into human readable format

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`input` | *string* | '[]' | transaction log (for tx returned by the client you can use tx.result.log)    |

**Returns:** readonly [*Log*](../interfaces/lumtypes.log.md)[]

___

### publicKeyToProto

▸ `Const`**publicKeyToProto**(`publicKey`: *Uint8Array*): Any

Converts a public key into its protorpc version

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`publicKey` | *Uint8Array* | public key to convert into proto    |

**Returns:** Any

___

### searchTxByBlockHeight

▸ `Const`**searchTxByBlockHeight**(`height`: *number*): *string*

Create a search query by block height

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`height` | *number* | block height    |

**Returns:** *string*

___

### searchTxByTags

▸ `Const`**searchTxByTags**(`tags`: { `key`: *string* ; `value`: *string*  }[], `minHeight?`: *number*, `maxHeight?`: *number*): *string*

Create a search query by tags

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tags` | { `key`: *string* ; `value`: *string*  }[] | tags to search for   |
`minHeight?` | *number* | min block height (filter)   |
`maxHeight?` | *number* | max block height (filter)    |

**Returns:** *string*

___

### searchTxFrom

▸ `Const`**searchTxFrom**(`senderAddress`: *string*, `minHeight?`: *number*, `maxHeight?`: *number*): *string*

Create a search query by sender address

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`senderAddress` | *string* | wallet address (bech32)   |
`minHeight?` | *number* | min block height (filter)   |
`maxHeight?` | *number* | max block height (filter)    |

**Returns:** *string*

___

### searchTxTo

▸ `Const`**searchTxTo**(`recipientAddress`: *string*, `minHeight?`: *number*, `maxHeight?`: *number*): *string*

Create a search query by recipient address

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`recipientAddress` | *string* | wallet address (bech32)   |
`minHeight?` | *number* | min block height (filter)   |
`maxHeight?` | *number* | max block height (filter)    |

**Returns:** *string*

___

### sha3

▸ `Const`**sha3**(`hex`: *string*): *string*

Sha3 hash

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hex` | *string* | hex bytes to hash    |

**Returns:** *string*

___

### sortJSON

▸ `Const`**sortJSON**<T\>(`jsonObj`: T): T

Sorts an object properties recursively.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`jsonObj` | T | object to sort   |

**Returns:** T

a new object with keys sorted alphabetically

___

### toJSON

▸ `Const`**toJSON**(`data`: *unknown*): *unknown*

Converts the provided data recursively in order to obtain a json usable version by removing
complex types and making it serializable

- Uint8Array will be converted to HEX
- Date will be converted to ISO string
- Anything else will not be touched

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`data` | *unknown* | data to convert (can be anything)    |

**Returns:** *unknown*

___

### verifySignMsg

▸ `Const`**verifySignMsg**(`msg`: [*SignMsg*](../interfaces/lumtypes.signmsg.md)): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`msg` | [*SignMsg*](../interfaces/lumtypes.signmsg.md) |

**Returns:** *Promise*<boolean\>

___

### verifySignature

▸ `Const`**verifySignature**(`signature`: *Uint8Array*, `signedBytes`: *Uint8Array*, `publicKey`: *Uint8Array*): *Promise*<boolean\>

Verify that a transaction signature is valid

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`signature` | *Uint8Array* | transaction signature (as generated by the generateSignature function)   |
`signedBytes` | *Uint8Array* | signed bytes (as generated by the generateSignDocBytes function or by the signMessage function)   |
`publicKey` | *Uint8Array* | public key of the signing key pair (secp256k1)    |

**Returns:** *Promise*<boolean\>
