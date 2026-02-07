/**
 * Authentication Guard for Protected Routes - IMPROVED FOR NETLIFY
 * This file MUST be included in all protected pages
 * Place this script BEFORE any other scripts in the HTML
 * 
 * NOW WAITS FOR FIREBASE AUTH BEFORE BLOCKING!
 */

(function () {
    'use strict';

    // List of public routes that don't require authentication
    const PUBLIC_ROUTES = [
        '/',
        '/index.html',
        '/amp.html'
    ];

    // Get current page path
    const currentPath = window.location.pathname;

    // Check if current route is public
    function isPublicRoute() {
        return PUBLIC_ROUTES.some(route => {
            return currentPath === route || currentPath.endsWith(route);
        });
    }

    // Quick synchronous check for authentication
    function quickAuthCheck() {
        // Check localStorage for mock user (development)
        const mockUser = localStorage.getItem('mockUser');
        if (mockUser) {
            try {
                const user = JSON.parse(mockUser);
                if (user && user.email) {
                    // Auth Guard: Mock user found
                    return true;
                }
            } catch (e) {
                localStorage.removeItem('mockUser');
            }
        }

        // Check sessionStorage for Firebase user
        const firebaseUser = sessionStorage.getItem('firebaseUser');
        if (firebaseUser) {
            try {
                const user = JSON.parse(firebaseUser);
                if (user && user.email) {
                    // Auth Guard: Firebase user in session
                    return true;
                }
            } catch (e) {
                sessionStorage.removeItem('firebaseUser');
            }
        }

        // Check if we've recently verified auth (within 5 seconds)
        const lastAuthCheck = sessionStorage.getItem('lastAuthCheck');
        if (lastAuthCheck) {
            const timeSinceCheck = Date.now() - parseInt(lastAuthCheck);
            if (timeSinceCheck < 5000) { // 5 seconds
                // Auth Guard: Recent auth check passed
                return true;
            }
        }

        return false;
    }

    // Async function to wait for Firebase (with timeout)
    async function waitForAuth() {
        return new Promise((resolve) => {
            let attempts = 0;
            const maxAttempts = 100; // 10 seconds max wait

            const checkInterval = setInterval(() => {
                attempts++;

                // Check if Firebase is available and has determined auth state
                if (sessionStorage.getItem('firebaseAuthChecked') === 'true') {
                    clearInterval(checkInterval);
                    const isAuth = quickAuthCheck();
                    // Auth Guard: Firebase ready
                    resolve(isAuth);
                    return;
                }

                // Timeout after max attempts
                if (attempts >= maxAttempts) {
                    clearInterval(checkInterval);
                    // Auth Guard: Timeout waiting for Firebase
                    resolve(quickAuthCheck());
                }
            }, 100); // Check every 100ms
        });
    }

    // Main guard function - now async
    async function guardRoute() {
        // Auth Guard: Checking route

        // If this is a public route, allow access immediately
        if (isPublicRoute()) {
            // Auth Guard: Public route, access granted
            return;
        }

        // Quick check first
        if (quickAuthCheck()) {
            // Auth Guard: Quick check passed, access granted
            return;
        }

        // Show brief loading message
        // Auth Guard: Waiting for authentication state

        // Wait for Firebase to be ready (with timeout)
        const isAuthenticated = await waitForAuth();

        if (!isAuthenticated) {
            // Auth Guard: Not authenticated, redirecting to login

            // Save the intended destination
            sessionStorage.setItem('redirectAfterLogin', window.location.href);
            sessionStorage.setItem('showLogin', 'true');

            // Redirect to index with login prompt
            window.location.replace('/index.html');

            // Stop execution
            throw new Error('Authentication required');
        }

        // Auth Guard: Authenticated, access granted
    }

    // Run the guard
    guardRoute().catch((e) => {
        // Auth Guard: Access blocked
    });

    // Export for use in other scripts
    window.authGuard = {
        quickAuthCheck,
        waitForAuth,
        guardRoute
    };

})();
