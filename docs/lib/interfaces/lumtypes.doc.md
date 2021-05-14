# Interface: Doc

[LumTypes](../modules/lumtypes.md).Doc

## Table of contents

### Properties

- [chainId](lumtypes.doc.md#chainid)
- [fee](lumtypes.doc.md#fee)
- [memo](lumtypes.doc.md#memo)
- [messages](lumtypes.doc.md#messages)
- [signers](lumtypes.doc.md#signers)

## Properties

### chainId

• **chainId**: *string*

chain_id is the unique identifier of the chain this transaction targets.
It prevents signed transactions from being used on another chain by an
attacker

___

### fee

• **fee**: [*Fee*](lumtypes.fee.md)

Transaction requested Fee

___

### memo

• `Optional` **memo**: *undefined* \| *string*

Transaction memo

___

### messages

• **messages**: [*Message*](lummessages.message.md)[]

Transactions messages

___

### signers

• **signers**: [*DocSigner*](lumtypes.docsigner.md)[]

Transction auth signers
