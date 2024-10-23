const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  
  try {
    const jwts = jwt.verify(token, process.env.PASSWORD_KEY);
    req.user = jwts; // Attach the decoded JWT to the request
    next(); // Call next after successful authentication
  } catch (err) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
}

module.exports = userMiddleware;
