import { NextResponse } from "next/server";
import prisma from "@/core/database";

export async function POST(request) {
  const body = await request.json();

  const data = await prisma.pet.findUnique({
    where: {
      id: body.id,
    },
    include: {
      vacinas: {
        orderBy: {
          data_aplicacao: 'desc'
        },
        include: {
          vacina: true,
        },
      },
    },
  });


  return NextResponse.json(data);
}
