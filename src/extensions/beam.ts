import { QueryClient } from '@cosmjs/stargate';
import { assert } from '@cosmjs/utils';

import { Beam, BeamState } from '../codec/lum/network/beam/beam';
import { QueryClientImpl } from '../codec/lum/network/beam/query';
import { createProtobufRpcClient } from './utils';

export interface BeamExtension {
    readonly beam: {
        readonly get: (id: string) => Promise<Beam>;
        readonly fetch: (state: BeamState) => Promise<Beam[]>;
    };
}

export const setupBeamExtension = (base: QueryClient): BeamExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        beam: {
            get: async (id: string) => {
                const { beam } = await queryService.Beam({ id });
                assert(beam);
                return beam;
            },
            fetch: async (state: BeamState) => {
                const { beams } = await queryService.Beams({ state });
                assert(beams);
                return beams;
            },
        },
    };
};
