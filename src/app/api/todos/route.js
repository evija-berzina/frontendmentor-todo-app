import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany({
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
    },
  });

  return NextResponse.json(newTodo);
}