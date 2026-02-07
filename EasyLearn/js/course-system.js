// Study Reminder & System JavaScript

// Motivational quotes
const quotes = [
    "💡 \"Success is earned daily.\"",
    "🚀 \"Keep learning, keep growing!\"",
    "📚 \"Knowledge is power!\"",
    "✨ \"Every lesson brings you closer to your goals!\"",
    "🎯 \"Focus on progress, not perfection!\"",
    "💪 \"You're doing great! Keep it up!\"",
    "🌟 \"Small steps lead to big achievements!\"",
    "🔥 \"Stay consistent, stay strong!\"",
    "🎓 \"Education is the key to success!\"",
    "⚡ \"Your future self will thank you!\""
];

let reminderInterval = null;
let customTimeout = null;

// Get elements
const selectInterval = document.getElementById('selectIntervalX');
const inputDate = document.getElementById('inputDateX');
const inputTime = document.getElementById('inputTimeX');
const startButton = document.getElementById('startReminderX');
const quoteBox = document.getElementById('quoteBoxX');
const statusText = document.getElementById('statusTextX');
const soundAlert = document.getElementById('soundAlertX');

// Load saved state on init
document.addEventListener('DOMContentLoaded', () => {
    loadReminderState();
    autoFillForm();
    initFAQ();
    initNotifyButtons();
});

// --- Feature 1: Study Reminder Logic ---

function saveReminderState(settings) {
    localStorage.setItem('studyReminderSettings', JSON.stringify(settings));
}

function loadReminderState() {
    const saved = localStorage.getItem('studyReminderSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        if (settings.interval) {
            selectInterval.value = settings.interval;
            startReminder(settings.interval, null, null, false); // false = don't save again
            statusText.textContent = `✅ Resumed: Every ${settings.interval} mins`;
            statusText.style.color = '#00cec9';
        }
    }
}

function showRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;

    // Visual flash
    quoteBox.style.animation = 'none';
    setTimeout(() => { quoteBox.style.animation = 'flashAlert 1s ease-in-out'; }, 10);

    // Audio
    if (soundAlert) {
        soundAlert.currentTime = 0;
        soundAlert.play().catch(e => { /* Audio error */ });
    }

    // Notification
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('📚 Study Reminder', {
            body: randomQuote,
            icon: 'assets/certificate-sample.png'
        });
    }

    createVisualAlert(randomQuote);
}

function createVisualAlert(message) {
    const existing = document.querySelector('.study-alert-popup');
    if (existing) existing.remove();

    const alertDiv = document.createElement('div');
    alertDiv.className = 'study-alert-popup animate-bounceIn';
    alertDiv.innerHTML = `
        <div class="study-alert-content hover-glow">
            <div class="study-alert-icon icon-bounce">📚</div>
            <h3>Time to Study!</h3>
            <p>${message}</p>
            <button class="study-alert-close hover-lift btn-ripple" onclick="this.parentElement.parentElement.remove()">
                Got it! ✓
            </button>
        </div>
    `;
    document.body.appendChild(alertDiv);

    // Auto remove
    setTimeout(() => {
        if (alertDiv.parentElement) {
            alertDiv.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => alertDiv.remove(), 500);
        }
    }, 10000);
}

function clearReminders() {
    if (reminderInterval) clearInterval(reminderInterval);
    if (customTimeout) clearTimeout(customTimeout);
    reminderInterval = null;
    customTimeout = null;
    localStorage.removeItem('studyReminderSettings');
}

function startReminder(intervalVal, dateVal, timeVal, save = true) {
    clearReminders();

    if (intervalVal > 0) {
        const intervalMs = intervalVal * 60 * 1000;
        reminderInterval = setInterval(showRandomQuote, intervalMs);

        if (save) {
            saveReminderState({ type: 'interval', interval: intervalVal });
            statusText.textContent = `✅ Reminder set for every ${intervalVal} minute(s)`;
            statusText.style.color = '#00cec9';
            showRandomQuote(); // Immediate feedback
        }
    } else if (dateVal && timeVal) {
        const target = new Date(`${dateVal}T${timeVal}`);
        const now = new Date();
        const diff = target - now;

        if (diff > 0) {
            customTimeout = setTimeout(() => {
                showRandomQuote();
                statusText.textContent = '⏰ Custom reminder triggered!';
            }, diff);
            statusText.textContent = `⏰ Reminder set for ${target.toLocaleString()}`;
            statusText.style.color = '#00cec9';
        } else {
            statusText.textContent = '❌ Selected time is in the past!';
            statusText.style.color = '#ff6b6b';
        }
    }
}

