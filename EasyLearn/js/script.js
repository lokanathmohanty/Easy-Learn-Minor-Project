// Import Firebase Configuration (Centralized)
import { auth } from './firebase-config.js';

// Import Firebase Auth Methods
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Global State
let currentUser = null;
let enrolledCourses = [];
let authResolved = false;

// UI Elements
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const authModal = document.getElementById('auth-modal');
const loginFormContainer = document.getElementById('login-form-container');
const signupFormContainer = document.getElementById('signup-form-container');
const forgotFormContainer = document.getElementById('forgot-form-container');
const themeToggle = document.getElementById('theme-toggle');
const userMenuContainer = document.getElementById('user-menu-container');
const userDropdown = document.getElementById('user-dropdown');
const loginBtnNav = document.getElementById('login-btn-nav');
const dashboardUsername = document.getElementById('dashboard-username');
const enrolledCount = document.getElementById('enrolled-count');
const enrolledCoursesList = document.getElementById('enrolled-courses-list');
const navLinksContainer = document.getElementById('nav-links');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navProfilePic = document.getElementById('nav-profile-pic');
const menuProfilePic = document.getElementById('menu-profile-pic');
const menuUserName = document.getElementById('menu-user-name');
const menuUserId = document.getElementById('menu-user-id');
const userProfileTrigger = document.getElementById('user-profile-trigger');

// --- Navigation Logic ---

// Mobile Menu Toggle (with null checks and initialized flag)
if (mobileMenuBtn && navLinksContainer) {
    // Mark as initialized to prevent animations.js from adding duplicate listeners
    mobileMenuBtn.dataset.initialized = 'true';

    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            if (navLinksContainer.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });

    // Mobile Dropdown Toggle Logic
    const dropdownTriggers = navLinksContainer.querySelectorAll('.dropdown-trigger');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                const container = trigger.closest('.dropdown-container');
                container.classList.toggle('active');
            }
        });
    });

    // Close mobile menu on link click
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('dropdown-trigger')) {
                navLinksContainer.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
}

// Switch Sections
function showSection(sectionId) {
    // STRICT AUTH CHECK for "Core" sections
    // If trying to access Courses or Tutorials, MUST be logged in
    if ((sectionId === 'courses' || sectionId === 'tutorials') && !currentUser) {
        showModal('login');
        return; // Stop navigation
    }
    if (sectionId === 'about' && !currentUser) {
        showModal('login');
        return; // Stop navigation
    }

    // Remove active-section from all sections
    sections.forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
        targetSection.classList.remove('hidden');
    } else {
        // Fallback to home
        const homeSection = document.getElementById('home');
        homeSection.classList.add('active-section');
        homeSection.classList.remove('hidden');
    }

    // Update Nav Active State
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Close Menu if open
    userDropdown.classList.add('hidden');
}


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') {
            e.preventDefault();
            return;
        }

        // Only hijack navigation if it's a hash link (SPA section)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            showSection(targetId);
        }
        // Otherwise, let the browser navigate normally
    });
});


// Protected Navbar Links Handler
// Intercept clicks on navbar links that require authentication
document.querySelectorAll('.nav-links a[data-protected="true"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!currentUser) {
            e.preventDefault(); // Stop navigation
            const destination = link.getAttribute('href');
            toastr.error('Please login to access this page!');

            // Save intended destination for redirect after login
            sessionStorage.setItem('redirectAfterLogin', destination);
            sessionStorage.setItem('showLogin', 'true');

            // Show login modal
            showModal('login');
        }
        // If currentUser exists, allow normal navigation
    });
});


window.scrollToCourses = () => {
    window.location.href = 'courses.html';
};

// Theme Toggle with localStorage persistence
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update both body and documentElement for compatibility
    document.body.setAttribute('data-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('themeManuallySet', 'true');

    // Update icon
    const icon = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    themeToggle.innerHTML = icon;

});

// --- Auth Modal Logic ---

function showModal(type = 'login') {
    authModal.classList.remove('hidden');
    loginFormContainer.classList.add('hidden');
    signupFormContainer.classList.add('hidden');
    forgotFormContainer.classList.add('hidden');

    if (type === 'login') loginFormContainer.classList.remove('hidden');
    if (type === 'signup') signupFormContainer.classList.remove('hidden');
    if (type === 'forgot') forgotFormContainer.classList.remove('hidden');
}

function hideModal() {
    authModal.classList.add('hidden');
}

// Close on Cross or Overlay Click
const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);
if (authModal) authModal.addEventListener('click', (e) => {
    if (e.target === authModal) hideModal();
});

// Triggers
const loginBtnNavEl = document.getElementById('login-btn-nav');
if (loginBtnNavEl) loginBtnNavEl.addEventListener('click', () => showModal('login'));
const heroLoginTrigger = document.getElementById('hero-login-trigger');
if (heroLoginTrigger) heroLoginTrigger.addEventListener('click', () => {
    // If logged in -> Go to courses, else -> Login
    if (currentUser) {
        window.location.href = 'index.html';
    } else {
        showModal('login');
    }
});


