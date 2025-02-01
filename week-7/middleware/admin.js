const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

const adminMiddleware = (req, res, next) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_ADMIN_PASSWORD);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "invalid access",
    });
  }
};

module.exports = {
  adminMiddleware,
};
