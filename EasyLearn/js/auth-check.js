// Simple Auth Check - Works on Netlify
// This replaces the aggressive auth-guard.js

function getUser() {
    // Check localStorage for mock user
    const mockUser = localStorage.getItem('mockUser');
    if (mockUser) {
        try {
            return JSON.parse(mockUser);
        } catch (e) {
            // Error parsing mockUser
        }
    }

    // Check sessionStorage for Firebase user
    const firebaseUser = sessionStorage.getItem('firebaseUser');
    if (firebaseUser) {
        try {
            return JSON.parse(firebaseUser);
        } catch (e) {
            // Error parsing firebaseUser
        }
    }

    return null;
}

function checkAuth() {
    const user = getUser();
    const currentPage = window.location.pathname.split('/').pop();

    // Only protect these specific pages
    const protectedPages = ['course-player.html', 'certificate.html'];

    if (protectedPages.includes(currentPage) && !user) {
        // Protected page - redirecting to login
        sessionStorage.setItem('showLogin', 'true');
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
        window.location.href = 'index.html';
        return false;
    }

    if (user) {
        window.currentUser = user;
        // User authenticated
    }

    return true;
}

// Run check
window.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});
