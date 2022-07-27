// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2J98xwyF_kNy-XvGD9eU1B4mv_Cr1jY",
  authDomain: "ecommerce-celular.firebaseapp.com",
  projectId: "ecommerce-celular",
  storageBucket: "ecommerce-celular.appspot.com",
  messagingSenderId: "998309372704",
  appId: "1:998309372704:web:8b6bf8c6e1117a6a30ed45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)