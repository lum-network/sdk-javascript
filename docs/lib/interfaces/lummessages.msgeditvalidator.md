# Interface: MsgEditValidator

[LumMessages](../modules/lummessages.md).MsgEditValidator

MsgEditValidator defines a SDK message for editing an existing validator.

## Table of contents

### Properties

- [commissionRate](lummessages.msgeditvalidator.md#commissionrate)
- [description](lummessages.msgeditvalidator.md#description)
- [minSelfDelegation](lummessages.msgeditvalidator.md#minselfdelegation)
- [validatorAddress](lummessages.msgeditvalidator.md#validatoraddress)

## Properties

### commissionRate

• **commissionRate**: *string*

We pass a reference to the new commission rate and min self delegation as
it's not mandatory to update. If not updated, the deserialized rate will be
zero with no way to distinguish if an update was intended.
REF: #2373

___

### description

• `Optional` **description**: *undefined* \| [*Description*](lumtypes.description.md)

___

### minSelfDelegation

• **minSelfDelegation**: *string*

___

### validatorAddress

• **validatorAddress**: *string*
