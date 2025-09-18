"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [pet, setPet] = useState([]);

  useEffect(async () => {
    const { id } = params;

    const res = await fetch("http://localhost:3000/api/pet-find", {
      method: "POST",
      body: JSON.stringify({ id: parseInt(id) }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPet(await res.json());
  }, []);

  return <div className="container">Visualizando pet numero: {pet?.id}</div>;
}
