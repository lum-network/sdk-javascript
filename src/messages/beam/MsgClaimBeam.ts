import { Message } from '../Message';
import { MsgClaimBeam } from '../../codec/beam/tx';

export const MsgClaimBeamUrl = '/lum.network.beam.MsgClaimBeam';

export const BuildMsgClaimBeam = (id: string, claimerAddress: string, secret: string): Message => {
    return {
        typeUrl: MsgClaimBeamUrl,
        value: {
            id,
            claimerAddress,
            secret,
        } as MsgClaimBeam,
    };
};
