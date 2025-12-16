// Import Firebase Configuration (Centralized)
import { auth } from './firebase-config.js';

// Import Firebase Auth Methods
import {
    onAuthStateChanged,
    signOut,
    deleteUser,
    sendPasswordResetEmail,
    updateProfile, // Imported for Edit Profile
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

let currentUser = null;

// Toastr Config
toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "timeOut": "3000"
};


// Auth Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        loadProfile(user);
    } else {
        // Fallback for Mock User (if used previously)
        const mockUser = JSON.parse(localStorage.getItem('mockUser'));
        if (mockUser) {
            currentUser = mockUser;
            loadProfile(mockUser);
            toastr.warning('Using Mock Profile Mode');
        } else {
            // User not found, redirecting
            window.location.href = 'index.html';
        }
    }
});

// Load Profile Data
function loadProfile(user) {

    // Profile Picture
    const profilePic = document.getElementById('profile-picture');
    // Use photoURL or generic avatar
    const name = user.displayName || user.email.split('@')[0];
    const defaultAvatar = `https://ui-avatars.com/api/?name=${name}&background=6c5ce7&color=fff&size=200`;

    // Check if photoURL is valid (basic check)
    profilePic.src = user.photoURL || defaultAvatar;

    // Name & Email
    document.getElementById('profile-name').innerHTML = `${name} <i class="fas fa-check-circle" style="font-size: 0.5em; color: #00b894; vertical-align: middle;" title="Verified"></i>`;
    document.querySelector('#profile-email span').textContent = user.email;

    // IDs
    document.getElementById('user-id').textContent = name.toUpperCase().replace(/\s/g, '');
    document.getElementById('user-uid').textContent = user.uid;

    // Member Since (Creation Time from Firebase or Mock)
    const creationTime = user.metadata?.creationTime || new Date().toISOString();
    document.getElementById('member-since').textContent = new Date(creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Last Login
    const lastSignIn = user.metadata?.lastSignInTime || new Date().toISOString();
    document.getElementById('last-login').textContent = new Date(lastSignIn).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    loadStats(user.uid);
    loadActivity(user.uid);
}

// Load Stats (from LocalStorage)
function loadStats(uid) {
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    const progressKey = `courseProgress_${uid}`;
    const allProgress = JSON.parse(localStorage.getItem(progressKey)) || {};

    let completed = 0;
    let inProgress = 0;
    let certificates = 0;

    enrolledCourses.forEach(course => {
        const p = allProgress[course.id];
        if (p) {
            if (p.progress === 100) {
                completed++;
                certificates++;
            } else if (p.progress > 0) {
                inProgress++;
            }
        }
    });

    updateStat('enrolled-count', enrolledCourses.length);
    updateStat('inprogress-count', inProgress);
    updateStat('completed-count', completed);
    updateStat('certificates-count', certificates);

    // Check Achievements with Stats
    loadAchievements({ enrolled: enrolledCourses.length, completed, certificates });
}

function updateStat(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = '0'; // Reset for animation
    setTimeout(() => {
        el.textContent = value;
    }, 100);
}

// Load Achievements Logic
function loadAchievements(stats) {
    const achievements = [
        { id: 'first-course', unlocked: stats.enrolled > 0, name: 'First Steps', icon: '🎯' },
        { id: 'bookworm', unlocked: stats.enrolled >= 3, name: 'Bookworm', icon: '📚' },
        { id: 'master', unlocked: stats.completed >= 5, name: 'Master', icon: '🏆' },
        { id: 'all-star', unlocked: stats.certificates >= 1, name: 'Certifier', icon: '⭐' }
    ];

    const grid = document.querySelector('.achievements-grid');
    if (grid) {
        grid.innerHTML = achievements.map(ach => `
            <div class="achievement-item ${ach.unlocked ? 'unlocked hover-lift' : 'locked'}">
                <div class="achievement-icon ${ach.unlocked ? 'icon-bounce' : ''}">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
            </div>
        `).join('');
    }
}

// Load Activity
function loadActivity(uid) {
    const activityList = document.getElementById('activity-list');
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

    if (enrolledCourses.length === 0) {
        activityList.innerHTML = `<div class="text-center text-muted p-3">No activity yet.</div>`;
        return;
    }

    const activities = enrolledCourses.map(c => ({
        text: `Enrolled in ${c.name}`,
        date: c.date || new Date(),
        icon: 'fa-book-open'
    })).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    activityList.innerHTML = activities.map((act, i) => `
        <div class="activity-item animate-fadeInUp" style="animation-delay: ${i * 0.1}s">
            <div class="activity-icon">
                <i class="fas ${act.icon}"></i>
            </div>
            <div class="activity-details">
                <div class="activity-text">${act.text}</div>
                <div class="activity-time">${new Date(act.date).toLocaleDateString()}</div>
            </div>
        </div>
    `).join('');
}


// --- GLOBAL FUNCTIONS (Attached to Window) ---

window.logout = async () => {
    try {
        await signOut(auth);
        localStorage.removeItem('mockUser');
        toastr.success('Logged out successfully.');
        setTimeout(() => window.location.href = 'index.html', 1000);
    } catch (e) {
        toastr.error('Logout failed: ' + e.message);
    }
};

window.changePassword = async () => {
    if (!currentUser) return;
    if (currentUser.providerData.some(p => p.providerId === 'password')) {
        const confirmSend = confirm(`Send password reset email to ${currentUser.email}?`);
        if (confirmSend) {
            try {
                await sendPasswordResetEmail(auth, currentUser.email);
                toastr.success('Password reset email sent! Check your inbox.');
            } catch (e) {
                toastr.error('Error: ' + e.message);
            }
        }
    } else {
        toastr.info('You are logged in via Provider. Change password directly with them.');
    }
};

window.deleteAccount = async () => {
    if (!currentUser) return;
    const confirmation = prompt('Type "DELETE" to permanently delete your account.');
    if (confirmation === 'DELETE') {
        try {
            await deleteUser(currentUser);
            localStorage.clear();
            alert('Account deleted. Goodbye!');
            window.location.href = 'index.html';
        } catch (e) {
            // Error during delete
            if (e.code === 'auth/requires-recent-login') {
                toastr.error('Please logout and login again to delete.');
            } else {
                toastr.error('Delete failed: ' + e.message);
            }
        }
    }
};

window.copyToClipboard = (id) => {
    const text = document.getElementById(id)?.textContent;
    if (text) {
        navigator.clipboard.writeText(text);
        toastr.success('Copied!');
    }
};

// Edit Profile Logic
window.editProfile = () => {
    const modal = document.getElementById('editProfileModal');
    const nameInput = document.getElementById('editNameInput');
    const photoInput = document.getElementById('editPhotoInput');

    if (currentUser) {
        nameInput.value = currentUser.displayName || '';
        photoInput.value = currentUser.photoURL || '';
    }

    modal.style.display = 'flex';
};

window.closeEditModal = () => {
    document.getElementById('editProfileModal').style.display = 'none';
};

// Bind Save Button
document.getElementById('saveProfileBtn')?.addEventListener('click', async () => {
    if (!currentUser) return;

    const newName = document.getElementById('editNameInput').value;
    const newPhoto = document.getElementById('editPhotoInput').value;
    const btn = document.getElementById('saveProfileBtn');

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
    btn.disabled = true;

    try {
        await updateProfile(currentUser, {
            displayName: newName,
            photoURL: newPhoto
        });

        toastr.success('Profile updated successfully!');
        loadProfile(currentUser); // Reload UI
        window.closeEditModal();

    } catch (e) {
        // Error during update
        toastr.error('Update failed: ' + e.message);
    } finally {
        btn.innerHTML = '<i class="fas fa-save"></i> Save Changes';
        btn.disabled = false;
    }
});

// Close modal on click outside
window.onclick = (event) => {
    const modal = document.getElementById('editProfileModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

window.shareProfile = () => {
    toastr.success('Profile link copied!');
    navigator.clipboard.writeText(window.location.href);
};

