import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { currentUser } from '@/lib/auth';
import { hashPassword } from '@/lib/password';
import { signupSchema } from '@/lib/validation';
import { apiError } from '@/lib/api-error';
export async function GET() {
  try {
    const user = await currentUser();
    return NextResponse.json(user || { message: 'Please sign in' }, { status: user ? 200 : 401 });
  } catch (error) {
    return apiError(error);
  }
}
export async function POST(req: NextRequest) {
  try {
    const data = signupSchema.parse(await req.json());
    await prisma.user.create({ data: { ...data, password: hashPassword(data.password) } });
    return NextResponse.json({ message: 'Account created. You can now sign in.' }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}
