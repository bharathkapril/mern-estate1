// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bf6a4.firebaseapp.com",
  projectId: "mern-estate-bf6a4",
  storageBucket: "mern-estate-bf6a4.appspot.com",
  messagingSenderId: "915584978238",
  appId: "1:915584978238:web:d90c0b063d2f2c23ba306f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
