import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { currentUser } from '@/lib/auth';
import { eventSchema, eventId } from '@/lib/validation';
import { apiError } from '@/lib/api-error';
type Context = { params: Promise<{ id: string }> };
export async function DELETE(req: NextRequest, context: Context) {
  try {
    const user = await currentUser(),
      id = eventId((await context.params).id);
    if (!user) return NextResponse.json({ message: 'Please sign in' }, { status: 401 });
    if (!id) return NextResponse.json({ message: 'Invalid event id' }, { status: 400 });
    const result = await prisma.event.deleteMany({ where: { id, createdById: user.id } });
    return NextResponse.json(
      { message: result.count ? 'Event deleted' : 'Event not found' },
      { status: result.count ? 200 : 404 },
    );
  } catch (error) {
    return apiError(error);
  }
}
export async function PATCH(req: NextRequest, context: Context) {
  try {
    const user = await currentUser(),
      id = eventId((await context.params).id);
    if (!user) return NextResponse.json({ message: 'Please sign in' }, { status: 401 });
    if (!id) return NextResponse.json({ message: 'Invalid event id' }, { status: 400 });
    const data = eventSchema.parse(await req.json());
    const result = await prisma.event.updateMany({ where: { id, createdById: user.id }, data });
    return NextResponse.json(
      { message: result.count ? 'Event updated' : 'Event not found' },
      { status: result.count ? 200 : 404 },
    );
  } catch (error) {
    return apiError(error);
  }
}
