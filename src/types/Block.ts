export interface BlockHeader {
    readonly version: {
        readonly block: string;
        readonly app: string;
    };
    readonly height: number;
    readonly chainId: string;
    /** An RFC 3339 time string like e.g. '2020-02-15T10:39:10.4696305Z' */
    readonly time: string;
}
export interface Block {
    /** The ID is a hash of the block header (uppercase hex) */
    readonly id: string;
    readonly header: BlockHeader;
    /** Array of raw transactions */
    readonly txs: readonly Uint8Array[];
}
