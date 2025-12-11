// Admin routes

const { Router } = require("express");
const adminRouter = Router();
const { Admin, Course } = require("../db/db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { SECRET, authenticateAdminJwt } = require("../middleware/admin");

adminRouter.post("/signup", async (req, res) => {
  // logic to sign up admin
  const requiredBody = z.object({
    email: z.email(),
    password: z.string().min(3).max(30),
    firstName: z.string(),
    lastName: z.string(),
  });
  const result = requiredBody.safeParse(req.body);

  if (!result.success) {
    res.json({
      message: "Incorrect format: " + result.error.issues[0].message,
    });
    return;
  }
  /*
        receive req.body from script.js (submit button of signup)
        {
            email: email (from signup-email),
            password: password (from signup-password),
            firstName: firstName,
            lastName: lastName
        }
    */
  const { email, password, firstName, lastName } = req.body;
  // check if email already exists
  try {
    const user = await Admin.findOne({ email });
    if (user) {
      return res.status(403).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    await newAdmin.save();
    /* 
        const user = await Admin.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName, lastName
        })
        */

    const token = jwt.sign({ userId: newAdmin._id }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Admin created successfully", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
});

adminRouter.post("/login", async (req, res) => {
  // logic to log in admin
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Invalid email" });
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

adminRouter.post("/courses", authenticateAdminJwt, async (req, res) => {
  // logic to create a course
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;

  try {
    const course = await Course.findOne({ title });
    if (course) {
      return res.status(403).json({ message: "Course already exists" });
    }

    const newCourse = await Course.create({
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      creatorId: adminId,
    });

    res.json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating course", error: error.message });
  }
});

adminRouter.put(
  "/courses/:courseId",
  authenticateAdminJwt,
  async (req, res) => {
    // logic to edit a course
    const adminId = req.userId;
    const courseId = req.params.courseId;
    const { title, description, imageUrl, price } = req.body;

    const course = await Course.findOne({
      _id: courseId,
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    const updatedCourse = await Course.findOneAndUpdate(
      {
        _id: courseId,
        creatorId: adminId,
      },
      {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
      },
    );

    if (!updatedCourse) {
      return res.status(404).json({
        message: "Course not found or not owned by admin",
      });
    }

    res.json({
      message: "Course updated",
      courseId: updatedCourse._id,
    });
  },
);

adminRouter.get("/courses", authenticateAdminJwt, async (req, res) => {
  // logic to get all courses
  const adminId = req.userId;

  const courses = await Course.find({
    creatorId: adminId,
  });

  res.json({
    courses: courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
