import {RpcClient, HttpClient, WebsocketClient} from '@cosmjs/tendermint-rpc';
import { Tendermint37Client, StatusResponse, Method as RpcMethod } from '@cosmjs/tendermint-rpc/build/tendermint37';
import { QueryClient as StargateQueryClient } from '@cosmjs/stargate';
import { JsonRpcRequest } from '@cosmjs/json-rpc';

import { LumWallet, LumUtils, LumTypes } from '..';
import {
    AuthExtension,
    setupAuthExtension,
    BankExtension,
    setupBankExtension,
    BeamExtension,
    setupBeamExtension,
    DfractExtension,
    setupDfractExtension,
    DistributionExtension,
    setupDistributionExtension,
    GovExtension,
    setupGovExtension,
    IbcExtension,
    setupIbcExtension,
    MillionsExtension,
    setupMillionsExtension,
    MintExtension,
    setupMintExtension,
    StakingExtension,
    setupStakingExtension,
    AirdropExtension,
    setupAirdropExtension,
    TxExtension,
    setupTxExtension,
} from '../extensions';
import { setupSlashingExtension, SlashingExtension } from '../extensions/slashing';
import { AuthzExtension, setupAuthzExtension } from '../extensions/authz';
import { FeegrantExtension, setupFeegrantExtension } from '../extensions/feegrant';

function defaultErrorHandler(error: unknown): void {
    throw error;
}

export class LumClient {
    readonly tmClient: Tendermint37Client;
    readonly queryClient: StargateQueryClient &
        AuthExtension &
        AuthzExtension &
        BankExtension &
        BeamExtension &
        DfractExtension &
        DistributionExtension &
        GovExtension &
        IbcExtension &
        MillionsExtension &
        MintExtension &
        StakingExtension &
        SlashingExtension &
        FeegrantExtension &
        AirdropExtension &
        TxExtension;
    private chainId?: string;

