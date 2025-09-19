"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GerarPerfil() {
  const searchParams = useSearchParams();
  const error = decodeURIComponent(searchParams.get("error") || "");

  const [vacinas, setVacinas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchVacinas = async () => {
      try {
        const response = await fetch("/api/vacinas"); 
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados das vacinas");
        }
        const data = await response.json();
        setVacinas(data); 
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVacinas();
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="mb-3">Cadastro de Pet</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form
        className="needs-validation"
        noValidate
        method="POST"
        action="/api/pet-create"
      >
        <h4 className="mb-3">Dados do Dono</h4>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="nome_dono" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="nome_dono"
              name="nome_dono"
              placeholder="Nome do dono"
              required
            />
          </div>

          <div className="col-sm-6">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              type="text"
              className="form-control"
              id="telefone"
              name="telefone"
              placeholder="(99) 99999-9999"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email@email.com"
            />
          </div>

          <div className="col-12">
            <label htmlFor="endereco" className="form-label">
              Endereço
            </label>
            <input
              type="text"
              className="form-control"
              id="endereco"
              name="endereco"
              placeholder="Rua, número, bairro"
              required
            />
          </div>
        </div>

        <h4 className="my-4">Dados do Pet</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="nome_pet" className="form-label">
              Nome do Pet
            </label>
            <input
              type="text"
              className="form-control"
              id="nome_pet"
              name="nome_pet"
              placeholder="Ex: Rex"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="especie" className="form-label">
              Espécie
            </label>
            <input
              type="text"
              className="form-control"
              id="especie"
              name="especie"
              placeholder="Ex: Cachorro, Gato"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="raca" className="form-label">
              Raça
            </label>
            <input
              type="text"
              className="form-control"
              id="raca"
              name="raca"
              placeholder="Ex: Labrador"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="idade" className="form-label">
              Idade
            </label>
            <input
              type="number"
              className="form-control"
              id="idade"
              name="idade"
              placeholder="Em anos"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="peso" className="form-label">
              Peso (kg)
            </label>
            <input
              type="number"
              className="form-control"
              id="peso"
              name="peso"
              step="0.1"
              placeholder="Ex: 12.5"
            />
          </div>

          <div className="col-12">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="descricao"
              rows="3"
              name="descricao"
              placeholder="Informações adicionais sobre o pet"
            ></textarea>
          </div>
        </div>

        <hr className="my-4" />
        <h4 className="mb-3">Carteira de Vacinação</h4>
        {isLoading ? (
          <p>Carregando vacinas...</p>
        ) : (
          <div className="row">
            {vacinas.map((vacina) => (
              <div className="col-md-6 col-lg-4" key={vacina.id}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="vacinas"
                    value={vacina.id}
                    id={`vacina-${vacina.id}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`vacina-${vacina.id}`}
                  >
                    {vacina.nome_vacina}
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="w-100 btn btn-primary btn-lg mt-4" type="submit">
          Cadastrar Pet
        </button>
      </form>
    </div>
  );
}
