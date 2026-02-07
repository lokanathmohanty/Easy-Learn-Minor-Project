// Course Player - Simplified for Netlify Deployment
// Removed complex module imports that cause issues on Netlify

// Global variables
let currentUser = null;
let courseId = null;
let course = null;
let courseProgress = null;
let currentLessonId = null;

// Get user from localStorage or sessionStorage (works reliably on Netlify)
function getUser() {
    try {
        // Check localStorage for mock user
        const mockUser = localStorage.getItem('mockUser');
        if (mockUser) {
            return JSON.parse(mockUser);
        }

        // Check sessionStorage for Firebase user
        const firebaseUser = sessionStorage.getItem('firebaseUser');
        if (firebaseUser) {
            return JSON.parse(firebaseUser);
        }
    } catch (e) {
        // Error reading user
    }
    return null;
}

// Initialize the player
function init() {
    try {
        // 1. Get user
        currentUser = getUser() || window.currentUser;

        if (!currentUser) {
            // No user found
            alert('Please login first');
            window.location.href = 'index.html';
            return;
        }


        // 2. Get course ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        courseId = urlParams.get('courseId');

        if (!courseId) {
            alert('No course selected');
            window.location.href = 'courses.html';
            return;
        }


        // 3. Check if COURSES_DATA is loaded
        if (typeof COURSES_DATA === 'undefined') {
            throw new Error('Course data not loaded. Please refresh the page.');
        }

        // 4. Get course data
        course = COURSES_DATA[courseId];
        if (!course) {
            throw new Error('Course not found: ' + courseId);
        }


        // 5. Load user progress
        loadProgress();

        // 6. Render UI
        document.getElementById('course-title').textContent = course.title;
        renderSidebar();
        updateProgressBar();

        // 7. Load first/current lesson
        if (currentLessonId) {
            loadLesson(currentLessonId);
        } else {
            // No current lesson - loading first lesson
            if (course.modules[0]?.lessons[0]) {
                loadLesson(course.modules[0].lessons[0].id);
            }
        }


    } catch (error) {
        // Course Player init error
        const content = document.getElementById('lesson-content');
        if (content) {
            content.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--text-color);">
                    <h2 style="color: #ff6b6b;">⚠️ Error Loading Course</h2>
                    <p>${error.message}</p>
                    <button class="btn-primary" onclick="window.location.href='dashboard.html'" style="margin-top: 1rem;">
                        ← Back to Dashboard
                    </button>
                </div>
            `;
        }
    }
}

// Load progress from localStorage
function loadProgress() {
    const progressKey = `courseProgress_${currentUser.uid}`;
    const allProgress = JSON.parse(localStorage.getItem(progressKey) || '{}');

    courseProgress = allProgress[courseId] || {
        progress: 0,
        completedLessons: [],
        quizScores: {},
        currentLesson: null,
        startedAt: Date.now()
    };

    // Set current lesson
    if (courseProgress.currentLesson) {
        currentLessonId = courseProgress.currentLesson;
    } else if (course.modules[0]?.lessons[0]) {
        currentLessonId = course.modules[0].lessons[0].id;
        courseProgress.currentLesson = currentLessonId;
        saveProgress();
    }

}

// Save progress to localStorage
function saveProgress() {
    if (!currentUser || !courseId) return;
    const progressKey = `courseProgress_${currentUser.uid}`;
    const allProgress = JSON.parse(localStorage.getItem(progressKey) || '{}');
    allProgress[courseId] = courseProgress;
    localStorage.setItem(progressKey, JSON.stringify(allProgress));
}

// Update progress bar
function updateProgressBar() {
    const totalLessons = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
    const completed = courseProgress.completedLessons.length;
    const percentage = Math.round((completed / totalLessons) * 100);

    courseProgress.progress = percentage;

    const progressText = document.getElementById('overall-progress');
    const progressBar = document.getElementById('progress-bar');

    if (progressText) progressText.textContent = `${percentage}%`;
    if (progressBar) progressBar.style.width = `${percentage}%`;

    saveProgress();
}

// Render sidebar modules
function renderSidebar() {
    const container = document.getElementById('modules-list');
    if (!container) return;

    container.innerHTML = '';

    course.modules.forEach((module) => {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module';

        let lessonsHTML = '';
        module.lessons.forEach(lesson => {
            const isCompleted = courseProgress.completedLessons.includes(lesson.id);
            const isCurrent = lesson.id === currentLessonId;
            const icon = isCompleted ? 'fa-check-circle' :
                (lesson.type === 'video' ? 'fa-play-circle' : 'fa-question-circle');

            lessonsHTML += `
                <div class="lesson-item ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                     onclick="loadLessonById('${lesson.id}')">
                    <i class="fas ${icon}"></i>
                    <span>${lesson.title}</span>
                </div>
            `;
        });

        moduleDiv.innerHTML = `
            <div class="module-header">
                <h3><i class="fas fa-folder"></i> ${module.title}</h3>
            </div>
            <div class="lessons-list">
                ${lessonsHTML}
            </div>
        `;

        container.appendChild(moduleDiv);
    });
}

// Load a specific lesson
function loadLesson(lessonId) {

    currentLessonId = lessonId;
    courseProgress.currentLesson = lessonId;
    saveProgress();

    // Find the lesson
    let lesson = null;
    let module = null;

    for (const mod of course.modules) {
        const found = mod.lessons.find(l => l.id === lessonId);
        if (found) {
            lesson = found;
            module = mod;
            break;
        }
    }

    if (!lesson) {
        // Lesson not found
        return;
    }

    renderLesson(lesson, module);
    renderSidebar();
    loadNotes(lessonId); // Load notes for this lesson
}

// Render lesson content
function renderLesson(lesson, module) {
    const container = document.getElementById('lesson-content');
    if (!container) return;

    const isCompleted = courseProgress.completedLessons.includes(lesson.id);

    if (lesson.type === 'video') {
        // VIDEO LESSON
        container.innerHTML = `
            <div class="lesson-header">
                <h2>${lesson.title}</h2>
                <p class="module-name">${module.title}</p>
            </div>
            
            <div class="video-wrapper">
                <iframe 
                    src="${lesson.videoUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            
            <div class="lesson-description">
                ${lesson.content || '<p>Watch the video to learn more.</p>'}
            </div>
            
            ${!isCompleted ? `
                <button class="btn-primary" onclick="markComplete()">
                    <i class="fas fa-check"></i> Mark as Complete
                </button>
            ` : `
                <div class="completion-badge">
                    <i class="fas fa-check-circle"></i> Completed
                </div>
            `}
        `;

    } else if (lesson.type === 'quiz') {
        // QUIZ LESSON
        renderQuiz(lesson, module, isCompleted);
    }
}

// Render quiz
function renderQuiz(lesson, module, isCompleted) {
    const container = document.getElementById('lesson-content');
    const prevScore = courseProgress.quizScores[lesson.id];

    let quizHTML = `
        <div class="lesson-header">
            <h2>${lesson.title}</h2>
            <p class="module-name">Quiz - ${module.title}</p>
            ${prevScore ? `<div class="quiz-score">Previous Score: ${prevScore}%</div>` : ''}
        </div>
        
        <div class="quiz-container">
            <p class="quiz-instructions">Answer all questions (60% required to pass)</p>
            <form id="quiz-form" onsubmit="submitQuiz(event); return false;">
    `;

    lesson.questions.forEach((q, idx) => {
        quizHTML += `
            <div class="quiz-question">
                <p class="question-text"><strong>Q${idx + 1}.</strong> ${q.question}</p>
                <div class="quiz-options">
        `;

        q.options.forEach((opt, optIdx) => {
            quizHTML += `
                <label class="quiz-option">
                    <input type="radio" name="q${idx}" value="${optIdx}" required>
                    <span>${opt}</span>
                </label>
            `;
        });

        quizHTML += `
                </div>
            </div>
        `;
    });

    quizHTML += `
                <button type="submit" class="btn-primary">
                    <i class="fas fa-paper-plane"></i> Submit Quiz
                </button>
            </form>
            <div id="quiz-results"></div>
        </div>
    `;

    container.innerHTML = quizHTML;
}

// Mark lesson as complete
window.markComplete = function () {
    if (!courseProgress.completedLessons.includes(currentLessonId)) {
        courseProgress.completedLessons.push(currentLessonId);
        updateProgressBar();

        // Reload current lesson to show completion badge
        const lesson = findLessonById(currentLessonId);
        if (lesson) {
            const module = findModuleByLessonId(currentLessonId);
            renderLesson(lesson.lesson, module);
        }

        renderSidebar();

        if (typeof toastr !== 'undefined') {
            toastr.success('Lesson completed!');
        }

        checkCourseCompletion();
    }
};

// Submit quiz
window.submitQuiz = function (event) {
    event.preventDefault();

    const lesson = findLessonById(currentLessonId).lesson;
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    let correct = 0;
    lesson.questions.forEach((q, idx) => {
        const answer = parseInt(formData.get(`q${idx}`));
        if (answer === q.correct) correct++;
    });

    const score = Math.round((correct / lesson.questions.length) * 100);
    const passed = score >= 60;

    // Show results
    let resultsHTML = `
        <div class="quiz-result ${passed ? 'passed' : 'failed'}">
            <h3>${passed ? '✓ Passed!' : '✗ Failed'}</h3>
            <p>Score: ${score}% (${correct}/${lesson.questions.length})</p>
            ${!passed ? '<p>You need 60% to pass. Try again!</p>' : ''}
        </div>
        <div class="quiz-explanations">
    `;

    lesson.questions.forEach((q, idx) => {
        const userAnswer = parseInt(formData.get(`q${idx}`));
        const isCorrect = userAnswer === q.correct;

        resultsHTML += `
            <div class="explanation ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>Q${idx + 1}.</strong> ${q.question}</p>
                <p>Your answer: ${q.options[userAnswer]} ${isCorrect ? '✓' : '✗'}</p>
                ${!isCorrect ? `<p>Correct: ${q.options[q.correct]}</p>` : ''}
                <p class="explanation-text">${q.explanation || ''}</p>
            </div>
        `;
    });

    resultsHTML += '</div>';
    document.getElementById('quiz-results').innerHTML = resultsHTML;

    // Scroll to results
    document.getElementById('quiz-results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // If passed, mark complete
    if (passed) {
        courseProgress.quizScores[currentLessonId] = score;
        if (!courseProgress.completedLessons.includes(currentLessonId)) {
            courseProgress.completedLessons.push(currentLessonId);
        }
        updateProgressBar();
        renderSidebar();

        if (typeof toastr !== 'undefined') {
            toastr.success(`Quiz passed with ${score}%!`);
        }

        checkCourseCompletion();
    } else {
        if (typeof toastr !== 'undefined') {
            toastr.error(`Score too low: ${score}%`);
        }
    }
};

// Navigate between lessons
window.navigateLesson = function (direction) {
    const allLessons = [];
    course.modules.forEach(m => {
        m.lessons.forEach(l => allLessons.push(l.id));
    });

    const currentIdx = allLessons.indexOf(currentLessonId);
    const newIdx = direction === 'next' ? currentIdx + 1 : currentIdx - 1;

    if (newIdx >= 0 && newIdx < allLessons.length) {
        loadLesson(allLessons[newIdx]);
        window.scrollTo(0, 0);
    }
};

// Load lesson by ID (sidebar click)
window.loadLessonById = function (lessonId) {
    loadLesson(lessonId);
    window.scrollTo(0, 0);
};

// Helper: Find lesson by ID
function findLessonById(lessonId) {
    for (const module of course.modules) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) return { lesson, module };
    }
    return null;
}

// Helper: Find module by lesson ID
function findModuleByLessonId(lessonId) {
    for (const module of course.modules) {
        if (module.lessons.find(l => l.id === lessonId)) {
            return module;
        }
    }
    return null;
}

// Check if course is complete
function checkCourseCompletion() {
    if (courseProgress.progress === 100 && !courseProgress.completedAt) {
        courseProgress.completedAt = Date.now();
        saveProgress();

        if (typeof toastr !== 'undefined') {
            toastr.success('🎉 Course completed!');
        }

        setTimeout(() => {
            if (confirm('Course completed! View your certificate?')) {
                window.location.href = `certificate.html?courseId=${courseId}`;
            }
        }, 1500);
    }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// --- New Feature: Sidebar Toggle ---
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.player-sidebar');
const mainContent = document.querySelector('.player-content');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });
}

// --- New Feature: Notes System ---
function loadNotes(lessonId) {
    const notesKey = `notes_${currentUser.uid}_${lessonId}`;
    const savedNote = localStorage.getItem(notesKey) || '';
    const textarea = document.getElementById('lesson-notes');
    if (textarea) textarea.value = savedNote;
}

window.saveNotes = function () {
    if (!currentUser || !currentLessonId) return;
    const notesKey = `notes_${currentUser.uid}_${currentLessonId}`;
    const textarea = document.getElementById('lesson-notes');
    const status = document.getElementById('save-status');

    if (textarea) {
        localStorage.setItem(notesKey, textarea.value);
        if (status) {
            status.textContent = 'Saved!';
            setTimeout(() => status.textContent = '', 2000);
        }
        if (typeof toastr !== 'undefined') toastr.success('Notes saved successfully');
    }
};

// Hook into loadLesson to load notes
const originalLoadLesson = window.loadLesson; // Backup if needed, but better to redefine or hook
// Overriding loadLesson is risky if I don't copy the whole body.
// Instead, I'll modify loadLesson logic by appending a call in renderLesson.

// I'll patch renderLesson from previous context

