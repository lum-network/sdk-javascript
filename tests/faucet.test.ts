import { LumClient, LumConstants, LumMessages, LumUtils, LumWallet, LumWalletFactory } from '../src';

describe('Faucet', () => {
    let clt: LumClient;
    let w1: LumWallet;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');
        w1 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
    });

    afterAll(async () => {
        await expect(clt.disconnect()).resolves.toBeTruthy();
    });

    it('Should build and dispatch a mint message', async () => {
        const mintMsg = LumMessages.BuildMsgMintAndSend(w1.getAddress(), new Date());
        const fee = {
            amount: [{ denom: LumConstants.LumDenom, amount: '0' }],
            gas: '100000',
        };
        const broadcastResult = await clt.signAndBroadcastTx(w1, [mintMsg], fee, 'I need a dollar!');
        expect(LumUtils.broadcastTxCommitSuccess(broadcastResult)).toBeTruthy();
    });
});
