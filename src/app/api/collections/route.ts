import { prisma } from "@/database/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const desiredCollection = await req.json();

  //@ts-ignore
  const collection = await prisma.collection.findUnique({
    where: {
      name: desiredCollection,
    },
  });

  if (!collection) return NextResponse.redirect("/not-found");

  return NextResponse.json({ collection }, { status: 200 });
}
