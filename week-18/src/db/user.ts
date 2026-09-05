import { prisma } from './client';
export async function createUser(username: string, password: string, name: string) {
  if (!username.trim() || !name.trim() || !password)
    throw new Error('Username, name and password are required');
  return prisma.user.create({ data: { username: username.trim(), password, name: name.trim() } });
}
export async function getUser(userId: number) {
  return prisma.user.findUnique({ where: { id: userId } });
}
