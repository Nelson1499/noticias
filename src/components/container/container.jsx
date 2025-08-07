import React from "react";

const Container = () => {
  return (
    <div className="m-auto max-w-[850px]">
      <h2>Titulo de la noticia</h2>
      <h5>Autor</h5>
      <div className="flex justify-content-between">
        <small>1 hour ago</small>
        <p>
          {/**
           * TODO Agregar iconos de compartir
           * con lista oculta donde Feste facebook, Instagram, X y la de copiar enlace
           */}
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
      />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam
        incidunt est explicabo unde, vero eius quia reiciendis ipsum
        dignissimos. Tempore beatae animi adipisci impedit eaque inventore culpa
        dolorum earum?
      </p>
    </div>
  );
};

export default Container;
