import { Uint53 } from '@cosmjs/math';
import { Client as TendermintClient, adaptor34 as TendermintAdaptor, toRfc3339WithNanoseconds, broadcastTxCommitSuccess } from '@cosmjs/tendermint-rpc';
import {
    QueryClient as StargateQueryClient,
    setupAuthExtension as StargateSetupAuthExtension,
    setupBankExtension as StargateSetupBankExtension,
    accountFromProto,
    coinFromProto,
    AuthExtension,
    BankExtension,
    SequenceResponse,
} from '@cosmjs/stargate';
import { TxMsgData } from '@cosmjs/stargate/build/codec/cosmos/base/abci/v1beta1/abci';

import { LumWallet } from '../wallet';
import { Message } from '../messages';
import { toHex, sha256, generateAuthInfo, generateSignDoc, generateSignDocBytes, generateTxBytes } from '../utils';
import { Block, Account, Coin, IndexedTx, SearchTxFilter, SearchByHeightQuery, SearchBySentFromOrToQuery, SearchByTagsQuery, BroadcastTxResponse, Fee } from '../types';

export class LumClient {
    private readonly tmClient: TendermintClient;
    private readonly queryClient: StargateQueryClient & AuthExtension & BankExtension;
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

    getAccount = async (searchAddress: string): Promise<Account | null> => {
        const account = await this.queryClient.auth.account(searchAddress);
        return account ? accountFromProto(account) : null;
    };

    getAccountUnverified = async (searchAddress: string): Promise<Account | null> => {
        const account = await this.queryClient.auth.unverified.account(searchAddress);
        return account ? accountFromProto(account) : null;
    };

    getSequence = async (address: string): Promise<SequenceResponse | null> => {
        const account = await this.getAccount(address);
        if (account) {
            return {
                accountNumber: account.accountNumber,
                sequence: account.sequence,
            };
        } else {
            return null;
        }
    };

    getBlock = async (height?: number): Promise<Block> => {
        const response = await this.tmClient.block(height);
        return {
            id: toHex(response.blockId.hash).toUpperCase(),
            header: {
                version: {
                    block: new Uint53(response.block.header.version.block).toString(),
                    app: new Uint53(response.block.header.version.app).toString(),
                },
                height: response.block.header.height,
                chainId: response.block.header.chainId,
                time: toRfc3339WithNanoseconds(response.block.header.time),
            },
            txs: response.block.txs,
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

    getTx = async (id: string): Promise<IndexedTx | null> => {
        const results = await this.txsQuery(`tx.hash='${id}'`);
        if (results.length === 1 && results[0] !== null && results[0] !== void 0) {
            return results[0];
        }
        return null;
    };

    searchTx = async (query: SearchByHeightQuery | SearchBySentFromOrToQuery | SearchByTagsQuery, filter: SearchTxFilter = {}): Promise<IndexedTx[]> => {
        const minHeight = filter.minHeight || 0;
        const maxHeight = filter.maxHeight || Number.MAX_SAFE_INTEGER;

        if (maxHeight < minHeight) {
            return [];
        }

        function withFilters(originalQuery: string) {
            return `${originalQuery} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
        }

        let txs;
        if ((query as SearchByHeightQuery).height !== undefined) {
            const q = query as SearchByHeightQuery;
            txs = q.height >= minHeight && q.height <= maxHeight ? await this.txsQuery(`tx.height=${q.height}`) : [];
        } else if ((query as SearchBySentFromOrToQuery).sentFromOrTo !== undefined) {
            const q = query as SearchBySentFromOrToQuery;
            const sentQuery = withFilters(`message.module='bank' AND transfer.sender='${q.sentFromOrTo}'`);
            const receivedQuery = withFilters(`message.module='bank' AND transfer.recipient='${q.sentFromOrTo}'`);
            const [sent, received] = await Promise.all([sentQuery, receivedQuery].map((rawQuery) => this.txsQuery(rawQuery)));
            const sentHashes = sent.map((t) => t.hash);
            txs = [...sent, ...received.filter((t) => !sentHashes.includes(t.hash))];
        } else if ((query as SearchByTagsQuery).tags !== undefined) {
            const q = query as SearchByTagsQuery;
            const rawQuery = withFilters(q.tags.map((t) => `${t.key}='${t.value}'`).join(' AND '));
            txs = await this.txsQuery(rawQuery);
        } else {
            throw new Error('Unknown query type');
        }

        return txs.filter((tx) => tx.height >= minHeight && tx.height <= maxHeight);
    };

    private txsQuery = async (query: string): Promise<IndexedTx[]> => {
        const results = await this.tmClient.txSearchAll({ query: query });
        return results.txs.map((tx) => {
            return {
                height: tx.height,
                hash: toHex(tx.hash).toUpperCase(),
                code: tx.result.code,
                rawLog: tx.result.log || '',
                tx: tx.tx,
            };
        });
    };

    signTx = async (wallet: LumWallet, messages: Message[], fee: Fee, memo?: string): Promise<Uint8Array> => {
        const seq = await this.getSequence(wallet.address);
        if (!seq) {
            throw new Error('Account not found');
        }
        const { accountNumber, sequence } = seq;
        const chainId = await this.getChainId();

        const authInfo = generateAuthInfo(wallet.publicKey, fee, sequence);
        const signDoc = generateSignDoc(messages, memo, authInfo, chainId, accountNumber);
        const signBytes = generateSignDocBytes(signDoc);
        const hashedMessage = sha256(signBytes);
        const signature = await wallet.signTransaction(hashedMessage);
        return generateTxBytes(signDoc, signature);
    };

    broadcastTx = async (tx: Uint8Array): Promise<BroadcastTxResponse> => {
        const response = await this.tmClient.broadcastTxCommit({ tx });
        if (broadcastTxCommitSuccess(response)) {
            return {
                height: response.height,
                transactionHash: toHex(response.hash).toUpperCase(),
                rawLog: response.deliverTx && response.deliverTx.log,
                data: response.deliverTx && response.deliverTx.data && TxMsgData.decode(response.deliverTx).data,
            };
        }
        return {
            code: response.checkTx.code !== 0 ? response.checkTx.code : response.deliverTx && response.deliverTx.code,
            height: response.height,
            transactionHash: toHex(response.hash).toUpperCase(),
            rawLog: response.checkTx.log,
            data: response.deliverTx && response.deliverTx.data && TxMsgData.decode(response.deliverTx).data,
        };
    };

    signAndBroadcastTx = async (wallet: LumWallet, messages: Message[], fee: Fee, memo?: string): Promise<BroadcastTxResponse> => {
        const signedTx = await this.signTx(wallet, messages, fee, memo);
        return this.broadcastTx(signedTx);
    };
}
