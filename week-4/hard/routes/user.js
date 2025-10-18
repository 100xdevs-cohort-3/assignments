import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, Todo } from "../database/index.js";
import userMiddleware from "../middleware/user.js";

const userRouter = Router();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ✅ User Signup
userRouter.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully." });
  } catch (err) {
    console.error("❌ Signup Error:", err.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

// ✅ User Login
userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful.", token });
  } catch (err) {
    console.error("❌ Login Error:", err.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

// ✅ Get Todos for Logged-In User
userRouter.get("/todos", userMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch todos created by this user
    const todos = await Todo.find({ userId });

    res.status(200).json({ todos });
  } catch (err) {
    console.error("❌ Fetch Todos Error:", err.message);
    res.status(500).json({ message: "Failed to fetch todos." });
  }
});

// ✅ Logout (client-side token discard)
userRouter.post("/logout", userMiddleware, (req, res) => {
  res.json({
    message:
      "Logout successful. Please discard your token on the client side (token invalidation not handled server-side).",
  });
});

export default userRouter;