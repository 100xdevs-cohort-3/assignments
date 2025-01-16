const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(token, JWT_USER_SECRET);
    req.userId = payload.userId;
    next();
  } catch (e) {
    res.status(400).json({ error: "Invalid token." });
  }
}

module.exports = userMiddleware;
