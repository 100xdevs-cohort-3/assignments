import { prisma } from './client';
// Preserve the schema and clear dependent rows before parent rows.
export async function dropTables() {
  if (!new URL(process.env.DATABASE_URL || '').pathname.endsWith('_test'))
    throw new Error('Reset requires a dedicated database whose name ends in _test');
  await prisma.$transaction([prisma.travelPlan.deleteMany(), prisma.user.deleteMany()]);
}
