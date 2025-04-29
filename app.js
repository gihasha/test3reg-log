import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from './firebase.js';

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// SignIn Functionality
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      // Redirect or proceed with logged-in user
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// SignUp Functionality
const signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Sign-up Successful!");
      // Redirect or process new user
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
