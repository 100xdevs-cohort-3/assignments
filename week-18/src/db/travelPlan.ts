import { prisma } from './client';
export async function createTravelPlan(
  userId: number,
  title: string,
  destinationCity: string,
  destinationCountry: string,
  startDate: string,
  endDate: string,
  budget?: number,
) {
  const start = new Date(startDate),
    end = new Date(endDate);
  if (!title.trim() || !destinationCity.trim() || !destinationCountry.trim())
    throw new Error('Title and destination are required');
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || end < start)
    throw new Error('Invalid travel dates');
  if (budget !== undefined && (!Number.isFinite(budget) || budget < 0))
    throw new Error('Budget must be nonnegative');
  return prisma.travelPlan.create({
    data: {
      userId,
      title: title.trim(),
      destinationCity,
      destinationCountry,
      startDate: start,
      endDate: end,
      budget,
    },
  });
}
export async function updateTravelPlan(planId: number, title?: string, budget?: number) {
  if (title !== undefined && !title.trim()) throw new Error('Title cannot be empty');
  if (budget !== undefined && (!Number.isFinite(budget) || budget < 0))
    throw new Error('Budget must be nonnegative');
  return prisma.travelPlan.update({
    where: { id: planId },
    data: { title: title?.trim(), budget },
  });
}
export async function getTravelPlans(userId: number) {
  return prisma.travelPlan.findMany({ where: { userId }, orderBy: { id: 'asc' } });
}
