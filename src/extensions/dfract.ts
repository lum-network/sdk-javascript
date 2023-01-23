import { QueryClient } from '@cosmjs/stargate';
import { assert } from '@cosmjs/utils';
import { createProtobufRpcClient } from './utils';
import { DepositsQueryType, QueryClientImpl, QueryGetDepositsForAddressResponse } from '../codec/lum-network/dfract/query';
import { Deposit } from '../codec/lum-network/dfract/deposit';
import { Coin } from '../codec/cosmos/base/v1beta1/coin';

export interface DfractExtension {
    readonly dfract: {
        readonly fetchDeposits: (type: DepositsQueryType) => Promise<Deposit[]>;
        readonly getDepositsForAddress: (address: string) => Promise<QueryGetDepositsForAddressResponse>;
        readonly getAccountBalance: () => Promise<Coin[]>;
    };
}

export const setupDfractExtension = (base: QueryClient): DfractExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        dfract: {
            fetchDeposits: async (type: DepositsQueryType) => {
                const { deposits } = await queryService.FetchDeposits({ type });

                assert(deposits);

                return deposits;
            },

            getDepositsForAddress: async (address: string) => {
                const deposits = await queryService.GetDepositsForAddress({ address });

                assert(deposits);

                return deposits;
            },

            getAccountBalance: async () => {
                const { moduleAccountBalance } = await queryService.ModuleAccountBalance({});

                assert(moduleAccountBalance);

                return moduleAccountBalance;
            },
        },
    };
};
