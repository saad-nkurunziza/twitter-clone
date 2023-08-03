import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
}
