import Transport from '@ledgerhq/hw-transport';
import Cosmos from '@ledgerhq/hw-app-cosmos';

import { LumUtils, LumTypes, LumRegistry } from '..';
import { LumWallet } from '.';

export class LumLedgerWallet extends LumWallet {
    cosmosApp: Cosmos;
    private hdPath?: string;

    constructor(transport: Transport) {
        super();
        this.cosmosApp = new Cosmos(transport, 'CSM'); // TODO: CSM identifier should either be LUM or dynamic depending on our ledger implementation
    }

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

    signTransaction = async (doc: LumTypes.SignDoc): Promise<Uint8Array> => {
        if (!this.hdPath) {
            throw new Error('No account selected.');
        }
        // Implementation is delayed. We are not sure if we will be able to sign transactions using the new protobuf implementation
        // with the current cosmos ledger application
        //
        // Useful doc & code:
        // sign call: https://github.com/LedgerHQ/ledgerjs/blob/master/packages/hw-app-cosmos/src/Cosmos.js
        // Expected tx format: https://github.com/cosmos/ledger-cosmos/blob/master/docs/TXSPEC.md
        throw new Error('Not implemented.');
    };
}
