'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.accountRoutes = accountRoutes;
const express_1 = require('express');
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
const models_1 = require('../models');
const security_1 = require('../lib/security');
function accountRoutes(role) {
  const router = (0, express_1.Router)();
  const token = (id) =>
    jsonwebtoken_1.default.sign({ role }, process.env.JWT_SECRET, {
      subject: id,
      expiresIn: '1h',
      algorithm: 'HS256',
    });
  router.post(
    '/signup',
    (0, security_1.asyncRoute)(async (req, res) => {
      const { username, password } = req.body;
      if (
        typeof username !== 'string' ||
        username.trim().length < 3 ||
        username.length > 80 ||
        typeof password !== 'string' ||
        password.length < 8 ||
        password.length > 200
      ) {
        res
          .status(400)
          .json({ message: 'Username must be 3–80 characters; password must be 8–200 characters' });
        return;
      }
      const account = await models_1.Account.create({
        username: username.trim(),
        password: (0, security_1.hashPassword)(password),
        role,
      });
      res
        .status(201)
        .json({ message: 'Account created successfully', token: token(account.id), role });
    }),
  );
  router.post(
    '/login',
    (0, security_1.asyncRoute)(async (req, res) => {
      const username = req.body.username ?? req.get('username');
      const password = req.body.password ?? req.get('password');
      if (typeof username !== 'string' || typeof password !== 'string' || password.length > 200) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
      const account = await models_1.Account.findOne({ username: username.trim(), role });
      if (!account || !(0, security_1.verifyPassword)(password, account.password)) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
      res.json({ message: 'Logged in successfully', token: token(account.id), role });
    }),
  );
  return router;
}
