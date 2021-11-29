import { QueryClient } from '@cosmjs/stargate';
import { Action } from '../codec/airdrop/claim';

import {
    QueryClaimableForActionResponse,
    QueryClaimRecordResponse,
    QueryClientImpl,
    QueryModuleAccountBalanceResponse,
    QueryParamsResponse,
    QueryTotalClaimableResponse,
} from '../codec/airdrop/query';
import { createProtobufRpcClient } from './utils';

export interface AirdropExtension {
    readonly airdrop: {
        readonly claimRecord: (address: string) => Promise<QueryClaimRecordResponse>;
        readonly claimableForAction: (address: string, action: Action) => Promise<QueryClaimableForActionResponse>;
        readonly claimableTotal: (address: string) => Promise<QueryTotalClaimableResponse>;
        readonly moduleAccountBalance: () => Promise<QueryModuleAccountBalanceResponse>;
        readonly params: () => Promise<QueryParamsResponse>;
    };
}

export const setupAirdropExtension = (base: QueryClient): AirdropExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        airdrop: {
            claimRecord: async (address: string) => {
                const response = await queryService.ClaimRecord({ address });
                return response;
            },
            claimableForAction: async (address: string, action: Action) => {
                const response = await queryService.ClaimableForAction({ address, action });
                return response;
            },
            claimableTotal: async (address: string) => {
                const response = await queryService.TotalClaimable({ address });
                return response;
            },
            moduleAccountBalance: async () => {
                const response = await queryService.ModuleAccountBalance({});
                return response;
            },
            params: async () => {
                const response = await queryService.Params({});
                return response;
            },
        },
    };
};
