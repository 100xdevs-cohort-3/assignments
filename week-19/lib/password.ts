import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}
export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hex] = stored.split(':');
  const expected = Buffer.from(hex || '', 'hex');
  return expected.length === 64 && timingSafeEqual(expected, scryptSync(password, salt, 64));
}
