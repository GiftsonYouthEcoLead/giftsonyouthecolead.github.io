import { auth } from './firebase.js';
import { onAuthStateChanged, signOut } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (!user || !user.emailVerified) {
    window.location.href = "login.html";
  }
});

window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};