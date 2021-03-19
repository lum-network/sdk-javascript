# Interface: Tx

[LumTypes](../modules/lumtypes.md).Tx

Tx is the standard type used for broadcasting transactions.

## Table of contents

### Properties

- [authInfo](lumtypes.tx.md#authinfo)
- [body](lumtypes.tx.md#body)
- [signatures](lumtypes.tx.md#signatures)

## Properties

### authInfo

• `Optional` **authInfo**: *undefined* \| AuthInfo

auth_info is the authorization related content of the transaction,
specifically signers, signer modes and fee

___

### body

• `Optional` **body**: *undefined* \| TxBody

body is the processable content of the transaction

___

### signatures

• **signatures**: *Uint8Array*[]

signatures is a list of signatures that matches the length and order of
AuthInfo's signer_infos to allow connecting signature meta information like
public key and signing mode by position.
