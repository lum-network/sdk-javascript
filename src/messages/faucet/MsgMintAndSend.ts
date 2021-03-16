export const MsgMintAndSendUrl = '/lum.network.faucet.MsgMintAndSend';

/**
 * MsgMintAndSend defines a SDK message asking the faucet module to send you
 * a set of coins, for testing purposes only.
 * This module is ONLY enabled in testnet
 */
export interface MsgMintAndSend {
    minter: string;
    mintTime: Date;
}

export const BuildMsgMintAndSend = (minter: string, mintTime: Date) => {
    return {
        typeUrl: MsgMintAndSendUrl,
        value: {
            minter,
            mintTime,
        } as MsgMintAndSend,
    };
};
