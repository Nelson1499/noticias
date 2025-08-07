import React from "react";
import Navbar_Staff from "../components/layout/Navbar_Staff";

const UploadCategory = () => {
  /***
   * TODO agregar yup y formik al form
   * Todo estilos al button y type
   */
  return (
    <>
    <Navbar_Staff />
    <form className="flex justify-center items-center">
      <div className="m-auto flex justify-center items-center rounded w-max h-max p-5 bg-gray-500">
        <div className="w-max m-auto grid grid-cols-1 gap-2 text-white">
          <h3>Agregar categoría</h3>
          <input type="text" placeholder="Agregar Categoría" className="outline-none border-b-2 " />
          <button type="submit" className="bg-green-500 p-2">upload</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default UploadCategory;
