export const searchTxByBlockHeight = (height: number): string => {
    return `tx.height=${height}`;
};

export const searchTxByTags = (tags: { key: string; value: string }[], minHeight?: number, maxHeight?: number): string => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = tags.map((t) => `${t.key}='${t.value}'`).join(' AND ');
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};

export const searchTxFrom = (senderAddress: string, minHeight?: number, maxHeight?: number): string => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = `message.module='bank' AND transfer.sender='${senderAddress}'`;
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};

export const searchTxTo = (recipientAddress: string, minHeight?: number, maxHeight?: number): string => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = `message.module='bank' AND transfer.recipient='${recipientAddress}'`;
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};