startButton.addEventListener('click', () => {
    const interval = parseInt(selectInterval.value);
    const date = inputDate.value;
    const time = inputTime.value;

    if (interval === 0 && (!date || !time)) {
        statusText.textContent = '⚠️ Please select an interval or date/time';
        statusText.style.color = '#ffa502';
        return;
    }

    startReminder(interval, date, time);
});

// Request Notification Permission
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}


// --- Feature 2: Smart Form Autofill ---

function autoFillForm() {
    const userStr = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (userStr) {
        try {
            const user = JSON.parse(userStr);
            // Autofilling for user

            const form = document.querySelector("#form");
            if (form) {
                if (user.name) form.querySelector('input[name="name"]').value = user.name;
                if (user.email) form.querySelector('input[name="email"]').value = user.email;
                if (user.mobile) form.querySelector('input[name="mobile"]').value = user.mobile;
            }
        } catch (e) {
            // Error autofilling form
        }
    }
}

// Course Registration Form Handler
const form = document.querySelector("#form");
const msg = document.querySelector("#msg");
const scriptURL = "https://script.google.com/macros/s/AKfycbz23kLKM0D2BPpL7mQWZsfrFStaKGJKiSa0lQ3R6zUzsS_qEas-SX2OL5__e75kMkJH/exec";

if (form && msg) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        msg.textContent = "⏳ Submitting...";
        msg.className = "loading";

        const formData = new FormData(form);
        fetch(scriptURL, { method: "POST", body: formData })
            .then(res => res.text())
            .then(text => {
                msg.textContent = "✅ Data saved successfully!";
                msg.className = "success";
                form.reset();
                setTimeout(() => { msg.textContent = ""; msg.className = ""; }, 3000);
            })
            .catch(err => {
                msg.textContent = "❌ Error: " + err.message;
                msg.className = "error";
            });
    });
}


// --- Feature 3: FAQ Accordion ---

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            // Close others
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });
}


// --- Feature 4: Notify Me Toast ---

function initNotifyButtons() {
    const buttons = document.querySelectorAll('.notify-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            const courseName = this.getAttribute('data-course');

            // Change button state
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            this.style.background = 'var(--secondary-color)';
            this.style.color = '#000';

            // Show toast
            showToast(`You will be notified when ${courseName} launches!`);

            // Revert after 3s
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.style.background = ''; // reset
                this.style.color = '';
            }, 3000);
        });
    });
}

