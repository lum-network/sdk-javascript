import { LumWallet, LumWalletFactory, LumClient, LumUtils, LumConstants, LumRegistry, LumTypes, LumMessages } from '../src';
import { BeamData, BeamState } from '../src/codec/beam/beam';
import { requestCoinsFromFaucet } from './utils';

const randomString = (): string => {
    return Math.random().toString(36).substring(7);
};

describe('LumClient', () => {
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
        await requestCoinsFromFaucet(clt, w1.getAddress());
        await requestCoinsFromFaucet(clt, w2.getAddress());
    });

    afterAll(async () => {
        clt.disconnect();
    });

    it('should allow to connect via webshockets', async () => {
        const wsClt = await LumClient.connect('wss://node0.testnet.lum.network/rpc');
        expect(await wsClt.status()).toBeTruthy();
        wsClt.disconnect();
    });

    it.only('should be able to simulate transactions', async () => {
        const w3 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        // Should reject invalid bech32 addresses
        await expect(
            clt.queryClient.tx.simulate([LumMessages.BuildMsgSend(w1.getAddress(), 'toto', [{ denom: LumConstants.MicroLumDenom, amount: '1' }])], 'hello', w1.getPublicKey(), 0),
        ).rejects.toThrow();
        // Should reject invalid signer
        await expect(
            clt.queryClient.tx.simulate([LumMessages.BuildMsgSend(w3.getAddress(), w3.getAddress(), [{ denom: LumConstants.MicroLumDenom, amount: '1' }])], 'hello', w3.getPublicKey(), 0),
        ).rejects.toThrow();
        // Should reject invalid amounts
        await expect(
            clt.queryClient.tx.simulate([LumMessages.BuildMsgSend(w1.getAddress(), w1.getAddress(), [{ denom: LumConstants.MicroLumDenom, amount: '-1' }])], 'hello', w3.getPublicKey(), 0),
        ).rejects.toThrow();
        // Should reject invalid sequences
        await expect(
            clt.queryClient.tx.simulate([LumMessages.BuildMsgSend(w1.getAddress(), w1.getAddress(), [{ denom: LumConstants.MicroLumDenom, amount: '1' }])], 'hello', w3.getPublicKey(), -1),
        ).rejects.toThrow();
        // Should return simulation in case of success
        const res = await clt.queryClient.tx.simulate(
            [LumMessages.BuildMsgSend(w1.getAddress(), w1.getAddress(), [{ denom: LumConstants.MicroLumDenom, amount: '1' }])],
            'hello',
            w3.getPublicKey(),
            0,
        );
        expect(res).toBeTruthy();
        expect(res.gasInfo).toBeTruthy();
        expect(res.result).toBeTruthy();
    });

    it('should open a beam and close it', async () => {
        const beamId = randomString();

        let acc = await clt.getAccount(w1.getAddress());
        expect(acc).toBeTruthy();

        const chainId = await clt.getChainId();
        const amount: LumTypes.Coin = {
            amount: '1',
            denom: LumConstants.MicroLumDenom,
        };

        const fee = {
            amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
            gas: '100000',
        };

        // Create the beam
        let doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: fee,
            memo: 'Beam review transaction',
            messages: [LumMessages.BuildMsgOpenBeam(beamId, w1.getAddress(), '', amount, 'test', 'lum-network/review', null, 0, 0)],
            signers: [
                {
                    accountNumber: acc.accountNumber,
                    sequence: acc.sequence,
                    publicKey: w1.getPublicKey(),
                },
            ],
        };

        const txCreate = await clt.signAndBroadcastTx(w1, doc);
        expect(txCreate.deliverTx.code).toBe(0);
        const beamAfterCreate = await clt.queryClient.beam.get(beamId);
        expect(beamAfterCreate.status).toBe(BeamState.OPEN);

        // Update the beam
        acc = await clt.getAccount(w1.getAddress());
        doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: fee,
            memo: 'Beam review transaction',
            messages: [LumMessages.BuildMsgUpdateBeam(beamId, w1.getAddress(), null, BeamState.CANCELED)],
            signers: [
                {
                    accountNumber: acc.accountNumber,
                    sequence: acc.sequence,
                    publicKey: w1.getPublicKey(),
                },
            ],
        };

        const txUpdate = await clt.signAndBroadcastTx(w1, doc);
        expect(txUpdate.deliverTx.code).toBe(0);
        const beamAfterUpdate = await clt.queryClient.beam.get(beamId);
        expect(beamAfterUpdate.status).toBe(BeamState.CANCELED);
    });

    it('should open a beam review transaction', async () => {
        const beamId = randomString();

        // Here we wait until the faucet transaction get dispatched and the account finally exists on the blockchain
        // This should be improved since... you know...
        const acc = await clt.getAccount(w1.getAddress());
        expect(acc).toBeTruthy();

        const chainId = await clt.getChainId();

        const amount: LumTypes.Coin = {
            amount: '1',
            denom: LumConstants.MicroLumDenom,
        };

        const openBeamMsg = LumMessages.BuildMsgOpenBeam(
            beamId,
            w1.getAddress(),
            '',
            amount,
            'test',
            'lum-network/review',
            BeamData.fromPartial({
                reward: {
                    amount: 1,
                    status: 'pending',
                    trigger: 'purchase',
                    maxAmount: 2,
                    currency: 'EUR',
                },
                verifier: {
                    name: 'test',
                    url: 'https://test.com',
                    signature: 'test',
                },
                reviewer: {
                    reviewerId: 'kqjsndqj342',
                    name: 'John Doe',
                    isAnonymous: false,
                },
                merchantReview: {
                    reviewId: 'sjqdqsd444sq',
                    reviewUrl: 'https://google.com',
                    title: 'Good',
                    orderId: 'js44',
                    ratingUrl: 'https://google.com',
                    timestamp: new Date().toString(),
                    collectionMethod: 'purchase',
                    merchantUrl: 'https://google.com',
                    content: {
                        overall: 'Not bad not good',
                        customerService: 'Not good not bad',
                    },
                    ratings: {
                        nps: 3,
                        customerService: 3,
                        overall: 3,
                    },
                },
                productsReviews: [
                    {
                        title: 'Product',
                        timestamp: new Date().toString(),
                        ratingUrl: 'https://google.com',
                        reviewUrl: 'https://google.com',
                        orderId: '123445',
                        reviewId: '54321',
                        ratings: {
                            overall: 3,
                            quality: 3,
                        },
                        content: {
                            overall: 'a',
                            cons: 'b',
                            pros: 'd',
                        },
                        collectionMethod: 'purchase',
                        medias: [],
                        products: [],
                    },
                ],
            }),
        );

        const fee = {
            amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
            gas: '100000',
        };
        const doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: fee,
            memo: 'Beam review transaction',
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

    it('Should open a beam reward transaction', async () => {
        const beamId = randomString();

        // Here we wait until the faucet transaction get dispatched and the account finally exists on the blockchain
        // This should be improved since... you know...
        const acc = await clt.getAccount(w1.getAddress());
        expect(acc).toBeTruthy();

        const chainId = await clt.getChainId();

        const amount: LumTypes.Coin = {
            amount: '1',
            denom: LumConstants.MicroLumDenom,
        };

        const openBeamMsg = LumMessages.BuildMsgOpenBeam(
            beamId,
            w1.getAddress(),
            '',
            amount,
            'test',
            'lum-network/reward',
            BeamData.fromPartial({
                reward: {
                    amount: 1,
                    status: 'pending',
                    currency: 'EUR',
                    maxAmount: 2,
                    trigger: 'purchase',
                    details: [],
                },
                verifier: {
                    name: 'test',
                    url: 'https://test.com',
                    signature: 'test',
                },
            }),
        );

        const fee = {
            amount: [{ denom: LumConstants.MicroLumDenom, amount: '1' }],
            gas: '100000',
        };
        const doc = {
            accountNumber: acc.accountNumber,
            chainId,
            fee: fee,
            memo: 'Beam reward transaction',
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
        expect(clt.getChainId()).resolves.toEqual('lumnetwork-testnet');
        expect(height).toBeGreaterThan(0);
        expect(clt.getBlock(height)).resolves.toBeTruthy();
    });

    it('should expose tendermint rpcs', async () => {
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

    it('Should expose staking module', async () => {
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
        const balances = await clt.getAllBalances(account.address);
        expect(balances).toBeTruthy();
        expect(balances.length).toBeGreaterThan(0);
        const lumBalance = balances.filter((b) => b.denom === LumConstants.MicroLumDenom)[0];
        expect(lumBalance).toBeTruthy();
        expect(parseFloat(lumBalance.amount)).toBeGreaterThan(0);
    });

    it('Should expose distribution module', async () => {
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

    it('Should expose the mint module', async () => {
        const supply = await clt.getAllSupplies();

        const params = await clt.queryClient.mint.params();
        expect(params).toBeTruthy();
        expect(params.inflationMin).toBeTruthy();
        expect(params.inflationMax).toBeTruthy();
        expect(params.inflationRateChange).toBeTruthy();
        expect(params.mintDenom).toBeTruthy();
        expect(params.blocksPerYear).toBeTruthy();
        expect(params.goalBonded).toBeTruthy();

        const inflation = await clt.queryClient.mint.inflation();
        expect(parseInt(inflation)).toBeGreaterThan(0);

        const annualProvisions = await clt.queryClient.mint.annualProvisions();
        expect(parseInt(annualProvisions)).toBeGreaterThan(0);
    });

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
