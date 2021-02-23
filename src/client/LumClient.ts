import { Uint64 } from '@cosmjs/math';
import { Client as TendermintClient, adaptor34 as TendermintAdaptor } from '@cosmjs/tendermint-rpc';
import {
    QueryClient as StargateQueryClient,
    setupAuthExtension as StargateSetupAuthExtension,
    setupBankExtension as StargateSetupBankExtension,
    coinFromProto,
    AuthExtension,
    BankExtension,
} from '@cosmjs/stargate';

import { LumWallet } from '../wallet';
import { Message } from '../messages';
import { sha256, generateAuthInfo, generateSignDoc, generateSignDocBytes, generateTxBytes } from '../utils';
import { BroadcastTxCommitResponse, ValidatorsResponse, TxResponse, TxSearchParams, BlockResponse, Account, Coin, Fee } from '../types';

export class LumClient {
    readonly tmClient: TendermintClient;
    readonly queryClient: StargateQueryClient & AuthExtension & BankExtension;
    private chainId?: string;

    constructor(tmClient: TendermintClient) {
        this.tmClient = tmClient;
        this.queryClient = StargateQueryClient.withExtensions(tmClient, StargateSetupAuthExtension, StargateSetupBankExtension);
    }

    static connect = async (endpoint: string): Promise<LumClient> => {
        const tmClient = await TendermintClient.connect(endpoint, TendermintAdaptor);
        return new LumClient(tmClient);
    };

    disconnect() {
        this.tmClient.disconnect();
    }

    getChainId = async (): Promise<string> => {
        if (!this.chainId) {
            const response = await this.tmClient.status();
            const chainId = response.nodeInfo.network;
            if (!chainId) {
                throw new Error('Chain ID must not be empty');
            }
            this.chainId = chainId;
        }
        return this.chainId;
    };

    getBlockHeight = async (): Promise<number> => {
        const status = await this.tmClient.status();
        return status.syncInfo.latestBlockHeight;
    };

    getBlock = async (height?: number): Promise<BlockResponse> => {
        const response = await this.tmClient.block(height);
        return response;
    };

    getAccount = async (address: string): Promise<Account | null> => {
        const account = await this.queryClient.auth.account(address);
        if (!account) {
            return null;
        }
        return {
            address: account.address,
            accountNumber: Uint64.fromString(account.accountNumber.toString()).toNumber(),
            sequence: Uint64.fromString(account.sequence.toString()).toNumber(),
        };
    };

    getAccountUnverified = async (address: string): Promise<Account | null> => {
        const account = await this.queryClient.auth.unverified.account(address);
        if (!account) {
            return null;
        }
        return {
            address: account.address,
            accountNumber: Uint64.fromString(account.accountNumber.toString()).toNumber(),
            sequence: Uint64.fromString(account.sequence.toString()).toNumber(),
        };
    };

    getBalance = async (address: string, searchDenom: string): Promise<Coin | null> => {
        const balance = await this.queryClient.bank.balance(address, searchDenom);
        return balance ? coinFromProto(balance) : null;
    };

    getBalancesUnverified = async (address: string): Promise<Coin[]> => {
        const balances = await this.queryClient.bank.unverified.allBalances(address);
        return balances.map(coinFromProto);
    };

    getValidators = async (blockHeight?: number): Promise<ValidatorsResponse> => {
        const results = await this.tmClient.validators(blockHeight);
        return results;
    };

    getTx = async (hash: Uint8Array, includeProof?: boolean): Promise<TxResponse | null> => {
        const result = await this.tmClient.tx({ hash: hash, prove: includeProof });
        return result;
    };

    searchTx = async (queries: string[], page = 1, perPage = 30, includeProof?: boolean): Promise<TxResponse[]> => {
        const results = await Promise.all(queries.map((q) => this.txsQuery({ query: q, page: page, per_page: perPage, prove: includeProof })));
        const seenHashes: Uint8Array[] = [];
        const uniqueResults: TxResponse[] = [];
        for (let r = 0; r < results.length; r++) {
            for (let t = 0; t < results[r].length; t++) {
                const tx = results[r][t];
                if (!seenHashes.includes(tx.hash)) {
                    seenHashes.push(tx.hash);
                    uniqueResults.push(results[r][t]);
                }
            }
        }
        return uniqueResults.sort((a, b) => a.height - b.height);
    };

    private txsQuery = async (params: TxSearchParams): Promise<TxResponse[]> => {
        const results = await this.tmClient.txSearch(params);
        return results.txs as TxResponse[];
    };

    signTx = async (wallet: LumWallet, messages: Message[], fee: Fee, memo?: string): Promise<Uint8Array> => {
        const account = await this.getAccount(wallet.address);
        if (!account) {
            throw new Error('Account not found');
        }
        const { accountNumber, sequence } = account;
        const chainId = await this.getChainId();

        const authInfo = generateAuthInfo(wallet.publicKey, fee, sequence);
        const signDoc = generateSignDoc(messages, memo, authInfo, chainId, accountNumber);
        const signBytes = generateSignDocBytes(signDoc);
        const hashedMessage = sha256(signBytes);
        const signature = await wallet.signTransaction(hashedMessage);
        return generateTxBytes(signDoc, signature);
    };

    broadcastTx = async (tx: Uint8Array): Promise<BroadcastTxCommitResponse> => {
        const response = await this.tmClient.broadcastTxCommit({ tx });
        return response;
    };

    signAndBroadcastTx = async (wallet: LumWallet, messages: Message[], fee: Fee, memo?: string): Promise<BroadcastTxCommitResponse> => {
        const signedTx = await this.signTx(wallet, messages, fee, memo);
        return this.broadcastTx(signedTx);
    };
}
