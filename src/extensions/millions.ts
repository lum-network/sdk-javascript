import { QueryClientImpl, QueryDepositsResponse, QueryDrawsResponse, QueryPoolsResponse, QueryPrizesResponse, QueryWithdrawalsResponse } from '../codec/lum-network/millions/query';
import { assert } from '@cosmjs/utils';
import { createPagination, createProtobufRpcClient } from './utils';
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
        readonly pools: (paginationKey?: Uint8Array) => Promise<QueryPoolsResponse>;
        readonly pool: (poolId: Long) => Promise<Pool>;
        readonly deposits: (paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
        readonly poolDeposits: (poolId: Long, paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
        readonly poolDeposit: (poolId: Long, depositId: Long) => Promise<Deposit>;
        readonly accountDeposits: (address: string, paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
        readonly accountPoolDeposits: (depositorAddress: string, poolId: Long, paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
        readonly draws: (paginationKey?: Uint8Array) => Promise<QueryDrawsResponse>;
        readonly poolDraws: (poolId: Long, paginationKey?: Uint8Array) => Promise<QueryDrawsResponse>;
        readonly poolDraw: (poolId: Long, drawId: Long) => Promise<Draw>;
        readonly prizes: (paginationKey?: Uint8Array) => Promise<QueryPrizesResponse>;
        readonly poolPrizes: (poolId: Long, paginationKey?: Uint8Array) => Promise<QueryPrizesResponse>;
        readonly poolDrawPrizes: (poolId: Long, drawId: Long, paginationKey?: Uint8Array) => Promise<QueryPrizesResponse>;
        readonly poolDrawPrize: (poolId: Long, drawId: Long, prizeId: Long) => Promise<Prize>;
        readonly accountPrizes: (winnerAddress: string, paginationKey?: Uint8Array) => Promise<QueryPrizesResponse>;
        readonly accountPoolPrizes: (winnerAddress: string, poolId: Long, paginationKey?: Uint8Array) => Promise<QueryPrizesResponse>;
        readonly accountPoolDrawPrizes: (winnerAddress: string, poolId: Long, drawId: Long, paginationKey?: Uint8Array) => Promise<QueryPrizesResponse>;
        readonly withdrawals: (paginationKey?: Uint8Array) => Promise<QueryWithdrawalsResponse>;
        readonly poolWithdrawals: (poolId: Long, paginationKey?: Uint8Array) => Promise<QueryWithdrawalsResponse>;
        readonly poolWithdrawal: (poolId: Long, withdrawalId: Long) => Promise<Withdrawal>;
        readonly accountWithdrawals: (depositorAddress: string, paginationKey?: Uint8Array) => Promise<QueryWithdrawalsResponse>;
        readonly accountPoolWithdrawals: (depositorAddress: string, poolId: Long, paginationKey?: Uint8Array) => Promise<QueryWithdrawalsResponse>;
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
            pools: async (paginationKey?: Uint8Array) => {
                const pools = await queryService.Pools({
                    pagination: createPagination(paginationKey),
                });
                assert(pools);
                return pools;
            },
            pool: async (poolId: Long) => {
                const { pool } = await queryService.Pool({ poolId });
                assert(pool);
                return pool;
            },
            deposits: async (paginationKey?: Uint8Array) => {
                const deposits = await queryService.Deposits({
                    pagination: createPagination(paginationKey),
                });
                assert(deposits);
                return deposits;
            },
            poolDeposits: async (poolId: Long, paginationKey?: Uint8Array) => {
                const deposits = await queryService.PoolDeposits({
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(deposits);
                return deposits;
            },
            poolDeposit: async (poolId: Long, depositId: Long) => {
                const { deposit } = await queryService.PoolDeposit({ poolId, depositId });
                assert(deposit);
                return deposit;
            },
            accountDeposits: async (depositorAddress: string, paginationKey?: Uint8Array) => {
                const deposits = await queryService.AccountDeposits({
                    depositorAddress,
                    pagination: createPagination(paginationKey),
                });
                assert(deposits);
                return deposits;
            },
            accountPoolDeposits: async (depositorAddress: string, poolId: Long, paginationKey?: Uint8Array) => {
                const deposits = await queryService.AccountPoolDeposits({
                    depositorAddress,
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(deposits);
                return deposits;
            },
            draws: async (paginationKey?: Uint8Array) => {
                const draws = await queryService.Draws({
                    pagination: createPagination(paginationKey),
                });
                assert(draws);
                return draws;
            },
            poolDraws: async (poolId: Long, paginationKey?: Uint8Array) => {
                const draws = await queryService.PoolDraws({
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(draws);
                return draws;
            },
            poolDraw: async (poolId: Long, drawId: Long) => {
                const { draw } = await queryService.PoolDraw({ poolId, drawId });
                assert(draw);
                return draw;
            },
            prizes: async (paginationKey?: Uint8Array) => {
                const prizes = await queryService.Prizes({
                    pagination: createPagination(paginationKey),
                });
                assert(prizes);
                return prizes;
            },
            poolPrizes: async (poolId: Long, paginationKey?: Uint8Array) => {
                const prizes = await queryService.PoolPrizes({
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(prizes);
                return prizes;
            },
            poolDrawPrizes: async (poolId: Long, drawId: Long, paginationKey?: Uint8Array) => {
                const prizes = await queryService.PoolDrawPrizes({
                    poolId,
                    drawId,
                    pagination: createPagination(paginationKey),
                });
                assert(prizes);
                return prizes;
            },
            poolDrawPrize: async (poolId: Long, drawId: Long, prizeId: Long) => {
                const { prize } = await queryService.PoolDrawPrize({ poolId, drawId, prizeId });
                assert(prize);
                return prize;
            },
            accountPrizes: async (winnerAddress: string, paginationKey?: Uint8Array) => {
                const prizes = await queryService.AccountPrizes({
                    winnerAddress,
                    pagination: createPagination(paginationKey),
                });
                assert(prizes);
                return prizes;
            },
            accountPoolPrizes: async (winnerAddress: string, poolId: Long, paginationKey?: Uint8Array) => {
                const prizes = await queryService.AccountPoolPrizes({
                    winnerAddress,
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(prizes);
                return prizes;
            },
            accountPoolDrawPrizes: async (winnerAddress: string, poolId: Long, drawId: Long, paginationKey?: Uint8Array) => {
                const prizes = await queryService.AccountPoolDrawPrizes({
                    winnerAddress,
                    poolId,
                    drawId,
                    pagination: createPagination(paginationKey),
                });
                assert(prizes);
                return prizes;
            },
            withdrawals: async (paginationKey?: Uint8Array) => {
                const withdrawals = await queryService.Withdrawals({
                    pagination: createPagination(paginationKey),
                });
                assert(withdrawals);
                return withdrawals;
            },
            poolWithdrawals: async (poolId: Long, paginationKey?: Uint8Array) => {
                const withdrawals = await queryService.PoolWithdrawals({
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(withdrawals);
                return withdrawals;
            },
            poolWithdrawal: async (poolId: Long, withdrawalId: Long) => {
                const { withdrawal } = await queryService.PoolWithdrawal({ poolId, withdrawalId });
                assert(withdrawal);
                return withdrawal;
            },
            accountWithdrawals: async (depositorAddress: string, paginationKey?: Uint8Array) => {
                const withdrawals = await queryService.AccountWithdrawals({
                    depositorAddress,
                    pagination: createPagination(paginationKey),
                });
                assert(withdrawals);
                return withdrawals;
            },
            accountPoolWithdrawals: async (depositorAddress: string, poolId: Long, paginationKey?: Uint8Array) => {
                const withdrawals = await queryService.AccountPoolWithdrawals({
                    depositorAddress,
                    poolId,
                    pagination: createPagination(paginationKey),
                });
                assert(withdrawals);
                return withdrawals;
            },
        },
    };
};
