// Importar SDKs que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ Falta este import

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7vcgVtR1ti78334fqTJgScrfYZq3Rrc4",
  authDomain: "noticias-107e4.firebaseapp.com",
  projectId: "noticias-107e4",
  storageBucket: "noticias-107e4.firebasestorage.app",
  messagingSenderId: "163109751742",
  appId: "1:163109751742:web:ad9fbb2b9a165139ff47ef",
  measurementId: "G-DML1DRP001"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);

// Inicializar Analytics (opcional)
// const analytics = getAnalytics(app);
