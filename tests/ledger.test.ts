import axios from 'axios';
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid';
import { LumWalletFactory, LumMessages, LumUtils, LumConstants, LumWallet } from '../src';

import { LumClient } from '../src';
import { requestCoinsFromFaucet } from './utils';

const requestCoinsIfNeeded = async (clt: LumClient, w: LumWallet, microLumMinAmount?: number) => {
    const balance = await clt.getBalance(w.getAddress(), LumConstants.MicroLumDenom);
    if (balance && parseInt(balance.amount) > microLumMinAmount) {
        return;
    }
    await requestCoinsFromFaucet(clt, w.getAddress());
};

describe('Ledger', () => {
    let clt: LumClient;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');
    });

    afterAll(async () => {
        clt.disconnect();
    });

    // Remove the .skip part of the function to run the ledger tests manually
    it.skip('Cosmos App Manual signature must work', async () => {
        // Manual testing using ledger device
        // Ledger device must be unlocked and Cosmos app opened prior to running those tests
        const transport = await TransportNodeHid.create();
        const w = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/118'/0'/0/0`, 'lum');
        expect(w).toBeTruthy();

        await requestCoinsIfNeeded(clt, w, 1000);

        const acc = await clt.getAccount(w.getAddress());
        expect(acc).toBeTruthy();

        const balance = await clt.getBalance(acc.address, LumConstants.MicroLumDenom);
        expect(parseInt(balance.amount)).toBeGreaterThan(0);

        const chainId = await clt.getChainId();
        const doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: {
                amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
                gas: '100000',
            },
            memo: 'Send LUM using Ledger App',
            messages: [LumMessages.BuildMsgSend(w.getAddress(), 'lum1lsagfzrm4gz28he4wunt63sts5xzmczwjttsr9', [{ denom: LumConstants.MicroLumDenom, amount: '1' }])],
            signers: [
                {
                    accountNumber: acc.accountNumber,
                    sequence: acc.sequence,
                    publicKey: w.getPublicKey(),
                },
            ],
        };
        const res = await clt.signAndBroadcastTx(w, doc);
        expect(LumUtils.broadcastTxCommitSuccess(res)).toBeTruthy();
    });

    // Remove the .skip part of the function to run the ledger tests manually
    it.skip('Cosmos App Signature verification should work', async () => {
        // Manual testing using ledger device
        // Ledger device must be unlocked and Cosmos app opened prior to running those tests
        const message = 'Lum network is an awesome decentralized protocol';
        const transport = await TransportNodeHid.create();
        const w1 = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/118'/0'/0/0`, 'lum');
        const w2 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        const signed = await w1.signMessage(message);
        const v1 = await LumUtils.verifySignMsg(signed);
        expect(v1).toBeTruthy();
        const v2 = await LumUtils.verifySignMsg(Object.assign({}, signed, { msg: 'Wrong message input' }));
        expect(v2).toBeFalsy();
        const v3 = await LumUtils.verifySignMsg(Object.assign({}, signed, { publicKey: w2.getPublicKey() }));
        expect(v3).toBeFalsy();
        const v4 = await LumUtils.verifySignMsg(Object.assign({}, signed, { address: w2.getAddress() }));
        expect(v4).toBeFalsy();
    });

    // Remove the .skip part of the function to run the ledger tests manually
    it.skip('Lum App Manual signature must work', async () => {
        // Manual testing using ledger device
        // Ledger device must be unlocked and Lum app opened prior to running those tests
        const transport = await TransportNodeHid.create();
        const w = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/880'/0'/0/0`, 'lum');
        expect(w).toBeTruthy();

        await requestCoinsIfNeeded(clt, w, 1000);

        const acc = await clt.getAccount(w.getAddress());
        expect(acc).toBeTruthy();

        const balance = await clt.getBalance(acc.address, LumConstants.MicroLumDenom);
        expect(parseInt(balance.amount)).toBeGreaterThan(0);

        const chainId = await clt.getChainId();
        const doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: {
                amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
                gas: '100000',
            },
            memo: 'Send LUM using Ledger App',
            messages: [LumMessages.BuildMsgSend(w.getAddress(), 'lum1lsagfzrm4gz28he4wunt63sts5xzmczwjttsr9', [{ denom: LumConstants.MicroLumDenom, amount: '1' }])],
            signers: [
                {
                    accountNumber: acc.accountNumber,
                    sequence: acc.sequence,
                    publicKey: w.getPublicKey(),
                },
            ],
        };
        const res = await clt.signAndBroadcastTx(w, doc);
        expect(LumUtils.broadcastTxCommitSuccess(res)).toBeTruthy();
    });

    // Remove the .skip part of the function to run the ledger tests manually
    it.skip('Lum App Signature verification should work', async () => {
        // Manual testing using ledger device
        // Ledger device must be unlocked and Lum app opened prior to running those tests
        const message = 'Lum network is an awesome decentralized protocol';
        const transport = await TransportNodeHid.create();
        const w1 = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/880'/0'/0/0`, 'lum');
        const w2 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        const signed = await w1.signMessage(message);
        const v1 = await LumUtils.verifySignMsg(signed);
        expect(v1).toBeTruthy();
        const v2 = await LumUtils.verifySignMsg(Object.assign({}, signed, { msg: 'Wrong message input' }));
        expect(v2).toBeFalsy();
        const v3 = await LumUtils.verifySignMsg(Object.assign({}, signed, { publicKey: w2.getPublicKey() }));
        expect(v3).toBeFalsy();
        const v4 = await LumUtils.verifySignMsg(Object.assign({}, signed, { address: w2.getAddress() }));
        expect(v4).toBeFalsy();
    });
});
