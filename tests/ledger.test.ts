// import TransportNodeHid from '@ledgerhq/hw-transport-node-hid';
// import { LumWalletFactory, LumMessages, LumUtils, LumConstants } from '../src';

import { LumClient } from '../src';

describe('Ledger', () => {
    let clt: LumClient;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');
    });

    afterAll(async () => {
        await expect(clt.disconnect()).resolves.toBeTruthy();
    });

    it('Manual signature must work', async () => {
        // Manual testing using ledger device
        // Ledger device must be unlocked and Cosmos app opened prior to running those tests
        // const transport = await TransportNodeHid.create();
        // const w1 = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/118'/0'/0/0`, 'lum');
        // expect(w1).toBeTruthy();
        // const acc = await clt.getAccount(w1.getAddress());
        // expect(acc).toBeTruthy();
        // const balance = await clt.getBalance(acc.address, 'lum');
        // expect(parseInt(balance.amount)).toBeGreaterThan(0);
        // const chainId = await clt.getChainId();
        // const sendMsg = LumMessages.BuildMsgSend(w1.getAddress(), 'lum1lsagfzrm4gz28he4wunt63sts5xzmczwjttsr9', [{ denom: 'lum', amount: '3' }]);
        // const fee = {
        //     amount: [{ denom: LumConstants.LumDenom, amount: '1' }],
        //     gas: '100000',
        // };
        // const doc = {
        //     accountNumber: acc.accountNumber,
        //     chainId,
        //     fee: fee,
        //     memo: 'Just a ledger transaction',
        //     messages: [sendMsg],
        //     sequence: acc.sequence,
        // };
        // const res = await clt.signAndBroadcastTx(w1, doc);
        // expect(LumUtils.broadcastTxCommitSuccess(res)).toBeTruthy();
    });

    it('Signature verification should work', async () => {
        // const message = 'Lum network is an awesome decentralized protocol';
        // const transport = await TransportNodeHid.create();
        // const w1 = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/118'/0'/0/0`, 'lum');
        // const w2 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        // const signed = await w1.signMessage(message);
        // const v1 = await LumUtils.verifySignMsg(signed);
        // expect(v1).toBeTruthy();
        // const v2 = await LumUtils.verifySignMsg(Object.assign({}, signed, { msg: 'Wrong message input' }));
        // expect(v2).toBeFalsy();
        // const v3 = await LumUtils.verifySignMsg(Object.assign({}, signed, { publicKey: w2.getPublicKey() }));
        // expect(v3).toBeFalsy();
        // const v4 = await LumUtils.verifySignMsg(Object.assign({}, signed, { address: w2.getAddress() }));
        // expect(v4).toBeFalsy();
    });
});
