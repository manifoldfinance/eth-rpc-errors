/**
 * @since v1.0.0
 * @version Errors.1.0.0
 */

const gitRepo = 'https://github.com/manifoldfinance/eth-rpc-errors';

/*
 * Throws an error with a code and description.
 *
 * @export ThrowError
 * @param {String} code Error code
 * @param {String} error Error description
 * @see {@link https://github.com/manifoldfinance/eth-rpc-errors/blob/master/docs/Errors.md}
 *
 */

export default function ThrowError(code, error) {
  throw `${code}: ${error}\n\nMore details: ${gitRepo}/blob/master/docs/Errors.md#${code.toLowerCase()}`;
}
