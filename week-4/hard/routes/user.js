const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Todo } = require("../database");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.json({ status: "Please provide credentials." });
  }

  const user = {
    username,
    password,
  };

  const isAlreadyUser = await User.findOne({ username, password });

  if (isAlreadyUser) {
    return res.json({ status: "You already have an Account." });
  }

  await User.create(user);

  res.json({ status: "Successfully Signed Up." });
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.json({ status: "Please provide credentials." });
  }

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.json({ status: "Wrong Username or Password." });
  }

  res.cookie("user", user);
  res.json({ status: "Successfully Logged In." });
});

router.get("/todos", userMiddleware, async (req, res) => {
  const todos = await Todo.find({ creator: req.user._id });

  res.json({ todos });
});

router.post("/logout", userMiddleware, (req, res) => {
  res.clearCookie("user");

  res.json({ status: "Logged Out." });
});

module.exports = router;
