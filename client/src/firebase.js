// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-99824.firebaseapp.com",
  projectId: "mern-estate-99824",
  storageBucket: "mern-estate-99824.appspot.com",
  messagingSenderId: "55760351994",
  appId: "1:55760351994:web:d9f40ac8d8bf0bd0898f43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);