// ======================================
// THEME INITIALIZATION
// ======================================
// Load saved theme on page load
(function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Apply theme to both elements for compatibility
    document.body.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Set initial icon
    if (themeToggle) {
        const icon = savedTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        themeToggle.innerHTML = icon;
    }

})();

// Optional: Detect system theme preference on first visit
if (!localStorage.getItem('theme') && !localStorage.getItem('themeManuallySet')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', defaultTheme);
    document.body.setAttribute('data-theme', defaultTheme);
    document.documentElement.setAttribute('data-theme', defaultTheme);
}

// Protected Route Triggers (Courses)
document.querySelectorAll('.enroll-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!currentUser) {
            showModal('login');
        } else {
            const courseId = btn.dataset.courseId;
            const courseName = btn.dataset.courseName;
            enrollCourse(courseId, courseName);
        }
    });
});

// Protected Route Triggers (Tutorials)
document.querySelectorAll('.tutorial-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!currentUser) {
            showModal('login');
        } else {
            const tutorialId = btn.dataset.tutorialId;
            const tutorialName = btn.dataset.tutorialName;
            toastr.success(`Starting tutorial: ${tutorialName}`);
            // You can add tutorial-specific logic here
        }
    });
});



// Switching inside Modal
document.getElementById('show-signup').addEventListener('click', (e) => { e.preventDefault(); showModal('signup'); });
document.getElementById('show-login').addEventListener('click', (e) => { e.preventDefault(); showModal('login'); });
document.getElementById('show-forgot-password').addEventListener('click', (e) => { e.preventDefault(); showModal('forgot'); });
document.getElementById('back-to-login').addEventListener('click', (e) => { e.preventDefault(); showModal('login'); });

// GLOBAL "Click Anywhere" Protection?
// User asked: "If user click anything It will be directed to login or pop up the login page."
// This is aggressive. I will implement it specifically for the "Home" section if they are NOT logged in and interact with something that implies action,
// BUT to keep the site usable (Navbar works, scrolling works), I won't put a blanket blocker on Body, 
// unless I misunderstand. 
// Re-reading: "index html? If user click anything It will be directed to login or pop up the login page."
// This suggests a "Gatekeeper" landing page. 
// I will add a listener to the Landing Page (Home Section) content specifically.
document.querySelector('#home .hero-content').addEventListener('click', (e) => {
    // Only if not clicking a button (buttons handle themselves) and not logged in
    if (!currentUser && e.target.tagName !== 'BUTTON') {
        // Optional: showModal('login');
        // keeping it less annoying for now, sticking to button clicks.
    }
});


// --- Toastr Config ---
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "4000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

// Helper: Validate Gmail
function validateGmail(email) {
    // Strict check for @gmail.com
    const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return re.test(String(email).toLowerCase());
}

// --- Firebase Auth Logic ---

// Sign Up
// Sign Up
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm-password').value;

    if (!validateGmail(email)) {
        toastr.warning("Only @gmail.com addresses are allowed.");
        return;
    }

    if (password !== confirm) {
        toastr.error("Passwords do not match!");
        return;
    }

    // MOCK AUTH CHECK
    if (typeof USE_MOCK_AUTH !== 'undefined' && USE_MOCK_AUTH) {
        toastr.info("Creating simulated account...");
        setTimeout(() => {
            toastr.success("Account created! Verification skipped (Mock Mode).");
            toastr.info("Please login with your new credentials.");
            hideModal();
            showModal('login');
        }, 1000);
        return;
    }

    try {
        if (!auth) throw new Error("Firebase not configured");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send Verification Email
        await sendEmailVerification(user);

        // Force Logout - Require verification before using app
        await signOut(auth);

        hideModal();
        toastr.success("Account created! Verification link sent to your Gmail.");
        toastr.warning("You MUST verify your email before logging in.");

        showModal('login');
    } catch (error) {
        toastr.error("Signup Failed: " + error.message);
    }
});

