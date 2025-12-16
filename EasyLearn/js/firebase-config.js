// Firebase Configuration - Centralized
// Replace with your actual Firebase project credentials from https://console.firebase.google.com/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDyyOv23pgZau4NMap25ELNJeK2_q-hWQw",
    authDomain: "my-auth-9ca91.firebaseapp.com",
    projectId: "my-auth-9ca91",
    storageBucket: "my-auth-9ca91.firebasestorage.app",
    messagingSenderId: "982710575554",
    appId: "1:982710575554:web:a6d86152f3fa5a003a365b",
    measurementId: "G-KEYKG9C4CB"
};

// Initialize Firebase
let app;
let auth;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    // Firebase initialized successfully
} catch (error) {
    // Firebase initialization error
    throw error;
}

export { app, auth, firebaseConfig };
