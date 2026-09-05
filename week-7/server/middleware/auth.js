'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.auth = auth;
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
function auth(role) {
  return (req, res, next) => {
    try {
      const token = req.get('authorization')?.match(/^Bearer (.+)$/i)?.[1];
      if (!token) {
        res.status(401).json({ message: 'Please sign in' });
        return;
      }
      const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, {
        algorithms: ['HS256'],
      });
      if (payload.role !== role || typeof payload.sub !== 'string') {
        res.status(403).json({ message: 'Access denied' });
        return;
      }
      res.locals.accountId = payload.sub;
      next();
    } catch {
      res.status(401).json({ message: 'Invalid or expired session' });
    }
  };
}
