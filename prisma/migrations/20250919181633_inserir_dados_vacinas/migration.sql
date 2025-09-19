-- CreateTable
CREATE TABLE "public"."Vacina" (
    "id" SERIAL NOT NULL,
    "nome_vacina" TEXT NOT NULL,
    "especie_alvo" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "descricao_doenca" TEXT,

    CONSTRAINT "Vacina_pkey" PRIMARY KEY ("id")
);

-- Inserção de dados de vacinas
INSERT INTO "Vacina" (nome_vacina, especie_alvo, classificacao, descricao_doenca) VALUES
('Cinomose (CDV)', 'Cão', 'Essencial', 'Doença viral grave e frequentemente fatal que afeta os sistemas respiratório, gastrointestinal e nervoso.'),
('Adenovírus Canino (CAV)', 'Cão', 'Essencial', 'Causa a hepatite infecciosa canina, uma doença grave que afeta o fígado, rins, olhos e pulmões.'),
('Parvovírus Canino (CPV-2)', 'Cão', 'Essencial', 'Doença viral altamente contagiosa que causa gastroenterite hemorrágica grave, especialmente em filhotes.'),
('Raiva', 'Cão', 'Essencial', 'Doença viral fatal que afeta o sistema nervoso central. A vacinação é obrigatória por lei em muitas regiões.'),
('Leptospirose', 'Cão', 'Não Essencial', 'Doença bacteriana que pode causar insuficiência renal e hepática. Recomendada com base no risco geográfico e estilo de vida.'),
('Parainfluenza Canina (CPiV)', 'Cão', 'Não Essencial', 'Um dos agentes causadores da "tosse dos canis", uma doença respiratória infecciosa.'),
('Bordetella bronchiseptica', 'Cão', 'Não Essencial', 'Principal agente bacteriano causador da "tosse dos canis".'),
('Leishmaniose', 'Cão', 'Não Essencial', 'Doença parasitária grave transmitida por picada de flebotomíneos. A vacinação é recomendada em áreas endêmicas.'),
('Panleucopenia Felina (FPV)', 'Gato', 'Essencial', 'Doença viral grave e altamente contagiosa, semelhante à parvovirose canina, que afeta o trato gastrointestinal e a medula óssea.'),
('Calicivírus Felino (FCV)', 'Gato', 'Essencial', 'Causa infecções respiratórias superiores, doença oral e, em casos raros, doença sistêmica grave.'),
('Herpesvírus Felino 1 (FHV-1)', 'Gato', 'Essencial', 'Principal causa da rinotraqueíte viral felina, uma infecção respiratória superior comum e recorrente.'),
('Raiva', 'Gato', 'Essencial', 'Doença viral fatal que afeta o sistema nervoso central. A vacinação é crucial para gatos com acesso ao exterior ou em áreas de risco.'),
('Leucemia Felina (FeLV)', 'Gato', 'Não Essencial', 'Vírus que causa imunossupressão, anemia e linfoma. Considerada essencial para filhotes e gatos com acesso à rua.'),
('Chlamydophila felis', 'Gato', 'Não Essencial', 'Bactéria que causa conjuntivite e sinais respiratórios superiores.'),
('Bordetella bronchiseptica', 'Gato', 'Não Essencial', 'Pode causar doença respiratória superior, especialmente em gatos de abrigos ou gatis.');