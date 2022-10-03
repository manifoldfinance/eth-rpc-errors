import { EthereumRpcError, EthereumProviderError } from './classes';
export declare type ErrorObjectCode = number;
export declare type ErrorObjectMessage = string;
export declare type ErrorObjectData = any;
export interface ErrorObject {
    code: ErrorObjectCode;
    message: ErrorObjectMessage;
    data?: ErrorObjectData;
}
declare type ReferenceObject = any;
export declare type ErrorOrReference = ErrorObject | ReferenceObject;
export declare type MethodObjectErrors = ErrorOrReference[];
interface EthereumErrorOptions<T> {
    message?: string;
    data?: T;
}
interface ServerErrorOptions<T> extends EthereumErrorOptions<T> {
    code: number;
}
declare type CustomErrorArg<T> = ServerErrorOptions<T>;
declare type EthErrorsArg<T> = EthereumErrorOptions<T> | string;
export declare const ethErrors: {
    rpc: {
        parse: <T>(arg?: EthErrorsArg<T> | undefined) => EthereumRpcError<T>;
        invalidRequest: <T_1>(arg?: EthErrorsArg<T_1> | undefined) => EthereumRpcError<T_1>;
        invalidParams: <T_2>(arg?: EthErrorsArg<T_2> | undefined) => EthereumRpcError<T_2>;
        methodNotFound: <T_3>(arg?: EthErrorsArg<T_3> | undefined) => EthereumRpcError<T_3>;
        internal: <T_4>(arg?: EthErrorsArg<T_4> | undefined) => EthereumRpcError<T_4>;
        server: <T_5>(opts: ServerErrorOptions<T_5>) => EthereumRpcError<T_5>;
        invalidInput: <T_6>(arg?: EthErrorsArg<T_6> | undefined) => EthereumRpcError<T_6>;
        resourceNotFound: <T_7>(arg?: EthErrorsArg<T_7> | undefined) => EthereumRpcError<T_7>;
        resourceUnavailable: <T_8>(arg?: EthErrorsArg<T_8> | undefined) => EthereumRpcError<T_8>;
        transactionRejected: <T_9>(arg?: EthErrorsArg<T_9> | undefined) => EthereumRpcError<T_9>;
        methodNotSupported: <T_10>(arg?: EthErrorsArg<T_10> | undefined) => EthereumRpcError<T_10>;
        limitExceeded: <T_11>(arg?: EthErrorsArg<T_11> | undefined) => EthereumRpcError<T_11>;
    };
    provider: {
        userRejectedRequest: <T_12>(arg?: EthErrorsArg<T_12> | undefined) => EthereumProviderError<T_12>;
        unauthorized: <T_13>(arg?: EthErrorsArg<T_13> | undefined) => EthereumProviderError<T_13>;
        unsupportedMethod: <T_14>(arg?: EthErrorsArg<T_14> | undefined) => EthereumProviderError<T_14>;
        disconnected: <T_15>(arg?: EthErrorsArg<T_15> | undefined) => EthereumProviderError<T_15>;
        chainDisconnected: <T_16>(arg?: EthErrorsArg<T_16> | undefined) => EthereumProviderError<T_16>;
        custom: <T_17>(opts: CustomErrorArg<T_17>) => EthereumProviderError<T_17>;
    };
};
export {};
