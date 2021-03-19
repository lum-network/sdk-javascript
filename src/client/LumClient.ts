import { Uint64 } from '@cosmjs/math';
import { Tendermint34Client, StatusResponse } from '@cosmjs/tendermint-rpc';
import {
    QueryClient as StargateQueryClient,
    setupAuthExtension as StargateSetupAuthExtension,
    setupBankExtension as StargateSetupBankExtension,
    setupDistributionExtension as StargateDistributionExtension,
    setupStakingExtension as StargateStakingExtension,
    coinFromProto,
    AuthExtension,
    BankExtension,
    StakingExtension,
    DistributionExtension,
} from '@cosmjs/stargate';

import { LumWallet, LumUtils, LumTypes } from '..';

export class LumClient {
    readonly tmClient: Tendermint34Client;
    readonly queryClient: StargateQueryClient & AuthExtension & BankExtension & DistributionExtension & StakingExtension;
    private chainId?: string;

    /**
     * Create a LumClient instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     */
    constructor(tmClient: Tendermint34Client) {
        this.tmClient = tmClient;
        this.queryClient = StargateQueryClient.withExtensions(tmClient, StargateSetupAuthExtension, StargateSetupBankExtension, StargateDistributionExtension, StargateStakingExtension);

        // Used for debugging while gasWanted, gasUsed and codespace are still waiting to be included in the code lib
        // // @ts-ignore
        // this.tmClient.r.decodeTx = (data) => {
        //     const res = adaptor34.responses.decodeTx(data);
        //     if (res && res.result) {
        //         // @ts-ignore
        //         res.result.gasWanted = Int53.fromString(data.result.tx_result.gas_wanted || '0').toNumber();
        //         // @ts-ignore
        //         res.result.gasUsed = Int53.fromString(data.result.tx_result.gas_used || '0').toNumber();
        //         // @ts-ignore
        //         res.result.codespace = data.result.tx_result.codespace;
        //     }
        //     return res;
        // };
    }

    /**
     * Creates a new LumClient for the given endpoint
     * Uses HTTP when the URL schema is http or https, uses WebSockets otherwise
     *
     * @param endpoint Blockchain node RPC url
     */
    static connect = async (endpoint: string): Promise<LumClient> => {
        const tmClient = await Tendermint34Client.connect(endpoint);
        return new LumClient(tmClient);
    };

    /**
     * Disconnect the underlying tendermint client
     */
    disconnect() {
        this.tmClient.disconnect();
    }

    /**
     * Get the connected node status information
     */
    status = async (): Promise<StatusResponse> => {
        const status = await this.tmClient.status();
        return status;
    };

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
    getBlock = async (height?: number): Promise<LumTypes.BlockResponse> => {
        const response = await this.tmClient.block(height);
        return response;
    };

    /**
     * Get account information
     *
     * @param address wallet address
     */
    getAccount = async (address: string): Promise<LumTypes.Account | null> => {
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
    getAccountUnverified = async (address: string): Promise<LumTypes.Account | null> => {
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
    getBalance = async (address: string, searchDenom: string): Promise<LumTypes.Coin | null> => {
        const balance = await this.queryClient.bank.balance(address, searchDenom);
        return balance ? coinFromProto(balance) : null;
    };

    /**
     * Get an account balance without verifying their existence
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalanceUnverified = async (address: string, searchDenom: string): Promise<LumTypes.Coin | null> => {
        const balance = await this.queryClient.bank.unverified.balance(address, searchDenom);
        return balance ? coinFromProto(balance) : null;
    };

    /**
     * Get all account balances without verifying their existence
     *
     * @param address wallet address
     */
    getAllBalancesUnverified = async (address: string): Promise<LumTypes.Coin[]> => {
        const balances = await this.queryClient.bank.unverified.allBalances(address);
        return balances.map(coinFromProto);
    };

    /**
     * Get coin supply
     *
     * @param searchDenom Coin denomination (ex: lum)
     */
    getSupply = async (searchDenom: string): Promise<LumTypes.Coin | null> => {
        const supply = await this.queryClient.bank.unverified.supplyOf(searchDenom);
        return supply ? coinFromProto(supply) : null;
    };

    /**
     * Get all coins supplies
     */
    getAllSupplies = async (): Promise<LumTypes.Coin[]> => {
        const supplies = await this.queryClient.bank.unverified.totalSupply();
        return supplies.map(coinFromProto);
    };

    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     * @param includeProof whether or not to include proof of the transaction inclusion in the block
     */
    getTx = async (hash: Uint8Array, includeProof?: boolean): Promise<LumTypes.TxResponse | null> => {
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
     * @param perPage results per pages (default to 30)
     * @param includeProof whether or not to include proofs of the transactions inclusion in the block
     */
    searchTx = async (queries: string[], page = 1, perPage = 30, includeProof?: boolean): Promise<LumTypes.TxResponse[]> => {
        const results = await Promise.all(queries.map((q) => this.txsQuery({ query: q, page: page, per_page: perPage, prove: includeProof })));
        const seenHashes: Uint8Array[] = [];
        const uniqueResults: LumTypes.TxResponse[] = [];
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
    private txsQuery = async (params: LumTypes.TxSearchParams): Promise<LumTypes.TxResponse[]> => {
        const results = await this.tmClient.txSearch(params);
        return results.txs as LumTypes.TxResponse[];
    };

    /**
     * Signs the messages using the provided wallet and builds the transaction
     *
     * @param wallet signing wallet
     * @param doc document to sign
     */
    signTx = async (wallet: LumWallet, doc: LumTypes.Doc): Promise<Uint8Array> => {
        const account = await this.getAccount(wallet.getAddress());
        if (!account) {
            throw new Error('Account not found');
        }
        const signDoc = LumUtils.generateSignDoc(doc, wallet.getPublicKey(), wallet.signingMode());
        const signature = await wallet.signTransaction(doc);
        return LumUtils.generateTxBytes(signDoc, signature);
    };

    /**
     * Broadcast a signed transaction
     * Basic usage would be to use the signTx method prior to calling this method
     *
     * @param tx signed transaction to broadcast
     */
    broadcastTx = async (tx: Uint8Array): Promise<LumTypes.BroadcastTxCommitResponse> => {
        const response = await this.tmClient.broadcastTxCommit({ tx });
        return response;
    };

    /**
     * Signs and broadcast the transaction using the specified wallet and messages
     *
     * @param wallet signing wallet
     * @param doc document to sign and broadcast as a transaction
     */
    signAndBroadcastTx = async (wallet: LumWallet, doc: LumTypes.Doc): Promise<LumTypes.BroadcastTxCommitResponse> => {
        const signedTx = await this.signTx(wallet, doc);
        return this.broadcastTx(signedTx);
    };
}
