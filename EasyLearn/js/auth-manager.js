/* Enhanced Authentication System - Works with Both Mock & Firebase */

// Auth State Manager
const USE_MOCK_AUTH = true; // Set to false to use real Firebase

// Authentication functions with proper error handling
window.AuthManager = {

    // Email/Password Login
    async loginWithEmail(email, password) {
        // Login attempt

        // Mock Auth Mode
        if (USE_MOCK_AUTH) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const mockUser = {
                        uid: 'mock_' + Date.now(),
                        email: email,
                        displayName: email.split('@')[0],
                        emailVerified: true,
                        photoURL: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=6c5ce7&color=fff`
                    };

                    localStorage.setItem('mockUser', JSON.stringify(mockUser));
                    resolve({ success: true, user: mockUser });
                }, 800);
            });
        }

        // Real Firebase Auth
        try {
            if (!auth) throw new Error("Firebase not initialized");
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check email verification
            if (!user.emailVerified) {
                await signOut(auth);
                return {
                    success: false,
                    error: 'Email not verified. Check your inbox.'
                };
            }

            return { success: true, user: user };
        } catch (error) {
            // Login error

            // Friendly error messages
            let errorMessage = 'Login failed';
            if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password';
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Try again later.';
            } else if (error.code === 'auth/network-request-failed') {
                errorMessage = 'Network error. Check your connection.';
            }

            return { success: false, error: errorMessage };
        }
    },

    // Email/Password Signup
    async signupWithEmail(email, password) {
        // Signup attempt

        // Mock Auth Mode
        if (USE_MOCK_AUTH) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        message: 'Account created! Please login.'
                    });
                }, 1000);
            });
        }

        // Real Firebase Auth
        try {
            if (!auth) throw new Error("Firebase not initialized");
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Send verification email
            await sendEmailVerification(user);

            // Sign out until verified
            await signOut(auth);

            return {
                success: true,
                message: 'Account created! Verification email sent. Please verify before logging in.'
            };
        } catch (error) {
            // Signup error

            let errorMessage = 'Signup failed';
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Email already registered';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Password too weak (minimum 6 characters)';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            }

            return { success: false, error: errorMessage };
        }
    },

    // Google Sign-In
    async loginWithGoogle() {
        // Google sign-in attempt

        // Mock Auth Mode
        if (USE_MOCK_AUTH) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const mockUser = {
                        uid: 'google_' + Date.now(),
                        email: 'user@gmail.com',
                        displayName: 'Google User',
                        emailVerified: true,
                        photoURL: 'https://ui-avatars.com/api/?name=Google+User&background=6c5ce7&color=fff'
                    };

                    localStorage.setItem('mockUser', JSON.stringify(mockUser));
                    resolve({ success: true, user: mockUser });
                }, 1000);
            });
        }

        // Real Firebase Auth
        try {
            if (!auth) throw new Error("Firebase not initialized");
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: 'select_account'
            });

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            return { success: true, user: user };
        } catch (error) {
            // Google auth error

            let errorMessage = 'Google sign-in failed';
            if (error.code === 'auth/popup-closed-by-user') {
                errorMessage = 'Sign-in cancelled';
            } else if (error.code === 'auth/popup-blocked') {
                errorMessage = 'Popup blocked. Please allow popups.';
            } else if (error.code === 'auth/account-exists-with-different-credential') {
                errorMessage = 'Account exists with different sign-in method';
            }

            return { success: false, error: errorMessage };
        }
    },

    // Forgot Password
    async resetPassword(email) {
        // Password reset attempt

        // Mock Auth Mode
        if (USE_MOCK_AUTH) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        message: 'Password reset email sent (simulated)'
                    });
                }, 800);
            });
        }

        // Real Firebase Auth
        try {
            if (!auth) throw new Error("Firebase not initialized");
            await sendPasswordResetEmail(auth, email);

            return {
                success: true,
                message: 'Password reset email sent. Check your inbox.'
            };
        } catch (error) {
            // Reset error

            let errorMessage = 'Reset failed';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No account found with this email';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            }

            return { success: false, error: errorMessage };
        }
    },

    // Logout
    async logout() {
        // Logout attempt

        // Mock Auth
        if (USE_MOCK_AUTH) {
            localStorage.removeItem('mockUser');
            return { success: true };
        }

        // Real Firebase
        try {
            if (auth) await signOut(auth);
            return { success: true };
        } catch (error) {
            // Logout error
            return { success: false, error: 'Logout failed' };
        }
    },

    // Get current user
    getCurrentUser() {
        if (USE_MOCK_AUTH) {
            const stored = localStorage.getItem('mockUser');
            return stored ? JSON.parse(stored) : null;
        }
        return auth?.currentUser || null;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}
