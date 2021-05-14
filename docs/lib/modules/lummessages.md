# Namespace: LumMessages

## Table of contents

### Interfaces

- [Message](../interfaces/lummessages.message.md)

### Variables

- [MsgBeginRedelegateUrl](lummessages.md#msgbeginredelegateurl)
- [MsgCancelBeamUrl](lummessages.md#msgcancelbeamurl)
- [MsgClaimBeamUrl](lummessages.md#msgclaimbeamurl)
- [MsgCreateValidatorUrl](lummessages.md#msgcreatevalidatorurl)
- [MsgDelegateUrl](lummessages.md#msgdelegateurl)
- [MsgEditValidatorUrl](lummessages.md#msgeditvalidatorurl)
- [MsgFundCommunityPoolUrl](lummessages.md#msgfundcommunitypoolurl)
- [MsgMultiSendUrl](lummessages.md#msgmultisendurl)
- [MsgOpenBeamUrl](lummessages.md#msgopenbeamurl)
- [MsgSendUrl](lummessages.md#msgsendurl)
- [MsgSetWithdrawAddressUrl](lummessages.md#msgsetwithdrawaddressurl)
- [MsgUndelegateUrl](lummessages.md#msgundelegateurl)
- [MsgUpdateBeamUrl](lummessages.md#msgupdatebeamurl)
- [MsgWithdrawDelegatorRewardUrl](lummessages.md#msgwithdrawdelegatorrewardurl)
- [MsgWithdrawValidatorCommissionUrl](lummessages.md#msgwithdrawvalidatorcommissionurl)

### Functions

- [BuildMsgBeginRedelegate](lummessages.md#buildmsgbeginredelegate)
- [BuildMsgCancelBeam](lummessages.md#buildmsgcancelbeam)
- [BuildMsgClaimBeam](lummessages.md#buildmsgclaimbeam)
- [BuildMsgCreateValidator](lummessages.md#buildmsgcreatevalidator)
- [BuildMsgDelegate](lummessages.md#buildmsgdelegate)
- [BuildMsgEditValidator](lummessages.md#buildmsgeditvalidator)
- [BuildMsgFundCommunityPool](lummessages.md#buildmsgfundcommunitypool)
- [BuildMsgMultiSend](lummessages.md#buildmsgmultisend)
- [BuildMsgOpenBeam](lummessages.md#buildmsgopenbeam)
- [BuildMsgSend](lummessages.md#buildmsgsend)
- [BuildMsgSetWithdrawAddress](lummessages.md#buildmsgsetwithdrawaddress)
- [BuildMsgUndelegate](lummessages.md#buildmsgundelegate)
- [BuildMsgUpdateBeam](lummessages.md#buildmsgupdatebeam)
- [BuildMsgWithdrawDelegatorReward](lummessages.md#buildmsgwithdrawdelegatorreward)
- [BuildMsgWithdrawValidatorCommission](lummessages.md#buildmsgwithdrawvalidatorcommission)

## Variables

### MsgBeginRedelegateUrl

• `Const` **MsgBeginRedelegateUrl**: */cosmos.staking.v1beta1.MsgBeginRedelegate*= '/cosmos.staking.v1beta1.MsgBeginRedelegate'

___

### MsgCancelBeamUrl

• `Const` **MsgCancelBeamUrl**: */lum.network.beam.MsgCancelBeam*= '/lum.network.beam.MsgCancelBeam'

___

### MsgClaimBeamUrl

• `Const` **MsgClaimBeamUrl**: */lum.network.beam.MsgClaimBeam*= '/lum.network.beam.MsgClaimBeam'

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

### MsgMultiSendUrl

• `Const` **MsgMultiSendUrl**: */cosmos.bank.v1beta1.MsgMultiSend*= '/cosmos.bank.v1beta1.MsgMultiSend'

___

### MsgOpenBeamUrl

• `Const` **MsgOpenBeamUrl**: */lum.network.beam.MsgOpenBeam*= '/lum.network.beam.MsgOpenBeam'

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

### MsgUpdateBeamUrl

• `Const` **MsgUpdateBeamUrl**: */lum.network.beam.MsgUpdateBeam*= '/lum.network.beam.MsgUpdateBeam'

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

### BuildMsgCancelBeam

▸ `Const`**BuildMsgCancelBeam**(`updater`: *string*, `id`: *string*): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`updater` | *string* |
`id` | *string* |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgClaimBeam

▸ `Const`**BuildMsgClaimBeam**(`claimer`: *string*, `id`: *string*, `secret`: *string*): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`claimer` | *string* |
`id` | *string* |
`secret` | *string* |

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

### BuildMsgMultiSend

▸ `Const`**BuildMsgMultiSend**(`inputs`: Input[], `outputs`: Output[]): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`inputs` | Input[] |
`outputs` | Output[] |

**Returns:** [*Message*](../interfaces/lummessages.message.md)

___

### BuildMsgOpenBeam

▸ `Const`**BuildMsgOpenBeam**(`id`: *string*, `creator`: *string*, `amount`: Long, `secret`: *string*, `reward?`: BeamReward, `review?`: BeamReview): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`creator` | *string* |
`amount` | Long |
`secret` | *string* |
`reward?` | BeamReward |
`review?` | BeamReview |

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

### BuildMsgUpdateBeam

▸ `Const`**BuildMsgUpdateBeam**(`updater`: *string*, `id`: *string*, `amount`: Long, `reward?`: BeamReward, `review?`: BeamReview): [*Message*](../interfaces/lummessages.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`updater` | *string* |
`id` | *string* |
`amount` | Long |
`reward?` | BeamReward |
`review?` | BeamReview |

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
