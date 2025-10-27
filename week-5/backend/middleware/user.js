//  start writing from here
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET = process.env.JWT_SECRET || 'default_secret';

/**
 * Middleware to verify JWT token and authenticate user
 */
export const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ✅ 1. Check if Authorization header exists
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  // ✅ 2. Verify the token
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.userId; // attach the decoded userId to the request
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export { SECRET };
