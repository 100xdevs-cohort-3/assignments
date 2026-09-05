import { z } from 'zod';
export const signupSchema = z.object({
  username: z.string().trim().min(3).max(80),
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .transform((value) => value.toLowerCase()),
  password: z.string().min(8).max(200),
});
export const eventSchema = z.object({
  title: z.string().trim().min(1).max(150),
  description: z.string().trim().min(1).max(4000),
  location: z.string().trim().min(1).max(200),
  date: z
    .string()
    .datetime()
    .transform((value) => new Date(value))
    .refine((value) => value.getTime() > Date.now(), 'Choose a future date'),
});
export function eventId(value: string) {
  if (!/^[1-9]\d*$/.test(value) || !Number.isSafeInteger(Number(value))) return null;
  return Number(value);
}
