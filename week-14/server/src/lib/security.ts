import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
import { RequestHandler } from 'express';
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hex] = stored.split(':');
  const expected = Buffer.from(hex || '', 'hex');
  return expected.length === 64 && timingSafeEqual(expected, scryptSync(password, salt, 64));
}
export const asyncRoute =
  (handler: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
