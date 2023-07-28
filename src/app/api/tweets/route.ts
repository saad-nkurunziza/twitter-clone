import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const tweets = await prisma.tweet.findMany();
  return NextResponse.json({ tweets }, { status: 200 });
}
