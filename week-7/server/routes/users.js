const { Router } = require("express");
const bcrypt = require("bcrypt");
const { User, Course } = require("../db");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");
const userMiddleware = require("../middleware/user");

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

    const hashedPassword = await bcrypt.hash(password, 7);

    await User.create({
      username,
      password: hashedPassword,
      purchasedCourses: [],
    });

    res.status(201).json({
      message: "User created successfully",
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

  const user = await User.findOne({ username });

  if (user) {
    const isRightPassword = await bcrypt.compare(password, user.password);

    if (!isRightPassword) {
      return res.status(400).json({ error: "Invalid Password." });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_USER_SECRET
    );

    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } else {
    res.status(400).json({ error: "User not found." });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  const courses = await Course.find({});

  res.status(200).json({ courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.params.courseId;

  try {
    const course = await Course.findById(courseId);
    const user = await User.findById(userId);

    if (!user.purchasedCourses.includes(course._id)) {
      await User.findByIdAndUpdate(userId, {
        $push: { purchasedCourses: course._id },
      });

      res.status(200).json({
        message: "Course purchased successfully",
      });
    } else {
      res.status(200).json({ message: "Course already purchased." });
    }
  } catch (e) {
    res.status(400).json({ error: "Course not found." });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const userId = req.userId;

  const user = await User.findById(userId).populate("purchasedCourses").exec();
  const purchasedCourses = user.purchasedCourses;

  res.status(200).json({ purchasedCourses });
});

module.exports = router;
