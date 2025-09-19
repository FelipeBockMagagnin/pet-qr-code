"use client";

import { useEffect, useState, use } from "react";

export default function Page({ params }) {
  const [pet, setPet] = useState([]);
  const { id } = use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/pet-find", {
          method: "POST",
          body: JSON.stringify({ id: Number(id) }), // É mais seguro usar Number()
          headers: {
            "Content-Type": "application/json",
          },
        });


        setPet(await res.json());

      } catch (error) {
        console.error("Erro na busca de dados:", error);
      }
    };

    fetchData();
  }, []);

  return <div className="container my-4 my-md-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Perfil do Pet</h1>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-dark text-white">
              <h4>Dados do Dono</h4>
            </div>
            <div className="card-body">
              <dl className="row">
                <dt className="col-sm-4">Nome</dt>
                <dd className="col-sm-8">{pet.nome_dono}</dd>

                <dt className="col-sm-4">Telefone</dt>
                <dd className="col-sm-8">{pet.telefone}</dd>

                <dt className="col-sm-4">Email</dt>
                <dd className="col-sm-8">{pet.email}</dd>

                <dt className="col-sm-4">Endereço</dt>
                <dd className="col-sm-8">{pet.endereco}</dd>
              </dl>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h4>Dados do Pet</h4>
            </div>
            <div className="card-body">
              <dl className="row">
                <dt className="col-sm-4">Nome do Pet</dt>
                <dd className="col-sm-8 fw-bold fs-5">{pet.nome_pet}</dd>

                <dt className="col-sm-4">Espécie</dt>
                <dd className="col-sm-8">{pet.especie}</dd>

                <dt className="col-sm-4">Raça</dt>
                <dd className="col-sm-8">{pet.raca ?? 'Não informada'}</dd>

                <dt className="col-sm-4">Idade</dt>
                <dd className="col-sm-8">{pet.idade ? `${pet.idade} anos` : 'Não informada'}</dd>

                <dt className="col-sm-4">Peso</dt>
                <dd className="col-sm-8">{pet.peso ? `${pet.peso} kg` : 'Não informado'}</dd>

                <dt className="col-sm-4">Descrição</dt>
                <dd className="col-sm-8">{pet.descricao ?? 'Nenhuma.'}</dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h4>Carteira de Vacinação</h4>
            </div>
            <div className="card-body">
              {pet?.vacinas?.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {pet.vacinas.map((petVacina) => (
                    <li key={petVacina.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <strong className="d-block">{petVacina.vacina.nome_vacina}</strong>
                        <small className="text-muted">
                          Aplicada em: {new Date(petVacina.data_aplicacao).toLocaleDateString()}
                        </small>
                      </div>
                      <span className="badge bg-success rounded-pill">Vacinado</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="alert alert-info" role="alert">
                  Nenhuma vacina registrada para este pet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
}
