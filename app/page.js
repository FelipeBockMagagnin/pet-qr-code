import Link from "next/link";

export default function Home() {
  return (
    <div className="container my-4 my-md-5">
      <div className="mb-4">
        <div className="text-success">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <img src="/logo.png" height="200" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mx-auto">
        <p className="fw-small text-success mb-4">
          Cuidar de nossos pets é uma responsabilidade que levamos a sério. No
          entanto, imprevistos podem acontecer, e é por isso que criamos o Pet
          Qr Code. Com nosso serviço, você pode gerar um perfil digital para seu
          pet, contendo todas as informações essenciais, como dados do dono,
          características do animal e contatos de emergência. Assim, em caso de
          perda ou emergência, qualquer pessoa que encontrar seu pet poderá
          acessar rapidamente essas informações vitais através de um simples
          escaneamento do QR code. Proporcione mais segurança e tranquilidade
          para você e seu amigo de quatro patas com o Pet Qr Code.
        </p>
        <br />
        <hr />
        <br />
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link
            href="/gerar-perfil"
            type="button"
            className="btn btn-success btn-lg px-4 gap-3"
          >
            Gerar Perfil Qr-code
          </Link>
        </div>
      </div>
    </div>
  );
}
