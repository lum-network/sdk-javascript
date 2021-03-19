import Transport from '@ledgerhq/hw-transport';
import Cosmos from '@ledgerhq/hw-app-cosmos';
import { ExtendedSecp256k1Signature } from '@cosmjs/crypto';

import { SignMode } from '../codec/cosmos/tx/signing/v1beta1/signing';
import { LumUtils, LumTypes, LumAminoRegistry } from '..';
import { LumWallet } from '.';

export class LumLedgerWallet extends LumWallet {
    cosmosApp: Cosmos;
    private hdPath?: string;

    constructor(transport: Transport) {
        super();
        this.cosmosApp = new Cosmos(transport, 'CSM'); // TODO: CSM identifier should either be LUM or dynamic depending on our ledger implementation
    }

    signingMode = (): SignMode => {
        return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    };

    canChangeAccount = () => {
        return true;
    };

    useAccount = async (hdPath: string, addressPrefix: string): Promise<boolean> => {
        const { address, publicKey } = await this.cosmosApp.getAddress(hdPath, addressPrefix);
        this.hdPath = hdPath;
        this.address = address;
        this.publicKey = LumUtils.fromHex(publicKey);
        return true;
    };

    signTransaction = async (doc: LumTypes.Doc): Promise<Uint8Array> => {
        if (!this.hdPath) {
            throw new Error('No account selected.');
        }
        // TODO: does not work as intented - signature "works" but not valid for broadcast using the client
        // Implementation not working. We are not sure if we will be able to sign transactions using the new protobuf implementation
        // with the current cosmos ledger application
        //
        // Useful doc & code:
        // sign call: https://github.com/LedgerHQ/ledgerjs/blob/master/packages/hw-app-cosmos/src/Cosmos.js
        // Expected tx format: https://github.com/cosmos/ledger-cosmos/blob/master/docs/TXSPEC.md
        const msg = {
            'account_number': doc.accountNumber.toString(),
            'chain_id': doc.chainId,
            'fee': doc.fee,
            'memo': doc.memo,
            'msgs': doc.messages.map((msg) => LumAminoRegistry.toAmino(msg)),
            'sequence': doc.sequence.toString(),
        };
        const { signature, return_code } = await this.cosmosApp.sign(this.hdPath, JSON.stringify(LumUtils.sortJSON(msg)));
        if (!signature || return_code === 0) {
            throw new Error(`Failed to sign message: error code ${return_code}`);
        }
        const sig = ExtendedSecp256k1Signature.fromDer(signature);
        return new Uint8Array([...sig.r(32), ...sig.s(32)]);
    };
}
