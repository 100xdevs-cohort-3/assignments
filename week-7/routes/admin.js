const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const { courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; //add zod validation

  // hashing password to avoid storing plaintext in database

  // add try catch block
  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "you are signed up",
  });
});

adminRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email,
    password,
  });

  if (admin) {
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
