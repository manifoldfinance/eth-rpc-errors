import type { SerializedEthereumRpcError } from './classes';
export declare const JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
export declare function getMessageFromCode(code: number, fallbackMessage?: string): string;
export declare function isValidCode(code: number): boolean;
export declare function serializeError(error: unknown, { fallbackError, shouldIncludeStack }?: {
    fallbackError?: SerializedEthereumRpcError | undefined;
    shouldIncludeStack?: boolean | undefined;
}): SerializedEthereumRpcError;
