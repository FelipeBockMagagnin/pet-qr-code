import Pet from "@/core/rules/pet";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(request) {
  const form = await request.formData();
  const { origin } = request.nextUrl

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

    return NextResponse.redirect(`${origin}/visualizar-qr-code/${id}`);
  } catch (error) {
    return NextResponse.redirect(`${origin}/gerar-perfil?error=Erro%20ao%20criar%20pet:%20${error}`);
  }
}
