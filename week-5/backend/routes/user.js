const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { User, Todo } = require('../db');
const authenticate = require('../middleware/user');
const { hashPassword, verifyPassword, asyncRoute } = require('../lib/security');
const router = Router();
function credentials(body) {
  return (
    typeof body.username === 'string' &&
    body.username.trim().length >= 3 &&
    body.username.trim().length <= 80 &&
    typeof body.password === 'string' &&
    body.password.length >= 8 &&
    body.password.length <= 200
  );
}
function session(user) {
  return jwt.sign({ userId: user.id, version: user.tokenVersion }, process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
}
router.post(
  '/signup',
  asyncRoute(async (req, res) => {
    if (!credentials(req.body))
      return res
        .status(400)
        .json({ message: 'Username must be 3–80 characters and password 8–200 characters' });
    const user = await User.create({
      username: req.body.username.trim(),
      password: hashPassword(req.body.password),
    });
    res.status(201).json({ message: 'Account created', token: session(user) });
  }),
);
router.post(
  ['/login', '/signin'],
  asyncRoute(async (req, res) => {
    if (!credentials(req.body))
      return res.status(401).json({ message: 'Invalid username or password' });
    const user = await User.findOne({ username: req.body.username.trim() });
    if (!user || !verifyPassword(req.body.password, user.password))
      return res.status(401).json({ message: 'Invalid username or password' });
    res.json({ message: 'Signed in', token: session(user) });
  }),
);
router.get(
  '/todos',
  authenticate,
  asyncRoute(async (req, res) =>
    res.json({ todos: await Todo.find({ userId: req.userId }).sort({ createdAt: -1 }) }),
  ),
);
router.post(
  '/logout',
  authenticate,
  asyncRoute(async (req, res) => {
    await User.updateOne({ _id: req.userId }, { $inc: { tokenVersion: 1 } });
    res.json({ message: 'Signed out' });
  }),
);
module.exports = router;
