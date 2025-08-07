// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7vcgVtR1ti78334fqTJgScrfYZq3Rrc4",
  authDomain: "noticias-107e4.firebaseapp.com",
  projectId: "noticias-107e4",
  storageBucket: "noticias-107e4.firebasestorage.app",
  messagingSenderId: "163109751742",
  appId: "1:163109751742:web:ad9fbb2b9a165139ff47ef",
  measurementId: "G-DML1DRP001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);