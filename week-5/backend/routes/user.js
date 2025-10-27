//  start writing your code from here
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { authenticateJwt } from '../middleware/user.js';
import { User } from '../db/index.js';

dotenv.config();
const router = express.Router();
const SECRET = process.env.JWT_SECRET || 'default_secret';

// -------------------- SIGNUP --------------------
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(403).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: error.message });
  }
});

// -------------------- SIGNIN --------------------
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(403).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error signing in' });
  }
});

export default router;
