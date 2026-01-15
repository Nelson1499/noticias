import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export async function AddNews(data) {
  const { title, description, category, content, cover, primary, second } =
    data;
    console.log(data);
    
  if (title && description && category && content && cover && primary) {
    await addDoc(collection(db, "news"), {
      title,
      description,
      content,
      cover,
      primary,
      secondary: second ?? "",
      id_category: category,
      view: 0,
    });
  }
}
