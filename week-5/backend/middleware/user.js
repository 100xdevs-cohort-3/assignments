const jwt = require("jsonwebtoken");
const { User } = require("../db/index");

async function authenticateUser(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  try {
    const { username } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ username: username });

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Invalid Token provided." });
  }
}

module.exports = authenticateUser;
