const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");

const courseRouter = Router();

courseRouter.post("/purchase", async (req, res) => {
  const userId = req.body.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId,
  });

  res.json({
    message: "you have successfully bought a course",
  });
});

courseRouter.get("/preview", async (req, res) => {
  const courses = await courseModel.find({});

  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
