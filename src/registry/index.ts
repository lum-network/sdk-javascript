import { Registry, GeneratedType } from '@cosmjs/proto-signing';

import { Tx } from '../codec/cosmos/tx/v1beta1/tx';
import { MsgSend, MsgMultiSend } from '../codec/cosmos/bank/v1beta1/tx';
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from '../codec/cosmos/distribution/v1beta1/tx';
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from '../codec/cosmos/staking/v1beta1/tx';

const registryTypes: Iterable<[string, GeneratedType]> = [
    ['/cosmos.bank.v1beta1.MsgSend', MsgSend as GeneratedType],
    ['/cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgFundCommunityPool', MsgFundCommunityPool as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgSetWithdrawAddress', MsgSetWithdrawAddress as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', MsgWithdrawDelegatorReward as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', MsgWithdrawValidatorCommission as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate as GeneratedType],
];

class ExtendedRegistry extends Registry {
    decodeTx = (tx: Uint8Array): Tx => {
        return Tx.decode(tx);
    };
}

export const LumRegistry = new ExtendedRegistry(registryTypes);
