import { QueryClient } from '@cosmjs/stargate';
import { assert } from '@cosmjs/utils';

import { Beam } from '../codec/beam/beam';
import { QueryClientImpl } from '../codec/beam/query';
import { createProtobufRpcClient } from './utils';

export interface BeamExtension {
    readonly beam: {
        readonly get: (id: string) => Promise<Beam>;
        readonly fetch: () => Promise<Beam[]>;
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
            fetch: async () => {
                const { beams } = await queryService.Beams({});
                assert(beams);
                return beams;
            },
        },
    };
};
