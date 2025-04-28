// Button click UI effect
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Register and Login Logic
const registerForm = document.querySelector(".sign-up-form");
const loginForm = document.querySelector(".sign-in-form");

// Signup - Save to LocalStorage
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = registerForm.querySelector('input[placeholder="Username"]').value;
  const email = registerForm.querySelector('input[placeholder="Email"]').value;
  const password = registerForm.querySelector('input[placeholder="Password"]').value;

  if (username && email && password) {
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered Successfully!");
    container.classList.remove("sign-up-mode"); // After signup, show login
    registerForm.reset();
  } else {
    alert("Please fill all fields!");
  }
});

// Login - Check LocalStorage
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = loginForm.querySelector('input[placeholder="Username"]').value;
  const password = loginForm.querySelector('input[placeholder="Password"]').value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser) {
    if (username === savedUser.username && password === savedUser.password) {
      alert("Login Successful!");
      loginForm.reset();
      // window.location.href = "dashboard.html"; // Optional: Redirect after login
    } else {
      alert("Incorrect username or password!");
    }
  } else {
    alert("No user found! Please Sign up first.");
  }
});
