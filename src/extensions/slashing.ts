import { QueryClient } from '@cosmjs/stargate';

import { QueryClientImpl, QueryParamsResponse, QuerySigningInfoResponse, QuerySigningInfosResponse } from '../codec/cosmos/slashing/v1beta1/query';
import { PageRequest } from '../codec/cosmos/base/query/v1beta1/pagination';
import { createProtobufRpcClient } from './utils';
import { Bech32 } from '@cosmjs/encoding';
import { Uint64 } from '@cosmjs/math';
import { ValidatorSigningInfo } from '../codec/cosmos/slashing/v1beta1/slashing';

export interface SlashingExtension {
    readonly slashing: {
        readonly params: () => Promise<QueryParamsResponse>;
        readonly signing_info: (consAddress: string) => Promise<QuerySigningInfoResponse>;
        readonly signing_infos: (pagination?: PageRequest) => Promise<QuerySigningInfosResponse>;
        readonly missed_blocks: (consAddress: string, index: number) => Promise<void>;
    };
}

export function setupSlashingExtension(base: QueryClient): SlashingExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        slashing: {
            params: async () => {
                const response = queryService.Params({});
                return response;
            },
            signing_info: async (consAddress: string) => {
                const response = queryService.SigningInfo({
                    consAddress,
                });
                return response;
            },
            signing_infos: async (pagination?: PageRequest) => {
                const response = queryService.SigningInfos({
                    pagination,
                });
                return response;
            },
            missed_blocks: async (consAddress: string, index: number): Promise<void> => {
                // https://github.com/cosmos/cosmos-sdk/blob/be4a965599dfae6992451e4b5135c487ed45053b/x/slashing/types/keys.go#L39
                const b = Uint64.fromNumber(index).toBytesLittleEndian();
                const addr = Bech32.decode(consAddress).data;
                const key = Uint8Array.from([...Uint8Array.from([2]), ...Uint8Array.from([addr.length]), ...addr, ...b]);
                // const key = Uint8Array.from([...Uint8Array.from([1]), ...Uint8Array.from([addr.length]), ...addr]);
                // console.log(key);
                const responseData = await base.queryVerified('slashing', key);
                console.log(responseData);
                // console.log(ValidatorSigningInfo.decode(responseData));
            },
        },
    };
}
