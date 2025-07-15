// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCecs-rafW9Wz2oc-elmp-YZplYpKhgLuM",
  authDomain: "youthecoleadauth.firebaseapp.com",
  projectId: "youthecoleadauth",
  storageBucket: "youthecoleadauth.appspot.com",
  messagingSenderId: "582086230952",
  appId: "1:582086230952:web:bcb05f79c2c015b7ae2a29",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("✅ Login successful!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("❌ Login failed: " + error.message);
        console.error("Login error:", error);
      });
  });
}

// ✅ SIGNUP
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("✅ Signup successful!");
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert("❌ Signup failed: " + error.message);
        console.error("Signup error:", error);
      });
  });
}
