import { Uint64 } from '@cosmjs/math';
import { LumConstants, LumTypes } from '..';

const uint64ProtoToDate = (input: Long): Date => {
    return new Date(Uint64.fromString(input.toString()).toNumber() * 1000);
};

// estimatedVesting returns vesting information for an account and a denom
// throws an error if the account is not a vesting account
export const estimatedVesting = (
    account: LumTypes.Account,
    t?: Date,
    denom = LumConstants.MicroLumDenom,
): {
    startsAt: Date;
    endsAt: Date;
    time: Date;
    releasedPercentage: number;
    lockedPercentage: number;
    totalCoins: LumTypes.Coin;
    unlockedCoins: LumTypes.Coin;
    lockedCoins: LumTypes.Coin;
} => {
    if (!t) {
        t = new Date();
    }

    if (account._continuousVestingAccount && account._continuousVestingAccount.baseVestingAccount) {
        const startsAt = uint64ProtoToDate(account._continuousVestingAccount.startTime);
        const endsAt = uint64ProtoToDate(account._continuousVestingAccount.baseVestingAccount.endTime);
        const totalCoins: LumTypes.Coin = { amount: '0', denom: denom };
        for (const c of account._continuousVestingAccount.baseVestingAccount.originalVesting) {
            if (c.denom === denom) {
                totalCoins.amount = c.amount;
                break;
            }
        }

        const elapsed = t.getTime() - startsAt.getTime();
        const delta = endsAt.getTime() - startsAt.getTime();
        const doneRatio = Math.min(1.0, Math.max(0, elapsed / delta));

        return {
            startsAt: startsAt,
            endsAt: endsAt,
            time: t,
            releasedPercentage: doneRatio * 100.0,
            lockedPercentage: (1.0 - doneRatio) * 100.0,
            totalCoins,
            unlockedCoins: { amount: `${Math.ceil(parseInt(totalCoins.amount) * doneRatio)}`, denom },
            lockedCoins: { amount: `${Math.ceil(parseInt(totalCoins.amount) * (1.0 - doneRatio))}`, denom },
        };
    } else if (account._delayedVestingAccount && account._delayedVestingAccount.baseVestingAccount) {
        const endsAt = uint64ProtoToDate(account._delayedVestingAccount.baseVestingAccount.endTime);
        const startsAt = endsAt;
        const totalCoins: LumTypes.Coin = { amount: '0', denom: denom };
        for (const c of account._delayedVestingAccount.baseVestingAccount.originalVesting) {
            if (c.denom === denom) {
                totalCoins.amount = c.amount;
                break;
            }
        }

        const doneRatio = t > endsAt ? 1 : 0;
        return {
            startsAt: startsAt,
            endsAt: endsAt,
            time: t,
            releasedPercentage: doneRatio * 100.0,
            lockedPercentage: (1.0 - doneRatio) * 100.0,
            totalCoins,
            unlockedCoins: { amount: `${Math.ceil(parseInt(totalCoins.amount) * doneRatio)}`, denom },
            lockedCoins: { amount: `${Math.ceil(parseInt(totalCoins.amount) * (1.0 - doneRatio))}`, denom },
        };
    } else if (account._periodicVestingAccount && account._periodicVestingAccount.baseVestingAccount) {
        const startsAt = uint64ProtoToDate(account._periodicVestingAccount.startTime);
        const endsAt = uint64ProtoToDate(account._periodicVestingAccount.baseVestingAccount.endTime);
        const totalCoins: LumTypes.Coin = { amount: '0', denom: denom };
        for (const c of account._periodicVestingAccount.baseVestingAccount.originalVesting) {
            if (c.denom === denom) {
                totalCoins.amount = c.amount;
                break;
            }
        }

        let doneAmount = 0;
        let currentTime = startsAt.getTime();
        for (const p of account._periodicVestingAccount.vestingPeriods) {
            const pDuration = Uint64.fromString(p.length.toString()).toNumber() * 1000;
            if (t < new Date(currentTime + pDuration)) {
                break;
            }
            currentTime += pDuration;
            for (const c of p.amount) {
                if (c.denom === denom) {
                    doneAmount += parseInt(c.amount);
                    break;
                }
            }
        }

        const doneRatio = doneAmount / parseFloat(totalCoins.amount);
        return {
            startsAt: startsAt,
            endsAt: endsAt,
            time: t,
            releasedPercentage: doneRatio * 100.0,
            lockedPercentage: (1.0 - doneRatio) * 100.0,
            totalCoins,
            unlockedCoins: { amount: `${Math.ceil(parseInt(totalCoins.amount) * doneRatio)}`, denom },
            lockedCoins: { amount: `${Math.ceil(parseInt(totalCoins.amount) * (1.0 - doneRatio))}`, denom },
        };
    }

    throw 'not a vesting account';
};