    /**
     * Create a LumClient instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     */
    constructor(tmClient: Tendermint37Client) {
        this.tmClient = tmClient;
        this.queryClient = StargateQueryClient.withExtensions(
            tmClient,
            setupAuthExtension,
            setupAuthzExtension,
            setupBankExtension,
            setupBeamExtension,
            setupDfractExtension,
            setupDistributionExtension,
            setupGovExtension,
            setupIbcExtension,
            setupMillionsExtension,
            setupMintExtension,
            setupStakingExtension,
            setupSlashingExtension,
            setupFeegrantExtension,
            setupAirdropExtension,
            setupTxExtension,
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
    static async detectVersion(client: RpcClient): Promise<string> {
        const numbersWithoutZero = '123456789';
        const req: JsonRpcRequest = {
            jsonrpc: '2.0',
            id: parseInt(
                Array.from({ length: 12 })
                    .map(() => numbersWithoutZero[Math.floor(Math.random() * numbersWithoutZero.length)])
                    .join(''),
                10,
            ),
            method: RpcMethod.Status,
            params: {},
        };
        const response = await client.execute(req);
        const result = response.result;
        if (!result || !result.node_info) {
            throw new Error('Unrecognized format for status response');
        }
        const version = result.node_info.version;
        if (typeof version !== 'string') {
            throw new Error('Unrecognized version format: must be string');
        }
        return version;
    }

    static connect = async (endpoint: string, onWebsocketError = defaultErrorHandler): Promise<LumClient> => {
        let rpcClient;
        if (typeof endpoint === 'object') {
            rpcClient = new HttpClient(endpoint);
        } else {
            const useHttp = endpoint.startsWith('http://') || endpoint.startsWith('https://');
            rpcClient = useHttp ? new HttpClient(endpoint) : new WebsocketClient(endpoint, onWebsocketError);
        }
        await this.detectVersion(rpcClient);
        const tmClient = await Tendermint37Client.create(rpcClient);
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
        return this.tmClient.status();
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
        const anyAccount = await this.queryClient.auth.account(address);
        if (!anyAccount) {
            return null;
        }
        return LumUtils.accountFromAny(anyAccount);
    };

    /**
     * Get account balance
     *
     * @param address wallet address
     * @param searchDenom Coin denomination (ex: lum)
     */
    getBalance = async (address: string, searchDenom: string): Promise<LumTypes.Coin | null> => {
        const balance = await this.queryClient.bank.balance(address, searchDenom);
        return balance ? balance : null;
    };

    /**
     * Get all account balances
     *
     * @param address wallet address
     */
    getAllBalances = async (address: string): Promise<LumTypes.Coin[]> => {
        return this.queryClient.bank.allBalances(address);
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
        return this.queryClient.bank.totalSupply();
    };

    /**
     * Get a transaction by Hash
     *
     * @param hash transaction hash to retrieve
     * @param includeProof whether or not to include proof of the transaction inclusion in the block
     */
    getTx = async (hash: Uint8Array, includeProof?: boolean): Promise<LumTypes.TxResponse | null> => {
        return this.tmClient.tx({ hash: hash, prove: includeProof });
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
     * @param wallet signing wallet for multi signature
     * @param doc document to sign
     */
    signTx = async (wallet: LumWallet, doc: LumTypes.Doc): Promise<Uint8Array> => {
        const signatures: Uint8Array[] = [];
        const [signedDoc, signature] = await this.signTxFromWallet(wallet, doc);

        signatures.push(signature);

        if (!signedDoc || signatures.length === 0) {
            throw new Error('Failed to sign the document: no signature provided');
        }

        return LumUtils.generateTxBytes(signedDoc, signatures);
    };

    /**
     * Signs the messages using the provided wallets and builds the transaction
     *
     * @param wallets signing wallets for multi signature
     * @param doc document to sign
     */
    signTxForMultiWallet = async (wallets: LumWallet[], doc: LumTypes.Doc): Promise<Uint8Array> => {
        let signDoc: LumTypes.SignDoc | undefined = undefined;
        const signatures: Uint8Array[] = [];

        for (const wallet of wallets) {
            const [walletSignedDoc, signature] = await this.signTxFromWallet(wallet, doc);

            signatures.push(signature);

            if (!signDoc) {
                signDoc = walletSignedDoc;
            }
        }

        if (!signDoc || signatures.length === 0) {
            throw new Error('Failed to sign the document: no signature provided');
        }

        return LumUtils.generateTxBytes(signDoc, signatures);
    };

    signTxFromWallet = async (wallet: LumWallet, doc: LumTypes.Doc) => {
        const account = await this.getAccount(wallet.getAddress());

        if (!account) {
            throw new Error(`Account not found for wallet ${wallet.getAddress()}`);
        }

        return wallet.signTransaction(doc);
    };

    /**
     * Broadcast a signed transaction
     * Basic usage would be to use the signTx method prior to calling this method
     *
     * @param tx signed transaction to broadcast
     */
    broadcastTx = async (tx: Uint8Array): Promise<LumTypes.BroadcastTxCommitResponse> => {
        return this.tmClient.broadcastTxCommit({ tx });
    };

    /**
     * Signs and broadcast the transaction using the specified wallet and messages
     *
     * @param wallet signing wallet or wallets for multi signature
     * @param doc document to sign and broadcast as a transaction
     */
    signAndBroadcastTx = async (wallet: LumWallet, doc: LumTypes.Doc): Promise<LumTypes.BroadcastTxCommitResponse> => {
        const signedTx = await this.signTx(wallet, doc);

        return this.broadcastTx(signedTx);
    };

    signAndBroadcastTxForMultiWallet = async (wallets: LumWallet[], doc: LumTypes.Doc): Promise<LumTypes.BroadcastTxCommitResponse> => {
        const signedTx = await this.signTxForMultiWallet(wallets, doc);

        return this.broadcastTx(signedTx);
    };
}
