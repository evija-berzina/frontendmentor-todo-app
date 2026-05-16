import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const todos = await prisma.todo.findMany({
    where: userId ? { userId } : undefined,
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(todos);
}

export async function POST(request) {
  const body = await request.json();

  const newTodo = await prisma.todo.create({
    data: {
      text: body.text,
      userId: body.userId,
    },
  });

  return NextResponse.json(newTodo);
}