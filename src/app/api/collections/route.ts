import { prisma } from "@/database/client";
import { NextResponse } from "next/server";

export async function GET() {
  const collections = await prisma.collection.findMany({
    select: {
      id: true,
      lore: true,
      name: true,
      products: true,
    },
  });

  if (!collections) return NextResponse.json({ error: true }, { status: 404 });

  return NextResponse.json({ collections }, { status: 200 });
}
