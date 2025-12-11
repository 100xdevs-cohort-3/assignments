const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { z } = require('zod');
const { authenticateJwt, SECRET } = require("../middleware/user");
const { User } = require("../db");
const router = express.Router();
//const app = express()
// app.use(express.json())

router.post('/signup', async (req, res) => {
  const requiredBody = z.object({
    username: z.email(),
    password: z.string().min(3).max(30)
  })
  const result = requiredBody.safeParse(req.body)

  if (!result.success) {
    res.json({
      message: "Incorrect format: " + result.error.issues[0].message
    })
    return
  }
    /*
      receive req.body from script.js (submit button of signup)
      {
          username: username (from signup-username),
          password: password (from signup-password)
      }
  */
  const { username, password } = req.body;
  // check if username already exists
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res.status(403).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    /* 
       const user = await User.create({
        username: username,
        password: password
      })
    */

    const token = jwt.sign({ userId: newUser._id }, SECRET, { expiresIn: '1h' }); 
    res.json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body; 
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(403).json({ message: "Invalid username" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });

  } catch (error) {
    res.status(500).json({ message: "Error signing in", error: error.message });
  }
});

module.exports = router;
