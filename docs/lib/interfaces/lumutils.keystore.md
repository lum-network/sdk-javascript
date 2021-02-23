# Interface: KeyStore

[LumUtils](../modules/lumutils.md).KeyStore

KeyStore storage format (web3 secret storage format)

## Table of contents

### Properties

- [crypto](lumutils.keystore.md#crypto)
- [id](lumutils.keystore.md#id)
- [version](lumutils.keystore.md#version)

## Properties

### crypto

• **crypto**: *object*

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`cipher` | *string* | - |
`cipherparams` | *object* | - |
`cipherparams.iv` | *string* | - |
`ciphertext` | *string* | - |
`kdf` | *string* | - |
`kdfparams` | *object* | - |
`kdfparams.c` | *number* | - |
`kdfparams.dklen` | *number* | - |
`kdfparams.prf` | *string* | - |
`kdfparams.salt` | *string* | - |
`mac` | *string* | Must use sha3 according to web3 secret storage spec.   |

___

### id

• **id**: *string*

___

### version

• **version**: *number*
