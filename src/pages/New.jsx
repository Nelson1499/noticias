import React from "react";
import Container from "../components/container/container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/**
 * TODO CREAR CONTERNEDOR DE INFORMACION PARA LA NOTICIA Y SUS  IMAGENES/VIDEOS
 *
 */

const New = () => {
  return (
    <>
      <Navbar></Navbar>
      <article className="flex w-full relative">
        <Container />
      </article>
      <Footer />
    </>
  );
};

export default New;
