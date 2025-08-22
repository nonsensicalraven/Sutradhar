import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();
onAuthStateChanged(auth, user => {
  if(user){
    console.log("User is logged in:", user.email);
  } else {
    alert("You must log in to view this page!");
    window.location.href = "index.html"; // redirect to login
  }
});
