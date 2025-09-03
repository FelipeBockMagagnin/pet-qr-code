import Pet from "@/core/rules/pet";
import { NextResponse } from "next/server";

export async function POST(request) {
  const form = await request.formData();

  const body = {};
  for (const [key, value] of form.entries()) {
    body[key] = value;
  }
  const data = Pet.find(body.id);

  return NextResponse.json(data);
}
