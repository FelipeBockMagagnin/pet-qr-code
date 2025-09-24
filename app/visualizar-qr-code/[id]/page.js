"use client";

import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";
import { use } from "react";
import Link from "next/link";

export default function Page({ params }) {
  const { SVG } = useQRCode();
  const { id } = use(params);
  const [host, setHost] = useState("");

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const url = host ? `https://${host}/visualizar_perfil/${id}` : "";

  return (
    <div className="container my-4 my-md-5">
      <div className="mb-4">
        <div className="text-success">
          <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-start">
              <Link href={`/`}>
                <img src="/logo.png" height="100" />
              </Link>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center">
              <h1 className="mb-3 fw-bold">QRCode do seu Pet</h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center">
          {url && (
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
          )}
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <p className="fw-small text-success mb-4">
            Aponte a camera do seu ceular ou utilize o botão abaixo para
            visualizar o seu perfil gerado
          </p>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <Link
            href={`/visualizar-perfil/${id}`}
            type="button"
            className="btn btn-success btn-lg px-4 gap-3"
          >
            Visualizar Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}
