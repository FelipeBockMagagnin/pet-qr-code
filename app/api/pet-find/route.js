import Pet from "@/core/rules/pet";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  const data = await Pet.find(body.id);

  return NextResponse.json(data);
}
