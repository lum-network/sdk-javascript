import { Message } from '../Message';
import { MsgUpdateParams } from '../../codec/lum/network/millions/tx';
import { Duration } from '../../codec/google/protobuf/duration';

export const MsgUpdateParamsUrl = '/lum.network.millions.MsgUpdateParams';

export const BuildMsgUpdateParams = (
    minDepositAmount: string,
    maxPrizeStrategyBatches: string,
    maxPrizeBatchQuantity: string,
    feesStakers: string,
    updaterAddress: string,
    minDrawScheduleDelta?: Duration,
    maxDrawScheduleDelta?: Duration,
    prizeExpirationDelta?: Duration,
): Message => {
    return {
        typeUrl: MsgUpdateParamsUrl,
        value: {
            minDepositAmount,
            maxPrizeStrategyBatches,
            maxPrizeBatchQuantity,
            minDrawScheduleDelta,
            maxDrawScheduleDelta,
            prizeExpirationDelta,
            feesStakers,
            updaterAddress,
        } as MsgUpdateParams,
    };
};
