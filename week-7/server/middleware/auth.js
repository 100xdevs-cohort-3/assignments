const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.username = payload.username;
    next();
  } catch (e) {
    res.status(400).json({ error: "Invalid token." });
  }
}

module.exports = auth;
