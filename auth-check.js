import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBv23cbRzW4y224z3YDPPMvGMkx0k-Mxu8",
    authDomain: "sutradhar-2c17d.firebaseapp.com",
    projectId: "sutradhar-2c17d",
    storageBucket: "sutradhar-2c17d.firebasestorage.app",
    messagingSenderId: "527545107973",
    appId: "1:527545107973:web:a7f1548107c826429bbe6c",
    measurementId: "G-86KK9NQDDT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        alert("You must log in first!");
        window.location.href = "index.html";
    }
});
