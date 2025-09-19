"use client";

import { useQRCode } from "next-qrcode";
import { use } from "react";
import Link from "next/link";

export default function Page({ params }) {
  const { SVG } = useQRCode();

  const { id } = use(params);
  const host = window.location.host;
  const url = `https://${host}/visualizar_perfil/${id}`;

  return (
    <div className="container text-center mt-3">
      <h1>Cadastro Realizado.</h1>

      <h2>QRCode gerado:</h2>

      <SVG
        text={url}
        options={{
          margin: 2,
          width: 200,
          color: {
            dark: "#000",
            light: "#FFF",
          },
        }}
      />

      <br/>

      <h4>Aponte a camera do seu ceular ou utilize o botão abaixo para visualizar o seu perfil gerado</h4>

      <Link
            href={`/visualizar-perfil/${id}`}
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Visualizar Perfil
          </Link>
    </div>
  );
}
