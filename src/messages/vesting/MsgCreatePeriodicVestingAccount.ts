import Long from 'long';
import { Message } from '../Message';

import { MsgCreatePeriodicVestingAccount } from '../../codec/cosmos/vesting/v1beta1/tx';
import { Period } from '../../codec/cosmos/vesting/v1beta1/vesting';

export const MsgCreatePeriodicVestingAccountUrl = '/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount';

export const BuildMsgCreatePeriodicVestingAccount = (fromAddress: string, toAddress: string, startTime: Long, vestingPeriods: Period[]): Message => {
    return {
        typeUrl: MsgCreatePeriodicVestingAccountUrl,
        value: {
            fromAddress,
            toAddress,
            startTime,
            vestingPeriods,
        } as MsgCreatePeriodicVestingAccount,
    };
};
