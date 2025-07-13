import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendEmailVerification
} from 'firebase/auth';

const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user).then(() => {
          document.getElementById("message").textContent = "Signup successful! Please verify your email.";
          auth.signOut();
        });
      })
      .catch((error) => {
        document.getElementById("message").textContent = error.message;
      });
  });
}

const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const remember = document.getElementById("remember-me").checked;
    const persistence = remember ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistence)
      .then(() => signInWithEmailAndPassword(auth, email, password))
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        document.getElementById("message").textContent = error.message;
      });
  });
}

window.forgotPassword = () => {
  const email = document.getElementById("login-email").value;
  if (!email) {
    document.getElementById("message").textContent = "Enter your email to reset password.";
    return;
  }
  sendPasswordResetEmail(auth, email)
    .then(() => {
      document.getElementById("message").textContent = "Reset link sent! Check your inbox.";
    })
    .catch((error) => {
      document.getElementById("message").textContent = error.message;
    });
};