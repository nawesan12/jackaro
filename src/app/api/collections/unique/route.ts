import { prisma } from "@/database/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { desiredCollection } = await req.json();

  const collection = await prisma.collection.findUnique({
    where: {
      name: desiredCollection as string,
    },
    select: {
      id: true,
      lore: true,
      name: true,
      products: true,
    },
  });

  if (!collection) return NextResponse.json({ error: true }, { status: 404 });

  return NextResponse.json({ collection }, { status: 200 });
}
