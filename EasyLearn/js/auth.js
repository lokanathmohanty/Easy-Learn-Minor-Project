// Simplified Authentication System
// Works with both Firebase and Mock mode

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyyOv23pgZau4NMap25ELNJeK2_q-hWQw",
    authDomain: "my-auth-9ca91.firebaseapp.com",
    projectId: "my-auth-9ca91",
    storageBucket: "my-auth-9ca91.firebasestorage.app",
    messagingSenderId: "982710575554",
    appId: "1:982710575554:web:a6d86152f3fa5a003a365b"
};

// Use Mock Authentication (set to false to use real Firebase)
const USE_MOCK_AUTH = true;

// Current user state
let currentUser = null;

// Initialize Firebase (only if not using mock)
let auth = null;
if (!USE_MOCK_AUTH) {
    try {
        import('https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js').then((firebaseApp) => {
            return firebaseApp.initializeApp(firebaseConfig);
        }).then((app) => {
            return import('https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js');
        }).then((firebaseAuth) => {
            auth = firebaseAuth.getAuth();
            // Listen to auth state changes
            firebaseAuth.onAuthStateChanged(auth, (user) => {
                updateAuthState(user);
            });
        });
    } catch (error) {
        // Firebase initialization failed
    }
}

// Check for existing session on page load
function checkExistingSession() {
    if (USE_MOCK_AUTH) {
        const storedUser = localStorage.getItem('mockUser');
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
            updateAuthState(currentUser);
            return true;
        }
    }
    return false;
}

// Update authentication state across the app
function updateAuthState(user) {
    currentUser = user;

    // Update UI elements
    const loginBtn = document.getElementById('login-btn-nav');
    const userMenu = document.getElementById('user-menu-container');

    if (user) {
        // User is logged in
        if (loginBtn) loginBtn.classList.add('hidden');
        if (userMenu) userMenu.classList.remove('hidden');

        // Update user info if elements exist
        const userName = user.displayName || user.email?.split('@')[0] || 'User';
        const userEmail = user.email || '';

        const nameElements = document.querySelectorAll('.user-name, #user-name');
        nameElements.forEach(el => el.textContent = userName);

        const emailElements = document.querySelectorAll('.user-email');
        emailElements.forEach(el => el.textContent = userEmail);

        // Update profile pictures
        const avatarUrl = user.photoURL || `https://ui-avatars.com/api/?name=${userName}&background=6c5ce7&color=fff`;
        const avatarElements = document.querySelectorAll('.user-avatar, .profile-pic');
        avatarElements.forEach(el => el.src = avatarUrl);

    } else {
        // User is logged out
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
    }
}

// Login function
async function login(email, password) {
    if (USE_MOCK_AUTH) {
        // Mock authentication
        const mockUser = {
            uid: 'mock_' + Date.now(),
            email: email,
            displayName: email.split('@')[0],
            emailVerified: true,
            photoURL: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=6c5ce7&color=fff`
        };

        localStorage.setItem('mockUser', JSON.stringify(mockUser));
        updateAuthState(mockUser);
        return { success: true, user: mockUser };
    } else {
        // Real Firebase authentication
        try {
            const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js');
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// Signup function
async function signup(email, password) {
    if (USE_MOCK_AUTH) {
        // Mock signup - just show success
        return { success: true, message: 'Account created! Please login.' };
    } else {
        try {
            const { createUserWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js');
            await createUserWithEmailAndPassword(auth, email, password);
            return { success: true, message: 'Account created successfully!' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// Logout function
async function logout() {
    if (USE_MOCK_AUTH) {
        localStorage.removeItem('mockUser');
        updateAuthState(null);
        return { success: true };
    } else {
        try {
            const { signOut } = await import('https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js');
            await signOut(auth);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// Get current user
function getCurrentUser() {
    return currentUser;
}

// Check if user is authenticated
function isAuthenticated() {
    return currentUser !== null;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkExistingSession();
});

// Export functions
window.auth = {
    login,
    signup,
    logout,
    getCurrentUser,
    isAuthenticated,
    updateAuthState
};
