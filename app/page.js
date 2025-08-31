import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Pet-qr-code</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">//todo - Descrição do projeto.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            href="/gerar-perfil"
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Gerar Perfil Qr-code
          </Link>
          <Link
            href="/visualizar-perfil/1"
            type="button"
            className="btn btn-secondary btn-lg px-4 gap-3"
          >
            Visualizar Pet Teste
          </Link>
        </div>
      </div>
    </div>
  );
}
