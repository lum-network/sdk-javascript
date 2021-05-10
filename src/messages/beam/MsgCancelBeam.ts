import { Message } from '../Message';
import { MsgCancelBeam } from '../../codec/chain/beam/beam';

export const MsgCancelBeamUrl = '/lum.network.beam.MsgCancelBeam';

export const BuildMsgCancelBeam = (updater: string, id: string): Message => {
    return {
        typeUrl: MsgCancelBeamUrl,
        value: {
            updater,
            id,
        } as MsgCancelBeam,
    };
};
