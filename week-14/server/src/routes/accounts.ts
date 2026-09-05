import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { Account } from '../models';
import { Role } from '../middleware/auth';
import { hashPassword, verifyPassword, asyncRoute } from '../lib/security';
export function accountRoutes(role: Role): Router {
  const router = Router();
  const token = (id: string) =>
    jwt.sign({ role }, process.env.JWT_SECRET!, {
      subject: id,
      expiresIn: '1h',
      algorithm: 'HS256',
    });
  router.post(
    '/signup',
    asyncRoute(async (req, res) => {
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
      const account = await Account.create({
        username: username.trim(),
        password: hashPassword(password),
        role,
      });
      res
        .status(201)
        .json({ message: 'Account created successfully', token: token(account.id), role });
    }),
  );
  router.post(
    '/login',
    asyncRoute(async (req, res) => {
      const username = req.body.username ?? req.get('username');
      const password = req.body.password ?? req.get('password');
      if (typeof username !== 'string' || typeof password !== 'string' || password.length > 200) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
      const account = await Account.findOne({ username: username.trim(), role });
      if (!account || !verifyPassword(password, account.password)) {
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
      res.json({ message: 'Logged in successfully', token: token(account.id), role });
    }),
  );
  return router;
}
