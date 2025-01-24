const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");

const userMiddleware = (req, res, next) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_USER_PASSWORD);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "you are not signed up",
    });
  }
};

module.exports = {
  userMiddleware,
};
