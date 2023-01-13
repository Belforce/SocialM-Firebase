// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore}from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDacgix8Pde1yGPiGRBOc9uNJkBDgVBMak",
  authDomain: "chatf-959d0.firebaseapp.com",
  projectId: "chatf-959d0",
  storageBucket: "chatf-959d0.appspot.com",
  messagingSenderId: "284714842875",
  appId: "1:284714842875:web:1eb10119171b960fa5ce5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db= getFirestore(app)
