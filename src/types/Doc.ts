import { Message } from '../messages';
import { Fee } from './Fee';

export interface Doc {
    /** account_number is the account number of the account in state */
    accountNumber: number;
    /**
     * chain_id is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     */
    chainId: string;
    /**
     * Transaction requested Fee
     */
    fee: Fee;
    /**
     * Transaction memo
     */
    memo?: string;
    /**
     * Transactions messages
     */
    messages: Message[];
    /**
     * Transction sequence number
     */
    sequence: number;
}
