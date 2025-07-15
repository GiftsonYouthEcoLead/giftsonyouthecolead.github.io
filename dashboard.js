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

// 🟢 Wait until the page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  const emailDisplay = document.getElementById("user-email");
  const logoutBtn = document.getElementById("logout-btn");

  // ✅ Display user info or redirect
  onAuthStateChanged(auth, (user) => {
    if (user) {
      emailDisplay.textContent = "Logged in as: " + user.email;
    } else {
      window.location.href = "login.html";
    }
  });

  // 🔴 Logout button
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          alert("✅ Logged out successfully");
          window.location.href = "login.html";
        })
        .catch((error) => {
          alert("❌ Logout failed: " + error.message);
        });
    });
  } else {
    console.error("❌ Logout button not found in DOM");
  }
});
