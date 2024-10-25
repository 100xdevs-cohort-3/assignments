const { Router } = require("express");
const router = Router();
const { User } = require("../database/index");
const jwt = require("jsonwebtoken");

// User signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    
    const token = jwt.sign({ username: newUser.username }, process.env.PASSWORD_KEY, { expiresIn: '1h' });
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: "Failed to sign up", error: err });
  }
});

// User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, process.env.PASSWORD_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: "Failed to log in", error: err });
  }
});

// Get user's todos
router.get('/todos', userMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find(); // Todo should be imported properly from your model
    return res.status(200).json({ todos });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch todos", error: err });
  }
});

module.exports = router;
