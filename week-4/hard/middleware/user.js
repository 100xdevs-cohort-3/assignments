const jwt = require('jsonwebtoken');
const { User } = require('../database');
async function authenticateJwt(req, res, next) {
  const token = req.get('authorization')?.match(/^Bearer (.+)$/i)?.[1];
  if (!token) return res.status(401).json({ message: 'Please sign in' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
    const user = await User.findById(payload.userId);
    if (!user || user.tokenVersion !== payload.version)
      return res.status(401).json({ message: 'Session expired' });
    req.userId = user.id;
    next();
  } catch (error) {
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError' ||
      error.name === 'CastError'
    )
      return res.status(401).json({ message: 'Invalid or expired session' });
    next(error);
  }
}
module.exports = authenticateJwt;
module.exports.authenticateJwt = authenticateJwt;