// Login
// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!validateGmail(email)) {
        toastr.warning("Please enter a valid @gmail.com address.");
        return;
    }

    // MOCK AUTH CHECK
    if (typeof USE_MOCK_AUTH !== 'undefined' && USE_MOCK_AUTH) {
        toastr.info("Authenticating... (Simulated)");
        setTimeout(() => {
            const mockUser = {
                uid: 'mock_' + Date.now(),
                email: email,
                displayName: email.split('@')[0],
                emailVerified: true,
                photoURL: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=6c5ce7&color=fff`
            };

            // Persist Mock User
            localStorage.setItem('mockUser', JSON.stringify(mockUser));
            currentUser = mockUser;
            updateUI(mockUser);

            hideModal();
            toastr.success("Logged in successfully (Mock Mode)!");

            // Redirect if needed
            if (document.querySelector('.active-section')?.id === 'home') {
                showSection('courses');
            }
        }, 800);
        return;
    }

    try {
        if (!auth) throw new Error("Firebase not configured");

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Strict Verification Check
        if (!user.emailVerified) {
            await signOut(auth); // Boot them out
            toastr.error("Email not verified!");
            toastr.info("Please check your Gmail inbox and click the verification link.");
            return;
        }

        hideModal();
        sendLoginNotification(user.email);

        // Handle redirect if exists
        const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
        if (redirectUrl) {
            sessionStorage.removeItem('redirectAfterLogin');
            window.location.href = redirectUrl;
        }
    } catch (error) {
        // Specific Error Handling
        if (error.code === 'auth/wrong-password') {
            toastr.error("Incorrect password.");
        } else if (error.code === 'auth/user-not-found') {
            toastr.error("No account found with this email.");
        } else if (error.code === 'auth/too-many-requests') {
            toastr.error("Too many failed attempts. Please try again later.");
        } else {
            toastr.error("Login Failed: " + error.message);
        }
    }
});

// Google Login (for login form)
const googleLoginBtn = document.getElementById('google-login-btn');
if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', async () => {
        await handleGoogleAuth();
    });
}

// Google Sign Up (for signup form)
const googleSignupBtn = document.getElementById('google-signup-btn');
if (googleSignupBtn) {
    googleSignupBtn.addEventListener('click', async () => {
        await handleGoogleAuth();
    });
}

// Unified Google Authentication Handler
async function handleGoogleAuth() {
    // Check if using mock auth
    if (typeof USE_MOCK_AUTH !== 'undefined' && USE_MOCK_AUTH) {
        toastr.info('Google Sign-In (Simulated)...');
        setTimeout(() => {
            const mockUser = {
                uid: 'google_' + Date.now(),
                email: 'user@gmail.com',
                displayName: 'Google User',
                emailVerified: true,
                photoURL: 'https://ui-avatars.com/api/?name=Google+User&background=6c5ce7&color=fff'
            };

            localStorage.setItem('mockUser', JSON.stringify(mockUser));
            currentUser = mockUser;
            updateUI(mockUser);
            hideModal();
            toastr.success('Logged in with Google (Mock Mode)!');
        }, 800);
        return;
    }

    // Real Firebase Google Auth
    try {
        if (!auth) throw new Error("Firebase not configured");

        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account',
            hd: 'gmail.com' // Prefer Gmail accounts
        });

        toastr.info('Opening Google Sign-In...');
        const result = await signInWithPopup(auth, provider);
        const user = result.user;


        // Validate Gmail account
        if (!user.email.endsWith('@gmail.com')) {
            await signOut(auth);
            toastr.error('Only @gmail.com accounts are allowed!');
            return;
        }

        // Check if email is verified (Google accounts are usually auto-verified)
        if (!user.emailVerified) {
            // Email not verified, but Google accounts are typically trusted
        }

        hideModal();
        toastr.success(`Welcome ${user.displayName || user.email}!`);

        if (user) {
            sendLoginNotification(user.email);

            // Handle redirect if exists
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
            if (redirectUrl) {
                sessionStorage.removeItem('redirectAfterLogin');
                window.location.href = redirectUrl;
            }
        }
    } catch (error) {
        // Google auth error
        if (error.code === 'auth/popup-closed-by-user') {
            toastr.warning('Sign-in cancelled');
        } else if (error.code === 'auth/popup-blocked') {
            toastr.error('Popup blocked! Please allow popups for this site.');
        } else if (error.code === 'auth/account-exists-with-different-credential') {
            toastr.error('Account exists with different sign-in method. Try email/password.');
        } else {
            toastr.error("Google Auth Failed: " + error.message);
        }
    }
}

// Forgot Password
document.getElementById('forgot-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;

    if (!validateGmail(email)) {
        toastr.warning("Please enter a valid @gmail.com address.");
        return;
    }

    try {
        if (!auth) throw new Error("Firebase not configured");
        await sendPasswordResetEmail(auth, email);
        toastr.success(`Password reset link sent to ${email}`);
        toastr.info("Check your Gmail spam folder if not received.");
        hideModal(); // Close modal on success for better UX
    } catch (error) {
        // Reset Error
        if (error.code === 'auth/user-not-found') {
            toastr.error("No account found with this Gmail address.");
        } else {
            toastr.error("Error: " + error.message);
        }
    }
});

// --- Email Notification Logic ---
function sendLoginNotification(email) {
    // 1. Simulation (Immediate Feedback)
    const date = new Date().toLocaleString();
    toastr.info(`Security Alert: Login notification sent to ${email}`);
    // Login notification sent

    // 2. Real Sending (Requires valid Keys in index.html)
    // const templateParams = {
    //     to_email: email,
    //     message: `New login detected on ${date}`,
    //     to_name: email.split('@')[0]
    // };
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });
}

// Dashboard & User Menu
function updateUI(user) {
    currentUser = user;
    const heroContent = document.querySelector('#home .hero-content');

    if (user) {
        // Logged In
        if (loginBtnNav) loginBtnNav.classList.add('hidden');
        if (userMenuContainer) userMenuContainer.classList.remove('hidden');

        // Update Profile Info
        const name = user.displayName || user.email.split('@')[0];
        // Generate Avatar if none
        const startColor = '6c5ce7';
        const avatarUrl = user.photoURL || `https://ui-avatars.com/api/?name=${name}&background=${startColor}&color=fff`;

        if (navProfilePic) navProfilePic.src = avatarUrl;
        if (menuProfilePic) menuProfilePic.src = avatarUrl;
        if (menuUserName) menuUserName.textContent = name;
        if (menuUserId) menuUserId.textContent = user.uid.substring(0, 8) + "..."; // Show partial ID
        if (dashboardUsername) dashboardUsername.textContent = name;

        // Welcome Message (Centralized)
        // User logged in
        toastr.success(`Welcome back, ${name}`);

        // Dynamic Homepage Content (SPA Feel)
        if (heroContent) {
            heroContent.innerHTML = `
                <h1>Welcome Back, <span class="gradient-text">${name}</span></h1>
                <p>Take the first step to learn with us!<br>Learn ● Build ● Explore ● Track</p>
                <div class="hero-buttons">
                    <!-- Dashboard Button Removed -->
                    <button class="btn-secondary btn-lg" onclick="scrollToCourses()">Browse Courses</button>
                </div>
            `;
        }

        // Personalize Sections
        if (document.getElementById('courses-header-title')) {
            document.getElementById('courses-header-title').textContent = `Explore Your Courses, ${name}`;
            document.getElementById('courses-header-desc').textContent = "Ready to learn something new today?";
        }
        if (document.getElementById('about-header-title')) {
            document.getElementById('about-header-title').textContent = "About Your Community";
            const aboutDesc = document.getElementById('about-header-desc');
            aboutDesc.textContent = `You are part of the 10k+ students learning with us, ${name}.`;
            aboutDesc.classList.remove('hidden');
        }
        // Tutorials section personalization
        if (document.getElementById('tutorials-header-title')) {
            document.getElementById('tutorials-header-title').textContent = `Tutorials for ${name}`;
            document.getElementById('tutorials-header-desc').textContent = "Exclusive hands-on content for you.";
        }

        // Update Profile Page Elements
        const profileViewPic = document.getElementById('profile-view-pic');
        const profileEmail = document.getElementById('profile-email');
        const profileUid = document.getElementById('profile-uid');

        if (profileViewPic) profileViewPic.src = avatarUrl;
        if (profileEmail) profileEmail.textContent = user.email;
        if (profileUid) profileUid.textContent = user.uid;

        // loadDashboard() removed

    } else {
        // Logged Out
        if (loginBtnNav) loginBtnNav.classList.remove('hidden');
        if (userMenuContainer) userMenuContainer.classList.add('hidden');

        // Reset Homepage Content
        if (heroContent) {
            heroContent.innerHTML = `
                <h1>Unlock Your <span class="gradient-text">Potential</span></h1>
                <p>Master the future with our premium courses. Learn coding, design, and more in an immersive environment.</p>
                <div class="hero-buttons">
                    <button class="btn-primary btn-lg" onclick="scrollToCourses()">Explore Courses</button>
                    <button class="btn-secondary btn-lg" id="hero-login-trigger">Get Started</button>
                </div>
            `;
            // Re-attach listener for new Get Started button
            document.getElementById('hero-login-trigger').addEventListener('click', () => {
                showModal('login'); // Since user is null here
            });
        }

        // Reset Sections
        if (document.getElementById('courses-header-title')) {
            document.getElementById('courses-header-title').textContent = "Featured Courses";
            document.getElementById('courses-header-desc').textContent = "Curated content for the modern learner.";
        }
        if (document.getElementById('about-header-title')) {
            document.getElementById('about-header-title').textContent = "About Lumina";
            const aboutDesc = document.getElementById('about-header-desc');
            aboutDesc.textContent = "Your learning community."; // Default
            aboutDesc.classList.add('hidden'); // Or keep consistent
        }
        // Reset Tutorials section
        if (document.getElementById('tutorials-header-title')) {
            document.getElementById('tutorials-header-title').textContent = "Tutorials";
            document.getElementById('tutorials-header-desc').textContent = "Step-by-step guides for hands-on learning.";
        }
    }

    // Refresh Page Content based on new Auth State
    if (typeof renderDashboardPage === 'function') renderDashboardPage();
    if (typeof renderCoursesPage === 'function') renderCoursesPage();
    if (typeof renderCoursePlayer === 'function') renderCoursePlayer();
}

// User Menu Toggle
if (userProfileTrigger) {
    userProfileTrigger.addEventListener('click', () => {
        if (userDropdown) userDropdown.classList.toggle('hidden');
    });
}

// Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Custom Toastr with Buttons
    // Remove any existing toasts to prevent ID conflicts
    toastr.remove();

    const yesId = 'btn-logout-yes-' + Date.now();
    const noId = 'btn-logout-no-' + Date.now();

    toastr.warning(
        `<div style='margin-top:10px; display:flex; gap:10px; justify-content:center;'>
            <button type='button' id='${yesId}' class='btn-primary' style='padding:5px 15px; font-size:0.8rem;'>Yes</button>
            <button type='button' id='${noId}' class='btn-secondary' style='padding:5px 15px; font-size:0.8rem; background:rgba(255,255,255,0.1); color:white;'>No</button>
        </div>`,
        "Are you sure you want to log out?",
        {
            closeButton: false,
            allowHtml: true,
            timeOut: 0, // Stay until clicked
            extendedTimeOut: 0,
            tapToDismiss: false,
            positionClass: "toast-top-center", // Center it for better visibility
            onShown: function () {
                const yesBtn = document.getElementById(yesId);
                const noBtn = document.getElementById(noId);

                if (yesBtn) {
                    yesBtn.addEventListener('click', () => {
                        toastr.remove(); // Dismiss immediately

                        // Perform Logout
                        if (typeof USE_MOCK_AUTH !== 'undefined' && USE_MOCK_AUTH) {
                            localStorage.removeItem('mockUser');
                        }

                        if (auth) signOut(auth);
                        updateUI(null);

                        showSection('home');
                        toastr.success("See you soon!");
                    });
                }

                if (noBtn) {
                    noBtn.addEventListener('click', () => {
                        toastr.remove();
                    });
                }
            }
        }
    );
});

