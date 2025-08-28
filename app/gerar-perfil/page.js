export default function GerarPerfil() {
  return (
    <div className="container mt-3">
      <h1 className="mb-3">Cadastro de Pet</h1>
      <form className="needs-validation" noValidate>

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
              placeholder="Informações adicionais sobre o pet"
            ></textarea>
          </div>
        </div>

        <button className="w-100 btn btn-primary btn-lg mt-4" type="submit">
          Cadastrar Pet
        </button>
      </form>
    </div>
  );
}
