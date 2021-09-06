import { Message } from '../Message';
import { BeamData, BeamState } from '../../codec/beam/beam';
import { MsgUpdateBeam } from '../../codec/beam/tx';
import { Coin } from '../../types';

export const MsgUpdateBeamUrl = '/lum.network.beam.MsgUpdateBeam';

export const BuildMsgUpdateBeam = (
    id: string,
    updaterAddress: string,
    amount: Coin,
    status?: BeamState,
    data?: BeamData,
    cancelReason = '',
    hideContent = false,
    claimAddress = '',
    closesAtBlock = 0,
    claimExpiresAtBlock = 0,
): Message => {
    return {
        typeUrl: MsgUpdateBeamUrl,
        value: {
            id,
            updaterAddress,
            amount,
            status,
            data,
            cancelReason,
            hideContent,
            claimAddress,
            closesAtBlock,
            claimExpiresAtBlock,
        } as MsgUpdateBeam,
    };
};
