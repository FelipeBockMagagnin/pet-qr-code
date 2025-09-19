import Pet from "@/core/rules/pet";
import { NextResponse } from "next/server";
import prisma from "@/core/database";

export async function POST(request) {
  const form = await request.formData();
  const { origin } = request.nextUrl
  const vacinasSelecionadas = form.getAll("vacinas");
  form.delete("vacinas");

  const body = {};
  for (const [key, value] of form.entries()) {
    body[key] = value;
  }


  try {
    const { id } = await Pet.create({
      ...body,
      idade: parseInt(body.idade),
      peso: parseFloat(body.peso),
    });

    if (vacinasSelecionadas && vacinasSelecionadas.length > 0) {
      await prisma.petVacina.createMany({
        data: vacinasSelecionadas.map((vacinaId) => ({
          pet_id: id,
          vacina_id: Number(vacinaId)
        })),
      });
    }

    return NextResponse.redirect(`${origin}/visualizar-qr-code/${id}`);
  } catch (error) {
    return NextResponse.redirect(`${origin}/gerar-perfil?error=Erro%20ao%20criar%20pet:%20${error}`);
  }
}
