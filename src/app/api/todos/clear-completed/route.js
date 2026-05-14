import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE() {
  const deleted = await prisma.todo.deleteMany({
    where: {
      checked: true,
    },
  });

  return NextResponse.json(deleted);
}