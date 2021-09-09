import { Tendermint34Client, StatusResponse } from '@cosmjs/tendermint-rpc';
import {
    QueryClient as StargateQueryClient,
    setupAuthExtension as StargateSetupAuthExtension,
    setupBankExtension as StargateSetupBankExtension,
    setupDistributionExtension as StargateDistributionExtension,
    setupStakingExtension as StargateStakingExtension,
    setupGovExtension as StargateGovExtension,
    AuthExtension,
    BankExtension,
    StakingExtension,
    DistributionExtension,
    GovExtension,
    accountFromAny,
} from '@cosmjs/stargate';

import { LumWallet, LumUtils, LumTypes } from '..';
import { BeamExtension, setupBeamExtension as BeamSetupBeamExtension } from '../extensions';

export class LumClient {
    readonly tmClient: Tendermint34Client;
    readonly queryClient: StargateQueryClient & AuthExtension & BankExtension & DistributionExtension & StakingExtension & GovExtension & BeamExtension;
    private chainId?: string;

    /**
     * Create a LumClient instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     */
    constructor(tmClient: Tendermint34Client) {
        this.tmClient = tmClient;
        this.queryClient = StargateQueryClient.withExtensions(
            tmClient,
            StargateSetupAuthExtension,
            StargateSetupBankExtension,
            StargateDistributionExtension,
            StargateStakingExtension,
            StargateGovExtension,
            BeamSetupBeamExtension,
        );

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
        // Temporary fix missing stop calls from the cosmjs socket implementation
        // @ts-ignore
        this.tmClient.client && this.tmClient.client.socket && this.tmClient.client.events && this.tmClient.client.socket.events._stopNow();
        // @ts-ignore
        this.tmClient.client &&
            // @ts-ignore
            this.tmClient.client.socket &&
            // @ts-ignore
            this.tmClient.client.socket.connectionStatus &&
            // @ts-ignore
            this.tmClient.client.socket.connectionStatus.updates &&
            // @ts-ignore
            this.tmClient.client.socket.connectionStatus.updates._stopNow();

        // Disconnect the client
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
        return response as LumTypes.BlockResponse;
    };

    /**
     * Get account information
     *
     * @param address wallet address
     */
    getAccount = async (address: string): Promise<LumTypes.Account | null> => {
        const anyAccount = await this.queryClient.auth.verified.account(address);
        if (!anyAccount) {
            return null;
        }
        return accountFromAny(anyAccount);
    };

    /**
     * Get account information without verifying its existence
     *
     * @param address wallet address
     */
    getAccountUnverified = async (address: string): Promise<LumTypes.Account | null> => {
        const anyAccount = await this.queryClient.auth.account(address);
        if (!anyAccount) {
            return null;
        }
        return accountFromAny(anyAccount);
    };

    /**
     * Get account balance
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalance = async (address: string, searchDenom: string): Promise<LumTypes.Coin | null> => {
        const balance = await this.queryClient.bank.verified.balance(address, searchDenom);
        return balance ? balance : null;
    };

    /**
     * Get an account balance without verifying their existence
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalanceUnverified = async (address: string, searchDenom: string): Promise<LumTypes.Coin | null> => {
        const balance = await this.queryClient.bank.balance(address, searchDenom);
        return balance ? balance : null;
    };

    /**
     * Get all account balances without verifying their existence
     *
     * @param address wallet address
     */
    getAllBalancesUnverified = async (address: string): Promise<LumTypes.Coin[]> => {
        const balances = await this.queryClient.bank.allBalances(address);
        return balances;
    };

    /**
     * Get coin supply
     *
     * @param searchDenom Coin denomination (ex: lum)
     */
    getSupply = async (searchDenom: string): Promise<LumTypes.Coin | null> => {
        const supply = await this.queryClient.bank.supplyOf(searchDenom);
        return supply ? supply : null;
    };

    /**
     * Get all coins supplies
     */
    getAllSupplies = async (): Promise<LumTypes.Coin[]> => {
        const supplies = await this.queryClient.bank.totalSupply();
        return supplies;
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
    private txsQuery = async (params: LumTypes.TxSearchParams): Promise<readonly LumTypes.TxResponse[]> => {
        const results = await this.tmClient.txSearch(params);
        return results.txs;
    };

    /**
     * Signs the messages using the provided wallet and builds the transaction
     *
     * @param wallet signing wallet or wallets for multi signature
     * @param doc document to sign
     */
    signTx = async (wallet: LumWallet | LumWallet[], doc: LumTypes.Doc): Promise<Uint8Array> => {
        let wallets: LumWallet[] = [];
        if (Array.isArray(wallet)) {
            wallets = wallet;
        } else {
            wallets = [wallet];
        }

        if (wallets.length < 1) {
            throw new Error('At least one wallet is required to sign the transaction');
        }
        const signDoc = LumUtils.generateSignDoc(doc, 0, wallets[0].signingMode());
        const signatures: Uint8Array[] = [];

        for (let i = 0; i < wallets.length; i++) {
            const account = await this.getAccount(wallets[i].getAddress());
            if (!account) {
                throw new Error(`Account not found for wallet at index ${i}`);
            }
            signatures.push(await wallets[i].signTransaction(doc));
        }
        return LumUtils.generateTxBytes(signDoc, signatures);
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
     * @param wallet signing wallet or wallets for multi signature
     * @param doc document to sign and broadcast as a transaction
     */
    signAndBroadcastTx = async (wallet: LumWallet | LumWallet[], doc: LumTypes.Doc): Promise<LumTypes.BroadcastTxCommitResponse> => {
        const signedTx = await this.signTx(wallet, doc);
        return this.broadcastTx(signedTx);
    };
}
