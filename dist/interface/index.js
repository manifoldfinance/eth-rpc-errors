"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCallException = exports.isError = void 0;
function isError(error, code) {
    return error && error.code === code;
}
exports.isError = isError;
function isCallException(error) {
    return isError(error, 'CALL_EXCEPTION');
}
exports.isCallException = isCallException;
