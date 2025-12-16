// Courses Page Logic

// Check if user is logged in
const mockUser = JSON.parse(localStorage.getItem('mockUser'));
const firebaseUser = JSON.parse(sessionStorage.getItem('firebaseUser'));
const currentUser = mockUser || firebaseUser || null;

let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

// Toastr Config
toastr.options = { "closeButton": true, "progressBar": true, "positionClass": "toast-top-right", "timeOut": "4000" };

// State
let currentSearch = '';
let currentFilter = 'all';

// inferred difficulty helper
function getDifficulty(title) {
    const t = title.toLowerCase();
    if (t.includes('advanced') || t.includes('master')) return 'advanced';
    if (t.includes('intermediate') || t.includes('mid')) return 'intermediate';
    return 'beginner';
}

function renderCourses() {
    const grid = document.getElementById('courses-grid');
    const noResults = document.getElementById('no-results');

    if (!grid) return;
    grid.innerHTML = '';

    const coursesArray = Object.values(COURSES_DATA);

    // Filter Logic
    const filteredCtx = coursesArray.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(currentSearch) ||
            course.description.toLowerCase().includes(currentSearch);

        const difficulty = getDifficulty(course.title);
        const matchesFilter = currentFilter === 'all' || difficulty === currentFilter;

        return matchesSearch && matchesFilter;
    });

    if (filteredCtx.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';

        filteredCtx.forEach((course, index) => {
            const isEnrolled = enrolledCourses.some(c => c.id === course.id);
            const difficulty = getDifficulty(course.title);

            const card = document.createElement('div');
            card.className = 'course-card glass animate-fadeInUp hover-lift';
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <div class="course-icon" style="background: ${course.color}10;">
                    <i class="${course.icon} icon-bounce" style="color: ${course.color};"></i>
                </div>
                <div>
                     <span class="difficulty-badge difficulty-${difficulty}">${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
                </div>
                <h3>${course.title}</h3>
                <p>${course.description.substring(0, 100)}...</p>
                <div class="course-meta">
                    <span><i class="fas fa-book"></i> ${course.modules.length} Modules</span>
                    <span><i class="fas fa-clock"></i> Self-paced</span>
                </div>
                ${isEnrolled
                    ? `<button class="btn-secondary full-width hover-lift btn-ripple" onclick="location.href='dashboard.html'">
                         <i class="fas fa-check-circle"></i> Go to Dashboard
                       </button>`
                    : `<button class="btn-primary full-width hover-lift btn-ripple" onclick="openCourseDetails('${course.id}')">
                         <i class="fas fa-info-circle"></i> View Details
                       </button>`
                }
            `;
            grid.appendChild(card);
        });
    }
}

// Modal Logic
window.openCourseDetails = (courseId) => {
    const course = COURSES_DATA[courseId];
    if (!course) return;

    const modal = document.getElementById('courseModal');
    const content = document.getElementById('modalContent');
    const difficulty = getDifficulty(course.title);

    content.innerHTML = `
        <div style="text-align:center; margin-bottom:2rem;">
            <div style="width:80px; height:80px; background:${course.color}20; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 1rem;">
                <i class="${course.icon}" style="font-size:2.5rem; color:${course.color};"></i>
            </div>
            <h2 style="margin-bottom:0.5rem;">${course.title}</h2>
            <span class="difficulty-badge difficulty-${difficulty}">${difficulty.toUpperCase()}</span>
        </div>
        
        <p style="color:var(--text-muted); line-height:1.6; margin-bottom:1.5rem;">${course.description}</p>
        
        <h4 style="margin-bottom:1rem; color:var(--text-color);"><i class="fas fa-list-ul"></i> Syllabus Overview</h4>
        <ul style="margin-bottom:2rem; padding-left:1.5rem; color:var(--text-muted);">
            ${course.modules.slice(0, 3).map(m => `<li>${m.title}</li>`).join('')}
            ${course.modules.length > 3 ? `<li>+ ${course.modules.length - 3} more modules...</li>` : ''}
        </ul>

        <button class="btn-primary full-width hover-lift btn-ripple" onclick="confirmEnroll('${course.id}', '${course.title}')">
            Enroll Now - Start Learning
        </button>
    `;

    modal.style.display = 'flex';
};

window.closeCourseModal = () => {
    document.getElementById('courseModal').style.display = 'none';
};

window.confirmEnroll = (courseId, courseTitle) => {
    if (!currentUser) {
        toastr.error('Please login to enroll!');
        setTimeout(() => window.location.href = 'index.html', 1500);
        return;
    }

    if (enrolledCourses.some(c => c.id === courseId)) {
        toastr.info('Already enrolled!');
        return;
    }

    // Enroll Logic
    enrolledCourses.push({
        id: courseId,
        name: courseTitle,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));

    // Init Progress
    const progressKey = `courseProgress_${currentUser.uid}`;
    const allProgress = JSON.parse(localStorage.getItem(progressKey)) || {};
    const courseData = COURSES_DATA[courseId];
    const firstLessonId = courseData.modules[0].lessons[0].id;

    allProgress[courseId] = {
        progress: 0,
        completedLessons: [],
        quizScores: {},
        currentLesson: firstLessonId,
        startedAt: new Date().toISOString()
    };
    localStorage.setItem(progressKey, JSON.stringify(allProgress));

    toastr.success(`Enrolled in ${courseTitle}!`);
    closeCourseModal();
    renderCourses(); // Updates button state

    // Offer redirect
    setTimeout(() => {
        if (confirm('Go to Dashboard to start learning?')) {
            window.location.href = 'dashboard.html';
        }
    }, 500);
};


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Search
    document.getElementById('courseSearch').addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderCourses();
    });

    // Filters
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderCourses();
        });
    });

    // Close modal on outside click
    window.onclick = (e) => {
        const modal = document.getElementById('courseModal');
        if (e.target === modal) closeCourseModal();
    }

    renderCourses();
});
