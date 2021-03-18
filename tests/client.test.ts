import { LumWallet, LumWalletFactory, LumClient, LumUtils, LumConstants, LumRegistry, LumTypes } from '../src';

describe('LumClient', () => {
    let clt: LumClient;
    let w1: LumWallet;
    let w2: LumWallet;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');
        w1 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        w2 = await LumWalletFactory.fromMnemonic(LumUtils.generateMnemonic());
        expect(w1.getAddress()).not.toEqual(w2.getAddress());
    });

    afterAll(async () => {
        await expect(clt.disconnect()).resolves.toBeTruthy();
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
        const supplies = await clt.queryClient.bank.unverified.totalSupply();
        expect(supplies).toBeTruthy();
        expect(supplies.length).toBeGreaterThan(0);
        const lumSupply = supplies.filter((c) => c.denom === LumConstants.LumDenom)[0];
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
        const stakers = await clt.queryClient.staking.unverified.validators('BOND_STATUS_BONDED');
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
        const lumBalance = balances.filter((b) => b.denom === LumConstants.LumDenom)[0];
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
        const stakers = await clt.queryClient.staking.unverified.validators('BOND_STATUS_BONDED');
        const bootStak = stakers.validators.filter((s) => LumUtils.toHex((LumRegistry.decode(s.consensusPubkey) as LumTypes.PubKey).key) === LumUtils.toHex(bootVal.pubkey.data))[0];
        expect(bootVal).toBeTruthy();

        // Get account information by deriving the address from the operator address
        const delegAddress = LumUtils.Bech32.encode(LumConstants.LumBech32PrefixAccAddr, LumUtils.Bech32.decode(bootStak.operatorAddress).data);
        const account = await clt.getAccount(delegAddress);
        expect(account).toBeTruthy();

        const deleg = await clt.queryClient.distribution.unverified.delegatorWithdrawAddress(account.address);
        expect(deleg).toBeTruthy();
        expect(deleg.withdrawAddress).toEqual(account.address);
        const delegValidators = await clt.queryClient.distribution.unverified.delegatorValidators(account.address);
        expect(delegValidators).toBeTruthy();
        expect(delegValidators.validators.length).toBeGreaterThan(0);
    });
});