// Dashboard Link listener removed


// My Profile Link - Now navigates to profile.html (separate page)
// The link in HTML handles navigation directly, no JavaScript needed
const profileBtn = document.getElementById('my-profile-btn');
if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        // Close dropdown when navigating
        const userDropdown = document.getElementById('user-dropdown');
        if (userDropdown) {
            userDropdown.classList.add('hidden');
        }
        // Let the browser navigate normally to profile.html
    });
}


// --- Enrollment / Dashboard Logic ---

function enrollCourse(id, name) {
    if (enrolledCourses.some(c => c.id === id)) {
        toastr.info("You are already enrolled in this course!");
        return;
    }

    enrolledCourses.push({ id, name, date: new Date().toLocaleDateString() });

    // Save (Mock DB)
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));

    // Initialize progress for new enrollment
    const courseData = COURSES_DATA[id];
    if (courseData) {
        const firstLesson = courseData.modules[0].lessons[0].id;
        saveUserProgress(id, {
            progress: 0,
            completedLessons: [],
            quizScores: {},
            currentLesson: firstLesson,
            startedAt: null, // Will be set when they first start
            completedAt: null
        });
    }

    toastr.success(`Successfully enrolled in ${name}!`);

    // Redirect to Dashboard
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);

}

// Dashboard, Course Player, and Certificate Logic removed as per user request.


