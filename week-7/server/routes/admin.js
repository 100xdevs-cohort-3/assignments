const { Router } = require("express");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { Admin, User } = require("../db");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.JWT_SECRET;

const router = Router();

router.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3),
    password: z.string().min(5),
  });

  const parsedBody = requiredBody.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).json({ error: parsedBody.error.issues[0].message });
  }

  try {
    const { username, password } = parsedBody.data;

    const isUserExists = await Admin.findOne({ username });

    if (isUserExists) {
      return res.status(400).json({ error: "Username already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    await Admin.create({ username, password: hashedPassword });

    res.status(201).json({
      message: "Admin created successfully",
    });
  } catch (e) {
    res.status(500).json({ error: "Failed to Sign up." });
  }
});

router.post("/login", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!username || !password) {
    return res.status(400).json({ error: "Invalid Credentials." });
  }

  const admin = await Admin.findOne({ username });

  if (admin) {
    const isRightPassword = await bcrypt.compare(password, admin.password);

    if (!isRightPassword) {
      return res.status(400).json({ error: "Invalid Password." });
    }

    const token = jwt.sign(
      {
        username,
      },
      secret
    );

    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } else {
    res.status(400).json({ error: "Admin not found." });
  }
});

router.post("/courses", auth, (req, res) => {
  const requestedBody = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageLink: z.string().url(),
    published: z.boolean(),
  });

  const parsedBody = requestedBody.safeParse(req.body);

  if (!parsedBody.success) {
    return res.json({ error: "Invalid course data." });
  }

  res.json({
    message: "Course created successfully",
    courseId: 1,
  });
});

router.put("/courses/:courseId", (req, res) => {
  // logic to edit a course
});

router.get("/courses", (req, res) => {
  // logic to get all courses
});

module.exports = router;
