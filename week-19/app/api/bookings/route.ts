import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { currentUser } from '@/lib/auth';
import { apiError } from '@/lib/api-error';
export async function GET() {
  try {
    const user = await currentUser();
    if (!user) return NextResponse.json({ message: 'Please sign in' }, { status: 401 });
    return NextResponse.json({
      bookings: await prisma.booking.findMany({
        where: { userId: user.id },
        include: { event: { include: { createdBy: { select: { username: true } } } } },
        orderBy: { createdAt: 'desc' },
      }),
    });
  } catch (error) {
    return apiError(error);
  }
}
