import * as fs from 'fs';
import { LumClient, LumConstants, LumMessages, LumRegistry, LumUtils } from "../build/build";
import { Withdrawal, WithdrawalState, withdrawalStateToJSON } from '../build/build/codec/lum/network/millions/withdrawal';
import { Deposit, DepositState, depositStateToJSON } from '../build/build/codec/lum/network/millions/deposit';
import { Prize } from '../build/build/codec/lum/network/millions/prize';
import { Coin } from '@cosmjs/amino';
import { Input, Output } from '../build/build/codec/cosmos/bank/v1beta1/bank';
import { TxRaw } from '../build/build/codec/cosmos/tx/v1beta1/tx';
import { SignMode } from '../build/build/codec/cosmos/tx/signing/v1beta1/signing';

export const exportWithdrawals = async (clt: LumClient) => {
    let pageKey: Uint8Array | undefined = undefined;
        const data: Withdrawal[] = [];

        while (true) {
            const resp = await clt.queryClient.millions.withdrawals(pageKey);
            for (const w of resp.withdrawals) {
                data.push(w);
            }
            if (!resp.pagination || !resp.pagination.nextKey || resp.pagination.nextKey.length == 0) {
                break
            }
            pageKey = resp.pagination.nextKey;
        }

        const allLines: string[][] = [];
        const headers = ['withdrawal_id', 'state', 'error_state', 'amount', 'bonded', 'unbonding', 'available_cosmos', 'available_lum'];
        allLines.push(headers);

        for (const w of data) {
            const line: string[] = [];
            const a = w.amount && w.amount.amount ? w.amount.amount.toString(): '0';
            line.push(w.withdrawalId.toString());
            line.push(withdrawalStateToJSON(w.state));
            line.push(withdrawalStateToJSON(w.errorState));
            line.push(a);
            if (w.state == WithdrawalState.WITHDRAWAL_STATE_PENDING ||
                w.state == WithdrawalState.WITHDRAWAL_STATE_ICA_UNDELEGATE ||
                w.errorState == WithdrawalState.WITHDRAWAL_STATE_ICA_UNDELEGATE ||
                w.errorState == WithdrawalState.WITHDRAWAL_STATE_ICA_UNBONDING) {
                line.push(a);
                line.push('0');
                line.push('0');
                line.push('0');
            } else if (w.state == WithdrawalState.WITHDRAWAL_STATE_ICA_UNBONDING) {
                line.push('0');
                line.push(a);
                line.push('0');
                line.push('0');
            } else if (w.state == WithdrawalState.WITHDRAWAL_STATE_IBC_TRANSFER || w.errorState == WithdrawalState.WITHDRAWAL_STATE_IBC_TRANSFER) {
                line.push('0');
                line.push('0');
                line.push(a);
                line.push('0');
            } else {
                line.push('0');
                line.push('0');
                line.push('0');
                line.push(a);
            }
            allLines.push(line);
        }

        let content = '';
        for (let line of allLines) {
            content += line.join(', ') + '\n'
        }
        fs.writeFileSync('./withdrawals.csv', content, 'utf8');
        console.log('withdrawals exported in ./withdrawals.csv');
    };

export const exportDeposits = async (clt: LumClient) => {
    let pageKey: Uint8Array | undefined = undefined;
    const data: Deposit[] = [];

    while (true) {
        const resp = await clt.queryClient.millions.deposits(pageKey);
        for (const d of resp.deposits) {
            data.push(d);
        }
        if (!resp.pagination || !resp.pagination.nextKey || resp.pagination.nextKey.length == 0) {
            break
        }
        pageKey = resp.pagination.nextKey;
    }

    const allLines: string[][] = [];
    const headers = ['deposit_id', 'state', 'error_state', 'amount', 'bonded', 'unbonding', 'available_cosmos', 'available_lum'];
    allLines.push(headers);

    for (const d of data) {
        const line: string[] = [];
        const a = d.amount && d.amount.amount ? d.amount.amount.toString(): '0';
        line.push(d.depositId.toString());
        line.push(depositStateToJSON(d.state));
        line.push(depositStateToJSON(d.errorState));
        line.push(a);
        if (d.state == DepositState.DEPOSIT_STATE_IBC_TRANSFER || d.errorState == DepositState.DEPOSIT_STATE_IBC_TRANSFER) {
            line.push('0');
            line.push('0');
            line.push('0');
            line.push(a);
        } else if (d.state == DepositState.DEPOSIT_STATE_ICA_DELEGATE || d.errorState == DepositState.DEPOSIT_STATE_ICA_DELEGATE) {
            line.push('0');
            line.push('0');
            line.push(a);
            line.push('0');
        } else if (d.state == DepositState.DEPOSIT_STATE_SUCCESS) {
            line.push(a);
            line.push('0');
            line.push('0');
            line.push('0');
        } else {
            line.push('0');
            line.push('0');
            line.push('0');
            line.push('0');
            console.log('ERROR - UNKNOWN STATE')
        }
        allLines.push(line);
    }

    let content = '';
    for (let line of allLines) {
        content += line.join(', ') + '\n'
    }
    fs.writeFileSync('./deposits.csv', content, 'utf8');
    console.log('deposits exported in ./deposits.csv');
};

