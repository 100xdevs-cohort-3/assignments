import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { currentUser } from '@/lib/auth';
import { eventSchema } from '@/lib/validation';
import { apiError } from '@/lib/api-error';
export async function GET(req: NextRequest) {
  try {
    const q = (req.nextUrl.searchParams.get('q') || '').slice(0, 150);
    const events = await prisma.event.findMany({
      where: {
        date: { gte: new Date() },
        OR: [
          { title: { contains: q, mode: 'insensitive' } },
          { description: { contains: q, mode: 'insensitive' } },
          { location: { contains: q, mode: 'insensitive' } },
        ],
      },
      orderBy: { date: 'asc' },
      include: { createdBy: { select: { username: true } } },
    });
    return NextResponse.json({ events });
  } catch (error) {
    return apiError(error);
  }
}
export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) return NextResponse.json({ message: 'Please sign in' }, { status: 401 });
    const data = eventSchema.parse(await req.json());
    const event = await prisma.event.create({ data: { ...data, createdById: user.id } });
    return NextResponse.json({ event }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}
