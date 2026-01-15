import axios from 'axios';

// Variables que debes configurar
// const accountId = import.meta.env.VITE_KEY_CLOUDFLARE;
// const apiToken =  import.meta.env.VITE_ACCOUNT_ID;

// Función para subir la imagen
export async function subirImagen(data) {
  try {
    // files debe ser un array de File o Blob
    const {cover, primary, second} = data
    const formData = new FormData();
    const files = [cover, primary, second]
    files.forEach((file) => {
      if (file) {
        formData.append("files", file); // "files" coincide con el backend
      }
    });

    const url = "http://localhost:3000/upload";

    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

   
    let result = {
      ...data,
      cover: response.data.urls[0],
      primary: response.data.urls[1],
      second: response.data.urls[2] ?? ""
    }
    
    return result; // devuelves todas las urls

  } catch (error) {
    console.error(
      "Error subiendo las imágenes:",
      error.response?.data || error.message
    );
    throw error;
  }
}

