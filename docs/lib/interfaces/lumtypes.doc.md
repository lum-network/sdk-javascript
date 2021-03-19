# Interface: Doc

[LumTypes](../modules/lumtypes.md).Doc

## Table of contents

### Properties

- [accountNumber](lumtypes.doc.md#accountnumber)
- [chainId](lumtypes.doc.md#chainid)
- [fee](lumtypes.doc.md#fee)
- [memo](lumtypes.doc.md#memo)
- [messages](lumtypes.doc.md#messages)
- [sequence](lumtypes.doc.md#sequence)

## Properties

### accountNumber

• **accountNumber**: *number*

account_number is the account number of the account in state

___

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

### sequence

• **sequence**: *number*

Transction sequence number
