import { LumClient, LumConstants, LumMessages, LumWallet } from '../src';

describe('LumClient', () => {
    let clt: LumClient;
    let w1: LumWallet;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');
        w1 = await LumWallet.fromMnemonic('noodle hope lounge dismiss erase elephant seek crawl check equal city chest');
        console.log(w1.address);
    });

    afterAll(async () => {
        await expect(clt.disconnect()).resolves.toBeTruthy();
    });

    it('should build and dispatch a mint message', async () => {
        const mintMsg = LumMessages.BuildMsgMintAndSend(w1.address, new Date());

        const fee = {
            amount: [{ denom: LumConstants.LumDenom, amount: '0' }],
            gas: '100000',
        };

        const broadcastResult = await clt.signAndBroadcastTx(w1, [mintMsg], fee, 'You mad bro? You aint got money bro?');
        console.log(broadcastResult);
    });
});
