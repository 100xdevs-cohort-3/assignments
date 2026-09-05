import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
export function apiError(error: unknown) {
  if (error instanceof ZodError)
    return NextResponse.json(
      {
        message: error.issues
          .map((issue) => issue.path.join('.') + ': ' + issue.message)
          .join('; '),
      },
      { status: 400 },
    );
  if (error instanceof SyntaxError)
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002')
    return NextResponse.json(
      { message: 'This account or booking already exists' },
      { status: 409 },
    );
  return NextResponse.json({ message: 'Unable to complete the request' }, { status: 500 });
}
