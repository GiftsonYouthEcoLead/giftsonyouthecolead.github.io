// dashboard.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCecs-rafW9Wz2oc-elmp-YZplYpKhgLuM",
  authDomain: "youthecoleadauth.firebaseapp.com",
  projectId: "youthecoleadauth",
  storageBucket: "youthecoleadauth.appspot.com",
  messagingSenderId: "582086230952",
  appId: "1:582086230952:web:bcb05f79c2c015b7ae2a29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🟢 Display user info
onAuthStateChanged(auth, (user) => {
  const emailDisplay = document.getElementById("user-email");
  if (user) {
    emailDisplay.textContent = "Logged in as: " + user.email;
  } else {
    // If no user, redirect to login
    window.location.href = "login.html";
  }
});

// 🔴 Logout
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("✅ Logged out successfully");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("❌ Logout failed: " + error.message);
      console.error("Logout error:", error);
    });
});
