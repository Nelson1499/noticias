import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export async function agregarUsuario() {
  await addDoc(collection(db, "news"), {
    title: ""
  });
}