// Import Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCecs-rafW9Wz2oc-elmp-YZplYpKhgLuM",
  authDomain: "youthecoleadauth.firebaseapp.com",
  projectId: "youthecoleadauth",
  storageBucket: "youthecoleadauth.appspot.com",
  messagingSenderId: "233790621622",
  appId: "1:233790621622:web:7aaed7bc25e21b52832317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form handling
const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";

    setTimeout(() => {
      window.location.href = "dashboard.html"; // You can change this
    }, 2000);
  } catch (error) {
    message.style.color = "red";
    message.textContent = error.message;
  }
});

// Forgot password
window.forgotPassword = function () {
  const email = document.getElementById('login-email').value;
  if (!email) {
    message.style.color = "orange";
    message.textContent = "Please enter your email first.";
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      message.style.color = "green";
      message.textContent = "Password reset email sent!";
    })
    .catch((error) => {
      message.style.color = "red";
      message.textContent
