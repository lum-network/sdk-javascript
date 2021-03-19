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

    it('Should be able to connect to ledger hardware wallet', async () => {
        // WIP - manual testing using ledger device
        // const transport = await TransportNodeHid.create();
        // const w1 = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/118'/0'/0/0`, 'lum');
        // const acc = await clt.getAccount(w1.getAddress());
        // expect(acc).toBeTruthy();
        // const balance = await clt.getBalance(acc.address, 'lum');
        // expect(parseInt(balance.amount)).toBeGreaterThan(0);
        // TODO: requires to fixe the ledger signing implementation
        // const chainId = await clt.getChainId();
        // const sendMsg = LumMessages.BuildMsgSend(w1.getAddress(), 'lum1ty3meqzqxq7vkdyp7l7znzvn0t50w92uf6h4px', [{ denom: 'lum', amount: '3' }]);
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
