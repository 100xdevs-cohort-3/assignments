const express = require('express');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created' });
});

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.PASSWORD_KEY, { expiresIn: '1h' });
    
    // Set the token in a cookie
    res.cookie('authToken', token, { httpOnly: true });
    
    res.json({ message: 'Logged in successfully' });
});

// Middleware to check authentication
const authMiddleware = (req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });
        req.userId = decoded.id;
        next();
    });
};

// Protected route example
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

// In routes/authRoutes.js
// router.post('/logout', (req, res) => {
//   res.clearCookie('authToken'); // Clear the cookie storing the JWT
//   res.json({ message: 'Logged out successfully' });
// });


// In routes/authRoutes.js
router.post('/logout', (req, res) => {
  res.clearCookie('authToken'); // Clear the cookie storing the JWT
  req.userId = null; // Clear user ID from request (if using sessions)
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;