const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const { courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const { z } = require("zod");
const bcrypt = require("bcrypt");

adminRouter.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    firstName: z.string().min(5).max(100),
    lastName: z.string().min(3).max(100),
    password: z
      .string()
      .min(5)
      .max(50)
      .regex(/[a-z]/, "password must have lower case alphabet")
      .regex(/[A-Z]/, "password must have upper case alphabet")
      .regex(/[!@#$%^&*()_<>?:]/, "password must have a special character"),
  });

  const parsedDataSuccess = requiredBody.safeParse(req.body);
  if (!parsedDataSuccess.success) {
    res.status(403).json({
      message: "invalid format",
      error: parsedDataSuccess.error,
    });
  }

  const { email, password, firstName, lastName } = req.body; 

  const hashedPassword = bcrypt.hash(password, 5);
  console.log(hashedPassword);

  try {
    await adminModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
  } catch (error) {
    res.json({
      message: "user already exists",
    });
    return;
  }

  res.json({
    message: "you are signed up",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email,
  });

  if (admin) {
    const comparePassword = bcrypt.compare(password, admin.password);
    if (comparePassword) {
      const token = jwt.sign(
        {
          id: admin._id.toString(),
        },
        JWT_ADMIN_PASSWORD
      );
      // cookie logic
      res.json({
        token,
      });
    }
  } else {
    res.status(403).json({
      message: "unauthorized access",
    });
  }
});

adminRouter.post("/course", adminMiddleware, (req, res) => {
  const adminId = req.userId;
  const { title, description, imageURL, price } = req.body;

  const course = courseModel.create({
    title,
    description,
    price,
    imageURL,
  });
  res.json({
    message: "course created",
    courseId: course._id,
  });
});

adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.userId;
  const { title, description, imageURL, price, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title: title,
      description: description,
      imageURL: imageURL,
      price: price,
    }
  );
  res.json({
    messaeg: "course updated",
    courseId: course._id,
  });
});

adminRouter.get("/courses", adminMiddleware, async (req, res) => {
  const adminId = req.userId;

  const courses = await courseModel.find({
    creatorId: adminId,
  });
  res.json({
    message: "here are your courses",
    courses,
  });
});

module.exports = {
  adminRouter: adminRouter,
};
