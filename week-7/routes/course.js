const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "purchase endpoint reached"
  })
});

courseRouter.get("/purchases", (req, res) => {
  res.json({
    message: "endpoint reached"
  })
});

module.exports = {
  courseRouter: courseRouter,
};
