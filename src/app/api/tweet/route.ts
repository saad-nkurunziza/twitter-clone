import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("image") as Blob | null;
  const body = formData.get("body") as string;
  const userId = formData.get("userId") as string;
  const fileType = file?.type;
  if (!userId) {
    return;
  }
  if (file === null) {
    try {
      const newTweet = await prisma.tweet.create({
        data: {
          body,
          userId,
        },
      });
      return NextResponse.json({ tweet: newTweet });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed creating tweet" },
        { status: 409 }
      );
    }
  } else {
    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadDir = join(process.cwd(), "public", "uploads");

    try {
      await stat(uploadDir);
    } catch (error: any) {
      if (error.code === "ENOENT") {
        await mkdir(uploadDir, { recursive: true });
      } else {
        console.log(error);
      }
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    try {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileExtension = mime.getExtension(fileType!);
      const filename = `image-${uniqueSuffix}.${fileExtension}`;
      await writeFile(`${uploadDir}/${filename}`, buffer);

      const newTweet = await prisma.tweet.create({
        data: {
          body,
          image: filename,
          userId,
        },
      });
      if (newTweet) {
        return NextResponse.json({ tweet: newTweet });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed MF" }, { status: 500 });
    }
  }
}

export async function GET(req: Request) {
  const tweet = await prisma.tweet.findFirst();
  return NextResponse.json(tweet);
}
