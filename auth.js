// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Firebase configuration (from your project)
const firebaseConfig = {
  apiKey: "AIzaSyCecs-rafW9Wz2oc-elmp-YZplYpKhgLuM",
  authDomain: "youthecoleadauth.firebaseapp.com",
  projectId: "youthecoleadauth",
  storageBucket: "youthecoleadauth.appspot.com",
  messagingSenderId: "582086230952",
  appId: "1:582086230952:web:bcb05f79c2c015b7ae2a29"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Handle login form submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent reload

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      window.location.href = "dashboard.html"; // redirect on success
    })
    .catch((error) => {
      alert("❌ Login failed: " + error.message);
      console.error("Login error:", error);
    });
});
