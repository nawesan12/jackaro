import { prisma } from "@/database/client";

export async function GET() {
  const users = await prisma.user.findMany();

  return new Response(JSON.stringify(users));
}
