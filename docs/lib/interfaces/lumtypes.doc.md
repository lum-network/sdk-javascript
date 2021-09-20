# Interface: Doc

[LumTypes](../modules/LumTypes.md).Doc

## Table of contents

### Properties

- [chainId](LumTypes.Doc.md#chainid)
- [fee](LumTypes.Doc.md#fee)
- [memo](LumTypes.Doc.md#memo)
- [messages](LumTypes.Doc.md#messages)
- [signers](LumTypes.Doc.md#signers)

## Properties

### chainId

• **chainId**: `string`

chain_id is the unique identifier of the chain this transaction targets.
It prevents signed transactions from being used on another chain by an
attacker

___

### fee

• **fee**: [`Fee`](LumTypes.Fee.md)

Transaction requested Fee

___

### memo

• `Optional` **memo**: `string`

Transaction memo

___

### messages

• **messages**: [`Message`](LumMessages.Message.md)[]

Transactions messages

___

### signers

• **signers**: [`DocSigner`](LumTypes.DocSigner.md)[]

Transction auth signers
