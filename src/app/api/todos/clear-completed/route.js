import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const deleted = await prisma.todo.deleteMany({
    where: {
      checked: true,
      userId: userId
    },
  });

  return NextResponse.json(deleted);
}