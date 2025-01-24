const { Router } = require("express");
const { userModel, adminModel, courseModel, purchaseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config")
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, firstName, lastName } = req.body; //add zod validation

    // hashing password to avoid storing plaintext in database

    // add try catch block
  await userModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "you are signed up",
  });
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body

  const user = await userModel.findOne({
    email,
    password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_USER_PASSWORD
    );
    // cookie logic
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "user not signed up",
    });
  }
});

userRouter.get("/courses", (req, res) => {
  req.json({
    message: "",
  });
});

module.exports = {
  userRouter: userRouter,
};
