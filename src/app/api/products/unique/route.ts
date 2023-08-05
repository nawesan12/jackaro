import { prisma } from "@/database/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { productName } = await req.json();

  const product = await prisma.product.findUnique({
    where: {
      name: productName as string,
    },
  });

  if (!product) return NextResponse.json({ error: true }, { status: 404 });

  return NextResponse.json({ product }, { status: 200 });
}
