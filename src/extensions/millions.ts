import { QueryClientImpl } from '../codec/lum-network/millions/query';
import { assert } from '@cosmjs/utils';
import { createProtobufRpcClient } from './utils';
import { QueryClient } from '@cosmjs/stargate';
import { Pool } from '../codec/lum-network/millions/pool';
import { Params } from '../codec/lum-network/millions/params';
import Long from 'long';
import { Deposit } from '../codec/lum-network/millions/deposit';
import { Draw } from '../codec/lum-network/millions/draw';
import { Prize } from '../codec/lum-network/millions/prize';
import { Withdrawal } from '../codec/lum-network/millions/withdrawal';

export interface MillionsExtension {
    readonly millions: {
        readonly params: () => Promise<Params>;
        readonly pools: () => Promise<Pool[]>;
        readonly pool: (poolId: Long) => Promise<Pool>;
        readonly deposits: () => Promise<Deposit[]>;
        readonly poolDeposits: (poolId: Long) => Promise<Deposit[]>;
        readonly poolDeposit: (poolId: Long, depositId: Long) => Promise<Deposit>;
        readonly accountDeposits: (address: string) => Promise<Deposit[]>;
        readonly accountPoolDeposits: (depositorAddress: string, poolId: Long) => Promise<Deposit[]>;
        readonly draws: () => Promise<Draw[]>;
        readonly poolDraws: (poolId: Long) => Promise<Draw[]>;
        readonly poolDraw: (poolId: Long, drawId: Long) => Promise<Draw>;
        readonly prizes: () => Promise<Prize[]>;
        readonly poolPrizes: (poolId: Long) => Promise<Prize[]>;
        readonly poolDrawPrizes: (poolId: Long, drawId: Long) => Promise<Prize[]>;
        readonly poolDrawPrize: (poolId: Long, drawId: Long, prizeId: Long) => Promise<Prize>;
        readonly accountPrizes: (winnerAddress: string) => Promise<Prize[]>;
        readonly accountPoolPrizes: (winnerAddress: string, poolId: Long) => Promise<Prize[]>;
        readonly accountPoolDrawPrizes: (winnerAddress: string, poolId: Long, drawId: Long) => Promise<Prize[]>;
        readonly withdrawals: () => Promise<Withdrawal[]>;
        readonly poolWithdrawals: (poolId: Long) => Promise<Withdrawal[]>;
        readonly poolWithdrawal: (poolId: Long, withdrawalId: Long) => Promise<Withdrawal>;
        readonly accountWithdrawals: (depositorAddress: string) => Promise<Withdrawal[]>;
        readonly accountPoolWithdrawals: (depositorAddress: string, poolId: Long) => Promise<Withdrawal[]>;
    };
}

export const setupMillionsExtension = (base: QueryClient): MillionsExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        millions: {
            params: async () => {
                const { params } = await queryService.Params({});
                assert(params);
                return params;
            },
            pools: async () => {
                const { pools } = await queryService.Pools({});
                assert(pools);
                return pools;
            },
            pool: async (poolId: Long) => {
                const { pool } = await queryService.Pool({ poolId });
                assert(pool);
                return pool;
            },
            deposits: async () => {
                const { deposits } = await queryService.Deposits({});
                assert(deposits);
                return deposits;
            },
            poolDeposits: async (poolId: Long) => {
                const { deposits } = await queryService.PoolDeposits({ poolId });
                assert(deposits);
                return deposits;
            },
            poolDeposit: async (poolId: Long, depositId: Long) => {
                const { deposit } = await queryService.PoolDeposit({ poolId, depositId });
                assert(deposit);
                return deposit;
            },
            accountDeposits: async (depositorAddress: string) => {
                const { deposits } = await queryService.AccountDeposits({ depositorAddress });
                assert(deposits);
                return deposits;
            },
            accountPoolDeposits: async (depositorAddress: string, poolId: Long) => {
                const { deposits } = await queryService.AccountPoolDeposits({ depositorAddress, poolId });
                assert(deposits);
                return deposits;
            },
            draws: async () => {
                const { draws } = await queryService.Draws({});
                assert(draws);
                return draws;
            },
            poolDraws: async (poolId: Long) => {
                const { draws } = await queryService.PoolDraws({ poolId });
                assert(draws);
                return draws;
            },
            poolDraw: async (poolId: Long, drawId: Long) => {
                const { draw } = await queryService.PoolDraw({ poolId, drawId });
                assert(draw);
                return draw;
            },
            prizes: async () => {
                const { prizes } = await queryService.Prizes({});
                assert(prizes);
                return prizes;
            },
            poolPrizes: async (poolId: Long) => {
                const { prizes } = await queryService.PoolPrizes({ poolId });
                assert(prizes);
                return prizes;
            },
            poolDrawPrizes: async (poolId: Long, drawId: Long) => {
                const { prizes } = await queryService.PoolDrawPrizes({ poolId, drawId });
                assert(prizes);
                return prizes;
            },
            poolDrawPrize: async (poolId: Long, drawId: Long, prizeId: Long) => {
                const { prize } = await queryService.PoolDrawPrize({ poolId, drawId, prizeId });
                assert(prize);
                return prize;
            },
            accountPrizes: async (winnerAddress: string) => {
                const { prizes } = await queryService.AccountPrizes({ winnerAddress });
                assert(prizes);
                return prizes;
            },
            accountPoolPrizes: async (winnerAddress: string, poolId: Long) => {
                const { prizes } = await queryService.AccountPoolPrizes({ winnerAddress, poolId });
                assert(prizes);
                return prizes;
            },
            accountPoolDrawPrizes: async (winnerAddress: string, poolId: Long, drawId: Long) => {
                const { prizes } = await queryService.AccountPoolDrawPrizes({ winnerAddress, poolId, drawId });
                assert(prizes);
                return prizes;
            },
            withdrawals: async () => {
                const { withdrawals } = await queryService.Withdrawals({});
                assert(withdrawals);
                return withdrawals;
            },
            poolWithdrawals: async (poolId: Long) => {
                const { withdrawals } = await queryService.PoolWithdrawals({ poolId });
                assert(withdrawals);
                return withdrawals;
            },
            poolWithdrawal: async (poolId: Long, withdrawalId: Long) => {
                const { withdrawal } = await queryService.PoolWithdrawal({ poolId, withdrawalId });
                assert(withdrawal);
                return withdrawal;
            },
            accountWithdrawals: async (depositorAddress: string) => {
                const { withdrawals } = await queryService.AccountWithdrawals({ depositorAddress });
                assert(withdrawals);
                return withdrawals;
            },
            accountPoolWithdrawals: async (depositorAddress: string, poolId: Long) => {
                const { withdrawals } = await queryService.AccountPoolWithdrawals({ depositorAddress, poolId });
                assert(withdrawals);
                return withdrawals;
            },
        },
    };
};
