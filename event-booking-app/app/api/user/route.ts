

import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prismadb";


export async function GET() {
    const user = await prisma.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}


export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password,
            email: body.email
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}