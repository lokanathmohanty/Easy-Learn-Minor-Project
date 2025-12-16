/**
 * Firebase Auth State Manager
 * Manages Firebase authentication state and updates sessionStorage
 * for auth-guard.js to use
 */

import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Track if Firebase auth has been initialized
let authInitialized = false;

// Listen to Firebase auth state changes
if (auth) {
    onAuthStateChanged(auth, (user) => {
        authInitialized = true;
        sessionStorage.setItem('firebaseAuthChecked', 'true');

        if (user) {
            // User is signed in
            // User signed in

            // Store user in sessionStorage for auth-guard
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified
            };

            sessionStorage.setItem('firebaseUser', JSON.stringify(userData));

            // Also store in localStorage for persistence
            localStorage.setItem('lastAuthUser', JSON.stringify(userData));

        } else {
            // User is signed out
            // User signed out
            sessionStorage.removeItem('firebaseUser');

            // Check if this is a protected page
            const currentPath = window.location.pathname;
            const isPublic = currentPath === '/' ||
                currentPath === '/index.html' ||
                currentPath.endsWith('/index.html');

            if (!isPublic && authInitialized) {
                // User logged out on protected page, redirect to home
                // User logged out on protected page, redirecting
                sessionStorage.setItem('showLogin', 'true');
                window.location.replace('/index.html');
            }
        }
    });
} else {
    // Firebase not initialized, using fallback auth
    sessionStorage.setItem('firebaseAuthChecked', 'true');
}

// Check for mock user (development/testing)
function checkMockUser() {
    const mockUser = localStorage.getItem('mockUser');
    if (mockUser) {
        try {
            const user = JSON.parse(mockUser);
            sessionStorage.setItem('firebaseUser', mockUser);
            // Mock user loaded
        } catch (e) {
            // Error loading mock user
        }
    }
}

// Initialize
checkMockUser();

export { authInitialized };
