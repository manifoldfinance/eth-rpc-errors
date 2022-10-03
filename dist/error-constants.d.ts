interface ErrorCodes {
    readonly rpc: {
        readonly invalidInput: -32_000;
        readonly resourceNotFound: -32_001;
        readonly resourceUnavailable: -32_002;
        readonly transactionRejected: -32_003;
        readonly methodNotSupported: -32_004;
        readonly limitExceeded: -32_005;
        readonly parse: -32_700;
        readonly invalidRequest: -32_600;
        readonly methodNotFound: -32_601;
        readonly invalidParams: -32_602;
        readonly internal: -32_603;
    };
    readonly provider: {
        readonly userRejectedRequest: 4001;
        readonly unauthorized: 4100;
        readonly unsupportedMethod: 4200;
        readonly disconnected: 4900;
        readonly chainDisconnected: 4901;
    };
}
export declare const errorCodes: ErrorCodes;
export declare const errorValues: {
    '-32700': {
        PARSE_ERROR: {
            standard: string;
            message: string;
        };
    };
    '-32600': {
        INVALID_REQUEST: {
            standard: string;
            message: string;
        };
    };
    '-32601': {
        METHOD_NOT_FOUND: {
            standard: string;
            message: string;
        };
    };
    '-32602': {
        INVALID_PARAMS: {
            standard: string;
            message: string;
        };
    };
    '-32603': {
        INTERNAL_ERROR: {
            standard: string;
            message: string;
        };
    };
    '-32000': {
        SERVER_ERROR: {
            standard: string;
            message: string;
        };
    };
    '-32001': {
        standard: string;
        message: string;
    };
    '-32002': {
        standard: string;
        message: string;
    };
    '-32003': {
        standard: string;
        message: string;
    };
    '-32004': {
        standard: string;
        message: string;
    };
    '-32005': {
        standard: string;
        message: string;
    };
    '4001': {
        standard: string;
        message: string;
    };
    '4100': {
        UNAUTHORIZED: {
            standard: string;
            message: string;
        };
    };
    '4200': {
        UNSUPPORTED_METHOD: {
            standard: string;
            message: string;
        };
    };
    '4900': {
        DISCONNECTED: {
            standard: string;
            message: string;
        };
    };
    '4901': {
        CHAIN_DISCONNECTED: {
            standard: string;
            message: string;
        };
    };
};
export {};
