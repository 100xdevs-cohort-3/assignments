const { User } = require("../database");

async function userMiddleware(req, res, next) {
  const userCookie = req.cookies["user"];

  if (!userCookie) {
    return res.json({ status: "Unauthorized." });
  }

  const user = await User.findById(userCookie._id);

  if (!user) {
    return res.json({ staus: "Invalid Cookie." });
  }

  req.user = user;
  next();
}

module.exports = userMiddleware;
