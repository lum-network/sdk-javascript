import axios from 'axios';

import { LumClient, LumConstants } from '../src';

export const requestCoinsFromFaucet = async (clt: LumClient, addr: string): Promise<void> => {
    const ulumAmount = 100 * Math.pow(10, LumConstants.LumExponent);

    // Try to query the local faucet
    let res = null;
    try {
        res = await axios.post(
            `http://0.0.0.0:4500/`,
            { 'address': addr, 'coins': [`${ulumAmount}ulum`] },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    } catch (e) {}
    if (!res || res.status !== 200) {
        // Otherwise query the testnet official faucet
        res = await axios.get(`https://bridge.testnet.lum.network/faucet/${addr}`);
    }
    expect(res).toBeTruthy();
    expect(res.status).toEqual(200);

    const faucetResult = new Promise((resolve, reject) => {
        let it = 0;
        const rec = setInterval(async () => {
            const balance = await clt.getBalance(addr, LumConstants.MicroLumDenom);
            if (balance && parseInt(balance.amount) >= ulumAmount) {
                clearInterval(rec);
                resolve(true);
            } else if (it >= 60) {
                clearInterval(rec);
                reject();
            }
            it++;
        }, 1000);
    });
    await expect(faucetResult).resolves.toBeTruthy();
};
