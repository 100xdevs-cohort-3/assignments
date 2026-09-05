const { scryptSync, randomBytes, timingSafeEqual } = require('node:crypto');
function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}
function verifyPassword(password, stored) {
  const [salt, hex] = stored.split(':');
  const expected = Buffer.from(hex || '', 'hex');
  return expected.length === 64 && timingSafeEqual(expected, scryptSync(password, salt, 64));
}
const asyncRoute = (handler) => (req, res, next) =>
  Promise.resolve(handler(req, res, next)).catch(next);
module.exports = { hashPassword, verifyPassword, asyncRoute };
