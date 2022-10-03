export interface SerializedEthereumRpcError {
    code: number;
    message: string;
    data?: unknown;
    stack?: string;
}
export declare class EthereumRpcError<T> extends Error {
    code: number;
    data?: T;
    constructor(code: number, message: string, data?: T);
    serialize(): SerializedEthereumRpcError;
    toString(): string;
}
export declare class EthereumProviderError<T> extends EthereumRpcError<T> {
    constructor(code: number, message: string, data?: T);
}
