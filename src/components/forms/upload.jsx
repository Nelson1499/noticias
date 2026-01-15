import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Preview from "../elementos/preview";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { AddNews } from "../../api/api_news";
import { subirImagen } from "../../api/uploadimages";

const UploadForm = () => {
  /**
   * TODO AGREGAR FORMIK METODO  DE VALIDACION CON YUP Y OBJETOS{ TITLE, DESCRIPTION, CONTENEDOR }
   */
  const [Timout, setTimout] = useState(false);
  // console.log(value);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      content: "",
      cover: "",
      primary: "",
      second: "",
    },
    validationSchema: Yup.object({
      // title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      content: Yup.string()
        .required("Content is required")
        .min(100, "Cantidad minima de caracteres 100."),

      cover: Yup.mixed()
        .required("Image cover is required")
        .test(
          "FILE_SIZE",
          "Tamaño de la imagen es muy pesado",
          (value) => value && value.size < 2048 * 1024
        )
        .test(
          "FILE_TYPE",
          "Tipo de archivo no válido",
          (value) => value && ["image/png", "image/jpeg"].includes(value.type)
        ),
      primary: Yup.mixed()
        .required("Image primary is required")
        .test(
          "FILE_SIZE",
          "Tamaño de la imagen es muy pesado",
          (value) => value && value.size < 2048 * 1024
        )
        .test(
          "FILE_TYPE",
          "Tipo de archivo no válido",
          (value) => value && ["image/png", "image/jpeg"].includes(value.type)
        ),
      second: Yup.mixed()
        .nullable()
        .notRequired()
        .test("FILE_SIZE", "Tamaño de la imagen es muy pesado", (value) => {
          if (!value) return true; // no hay archivo, no valida tamaño
          return value.size < 2048 * 1024;
        })
        .test("FILE_TYPE", "Tipo de archivo no válido", (value) => {
          if (!value) return true; // no hay archivo, no valida tipo
          return ["image/png", "image/jpeg"].includes(value.type);
        }),
    }),
    onSubmit: async () => {
      let data = await subirImagen(formik.values);
      if (data) {
        AddNews(data)
          .then(() => toast.success("Successfully created!"))
          .catch((e) => console.log(e));
        setTimeout(() => {
          setTimout(false);
        }, 1000);
      }
    },
  });
  const onChange = (content) => {
    formik.setFieldValue("content", content);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="w-full px-5">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <h4>Subir Contenido</h4>
      <div className="grid grid-flow-col grid-cols-3 gap-4 ">
        <div className="col-span-2 gap-2">
          <div className="grid grid-flow-col grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                className="outline-none border-b-2 w-full"
                name="title"
                placeholder="Agregar Titulo"
                onChange={(e) => formik.setFieldValue("title", e.target.value)}
              />
              {formik.touched.title && formik.errors.title && (
                <small className="text-red-500">{formik.errors.title}</small>
              )}
            </div>
            <div>
              <select
                onChange={(e) =>
                  formik.setFieldValue("category", e.target.value)
                }
                className="outline-none border-b-2 w-full"
              >
                <option value="1">Economia</option>
                <option value="2">Humanidad</option>
                <option value="3">Deporte</option>
              </select>
              {formik.touched.category && formik.errors.category && (
                <small className="text-red-500">{formik.errors.category}</small>
              )}
            </div>
          </div>
          <div>
            <textarea
              type="text"
              className="outline-none border-b-2 w-full h-44"
              name="description"
              onChange={(e) =>
                formik.setFieldValue("description", e.target.value)
              }
              placeholder="Agregar Descripción corta"
            />
            {formik.touched.description && formik.errors.description && (
              <small className="text-red-500">
                {formik.errors.description}
              </small>
            )}
          </div>
          <div>
            <ReactQuill
              value={formik.values.content}
              onChange={onChange}
              className="h-56"
            />
            {formik.touched.content && formik.errors.content && (
              <small className="text-red-500">{formik.errors.content}</small>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 col-span-2 space-y-2">
          <label className="w-max cursor-pointer">
            <h6>Portada</h6>
            <Preview file={formik.values.cover} />
            <input
              type="file"
              onChange={(e) =>
                formik.setFieldValue("cover", e.currentTarget.files[0])
              }
              name="portada"
              accept="image/*"
              hidden
            />
            {formik.touched.cover && formik.errors.cover && (
              <small className="text-red-500">{formik.errors.cover}</small>
            )}
          </label>
          <label className="w-max cursor-pointer">
            <h6>Principal Imagen</h6>
            <Preview file={formik.values.primary} />
            <input
              type="file"
              onChange={(e) =>
                formik.setFieldValue("primary", e.currentTarget.files[0])
              }
              name="first"
              accept="image/*"
              hidden
            />
          </label>
          <label className="w-max cursor-pointer">
            <h6>Imagen Secundaria</h6>
            <Preview file={formik.values.second} />
            <input
              type="file"
              onChange={(e) => {
                formik.setFieldValue("second", e.currentTarget.files[0]); // si es solo uno
              }}
              name="second"
              accept="image/*"
              hidden
            />
          </label>
        </div>
        <button
          type="submit"
          className={`mb-auto bg-green-600 p-2 text-amber-50 rounded `}
          onClick={() => setTimout(!Timout)}
        >
          {Timout ? "Uploading..." : "Upload"}
        </button>
      </div>
    </form>
  );
};

export default UploadForm;
