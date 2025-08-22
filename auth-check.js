// auth-check.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is logged in:", user.email);
  } else {
    // No user is signed in, redirect to login or homepage
    alert("You must be logged in to access this page!");
    window.location.href = "index.html"; // redirect to homepage or login page
  }
});
