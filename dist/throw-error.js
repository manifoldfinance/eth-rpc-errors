"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrowError = void 0;
const gitRepo = 'https://github.com/manifoldfinance/eth-rpc-errors';
function ThrowError(code, error) {
    throw `${code}: ${error}\n\nMore details: ${gitRepo}/blob/master/docs/Errors.md#${code.toLowerCase()}`;
}
exports.ThrowError = ThrowError;
