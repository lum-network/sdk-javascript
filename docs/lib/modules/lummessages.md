# Namespace: LumMessages

## Table of contents

### Interfaces

- [Message](../interfaces/lummessages.message.md)
- [MsgFundCommunityPool](../interfaces/lummessages.msgfundcommunitypool.md)
- [MsgMultiSend](../interfaces/lummessages.msgmultisend.md)
- [MsgSend](../interfaces/lummessages.msgsend.md)
- [MsgSetWithdrawAddress](../interfaces/lummessages.msgsetwithdrawaddress.md)
- [MsgWithdrawDelegatorReward](../interfaces/lummessages.msgwithdrawdelegatorreward.md)
- [MsgWithdrawValidatorCommission](../interfaces/lummessages.msgwithdrawvalidatorcommission.md)

### Variables

- [MsgFundCommunityPoolUrl](lummessages.md#msgfundcommunitypoolurl)
- [MsgMultiSendUrl](lummessages.md#msgmultisendurl)
- [MsgSendUrl](lummessages.md#msgsendurl)
- [MsgSetWithdrawAddressUrl](lummessages.md#msgsetwithdrawaddressurl)
- [MsgWithdrawDelegatorRewardUrl](lummessages.md#msgwithdrawdelegatorrewardurl)
- [MsgWithdrawValidatorCommissionUrl](lummessages.md#msgwithdrawvalidatorcommissionurl)

### Functions

- [BuildMsgFundCommunityPool](lummessages.md#buildmsgfundcommunitypool)
- [BuildMsgMultiSend](lummessages.md#buildmsgmultisend)
- [BuildMsgSend](lummessages.md#buildmsgsend)
- [BuildMsgSetWithdrawAddress](lummessages.md#buildmsgsetwithdrawaddress)
- [BuildMsgWithdrawDelegatorReward](lummessages.md#buildmsgwithdrawdelegatorreward)
- [BuildMsgWithdrawValidatorCommission](lummessages.md#buildmsgwithdrawvalidatorcommission)

## Variables

### MsgFundCommunityPoolUrl

• `Const` **MsgFundCommunityPoolUrl**: */cosmos.distribution.v1beta1.MsgFundCommunityPool*= '/cosmos.distribution.v1beta1.MsgFundCommunityPool'

___

### MsgMultiSendUrl

• `Const` **MsgMultiSendUrl**: */cosmos.bank.v1beta1.MsgMultiSend*= '/cosmos.bank.v1beta1.MsgMultiSend'

___

### MsgSendUrl

• `Const` **MsgSendUrl**: */cosmos.bank.v1beta1.MsgSend*= '/cosmos.bank.v1beta1.MsgSend'

___

### MsgSetWithdrawAddressUrl

• `Const` **MsgSetWithdrawAddressUrl**: */cosmos.distribution.v1beta1.MsgSetWithdrawAddress*= '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress'

___

### MsgWithdrawDelegatorRewardUrl

• `Const` **MsgWithdrawDelegatorRewardUrl**: */cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward*= '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'

___

### MsgWithdrawValidatorCommissionUrl

• `Const` **MsgWithdrawValidatorCommissionUrl**: */cosmos.bank.v1beta1.MsgSend*= '/cosmos.bank.v1beta1.MsgSend'

## Functions

### BuildMsgFundCommunityPool

▸ `Const`**BuildMsgFundCommunityPool**(`depositor`: *string*, `amount`: [*Coin*](../interfaces/lumtypes.coin.md)[]): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`depositor` | *string* |
`amount` | [*Coin*](../interfaces/lumtypes.coin.md)[] |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgMultiSend

▸ `Const`**BuildMsgMultiSend**(`input`: { `address`: *string* ; `coins`: [*Coin*](../interfaces/lumtypes.coin.md)[]  }[], `output`: { `address`: *string* ; `coins`: [*Coin*](../interfaces/lumtypes.coin.md)[]  }[]): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`input` | { `address`: *string* ; `coins`: [*Coin*](../interfaces/lumtypes.coin.md)[]  }[] |
`output` | { `address`: *string* ; `coins`: [*Coin*](../interfaces/lumtypes.coin.md)[]  }[] |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgSend

▸ `Const`**BuildMsgSend**(`fromAddress`: *string*, `toAddress`: *string*, `amount`: [*Coin*](../interfaces/lumtypes.coin.md)[]): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`fromAddress` | *string* |
`toAddress` | *string* |
`amount` | [*Coin*](../interfaces/lumtypes.coin.md)[] |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgSetWithdrawAddress

▸ `Const`**BuildMsgSetWithdrawAddress**(`delegatorAddress`: *string*, `withdrawAddress`: *string*): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`delegatorAddress` | *string* |
`withdrawAddress` | *string* |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgWithdrawDelegatorReward

▸ `Const`**BuildMsgWithdrawDelegatorReward**(`delegatorAddress`: *string*, `validatorAddress`: *string*): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`delegatorAddress` | *string* |
`validatorAddress` | *string* |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgWithdrawValidatorCommission

▸ `Const`**BuildMsgWithdrawValidatorCommission**(`validatorAddress`: *string*): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`validatorAddress` | *string* |

**Returns:** [*Message*](../interfaces/lummessages.message.md)
