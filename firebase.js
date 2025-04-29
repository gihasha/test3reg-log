// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOLVBP5F-Mf6F1bgLFRntPxgyq8WVl7Ts",
  authDomain: "login-paje-2ee80.firebaseapp.com",
  projectId: "login-paje-2ee80",
  storageBucket: "login-paje-2ee80.firebasestorage.app",
  messagingSenderId: "741680912902",
  appId: "1:741680912902:web:c0ebc9cd06c81647b58187",
  measurementId: "G-GRG32CNTPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
