import { RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
export type Role = 'admin' | 'user';
export function auth(role: Role): RequestHandler {
  return (req, res, next) => {
    try {
      const token = req.get('authorization')?.match(/^Bearer (.+)$/i)?.[1];
      if (!token) {
        res.status(401).json({ message: 'Please sign in' });
        return;
      }
      const payload = jwt.verify(token, process.env.JWT_SECRET!, {
        algorithms: ['HS256'],
      }) as JwtPayload;
      if (payload.role !== role || typeof payload.sub !== 'string') {
        res.status(403).json({ message: 'Access denied' });
        return;
      }
      res.locals.accountId = payload.sub;
      next();
    } catch {
      res.status(401).json({ message: 'Invalid or expired session' });
    }
  };
}
