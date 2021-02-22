import { LumClient, LumWallet, LumConstants, LumMessages, LumUtils } from '../src';

describe('LumClient', () => {
    it('Should connect', async () => {
        const w1 = await LumWallet.fromMnemonic('noodle hope lounge dismiss erase elephant seek crawl check equal city chest', LumConstants.getLumHdPath(0), 'cosmos');
        const w2 = await LumWallet.fromMnemonic('sick hollow lizard train motion eternal mixture rude section tray nice awful', LumConstants.getLumHdPath(0), 'cosmos');

        //https://stargate.cosmos.network/testnet
        const clt = await LumClient.connect('http://localhost:26657');
        console.log('wallet address', w1.address);
        console.log('getChainId', await clt.getChainId());
        console.log('getBlockHeight', await clt.getBlockHeight());

        console.log('getBlock', await clt.getBlock());

        console.log('getAccount', await clt.getAccount(w1.address));
        console.log('getAccountUnverified', await clt.getAccountUnverified(w1.address));

        console.log('getBalance', await clt.getBalance(w1.address, 'token'));
        console.log('getBalancesUnverified', await clt.getBalancesUnverified(w1.address));

        const txs = await clt.searchTx([LumUtils.searchTxFrom(w1.address), LumUtils.searchTxTo(w1.address)]);
        console.log('getTx', await clt.getTx(txs[0].hash));
        console.log('searchTxs', txs);

        const sendMsg = LumMessages.BuildMsgSend(w1.address, w2.address, [{ denom: 'token', amount: '2' }]);

        const res = await clt.signAndBroadcastTx(w1, [sendMsg], {
            amount: [
                {
                    denom: 'token',
                    amount: '1',
                },
            ],
            gas: '180000', // 180k
        });
        console.log('-------->', res);

        console.log('getBalance(w1)', await clt.getBalance(w1.address, 'token'));
        console.log('getBalance(w2)', await clt.getBalance(w2.address, 'token'));
    });
});