function showToast(message) {
    // Check if toast container exists
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast glass animate-fadeInUp';
    toast.style.cssText = `
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        margin-top: 10px;
        border-radius: 50px;
        border: 1px solid var(--secondary-color);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    toast.innerHTML = `<i class="fas fa-bell" style="color: var(--secondary-color)"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// --- Feature 5: Course Catalog & Wishlist System ---

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let sysSearchText = '';
let sysCategory = 'all';
let sysLevel = 'all';

// Helper to determine meta (Mocking since data file lacks these)
function getCourseMeta(course) {
    const id = course.id;
    let category = 'cs';
    let level = 'intermediate';
    let rating = (4.0 + Math.random()).toFixed(1);

    // Simple Keyword matching
    const t = course.title.toLowerCase();
    if (t.includes('web') || t.includes('react') || t.includes('mern') || t.includes('net')) category = 'web';
    else if (t.includes('data') || t.includes('ml') || t.includes('ai')) category = 'data';
    else if (t.includes('python') || t.includes('java')) category = 'programming';

    if (t.includes('basics') || t.includes('intro')) level = 'beginner';
    else if (t.includes('advanced') || t.includes('master')) level = 'advanced';

    return { category, level, rating };
}

function initCatalog() {
    // Bind Search/Filters
    const sInput = document.getElementById('sysSearch');
    const cSelect = document.getElementById('sysCategory');
    const lSelect = document.getElementById('sysLevel');

    if (!sInput) return; // Not on this page?

    sInput.addEventListener('input', (e) => { sysSearchText = e.target.value.toLowerCase(); renderSysCourses(); });
    cSelect.addEventListener('change', (e) => { sysCategory = e.target.value; renderSysCourses(); });
    lSelect.addEventListener('change', (e) => { sysLevel = e.target.value; renderSysCourses(); });

    updateWishlistCount();
    renderSysCourses();
    renderWishlistSidebar();
}

function renderSysCourses() {
    const grid = document.getElementById('sysCourseGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (typeof COURSES_DATA === 'undefined') {
        grid.innerHTML = '<p>Error loading course data.</p>';
        return;
    }

    const courses = Object.values(COURSES_DATA);
    let visibleCount = 0;

    courses.forEach(course => {
        const meta = getCourseMeta(course);

        // Filter Logic
        const matchesSearch = course.title.toLowerCase().includes(sysSearchText) ||
            course.description.toLowerCase().includes(sysSearchText);
        const matchesCat = sysCategory === 'all' || meta.category === sysCategory;
        const matchesLvl = sysLevel === 'all' || meta.level === sysLevel;

        if (matchesSearch && matchesCat && matchesLvl) {
            visibleCount++;
            const isWishlisted = wishlist.includes(course.id);
            const card = document.createElement('div');
            card.className = 'sys-course-card glass hover-lift animate-fadeInUp';
            card.innerHTML = `
                <div class="card-top">
                    <span class="badg level-${meta.level}">${meta.level}</span>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlistItem('${course.id}')">
                        <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-icon" style="background:${course.color}20; color:${course.color}">
                    <i class="${course.icon}"></i>
                </div>
                <h3>${course.title}</h3>
                <div class="rating">
                    <i class="fas fa-star text-warning"></i> ${meta.rating}
                    <span class="text-muted">(${Math.floor(Math.random() * 500 + 50)} reviews)</span>
                </div>
                <div class="card-modules">
                    <i class="fas fa-layer-group"></i> ${course.modules.length} Modules
                </div>
                <div class="card-actions">
                    <button class="btn-primary full-width" onclick="location.href='course-player.html?courseId=${course.id}'">Start Learning</button>
                </div>
            `;
            grid.appendChild(card);
        }
    });

    if (visibleCount === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
                <i class="fas fa-search fa-3x" style="opacity:0.5; margin-bottom:1rem;"></i>
                <p>No courses found matching your criteria.</p>
            </div>
        `;
    }
}

// Wishlist Logic
window.toggleWishlist = () => {
    const sidebar = document.getElementById('wishlistSidebar');
    const overlay = document.getElementById('wishlistOverlay');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
};

window.toggleWishlistItem = (id) => {
    const index = wishlist.indexOf(id);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from Wishlist');
    } else {
        wishlist.push(id);
        showToast('Added to Wishlist ❤️');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderSysCourses(); // Re-render to update heart icon
    renderWishlistSidebar();
};

function updateWishlistCount() {
    const el = document.getElementById('wishlist-count');
    if (el) el.textContent = wishlist.length;
}

function renderWishlistSidebar() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = '<p class="empty-msg">Your wishlist is empty.</p>';
        return;
    }

    container.innerHTML = wishlist.map(id => {
        const c = COURSES_DATA[id];
        if (!c) return '';
        return `
            <div class="wishlist-item glass">
                <div class="w-icon" style="background:${c.color}20; color:${c.color}"><i class="${c.icon}"></i></div>
                <div class="w-info">
                    <h4>${c.title}</h4>
                    <button onclick="location.href='course-player.html?courseId=${id}'" class="btn-xs">View</button>
                </div>
                <button class="remove-btn" onclick="toggleWishlistItem('${id}')">&times;</button>
            </div>
        `;
    }).join('');
}

// Init when DOM loads
document.addEventListener('DOMContentLoaded', initCatalog);
