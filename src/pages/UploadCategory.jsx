import Navbar_Staff from "../components/layout/Navbar_Staff";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const UploadCategory = () => {
  /***
   * TODO agregar yup y formik al form
   * Todo estilos al button y type
   */

  const formik = useFormik({
    initialValues: {
      category: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("category is required"),
    }),
    onSubmit: () => {
      console.log(formik.values);
    },
  });
  const Onchange = (e) => {
    formik.setFieldValue("category", e.target.value);
  };
  return (
    <>
      <Navbar_Staff />
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-center items-center"
      >
        <div className="m-auto flex justify-center items-center rounded w-max h-max p-5 bg-gray-500">
          <div className="w-max m-auto grid grid-cols-1 gap-2 text-white">
            <h3>Agregar categoría</h3>
            <input
              type="text"
              onChange={Onchange}
              placeholder="Agregar Categoría"
              name="category"
              className="outline-none border-b-2 "
            />
            {formik.touched.category && formik.errors.category && (
              <small className="text-red-500">{formik.errors.category}</small>
            )}
            <button type="submit" className="bg-green-500 p-2">
              upload
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UploadCategory;