// Profile and Navigation Button Listeners
document.getElementById('profile-courses-btn')?.addEventListener('click', () => {
    window.location.href = 'courses.html';
});

document.getElementById('profile-logout-btn')?.addEventListener('click', async () => {
    if (auth && currentUser) {
        try {
            await signOut(auth);
            toastr.success('Logged out successfully!');
        } catch (error) {
            // Logout error
            toastr.error('Failed to logout');
        }
    }
});

// Note: Logout listener is already handled above with confirmation dialog
// Note: Dashboard and Profile navigation already handled above with specific button IDs

// Auth State Monitor
const USE_MOCK_AUTH = false; // Disabled - Using Real Firebase for Google Auth

if (USE_MOCK_AUTH) {
    // Check local storage for mock session
    const storedUser = localStorage.getItem('mockUser');
    if (storedUser) {
        // Restoring mock session
        currentUser = JSON.parse(storedUser); // Update global state immediately
        updateUI(currentUser);
        // Update sessionStorage for auth guard
        sessionStorage.setItem('firebaseUser', storedUser);
        sessionStorage.setItem('firebaseAuthChecked', 'true');
    }
}

if (auth && !USE_MOCK_AUTH) {
    onAuthStateChanged(auth, (user) => {
        authResolved = true;
        updateUI(user);

        // Update sessionStorage for auth guard
        sessionStorage.setItem('firebaseAuthChecked', 'true');
        if (user) {
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified
            };
            sessionStorage.setItem('firebaseUser', JSON.stringify(userData));
        } else {
            sessionStorage.removeItem('firebaseUser');
        }
    });
} else {
    // Dev Mode or Mock Mode fallthrough
    // For now, strict mode - UI shows "Login" state.
    // Running in offline/no-auth mode pending config
    sessionStorage.setItem('firebaseAuthChecked', 'true');
}

// Global "Click" listener removed as requested to be less aggressive.
// Now relying on 'showSection' and specific button clicks for auth checks.

/* ===== NEW FEATURE HANDLERS ===== */

// Tool Click Handler
const toolRoutes = {
    'QR Generator': '/tools/qr-generator.html',
    'Image Optimizer': '/tools/image-optimizer.html',
    'Image Editor': '/tools/image-editor.html',
    'Document Viewer': '/tools/document-viewer.html',
    'Java Formatter': '/tools/java-formatter.html',
    'White Board': '/tools/white-board.html',
    'JS Minifier': '/tools/js-minifier.html',
    'Javascript Minifier': '/tools/js-minifier.html',
    'Python Formatter': '/tools/python-formatter.html',
    'C Formatter': '/tools/c-formatter.html',
    'HTML Formatter': '/tools/html-formatter.html',
    'CSS Formatter': '/tools/css-formatter.html'
};

window.handleToolClick = function (toolName) {
    // TOOLS EXCEPTION: Allow access without login

    const route = toolRoutes[toolName];
    if (route) {
        toastr.info(`Opening ${toolName}...`);
        // Open the tool page
        setTimeout(() => {
            window.location.href = route;
        }, 300);
    } else {
        toastr.warning(`Tool "${toolName}" coming soon!`);
    }
};

