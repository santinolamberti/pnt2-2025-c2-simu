"use client";

import { useParams } from "next/navigation";
import DetalleComponente from "./detalleComponent";
import { useState, useEffect } from "react";

function DetallePelicula() {
  const { id } = useParams();
  
  return (
    <>
      <DetalleComponente id={id} />
    </>
  );
}

export default DetallePelicula;
