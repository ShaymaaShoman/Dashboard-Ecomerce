// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNOksA5y7xlXtEvlymYFFLlJ5h29EiR54",
  authDomain: "ecommerce-dashboard-4fb0a.firebaseapp.com",
  projectId: "ecommerce-dashboard-4fb0a",
  storageBucket: "ecommerce-dashboard-4fb0a.firebasestorage.app",
  messagingSenderId: "958357344540",
  appId: "1:958357344540:web:e48a282db5d035fdafead9",
  measurementId: "G-BPYNFL822E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// src/firebaseConfig.js
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
