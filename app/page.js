import Link from "next/link";

export default function Home() {
  return (
    <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Pet-qr-code</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">//todo - Descrição do projeto.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link href='/gerar-perfil' type="button" class="btn btn-primary btn-lg px-4 gap-3">Gerar Perfil Qr-code</Link>
        <Link href='/visualizar-perfil/1' type="button" class="btn btn-secondary btn-lg px-4 gap-3">Visualizar Pet Teste</Link>
      </div>
    </div>
  </div>
  );
}
