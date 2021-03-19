// import TransportNodeHid from '@ledgerhq/hw-transport-node-hid';

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
});