// Footer Login Links Handler
// We need to attach this after DOM load or using delegation
document.addEventListener('click', (e) => {
    // using closest to handle potential icon clicks inside the anchor
    const targetLink = e.target.closest('.login-required');

    if (targetLink) {
        if (!currentUser) {
            e.preventDefault();
            toastr.error('Please login to access this resource! Create an account to continue.');
            showModal('login');
        }
        // Else: If logged in, do nothing & let the browser handle the link (navigation)
    }
});

/* ===== PAGE SPECIFIC LOGIC ===== */

// 1. Courses Page Rendering
function renderCoursesPage() {
    const grid = document.getElementById('courses-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear loading state

    Object.values(COURSES_DATA).forEach(course => {
        const isEnrolled = enrolledCourses.some(c => c.id === course.id);
        const card = document.createElement('div');
        card.className = 'course-card glass';
        card.style.overflow = 'hidden';
        card.style.borderRadius = '16px';
        card.style.transition = 'transform 0.3s ease';
        // Add hover effect via JS or assume CSS handles .glass:hover

        card.innerHTML = `
            <div class="course-header" style="height: 150px; background: ${course.thumbnail}; display: flex; align-items: center; justify-content: center; position: relative;">
                <i class="fas ${course.icon}" style="font-size: 4rem; color: rgba(255,255,255,0.9);"></i>
                ${isEnrolled ? '<div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); padding: 5px 10px; border-radius: 20px; font-size: 0.8rem; color: #fff;"><i class="fas fa-check-circle"></i> Enrolled</div>' : ''}
            </div>
            <div class="course-body" style="padding: 1.5rem;">
                <h3 style="margin-bottom: 0.5rem; font-size: 1.4rem;">${course.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; min-height: 3rem;">${course.description}</p>
                
                <div class="course-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-muted);">
                    <span><i class="fas fa-book-open"></i> ${course.modules.length} Modules</span>
                    <span><i class="fas fa-video"></i> ${course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</span>
                </div>
                
                ${isEnrolled ?
                `<button onclick="window.location.href='dashboard.html'" class="btn-primary" style="width: 100%;">Go to Dashboard</button>` :
                `<button class="btn-primary enroll-action-btn" data-id="${course.id}" data-name="${course.name}" style="width: 100%;">Enroll Now</button>`
            }
            </div>
        `;
        grid.appendChild(card);
    });

    // Attach listeners to new buttons
    document.querySelectorAll('.enroll-action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!currentUser) {
                showModal('login');
            } else {
                enrollCourse(btn.dataset.id, btn.dataset.name);
            }
        });
    });
}

// Auto-run render if on courses page
if (document.getElementById('courses-grid')) {
    // Wait slightly for auth to initialize? No, render content first, buttons handle auth check.
    // However, "Enrolled" status depends on local storage which is synchronous (mostly) or auth state.
    // enrolledCourses is loaded from localStorage at top of file, so it's ready.
    renderCoursesPage();
}

