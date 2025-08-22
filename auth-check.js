import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User not logged in
    alert("You must be logged in to access this page!");
    window.location.href = "index.html"; // redirect to login/home page
  }
});
