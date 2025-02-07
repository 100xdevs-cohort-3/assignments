const express = require("express");
const router = express.Router();
const { addUser, loadData } = require("../db/index.js");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "I am Authenticator!";
const authenticator = require("../middleware/user.js");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { UserModel, TodoModel } = require("../db/db.js");
const { default: mongoose } = require("mongoose");

router.get("/me", authenticator, async (req, res) => {
  // const username = req.username;
  const email = req.email;
  const user = await UserModel.findOne({ email: email });
  const userId = user._id;
  console.log(userId);
  const todoData = await TodoModel.find({ userId: userId });
  console.log("todos : ", todoData);
  // console.log(todoData);
  res.json({
    info: {
      email: user.email,
      todos: todoData,
    },
  });
});

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // zod validation
  const schema = z.object({
    email: z.string().email({ message: "Invalid email format " }),
    password: z
      .string()
      .min(8, { message: "Password should contain atleast 8 characters" }),
  });

  const result = schema.safeParse(req.body);

  if (result.success) {
    const hashed = await bcrypt.hash(password, 5);

    await UserModel.create({
      email: email,
      password: hashed,
    });

    res.status(200).json({
      message: "User added successfully",
    });
  } else {
    const error = JSON.parse(result.error);
 
    res.json({
      problem: error[0].message,
    });
  }
});

router.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  // console.log("username : ", username);
  // const userData = await loadData();
  // const user = userData[username];
  const user = await UserModel.findOne({ email: email });
  const result = await bcrypt.compare(password, user.password);
  if (!user) {
    res.status(403).json({
      message: "Invalid email",
    });
  } else {
    if (!result) {
      res.json({
        message: "Invalid password",
      });

      return;
    }
    const token = jwt.sign({ email }, JWT_SECRET);
    // console.log("created token : ", token);
    res.json({
      token: token,
    });
  }
});

module.exports = router;