export const exportPrizes = async (clt: LumClient) => {
    let pageKey: Uint8Array | undefined = undefined;
    const data: Prize[] = [];

    while (true) {
        const resp = await clt.queryClient.millions.prizes(pageKey);
        for (const p of resp.prizes) {
            data.push(p);
        }
        if (!resp.pagination || !resp.pagination.nextKey || resp.pagination.nextKey.length == 0) {
            break
        }
        pageKey = resp.pagination.nextKey;
    }

    const allLines: string[][] = [];
    const headers = ['prize_id', 'amount'];
    allLines.push(headers);

    for (const d of data) {
        const line: string[] = [];
        const a = d.amount && d.amount.amount ? d.amount.amount.toString(): '0';
        line.push(d.prizeId.toString());
        line.push(a);
        allLines.push(line);
    }

    let content = '';
    for (let line of allLines) {
        content += line.join(', ') + '\n'
    }
    fs.writeFileSync('./prizes.csv', content, 'utf8');
    console.log('prizes exported in ./prizes.csv');
}

const computeDFractDistribution = async (clt: LumClient, balancesPath: string, amount: number, fromAddress: string) => {
    interface Balances {
        balances: {
            address: string;
            coins: Coin[];
        }[];
    }

    const udfr = "udfr";
    const usdc = "ibc/05554A9BFDD28894D7F18F4C707AA0930D778751A437A9FE1F4684A3E1199728";
    let balances: Balances = { balances: [] };

    const data = fs.readFileSync(balancesPath, 'utf8');
    balances = JSON.parse(data) as Balances;

    // Compute rate
    let balancesSum = 0;
    for (const b of balances.balances) {
        for (const c of b.coins) {
            if (c.denom === udfr) {
                balancesSum += parseInt(c.amount);
                break;
            }
        }
    }
    let rate = amount/balancesSum;
    console.log(`total of ${balancesSum} udfr for ${amount} usdc = ${rate} rate`)

    // Compute distribution balances
    let consumedBalance = 0;
    const output: Balances = { balances: [] };
    for (const b of balances.balances) {
        for (const c of b.coins) {
            if (c.denom === udfr) {
                const a = Math.floor(parseInt(c.amount) * rate);
                consumedBalance += a;
                output.balances.push({
                    address: b.address,
                    coins: [c, {
                        denom: usdc,
                        amount: `${a}`,
                    }],
                });
                break;
            }
        }
    }
    console.log(`balances computed with ${amount-consumedBalance} ${usdc} remaining`)

    // Export balances output as csv to ease verification
    let content = 'address;udfr;usdc\n';
    for (const b of output.balances) {
        content += `${b.address};${b.coins[0].amount};${b.coins[1].amount}\n`
    }
    fs.writeFileSync('./dfr_sunset_balances.csv', content, 'utf8');
    console.log('dfr_sunset_balances.csv exported with success.')

    // Create distribution transaction
    const input: Input = { address: fromAddress, coins: [{ "denom": usdc, "amount": `${consumedBalance}` }] };
    const outputs: Output[] = [];
    for (const b of output.balances) {
        outputs.push({ address: b.address, coins: [b.coins[1]] });
    }
    const rawTx = {
        body: {
            messages: [{"@type": "/cosmos.bank.v1beta1.MsgMultiSend", inputs: input, outputs: outputs}],
            memo: '',
            timeout_height: '0',
            extension_options: [],
            non_critical_extension_options: []
        },
        auth_info: {
            signer_infos: [],
            fee: {
                amount: [{ denom: LumConstants.MicroLumDenom, amount: '10000' }],
                gas_limit: `${100_000 + 10_000 * outputs.length}`,
                payer: "",
                granter: ""
            },
            tip: null
        },
        signatures: []
    };
    fs.writeFileSync('./dfr_sunset_tx.json', JSON.stringify(rawTx), 'utf8');
    console.log('dfr_sunset_tx.json exported with success.');
};

const millions = async (args: string[]) => {
    if (args[0] === "export") {
        console.log('Exporting millions entities...');
        const clt = await LumClient.connect('http://node0.mainnet.lum.network/rpc');
        await exportDeposits(clt);
        await exportWithdrawals(clt);
        await exportPrizes(clt);
        console.log('Export completed with success.');
    } else {
        console.error('unknown millions command');
        process.exit(1);
    }
};

const dfract = async (args: string[])=> {
    if (args[0] === "sunset-distrib") {
        if (args.length != 4) {
            console.error('usage: dfract sunset-distrib [balances.json] [amount] [from_address]')
            process.exit(1);
        }
        console.log('Loading dfract balances from json input...');
        console.log('Computing prorated distribution...');
        const clt = await LumClient.connect('http://node0.mainnet.lum.network/rpc');
        await computeDFractDistribution(clt, args[1], parseInt(args[2]), args[3]);
        console.log('Distribution computed with success.');
    } else {
        console.error('unknown millions command');
        process.exit(1);
    }
};

const main = async (args: string[]) => {
    if (args[0] === "millions") {
        return millions(args.slice(1));
    } else if (args[0] === "dfract") {
        return dfract(args.slice(1));
    } else {
        console.error('unknown module command');
        process.exit(1);
    }
};

if (require.main === module) {
    main(process.argv.slice(2));
};