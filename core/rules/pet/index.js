import prisma from "../../database";

export default class Pet {
  static async create(fields) {
    if (!fields.nome_dono) throw "Nome do dono precisa ser informado";
    if (!fields.telefone) throw "Telefone precisa ser informado";
    if (!fields.email) throw "Email precisa ser informado";
    if (!fields.endereco) throw "Endereço precisa ser informado";
    if (!fields.nome_pet) throw "Nome do pet precisa ser informado";
    if (!fields.especie) throw "Espécie precisa ser informado";

    return await prisma.pet.create({
      data: fields,
    });
  }

  static async find(id) {
    if (!id) throw new Error("Id precisa ser informado");

    return await prisma.pet.findUnique({
      where: { id },
    });
  }
}
