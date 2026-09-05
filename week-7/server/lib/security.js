'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.asyncRoute = void 0;
exports.hashPassword = hashPassword;
exports.verifyPassword = verifyPassword;
const node_crypto_1 = require('node:crypto');
function hashPassword(password) {
  const salt = (0, node_crypto_1.randomBytes)(16).toString('hex');
  return salt + ':' + (0, node_crypto_1.scryptSync)(password, salt, 64).toString('hex');
}
function verifyPassword(password, stored) {
  const [salt, hex] = stored.split(':');
  const expected = Buffer.from(hex || '', 'hex');
  return (
    expected.length === 64 &&
    (0, node_crypto_1.timingSafeEqual)(expected, (0, node_crypto_1.scryptSync)(password, salt, 64))
  );
}
const asyncRoute = (handler) => (req, res, next) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};
exports.asyncRoute = asyncRoute;
