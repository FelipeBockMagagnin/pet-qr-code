-- CreateTable
CREATE TABLE "public"."PetVacina" (
    "id" SERIAL NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "vacina_id" INTEGER NOT NULL,
    "data_aplicacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PetVacina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PetVacina_pet_id_vacina_id_key" ON "public"."PetVacina"("pet_id", "vacina_id");

-- AddForeignKey
ALTER TABLE "public"."PetVacina" ADD CONSTRAINT "PetVacina_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "public"."Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PetVacina" ADD CONSTRAINT "PetVacina_vacina_id_fkey" FOREIGN KEY ("vacina_id") REFERENCES "public"."Vacina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
