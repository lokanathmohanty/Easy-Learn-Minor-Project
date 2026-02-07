// Dashboard Logic
const mockUser = JSON.parse(localStorage.getItem('mockUser'));
const firebaseUser = JSON.parse(sessionStorage.getItem('firebaseUser'));
const currentUser = mockUser || firebaseUser || null;

if (!currentUser) {
    toastr.error('Please login to access dashboard');
    setTimeout(() => { window.location.href = 'index.html'; }, 1500);
}

// Global State
let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
const progressKey = `courseProgress_${currentUser?.uid}`;
let allProgress = JSON.parse(localStorage.getItem(progressKey)) || {};
let currentFilter = 'all';

// Toastr Config
toastr.options = { "closeButton": true, "progressBar": true, "positionClass": "toast-top-right", "timeOut": "4000" };

// --- Logic ---

function calculateAndRenderStats() {
    const stats = { enrolled: enrolledCourses.length, inProgress: 0, completed: 0, certificates: 0, streak: 0 };

    // Streaks Logic
    const lastLoginDate = localStorage.getItem(`lastLoginDate_${currentUser.uid}`);
    const today = new Date().toDateString();
    let streak = parseInt(localStorage.getItem(`streak_${currentUser.uid}`)) || 0;

    if (lastLoginDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastLoginDate === yesterday.toDateString()) {
            streak++; // Continue streak
        } else {
            streak = 1; // Reset or Start new
        }
        localStorage.setItem(`streak_${currentUser.uid}`, streak);
        localStorage.setItem(`lastLoginDate_${currentUser.uid}`, today);
    }
    stats.streak = streak;

    // Course Stats
    enrolledCourses.forEach(course => {
        const progress = allProgress[course.id];
        if (progress) {
            if (progress.progress === 100) {
                stats.completed++;
                stats.certificates++;
            } else if (progress.progress > 0) {
                stats.inProgress++;
            }
        }
    });

    // Render Stats
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = `
            <div class="stat-card glass animate-fadeInUp delay-1 hover-lift">
                <div class="stat-icon" style="background: rgba(108, 92, 231, 0.1);">
                    <i class="fas fa-fire icon-bounce" style="color: #e17055;"></i>
                </div>
                <div class="stat-info">
                    <h3 class="count-up">${stats.streak}</h3>
                    <p>Day Streak</p>
                </div>
            </div>
            <div class="stat-card glass animate-fadeInUp delay-2 hover-lift">
                <div class="stat-icon" style="background: rgba(0, 206, 201, 0.1);">
                    <i class="fas fa-spinner icon-rotate" style="color: #00cec9;"></i>
                </div>
                <div class="stat-info">
                    <h3 class="count-up">${stats.inProgress}</h3>
                    <p>In Progress</p>
                </div>
            </div>
            <div class="stat-card glass animate-fadeInUp delay-3 hover-lift">
                <div class="stat-icon" style="background: rgba(0, 184, 148, 0.1);">
                    <i class="fas fa-check-circle icon-bounce" style="color: #00b894;"></i>
                </div>
                <div class="stat-info">
                    <h3 class="count-up">${stats.completed}</h3>
                    <p>Completed</p>
                </div>
            </div>
            <div class="stat-card glass animate-fadeInUp delay-4 hover-lift">
                <div class="stat-icon" style="background: rgba(255, 215, 0, 0.1);">
                    <i class="fas fa-award icon-rotate" style="color: #ffd700;"></i>
                </div>
                <div class="stat-info">
                    <h3 class="count-up">${stats.certificates}</h3>
                    <p>Certificates</p>
                </div>
            </div>
        `;
    }
}

