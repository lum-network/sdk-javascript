# Namespace: LumMessages

## Table of contents

### Interfaces

- [Message](../interfaces/lummessages.message.md)
- [MsgBeginRedelegate](../interfaces/lummessages.msgbeginredelegate.md)
- [MsgCreateValidator](../interfaces/lummessages.msgcreatevalidator.md)
- [MsgDelegate](../interfaces/lummessages.msgdelegate.md)
- [MsgEditValidator](../interfaces/lummessages.msgeditvalidator.md)
- [MsgFundCommunityPool](../interfaces/lummessages.msgfundcommunitypool.md)
- [MsgMintAndSend](../interfaces/lummessages.msgmintandsend.md)
- [MsgMultiSend](../interfaces/lummessages.msgmultisend.md)
- [MsgSend](../interfaces/lummessages.msgsend.md)
- [MsgSetWithdrawAddress](../interfaces/lummessages.msgsetwithdrawaddress.md)
- [MsgUndelegate](../interfaces/lummessages.msgundelegate.md)
- [MsgWithdrawDelegatorReward](../interfaces/lummessages.msgwithdrawdelegatorreward.md)
- [MsgWithdrawValidatorCommission](../interfaces/lummessages.msgwithdrawvalidatorcommission.md)

### Variables

- [MsgBeginRedelegateUrl](lummessages.md#msgbeginredelegateurl)
- [MsgCreateValidatorUrl](lummessages.md#msgcreatevalidatorurl)
- [MsgDelegateUrl](lummessages.md#msgdelegateurl)
- [MsgEditValidatorUrl](lummessages.md#msgeditvalidatorurl)
- [MsgFundCommunityPoolUrl](lummessages.md#msgfundcommunitypoolurl)
- [MsgMintAndSendUrl](lummessages.md#msgmintandsendurl)
- [MsgMultiSendUrl](lummessages.md#msgmultisendurl)
- [MsgSendUrl](lummessages.md#msgsendurl)
- [MsgSetWithdrawAddressUrl](lummessages.md#msgsetwithdrawaddressurl)
- [MsgUndelegateUrl](lummessages.md#msgundelegateurl)
- [MsgWithdrawDelegatorRewardUrl](lummessages.md#msgwithdrawdelegatorrewardurl)
- [MsgWithdrawValidatorCommissionUrl](lummessages.md#msgwithdrawvalidatorcommissionurl)

### Functions

- [BuildMsgBeginRedelegate](lummessages.md#buildmsgbeginredelegate)
- [BuildMsgCreateValidator](lummessages.md#buildmsgcreatevalidator)
- [BuildMsgDelegate](lummessages.md#buildmsgdelegate)
- [BuildMsgEditValidator](lummessages.md#buildmsgeditvalidator)
- [BuildMsgFundCommunityPool](lummessages.md#buildmsgfundcommunitypool)
- [BuildMsgMintAndSend](lummessages.md#buildmsgmintandsend)
- [BuildMsgMultiSend](lummessages.md#buildmsgmultisend)
- [BuildMsgSend](lummessages.md#buildmsgsend)
- [BuildMsgSetWithdrawAddress](lummessages.md#buildmsgsetwithdrawaddress)
- [BuildMsgUndelegate](lummessages.md#buildmsgundelegate)
- [BuildMsgWithdrawDelegatorReward](lummessages.md#buildmsgwithdrawdelegatorreward)
- [BuildMsgWithdrawValidatorCommission](lummessages.md#buildmsgwithdrawvalidatorcommission)

## Variables

### MsgBeginRedelegateUrl

• `Const` **MsgBeginRedelegateUrl**: */cosmos.staking.v1beta1.MsgBeginRedelegate*= '/cosmos.staking.v1beta1.MsgBeginRedelegate'

___

### MsgCreateValidatorUrl

• `Const` **MsgCreateValidatorUrl**: */cosmos.staking.v1beta1.MsgCreateValidator*= '/cosmos.staking.v1beta1.MsgCreateValidator'

___

### MsgDelegateUrl

• `Const` **MsgDelegateUrl**: */cosmos.staking.v1beta1.MsgDelegate*= '/cosmos.staking.v1beta1.MsgDelegate'

___

### MsgEditValidatorUrl

• `Const` **MsgEditValidatorUrl**: */cosmos.staking.v1beta1.MsgEditValidator*= '/cosmos.staking.v1beta1.MsgEditValidator'

___

### MsgFundCommunityPoolUrl

• `Const` **MsgFundCommunityPoolUrl**: */cosmos.distribution.v1beta1.MsgFundCommunityPool*= '/cosmos.distribution.v1beta1.MsgFundCommunityPool'

___

### MsgMintAndSendUrl

• `Const` **MsgMintAndSendUrl**: */lum.network.faucet.MsgMintAndSend*= '/lum.network.faucet.MsgMintAndSend'

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

### MsgUndelegateUrl

• `Const` **MsgUndelegateUrl**: */cosmos.staking.v1beta1.MsgUndelegate*= '/cosmos.staking.v1beta1.MsgUndelegate'

___

### MsgWithdrawDelegatorRewardUrl

• `Const` **MsgWithdrawDelegatorRewardUrl**: */cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward*= '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'

___

### MsgWithdrawValidatorCommissionUrl

• `Const` **MsgWithdrawValidatorCommissionUrl**: */cosmos.bank.v1beta1.MsgSend*= '/cosmos.bank.v1beta1.MsgSend'

## Functions

### BuildMsgBeginRedelegate

▸ `Const`**BuildMsgBeginRedelegate**(`delegatorAddress`: *string*, `validatorSrcAddress`: *string*, `validatorDstAddress`: *string*, `amount?`: [*Coin*](../interfaces/lumtypes.coin.md)): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`delegatorAddress` | *string* |
`validatorSrcAddress` | *string* |
`validatorDstAddress` | *string* |
`amount?` | [*Coin*](../interfaces/lumtypes.coin.md) |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgCreateValidator

▸ `Const`**BuildMsgCreateValidator**(`validatorAddress`: *string*, `delegatorAddress`: *string*, `minSelfDelegation`: *string*, `commission?`: [*CommissionRates*](../interfaces/lumtypes.commissionrates.md), `description?`: [*Description*](../interfaces/lumtypes.description.md), `value?`: [*Coin*](../interfaces/lumtypes.coin.md), `pubkey?`: Any): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`validatorAddress` | *string* |
`delegatorAddress` | *string* |
`minSelfDelegation` | *string* |
`commission?` | [*CommissionRates*](../interfaces/lumtypes.commissionrates.md) |
`description?` | [*Description*](../interfaces/lumtypes.description.md) |
`value?` | [*Coin*](../interfaces/lumtypes.coin.md) |
`pubkey?` | Any |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgDelegate

▸ `Const`**BuildMsgDelegate**(`delegatorAddress`: *string*, `validatorAddress`: *string*, `amount?`: [*Coin*](../interfaces/lumtypes.coin.md)): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`delegatorAddress` | *string* |
`validatorAddress` | *string* |
`amount?` | [*Coin*](../interfaces/lumtypes.coin.md) |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgEditValidator

▸ `Const`**BuildMsgEditValidator**(`validatorAddress`: *string*, `commissionRate`: *string*, `minSelfDelegation`: *string*, `description?`: [*Description*](../interfaces/lumtypes.description.md)): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`validatorAddress` | *string* |
`commissionRate` | *string* |
`minSelfDelegation` | *string* |
`description?` | [*Description*](../interfaces/lumtypes.description.md) |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgFundCommunityPool

▸ `Const`**BuildMsgFundCommunityPool**(`depositor`: *string*, `amount`: [*Coin*](../interfaces/lumtypes.coin.md)[]): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`depositor` | *string* |
`amount` | [*Coin*](../interfaces/lumtypes.coin.md)[] |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgMintAndSend

▸ `Const`**BuildMsgMintAndSend**(`minter`: *string*, `mintTime`: Date): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`minter` | *string* |
`mintTime` | Date |

**Returns:** *object*

Name | Type |
:------ | :------ |
`typeUrl` | *string* |
`value` | [*MsgMintAndSend*](../interfaces/lummessages.msgmintandsend.md) |

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

### BuildMsgUndelegate

▸ `Const`**BuildMsgUndelegate**(`delegatorAddress`: *string*, `validatorAddress`: *string*, `amount?`: [*Coin*](../interfaces/lumtypes.coin.md)): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`delegatorAddress` | *string* |
`validatorAddress` | *string* |
`amount?` | [*Coin*](../interfaces/lumtypes.coin.md) |

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
