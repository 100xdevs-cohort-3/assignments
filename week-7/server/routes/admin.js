const { Router } = require("express");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const adminMiddleware = require("../middleware/admin");

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
        userId: admin._id,
      },
      JWT_ADMIN_SECRET
    );

    res.status(200).json({
      message: "Logged in successfully",
      token,
    });
  } else {
    res.status(400).json({ error: "Admin not found." });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const requestedBody = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageLink: z.string().url(),
    published: z.boolean(),
  });

  const parsedBody = requestedBody.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).json({ error: "Invalid course data." });
  }

  const adminId = req.userId;
  const { title, description, price, imageLink, published } = parsedBody.data;

  const course = await Course.create({
    title,
    description,
    price,
    imageLink,
    published,
    creatorId: adminId,
  });

  res.status(201).json({
    message: "Course created successfully",
    courseId: course._id,
  });
});

router.put("/courses/:courseId", adminMiddleware, async (req, res) => {
  const requestedBody = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageLink: z.string().url(),
    published: z.boolean(),
  });

  const parsedBody = requestedBody.safeParse(req.body);

  if (!parsedBody.success) {
    return res.status(400).json({ error: "Invalid course data." });
  }

  const { title, description, price, imageLink, published } = parsedBody.data;
  const courseId = req.params.courseId;

  try {
    const course = await Course.updateOne(
      { _id: courseId, creatorId: req.userId },
      {
        title,
        description,
        price,
        imageLink,
        published,
      }
    );

    if (course.matchedCount === 0) {
      return res.status(400).json({ error: "Invalid course id." });
    }

    res.status(200).json({
      message: "Course updated successfully",
    });
  } catch (e) {
    res.status(400).json({ error: "Course not found." });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const courses = await Course.find({ creatorId: adminId });

  res.status(200).json({ courses });
});

module.exports = router;