function renderEnrolledCourses() {
    const grid = document.getElementById('enrolled-courses-grid');
    if (!grid) return;

    // Filtering
    let filtered = enrolledCourses;
    if (currentFilter === 'active') {
        filtered = enrolledCourses.filter(c => {
            const p = allProgress[c.id]?.progress || 0;
            return p < 100;
        });
    } else if (currentFilter === 'completed') {
        filtered = enrolledCourses.filter(c => {
            const p = allProgress[c.id]?.progress || 0;
            return p === 100;
        });
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state glass animate-fadeInUp">
                <i class="fas fa-search fa-3x icon-bounce"></i>
                <h3>No courses found</h3>
                <p>Try changing filters or enroll in a new course.</p>
                <a href="courses.html" class="btn-primary hover-lift">Browse Courses</a>
            </div>`;
        return;
    }

    grid.innerHTML = filtered.map(course => {
        const courseData = COURSES_DATA[course.id];
        if (!courseData) return '';

        const progress = allProgress[course.id] || { progress: 0 };
        const percent = progress.progress || 0;
        const isCompleted = percent === 100;

        return `
            <div class="enrolled-course-card glass animate-fadeInUp hover-lift">
                <div class="course-header">
                    <div class="course-icon-small" style="background: ${courseData.color}20;">
                        <i class="${courseData.icon} icon-bounce" style="color: ${courseData.color};"></i>
                    </div>
                    <div>
                        <h3>${courseData.title}</h3>
                        <p class="course-enrolled-date">Since: ${new Date(course.date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div class="progress-section">
                    <div class="progress-header">
                        <span>Progress</span>
                        <span class="progress-percentage">${percent}%</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${percent}%; background: ${courseData.color};"></div>
                    </div>
                </div>
                <div class="course-actions">
                    ${isCompleted
                ? `<button class="btn-secondary full-width hover-lift" onclick="viewCertificate('${course.id}')"><i class="fas fa-certificate"></i> Certificate</button>`
                : `<button class="btn-primary full-width hover-lift" onclick="continueLearning('${course.id}')"><i class="fas fa-play"></i> Continue</button>`
            }
                </div>
            </div>
        `;
    }).join('');
}

function renderRecommended() {
    const grid = document.getElementById('recommended-courses-grid');
    if (!grid) return;

    if (typeof COURSES_DATA === 'undefined') return;

    const enrolledIds = new Set(enrolledCourses.map(c => c.id));
    const allCourses = Object.entries(COURSES_DATA);

    // Filter out enrolled
    const available = allCourses.filter(([id, data]) => !enrolledIds.has(id));

    // Pick random 3
    const recommended = available.sort(() => 0.5 - Math.random()).slice(0, 3);

    if (recommended.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-muted); padding:1rem;">You have enrolled in all available courses! Wow!</p>';
        return;
    }

    grid.innerHTML = recommended.map(([id, data]) => `
        <div class="enrolled-course-card glass animate-fadeInUp hover-lift" style="border-left: 3px solid ${data.color}">
            <div class="course-header">
                 <div class="course-icon-small" style="background: ${data.color}20;">
                        <i class="${data.icon}" style="color: ${data.color};"></i>
                 </div>
                 <div>
                    <h3>${data.title}</h3>
                    <p style="font-size:0.8rem; color:var(--text-muted);">Recommended for you</p>
                 </div>
            </div>
            <a href="course-system.html?id=${id}" class="btn-secondary full-width hover-lift" style="margin-top:auto; text-align:center;">View Details</a>
        </div>
    `).join('');
}

// Global Actions
window.filterCourses = (filter) => {
    currentFilter = filter;

    // UI Update
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderEnrolledCourses();
};

window.continueLearning = (id) => window.location.href = `course-player.html?courseId=${id}`;
window.viewCertificate = (id) => window.location.href = `certificate.html?courseId=${id}`;

// Init
document.addEventListener('DOMContentLoaded', () => {
    if (currentUser) {
        document.getElementById('user-name').textContent = currentUser.displayName || 'Student';
    }
    calculateAndRenderStats();
    renderEnrolledCourses();
    renderRecommended();
});
