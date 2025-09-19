import prisma from "@/core/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const vacinas = await prisma.vacina.findMany({
      orderBy: {
        nome_vacina: "asc",
      },
    });
    return NextResponse.json(vacinas);
  } catch (error) {
    console.error("Erro ao buscar vacinas:", error);
    return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}