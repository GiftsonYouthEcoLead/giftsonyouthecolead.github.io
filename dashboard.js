import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCecs-rafW9Wz2oc-elmp-YZplYpKhgLuM",
  authDomain: "youthecoleadauth.firebaseapp.com",
  projectId: "youthecoleadauth",
  appId: "1:855744473089:web:e823c5426b4bfc2dbd0839"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.textContent = `Logged in as: ${user.email}`;
  } else {
    window.location.href = "login.html";
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});