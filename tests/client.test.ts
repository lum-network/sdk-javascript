import { LumWallet, LumWalletFactory, LumClient, LumUtils, LumConstants, LumRegistry, LumTypes, LumMessages, LumPaperWallet } from '../src';
import axios from 'axios';
import Long from 'long';

const randomString = (): string => {
    return Math.random().toString(36).substring(7);
}

describe("LumClient", () => {
    let clt: LumClient;
    let w1: LumWallet;
    let w2: LumWallet;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');

        // Prepare the wallets
        w1 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        w2 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());

        expect(w1.getAddress()).not.toEqual(w2.getAddress());

        // Seed them with faucet coins each
        let res = await axios.get(`https://bridge.testnet.lum.network/faucet/${w1.getAddress()}`);
        expect(res.status).toEqual(200);
        res = await axios.get(`https://bridge.testnet.lum.network/faucet/${w2.getAddress()}`);
        expect(res.status).toEqual(200);
        const faucetResult = new Promise((resolve, reject) => {
            let it = 0;
            const rec = setInterval(async () => {
                const balance1 = await clt.getBalance(w1.getAddress(), LumConstants.MicroLumDenom);
                const balance2 = await clt.getBalance(w2.getAddress(), LumConstants.MicroLumDenom);
                if (balance1 && balance2 && parseInt(balance1.amount) > 0 && parseInt(balance2.amount) > 0) {
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
    });

    afterAll(async () => {
        await expect(clt.disconnect()).resolves.toBeTruthy();
    });

    it('Should be able to use beam features', async () => {
        const beamId = randomString();

        // Here we wait until the faucet transaction get dispatched and the account finally exists on the blockchain
        // This should be improved since... you know...
        const acc = await clt.getAccount(w1.getAddress());
        expect(acc).toBeTruthy();

        const chainId = await clt.getChainId();

        const openBeamMsg = LumMessages.BuildMsgOpenBeam(beamId, w1.getAddress(), new Long(100), 'test', null, null);

        const fee = {
            amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
            gas: '100000',
        };
        const doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: fee,
            memo: 'Just a open beam transaction',
            messages: [openBeamMsg],
            signers: [
                {
                    accountNumber: acc.accountNumber,
                    sequence: acc.sequence,
                    publicKey: w1.getPublicKey(),
                },
            ],
        };

        const tx = await clt.signAndBroadcastTx(w1, doc);
        expect(tx.deliverTx.code).toBe(0);
    });

    it('Should expose basic information', async () => {
        const height = (await clt.getBlockHeight()) - 1;
        expect(clt.getChainId()).resolves.toEqual("lumnetwork-testnet");
        expect(height).toBeGreaterThan(0);
        expect(clt.getBlock(height)).resolves.toBeTruthy();
    });

    it("should expose tendermint rpcs", async () => {
        const height = (await clt.getBlockHeight()) - 1;
        expect(height).toBeGreaterThan(0);
        expect(clt.tmClient.health()).resolves.toBeNull();
        expect(clt.tmClient.status()).resolves.toBeTruthy();
        expect(clt.tmClient.genesis()).resolves.toBeTruthy();
        expect(clt.tmClient.abciInfo()).resolves.toBeTruthy();
        expect(clt.tmClient.block(height)).resolves.toBeTruthy();
        expect(clt.tmClient.blockResults(height)).resolves.toBeTruthy();
        expect(clt.tmClient.blockchain(0, height)).resolves.toBeTruthy();
        expect(clt.tmClient.validatorsAll(height)).resolves.toBeTruthy();
    });

    it('Should expose bank module', async () => {
        const supplies = await clt.queryClient.bank.totalSupply();
        expect(supplies).toBeTruthy();
        expect(supplies.length).toBeGreaterThan(0);
        const lumSupply = supplies.filter((c) => c.denom === LumConstants.MicroLumDenom)[0];
        expect(lumSupply).toBeTruthy();
        expect(parseFloat(lumSupply.amount)).toBeGreaterThan(0);
    });

    it("Should expose staking module", async () => {
        const validators = await clt.tmClient.validatorsAll();
        expect(validators.validators.length).toBeGreaterThanOrEqual(1);
        const block = await clt.getBlock();
        let found = false;
        for (let v = 0; v < validators.validators.length; v++) {
            const val = validators.validators[v];
            if (LumUtils.toHex(val.address) === LumUtils.toHex(block.block.header.proposerAddress)) {
                found = true;
                break;
            }
        }
        expect(found).toBeTruthy();

        // Get first available block
        const firstBlock = await clt.getBlock(2);

        // Get boot val (genesis) with address genesis proposer address
        const bootVal = validators.validators.filter((v) => LumUtils.toHex(v.address) === LumUtils.toHex(firstBlock.block.header.proposerAddress))[0];
        expect(bootVal).toBeTruthy();

        // Get staking validator by matching it using pubkeys
        const stakers = await clt.queryClient.staking.validators('BOND_STATUS_BONDED');
        const bootStak = stakers.validators.filter((s) => LumUtils.toHex((LumRegistry.decode(s.consensusPubkey) as LumTypes.PubKey).key) === LumUtils.toHex(bootVal.pubkey.data))[0];
        expect(bootVal).toBeTruthy();

        // Get account information by deriving the address from the operator address
        const delegAddress = LumUtils.Bech32.encode(LumConstants.LumBech32PrefixAccAddr, LumUtils.Bech32.decode(bootStak.operatorAddress).data);
        const account = await clt.getAccount(delegAddress);
        expect(account).toBeTruthy();

        // Get account balances
        const balances = await clt.getAllBalancesUnverified(account.address);
        expect(balances).toBeTruthy();
        expect(balances.length).toBeGreaterThan(0);
        const lumBalance = balances.filter((b) => b.denom === LumConstants.MicroLumDenom)[0];
        expect(lumBalance).toBeTruthy();
        expect(parseFloat(lumBalance.amount)).toBeGreaterThan(0);
    });

    it("Should expose distribution module", async () => {
        // Get validators
        const validators = await clt.tmClient.validatorsAll();
        expect(validators.validators.length).toBeGreaterThanOrEqual(1);

        // Get first available block
        const firstBlock = await clt.getBlock(2);

        // Get boot val (genesis) with address genesis proposer address
        const bootVal = validators.validators.filter((v) => LumUtils.toHex(v.address) === LumUtils.toHex(firstBlock.block.header.proposerAddress))[0];
        expect(bootVal).toBeTruthy();

        // Get genesis validator account address
        const stakers = await clt.queryClient.staking.validators('BOND_STATUS_BONDED');
        const bootStak = stakers.validators.filter((s) => LumUtils.toHex((LumRegistry.decode(s.consensusPubkey) as LumTypes.PubKey).key) === LumUtils.toHex(bootVal.pubkey.data))[0];
        expect(bootVal).toBeTruthy();

        // Get account information by deriving the address from the operator address
        const delegAddress = LumUtils.Bech32.encode(LumConstants.LumBech32PrefixAccAddr, LumUtils.Bech32.decode(bootStak.operatorAddress).data);
        const account = await clt.getAccount(delegAddress);
        expect(account).toBeTruthy();

        const deleg = await clt.queryClient.distribution.delegatorWithdrawAddress(account.address);
        expect(deleg).toBeTruthy();
        expect(deleg.withdrawAddress).toEqual(account.address);
        const delegValidators = await clt.queryClient.distribution.delegatorValidators(account.address);
        expect(delegValidators).toBeTruthy();
        expect(delegValidators.validators.length).toBeGreaterThan(0);
    });

    it('Should open a beam', async () => {});

    it('Should allow multiple signers per transaction', async () => {
        const acc1 = await clt.getAccount(w1.getAddress());
        const acc2 = await clt.getAccount(w2.getAddress());
        const chainId = await clt.getChainId();
        const fee = {
            amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
            gas: '300000',
        };

        const doc = {
            accountNumber: 0, //acc1.accountNumber,
            chainId,
            fee: fee,
            memo: 'Just a open beam transaction',
            messages: [
                LumMessages.BuildMsgSend(w1.getAddress(), w2.getAddress(), [{ denom: LumConstants.MicroLumDenom, amount: '99' }]),
                LumMessages.BuildMsgSend(w2.getAddress(), w1.getAddress(), [{ denom: LumConstants.MicroLumDenom, amount: '99' }]),
            ],
            signers: [
                {
                    accountNumber: acc1.accountNumber,
                    sequence: acc1.sequence,
                    publicKey: w1.getPublicKey(),
                },
                {
                    accountNumber: acc2.accountNumber,
                    sequence: acc2.sequence,
                    publicKey: w2.getPublicKey(),
                },
            ],
        };

        const res = await clt.signAndBroadcastTx([w1, w2], doc);
        expect(LumUtils.broadcastTxCommitSuccess(res));
    });
});
