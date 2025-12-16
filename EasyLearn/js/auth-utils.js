// Centralized Authentication Utility
// Works across all pages - both Firebase and Mock mode

import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Get current user (synchronous)
export function getCurrentUser() {
    // Try Firebase first
    if (auth && auth.currentUser) {
        return auth.currentUser;
    }

    // Check for Firebase user in sessionStorage
    try {
        const firebaseUser = sessionStorage.getItem('firebaseUser');
        if (firebaseUser) {
            return JSON.parse(firebaseUser);
        }
    } catch (e) {
        // Error reading Firebase user from sessionStorage
    }

    // Fallback to mock user in localStorage
    try {
        const mockUser = localStorage.getItem('mockUser');
        if (mockUser) {
            return JSON.parse(mockUser);
        }
    } catch (e) {
        // Error reading mock user
    }

    return null;
}

// Wait for auth to be ready (returns a promise)
export function waitForAuth() {
    return new Promise((resolve) => {
        // Check if already have a user
        const user = getCurrentUser();
        if (user) {
            // User already authenticated
            resolve(user);
            return;
        }

        // If Firebase is initialized, wait for auth state
        if (auth) {
            // Waiting for Firebase auth state
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe(); // Only fire once
                if (user) {
                    // Firebase user authenticated
                    resolve(user);
                } else {
                    // Check mock user one more time
                    const mockUser = getCurrentUser();
                    if (mockUser) {
                        // Mock user found
                        resolve(mockUser);
                    } else {
                        // No user authenticated
                        resolve(null);
                    }
                }
            });
        } else {
            // No Firebase, check mock only
            // No Firebase - checking mock user only
            resolve(getCurrentUser());
        }
    });
}

// Require authentication (redirect if not logged in)
export async function requireAuth(redirectUrl = 'index.html') {
    const user = await waitForAuth();

    if (!user) {
        // Authentication required - redirecting
        sessionStorage.setItem('showLogin', 'true');
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
        window.location.href = redirectUrl;
        return null;
    }

    // Authentication verified
    return user;
}

// Export auth instance for advanced usage
export { auth };