// 2. Dashboard Page Rendering
function renderDashboardPage() {
    const grid = document.getElementById('enrolled-courses-grid');
    if (!grid) return;

    if (!currentUser && !localStorage.getItem('mockUser')) {
        // Wait for auth to init or show login prompt if clearly not logged in
        // Ideally we show a loading spinner, but for now:
        // grid.innerHTML = '<p>Please login to view your dashboard.</p>';
        // But dashboard.html has a check in showSection/script logic? 
        // We are on a separate page 'dashboard.html'. 
        // If auth takes time, we might flash "0 enrolled".
    }

    const userProgress = getUserProgress();
    const enrolled = enrolledCourses; // from global let

    // Calc Stats
    let completedCount = 0;
    let inProgressCount = 0;
    let certificatesCount = 0; // Logic for certificates later

    // Render Courses
    if (enrolled.length === 0) {
        // Keep default empty message
        return;
    }

    grid.innerHTML = ''; // Clear default message

    enrolled.forEach(c => {
        const courseData = COURSES_DATA[c.id];
        if (!courseData) return;

        const progress = userProgress[c.id] || { progress: 0 };
        const percent = Math.round(progress.progress || 0);

        if (percent === 100) {
            completedCount++;
            certificatesCount++; // Assume auto-cert for now
        } else if (percent > 0) {
            inProgressCount++;
        }

        const card = document.createElement('div');
        card.className = 'course-card glass';
        card.style.borderRadius = '16px';
        card.style.overflow = 'hidden';

        card.innerHTML = `
            <div class="course-header" style="height: 120px; background: ${courseData.thumbnail}; position: relative;">
                 <div style="position: absolute; bottom: -20px; right: 20px; width: 40px; height: 40px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: conic-gradient(var(--primary-color) ${percent}%, #f0f0f0 0); display: flex; align-items: center; justify-content: center;">
                        <div style="width: 24px; height: 24px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-weight: bold;">
                            ${percent}%
                        </div>
                    </div>
                 </div>
            </div>
            <div class="course-body" style="padding: 1.5rem 1.5rem 1rem;">
                <h4 style="margin: 0.5rem 0; font-size: 1.2rem;">${courseData.name}</h4>
                <div class="progress-bar-container" style="width: 100%; height: 6px; background: rgba(0,0,0,0.05); border-radius: 3px; margin: 1rem 0; overflow: hidden;">
                    <div class="progress-bar" style="width: ${percent}%; height: 100%; background: var(--primary-color); transition: width 0.5s ease;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
                    <span>${percent}% Complete</span>
                    <span>${percent === 100 ? 'Completed' : 'In Progress'}</span>
                </div>
                <button onclick="window.location.href='${percent === 100 ? `certificate.html?courseId=${c.id}` : `course-player.html?courseId=${c.id}`}'" class="btn-primary" style="width: 100%;">
                    ${percent === 100 ? 'View Certificate' : 'Continue Learning'}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Update Stats
    if (document.getElementById('stat-enrolled')) document.getElementById('stat-enrolled').textContent = enrolled.length;
    if (document.getElementById('stat-progress')) document.getElementById('stat-progress').textContent = inProgressCount;
    if (document.getElementById('stat-completed')) document.getElementById('stat-completed').textContent = completedCount;
    if (document.getElementById('stat-certificates')) document.getElementById('stat-certificates').textContent = certificatesCount;
}

// Auto-run render if on dashboard page
if (document.getElementById('enrolled-courses-grid')) {
    renderDashboardPage();
}

// 3. Course Player Logic
function renderCoursePlayer() {
    const sidebar = document.getElementById('player-sidebar');
    const content = document.getElementById('player-content');
    if (!sidebar || !content) return;

    // Get Course ID
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');

    const course = COURSES_DATA[courseId];

    if (!course) {
        toastr.error('Course not found!');
        setTimeout(() => window.location.href = 'dashboard.html', 1000);
        return;
    }

    // Verify Enrollment
    if (!enrolledCourses.some(c => c.id === courseId)) {
        toastr.error('You are not enrolled in this course.');
        setTimeout(() => window.location.href = 'courses.html', 1000);
        return;
    }

    // Load Progress
    let progressData = getCourseProgress(courseId);
    let currentLessonId = progressData.currentLesson || course.modules[0].lessons[0].id;

    // Render Sidebar
    document.getElementById('course-title').textContent = course.name;
    updateProgressUI(progressData.progress);

    renderSidebarModules(course, progressData, currentLessonId);
    loadLesson(course, currentLessonId);
}

function updateProgressUI(percent) {
    const bar = document.getElementById('course-progress-bar');
    const text = document.getElementById('course-progress-text');
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.textContent = `${Math.round(percent)}% Complete`;
}

function renderSidebarModules(course, progressData, activeLessonId) {
    const container = document.getElementById('modules-container');
    container.innerHTML = '';

    course.modules.forEach(mod => {
        const modItem = document.createElement('div');
        modItem.className = 'module-item';

        let lessonsHtml = '';
        mod.lessons.forEach(lesson => {
            const isCompleted = progressData.completedLessons.includes(lesson.id);
            const isActive = lesson.id === activeLessonId;
            const icon = lesson.type === 'video' ? 'fa-play-circle' : 'fa-clipboard-list';

            lessonsHtml += `
                <li class="lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                    onclick="switchLesson('${course.id}', '${lesson.id}')">
                    <i class="fas ${isCompleted ? 'fa-check-circle' : icon}"></i>
                    <span>${lesson.title}</span>
                </li>
            `;
        });

        modItem.innerHTML = `
            <div class="module-header">
                <span>${mod.title}</span>
                <i class="fas fa-chevron-down" style="font-size: 0.8rem;"></i>
            </div>
            <ul class="lesson-list">
                ${lessonsHtml}
            </ul>
        `;
        container.appendChild(modItem);
    });
}

window.switchLesson = function (courseId, lessonId) {
    const course = COURSES_DATA[courseId];
    // Update local current lesson
    saveUserProgress(courseId, { currentLesson: lessonId });

    // Re-render sidebar to update active state
    const progressData = getCourseProgress(courseId);
    renderSidebarModules(course, progressData, lessonId);

    // Load content
    loadLesson(course, lessonId);
};

function loadLesson(course, lessonId) {
    const content = document.getElementById('player-content');

    // Find lesson
    let lesson = null;
    let module = null;
    for (const m of course.modules) {
        const l = m.lessons.find(l => l.id === lessonId);
        if (l) {
            lesson = l;
            module = m;
            break;
        }
    }

    if (!lesson) return;

    const progressData = getCourseProgress(course.id);
    const isCompleted = progressData.completedLessons.includes(lessonId);

    if (lesson.type === 'video') {
        content.innerHTML = `
            <div class="content-header">
                <div>
                    <h2 style="margin-bottom: 0.5rem;">${lesson.title}</h2>
                    <p style="color: var(--text-muted);">${module.title}</p>
                </div>
                ${!isCompleted ?
                `<button class="btn-primary" onclick="markLessonComplete('${course.id}', '${lesson.id}')">Mark as Complete</button>` :
                `<button class="btn-secondary" style="background: rgba(0, 184, 148, 0.1); color: #00b894; border: 1px solid #00b894; cursor: default;"><i class="fas fa-check"></i> Completed</button>`
            }
            </div>
            <div class="video-container">
                <iframe src="${lesson.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="lesson-content" style="line-height: 1.6; color: var(--text-color);">
                ${lesson.content}
            </div>
        `;
    } else if (lesson.type === 'quiz') {
        const previousScore = progressData.quizScores[lesson.id];

        content.innerHTML = `
            <div class="content-header">
                <div>
                    <h2 style="margin-bottom: 0.5rem;">${lesson.title}</h2>
                    <p style="color: var(--text-muted);">Quiz</p>
                </div>
                ${isCompleted ?
                `<div style="color: #00b894; font-weight: bold;">Passed (${previousScore}%)</div>` : ''
            }
            </div>
            <div class="quiz-container">
                <p style="margin-bottom: 2rem;">Answer the following questions to pass this lesson (60% required).</p>
                <form id="quiz-form">
                    ${lesson.questions.map((q, idx) => `
                        <div class="question-block" style="margin-bottom: 2rem;">
                            <p style="font-weight: 500; margin-bottom: 1rem;">${idx + 1}. ${q.question}</p>
                            ${q.options.map((opt, optIdx) => `
                                <label class="quiz-option">
                                    <input type="radio" name="q${idx}" value="${optIdx}" style="margin-right: 10px;">
                                    ${opt}
                                </label>
                            `).join('')}
                            <div class="feedback hidden" id="feedback-${idx}" style="margin-top: 0.5rem; padding: 0.5rem; border-radius: 4px; font-size: 0.9rem;"></div>
                        </div>
                    `).join('')}
                    <button type="button" class="btn-primary" onclick="submitQuiz('${course.id}', '${lesson.id}')">Submit Quiz</button>
                    <div id="quiz-result" style="margin-top: 1.5rem; font-weight: bold;"></div>
                </form>
            </div>
        `;
    }
}

window.markLessonComplete = function (courseId, lessonId) {
    const course = COURSES_DATA[courseId];
    const progressData = getCourseProgress(courseId);

    if (!progressData.completedLessons.includes(lessonId)) {
        progressData.completedLessons.push(lessonId);
    }

    // Recalculate total progress
    const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const completedCount = progressData.completedLessons.length;
    const newProgress = (completedCount / totalLessons) * 100;

    // Save
    saveUserProgress(courseId, {
        completedLessons: progressData.completedLessons,
        progress: newProgress,
        completedAt: newProgress === 100 ? new Date().toISOString() : null
    });

    toastr.success('Lesson Completed!');

    // Refresh UI
    renderCoursePlayer(); // Easy refresh
};

window.submitQuiz = function (courseId, lessonId) {
    const course = COURSES_DATA[courseId];
    const lesson = course.modules.flatMap(m => m.lessons).find(l => l.id === lessonId);
    const form = document.getElementById('quiz-form');

    let correctCount = 0;
    let allAnswered = true;

    lesson.questions.forEach((q, idx) => {
        const selected = form.querySelector(`input[name="q${idx}"]:checked`);
        const feedback = document.getElementById(`feedback-${idx}`);

        // Reset styles
        form.querySelectorAll(`input[name="q${idx}"]`).forEach(input => {
            input.parentElement.classList.remove('correct', 'incorrect');
        });

        if (!selected) {
            allAnswered = false;
        } else {
            const val = parseInt(selected.value);
            feedback.classList.remove('hidden');

            if (val === q.correctAnswer) {
                correctCount++;
                selected.parentElement.classList.add('correct');
                feedback.textContent = "Correct!";
                feedback.style.color = "#00b894";
                feedback.style.background = "rgba(0, 184, 148, 0.1)";
            } else {
                selected.parentElement.classList.add('incorrect');
                const correctLabel = q.options[q.correctAnswer];
                feedback.textContent = `Incorrect. The correct answer is: ${correctLabel}`;
                feedback.style.color = "#d63031";
                feedback.style.background = "rgba(214, 48, 49, 0.1)";
                feedback.innerHTML += `<br><small>${q.explanation}</small>`;
            }
        }
    });

    if (!allAnswered) {
        toastr.warning('Please answer all questions!');
        return;
    }

    const score = Math.round((correctCount / lesson.questions.length) * 100);
    const resultDiv = document.getElementById('quiz-result');

    resultDiv.textContent = `You scored ${score}%`;

    if (score >= 60) {
        resultDiv.style.color = "#00b894";
        toastr.success('Quiz Passed!');

        // Save score
        const progressData = getCourseProgress(courseId);
        const newScores = { ...progressData.quizScores, [lessonId]: score };
        saveUserProgress(courseId, { quizScores: newScores });

        // Mark as complete
        markLessonComplete(courseId, lessonId);
    } else {
        resultDiv.style.color = "#d63031";
        toastr.error('Quiz Failed. You need 60% to pass.');
    }
};

// Auto-run if on player page
if (document.getElementById('player-content')) {
    renderCoursePlayer();
}

// Auto-open login if requested by auth-guard
if (sessionStorage.getItem('showLogin')) {
    sessionStorage.removeItem('showLogin');
    setTimeout(() => {
        toastr.warning('Please login to continue.');
        showModal('login');
    }, 1000);
}
