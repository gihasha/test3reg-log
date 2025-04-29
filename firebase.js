// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOLVBP5F-Mf6F1bgLFRntPxgyq8WVl7Ts",
  authDomain: "login-paje-2ee80.firebaseapp.com",
  projectId: "login-paje-2ee80",
  storageBucket: "login-paje-2ee80.firebasestorage.app",
  messagingSenderId: "741680912902",
  appId: "1:741680912902:web:c0ebc9cd06c81647b58187",
  measurementId: "G-GRG32CNTPR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("signup-btn").addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});

document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
