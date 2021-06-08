import { Message } from '../Message';
import { BeamData, BeamState } from '../../codec/chain/beam/beam';
import { MsgUpdateBeam } from '../../codec/chain/beam/tx';
import { Coin } from '../../types';

export const MsgUpdateBeamUrl = '/lum.network.beam.MsgUpdateBeam';

export const BuildMsgUpdateBeam = (id: string, updaterAddress: string, amount: Coin, status?: BeamState, data?: BeamData, cancelReason = '', hideContent = false): Message => {
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
        } as MsgUpdateBeam,
    };
};
