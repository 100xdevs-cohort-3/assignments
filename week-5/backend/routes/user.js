const { Router } = require("express");
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Please provide valid credentials." });
  }

  const isUsernameExists = await User.findOne({ username: username });

  if (isUsernameExists) {
    return res.status(400).json({ error: "Username Already Exists." });
  }

  await User.create({ username, password });

  res.status(200).json({ msg: "Successfully Signedup." });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Please provide valid credentials." });
  }

  const user = await User.findOne({ username, password });

  if (!user) {
    return res.status(400).json({ error: "Invalid Credentials." });
  }

  const token = jwt.sign(
    {
      username,
    },
    process.env.JWT_SECRET
  );

  res.status(200).json({ token });
});

module.exports = router;
