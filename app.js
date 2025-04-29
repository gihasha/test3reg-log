const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Signup Validation
signupBtn.addEventListener("click", () => {
  const email = signupEmail.value;
  const password = signupPassword.value;

  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Sign Up successful!", "success"); // Blue Success Message
      })
      .catch((error) => {
        alert("Error: " + error.message, "error");
      });
  } else {
    alert("Please fill in both fields!", "error");
  }
});

// Login Validation
loginBtn.addEventListener("click", () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successful!", "success"); // Blue Success Message
      })
      .catch((error) => {
        alert("Invalid credentials, Please Sign Up first.", "error"); // Error Message
      });
  } else {
    alert("Please fill in both fields!", "error");
  }
});

// Custom Alert Function
function alert(message, type) {
  const alertBox = document.createElement("div");
  alertBox.classList.add(type === "success" ? "alert-success" : "alert-error");
  alertBox.innerHTML = message;

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}
