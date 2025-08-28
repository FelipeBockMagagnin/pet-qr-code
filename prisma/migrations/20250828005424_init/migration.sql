-- CreateTable
CREATE TABLE "public"."Pet" (
    "id" SERIAL NOT NULL,
    "nome_dono" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "nome_pet" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "raca" TEXT,
    "idade" INTEGER,
    "peso" DOUBLE PRECISION,
    "descricao" TEXT,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
