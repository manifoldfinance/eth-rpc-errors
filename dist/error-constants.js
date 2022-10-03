"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorValues = exports.errorCodes = void 0;
exports.errorCodes = {
    rpc: {
        invalidInput: -32_000,
        resourceNotFound: -32_001,
        resourceUnavailable: -32_002,
        transactionRejected: -32_003,
        methodNotSupported: -32_004,
        limitExceeded: -32_005,
        parse: -32_700,
        invalidRequest: -32_600,
        methodNotFound: -32_601,
        invalidParams: -32_602,
        internal: -32_603,
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
    },
};
exports.errorValues = {
    '-32700': {
        PARSE_ERROR: {
            standard: 'JSON RPC 2.0',
            message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
        },
    },
    '-32600': {
        INVALID_REQUEST: {
            standard: 'JSON RPC 2.0',
            message: 'The JSON sent is not a valid Request object.',
        },
    },
    '-32601': {
        METHOD_NOT_FOUND: {
            standard: 'JSON RPC 2.0',
            message: 'The method does not exist / is not available.',
        },
    },
    '-32602': {
        INVALID_PARAMS: {
            standard: 'JSON RPC 2.0',
            message: 'Invalid method parameter(s).',
        },
    },
    '-32603': {
        INTERNAL_ERROR: {
            standard: 'JSON RPC 2.0',
            message: 'Internal JSON-RPC error.',
        },
    },
    '-32000': {
        SERVER_ERROR: {
            standard: 'EIP-1474, EIP-1898',
            message: 'Server error: Invalid input, unable to locate canonical block',
        },
    },
    '-32001': {
        standard: 'EIP-1474, EIP-1898',
        message: 'Server error: Requested resource, block,  not found.',
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.',
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.',
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.',
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.',
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.',
    },
    '4100': {
        UNAUTHORIZED: {
            standard: 'EIP-1193',
            message: 'The requested account and/or method has not been authorized by the user.',
        },
    },
    '4200': {
        UNSUPPORTED_METHOD: {
            standard: 'EIP-1193',
            message: 'The requested method is not supported by this Ethereum provider.',
        },
    },
    '4900': {
        DISCONNECTED: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from all chains.',
        },
    },
    '4901': {
        CHAIN_DISCONNECTED: {
            standard: 'EIP-1193',
            message: 'The provider is disconnected from the specified chain.',
        },
    },
};
