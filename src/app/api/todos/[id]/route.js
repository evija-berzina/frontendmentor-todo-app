import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    console.log("DELETE ID:", id);

    const deleted = await prisma.todo.delete({
      where: { 
        id,
        userId,
      },
    });

    return NextResponse.json(deleted);
  } catch (err) {
    console.error("DELETE ERROR:", err);

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  const { id } = await params;

  const body = await req.json();

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: {
      checked: body.checked,
    },
  });

  return NextResponse.json(updatedTodo);
}