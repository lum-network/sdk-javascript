import { LumWallet, LumClient, LumUtils, LumConstants, LumRegistry, LumTypes } from '../src';

const genesisAccountAddress = 'lum100hm4tt3z3mj4gc453quvu452dcp2ehqavrtlp';
const genesisValidatorAddress = '23D45E13FF3418D23DF989D78EBE6DE76F3A89EC';

describe('LumClient', () => {
    let clt: LumClient;
    let w1: LumWallet;
    let w2: LumWallet;

    beforeAll(async () => {
        clt = await LumClient.connect('http://node0.testnet.lum.network/rpc');
        w1 = await LumWallet.fromMnemonic('noodle hope lounge dismiss erase elephant seek crawl check equal city chest');
        w2 = await LumWallet.fromMnemonic('sick hollow lizard train motion eternal mixture rude section tray nice awful');
        expect(w1.address).not.toEqual(w2.address);
    });

    afterAll(async () => {
        await expect(clt.disconnect()).resolves.toBeTruthy();
    });

    it('Should expose basic information', async () => {
        expect(clt.getChainId()).resolves.toEqual('lumnetwork'); // TODO: will be update to lumnetwork-testnet
        expect(clt.getBlockHeight()).resolves.toBeGreaterThan(0);
        expect(clt.getBlock()).resolves.toBeTruthy();
    });

    it('should expose tendermint rpcs', async () => {
        expect(clt.tmClient.health()).resolves.toBeNull();
        expect(clt.tmClient.status()).resolves.toBeTruthy();
        expect(clt.tmClient.genesis()).resolves.toBeTruthy();
        expect(clt.tmClient.abciInfo()).resolves.toBeTruthy();
        expect(clt.tmClient.block()).resolves.toBeTruthy();
        expect(clt.tmClient.blockResults()).resolves.toBeTruthy();
        expect(clt.tmClient.blockchain()).resolves.toBeTruthy();
        expect(clt.tmClient.validatorsAll()).resolves.toBeTruthy();
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

        // Get boot val (genesis) with address genesisValidatorAddress
        const bootVal = validators.validators.filter((v) => LumUtils.toHex(v.address).toUpperCase() === genesisValidatorAddress)[0];
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
        const deleg = await clt.queryClient.distribution.unverified.delegatorWithdrawAddress(genesisAccountAddress);
        expect(deleg).toBeTruthy();
        expect(deleg.withdrawAddress).toEqual(genesisAccountAddress);
        const validators = await clt.queryClient.distribution.unverified.delegatorValidators(genesisAccountAddress);
        expect(validators).toBeTruthy();
        expect(validators.validators.length).toBeGreaterThan(0);
    });
});
