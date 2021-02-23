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

    /**
     * Create a LumClient instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     */
    constructor(tmClient: TendermintClient) {
        this.tmClient = tmClient;
        this.queryClient = StargateQueryClient.withExtensions(tmClient, StargateSetupAuthExtension, StargateSetupBankExtension);
    }

    /**
     * Creates a new LumClient for the given endpoint
     * Uses HTTP when the URL schema is http or https, uses WebSockets otherwise
     *
     * @param endpoint Blockchain node RPC url
     */
    static connect = async (endpoint: string): Promise<LumClient> => {
        const tmClient = await TendermintClient.connect(endpoint, TendermintAdaptor);
        return new LumClient(tmClient);
    };

    /**
     * Disconnect the underlying tendermint client
     */
    disconnect() {
        this.tmClient.disconnect();
    }

    /**
     * Get the chain id
     */
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

    /**
     * Get the current block height
     */
    getBlockHeight = async (): Promise<number> => {
        const status = await this.tmClient.status();
        return status.syncInfo.latestBlockHeight;
    };

    /**
     * Get a block by height
     *
     * @param height block height to get (default to current height)
     */
    getBlock = async (height?: number): Promise<BlockResponse> => {
        const response = await this.tmClient.block(height);
        return response;
    };

    /**
     * Get account information
     *
     * @param address wallet address
     */
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

    /**
     * Get account information without verifying its existence
     *
     * @param address wallet address
     */
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

    /**
     * Get account balance
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalance = async (address: string, searchDenom: string): Promise<Coin | null> => {
        const balance = await this.queryClient.bank.balance(address, searchDenom);
        return balance ? coinFromProto(balance) : null;
    };

    /**
     * Get all account balances without verifying their existence
     *
     * @param address wallet address
     */
    getBalancesUnverified = async (address: string): Promise<Coin[]> => {
        const balances = await this.queryClient.bank.unverified.allBalances(address);
        return balances.map(coinFromProto);
    };

    /**
     * Get all validators
     * Validators are sorted first by voting power (descending), then by address (ascending)
     *
     * @param blockHeight block height to return. If no height is provided, it will fetch validator set which corresponds to the latest block
     */
    getValidators = async (blockHeight?: number): Promise<ValidatorsResponse> => {
        const results = await this.tmClient.validators(blockHeight);
        return results;
    };

    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     * @param includeProof whether or not to include proof of the transaction inclusion in the block
     */
    getTx = async (hash: Uint8Array, includeProof?: boolean): Promise<TxResponse | null> => {
        const result = await this.tmClient.tx({ hash: hash, prove: includeProof });
        return result;
    };

    /**
     * Search for transactions (paginated)
     * All queries will be run and results will be deduplicated, merged and sorted by block height
     *
     * Queries:
     * To tell which events you want, you need to provide a query. query is a string, which has a form: "condition AND condition ..." (no OR at the moment). condition has a form: "key operation operand". key is a string with a restricted set of possible symbols ( \t\n\r\()"'=>< are not allowed). operation can be "=", "<", "<=", ">", ">=", "CONTAINS" AND "EXISTS". operand can be a string (escaped with single quotes), number, date or time.
     * Examples: tm.event = 'NewBlock' # new blocks tm.event = 'CompleteProposal' # node got a complete proposal tm.event = 'Tx' AND tx.hash = 'XYZ' # single transaction tm.event = 'Tx' AND tx.height = 5 # all txs of the fifth block tx.height = 5 # all txs of the fifth block
     * Tendermint provides a few predefined keys: tm.event, tx.hash and tx.height. Note for transactions, you can define additional keys by providing events with DeliverTx response.
     *
     * @param queries queries to run (see utils/search for helpers)
     * @param page page to query (default to 1)
     * @param perPage result per pages (default to 30)
     * @param includeProof whether or not to include proofs of the transactions inclusion in the block
     */
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

    /**
     * Run a tx search
     *
     * @param params Search params
     */
    private txsQuery = async (params: TxSearchParams): Promise<TxResponse[]> => {
        const results = await this.tmClient.txSearch(params);
        return results.txs as TxResponse[];
    };

    /**
     * Signs the messages using the provided wallet and builds the transaction
     *
     * @param wallet signing wallet
     * @param messages messages to sign
     * @param fee requested fee
     * @param memo optional memo for the transaction
     */
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

    /**
     * Broadcast a signed transaction
     * Basic usage would be to use the signTx method prior to calling this method
     *
     * @param tx signed transaction to broadcast
     */
    broadcastTx = async (tx: Uint8Array): Promise<BroadcastTxCommitResponse> => {
        const response = await this.tmClient.broadcastTxCommit({ tx });
        return response;
    };

    /**
     * Signs and broadcast the transaction using the specified wallet and messages
     *
     * @param wallet signing wallet
     * @param messages messages to sign
     * @param fee requested fee
     * @param memo optional memo for the transaction
     */
    signAndBroadcastTx = async (wallet: LumWallet, messages: Message[], fee: Fee, memo?: string): Promise<BroadcastTxCommitResponse> => {
        const signedTx = await this.signTx(wallet, messages, fee, memo);
        return this.broadcastTx(signedTx);
    };
}
