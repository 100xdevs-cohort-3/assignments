import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { currentUser } from '@/lib/auth';
import { eventId } from '@/lib/validation';
import { apiError } from '@/lib/api-error';
type Context = { params: Promise<{ id: string }> };
export async function POST(req: NextRequest, context: Context) {
  try {
    const user = await currentUser(),
      id = eventId((await context.params).id);
    if (!user) return NextResponse.json({ message: 'Please sign in' }, { status: 401 });
    if (!id) return NextResponse.json({ message: 'Invalid event id' }, { status: 400 });
    const event = await prisma.event.findFirst({ where: { id, date: { gt: new Date() } } });
    if (!event) return NextResponse.json({ message: 'Upcoming event not found' }, { status: 404 });
    const booking = await prisma.booking.create({ data: { userId: user.id, eventId: id } });
    return NextResponse.json({ booking }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}
export async function DELETE(req: NextRequest, context: Context) {
  try {
    const user = await currentUser(),
      id = eventId((await context.params).id);
    if (!user) return NextResponse.json({ message: 'Please sign in' }, { status: 401 });
    if (!id) return NextResponse.json({ message: 'Invalid event id' }, { status: 400 });
    const result = await prisma.booking.deleteMany({ where: { userId: user.id, eventId: id } });
    return NextResponse.json(
      { message: result.count ? 'Booking cancelled' : 'Booking not found' },
      { status: result.count ? 200 : 404 },
    );
  } catch (error) {
    return apiError(error);
  }
}
