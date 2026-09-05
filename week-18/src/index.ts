import { prisma } from './db/client';
async function main() {
  try {
    console.log(
      await prisma.travelPlan.findMany({ include: { user: { select: { name: true } } } }),
    );
  } finally {
    await prisma.$disconnect();
  }
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
