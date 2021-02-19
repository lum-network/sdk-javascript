import { MsgData } from '@cosmjs/stargate/build/codec/cosmos/base/abci/v1beta1/abci';

export interface BroadcastTxResponse {
    readonly code?: number;
    readonly height: number;
    readonly transactionHash: string;
    readonly rawLog?: string;
    readonly data?: readonly MsgData[];
}

export type { MsgData };
