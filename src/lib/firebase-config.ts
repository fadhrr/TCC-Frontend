// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJn77P80Bts7VnDOOEU2NC2xI_XyMBMI4",
  authDomain: "tcc-usk.firebaseapp.com",
  projectId: "tcc-usk",
  storageBucket: "tcc-usk.appspot.com",
  messagingSenderId: "391121560708",
  appId: "1:391121560708:web:8bceb0ce2e79d528030ed1",
  measurementId: "G-MRBK4YLM00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);