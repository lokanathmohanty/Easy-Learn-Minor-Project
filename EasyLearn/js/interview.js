// Cracking Interviews Tutorial JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initBackToTop();
    initAnimations();
    initCopyFeature();
    initSimulator();
    initProgressBar();
    initKeyboardShortcuts();
});

// --- Feature: Mock Interview Simulator ---
const mockQuestions = [
    { q: "Tell me about yourself.", h: "Focus on your professional journey: Past, Present, and Future." },
    { q: "What is your greatest strength?", h: "Choose a strength relevant to the job and back it up with an example." },
    { q: "Why do you want to leave your current job?", h: "Stay positive. Focus on looking for new challenges, not escaping old ones." },
    { q: "Describe a difficult challenge you faced.", h: "Use the STAR method: Situation, Task, Action, Result." },
    { q: "Where do you see yourself in 5 years?", h: "Show ambition but also commitment to the role you are applying for." },
    { q: "Why should we hire you?", h: "Summarize your top skills and how they solve the company's problems." }
];

let timerInterval;

function initSimulator() {
    const startBtn = document.getElementById('startSimBtn');
    const hintBtn = document.getElementById('revealHintBtn');
    const questionDisplay = document.getElementById('questionDisplay');
    const timerDisplay = document.getElementById('timerDisplay');
    const hintDisplay = document.getElementById('hintDisplay');

    if (!startBtn) return;

    startBtn.addEventListener('click', () => {
        // Stop existing timer
        clearInterval(timerInterval);

        // Pick random question
        const randomItem = mockQuestions[Math.floor(Math.random() * mockQuestions.length)];

        // Update UI
        questionDisplay.textContent = randomItem.q;
        questionDisplay.style.color = "var(--text-color)";
        hintDisplay.textContent = randomItem.h;
        hintDisplay.style.display = 'none';
        hintBtn.style.display = 'inline-block';
        startBtn.textContent = 'Next Question';

        // Start Timer
        let timeLeft = 60;
        timerDisplay.textContent = "00:60";
        timerDisplay.style.color = "var(--secondary-color)";

        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft < 10) timerDisplay.textContent = `00:0${timeLeft}`;
            else timerDisplay.textContent = `00:${timeLeft}`;

            if (timeLeft <= 10) timerDisplay.style.color = "#ff7675"; // Red warning

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "Time's Up!";
                questionDisplay.style.color = "var(--text-muted)";
            }
        }, 1000);
    });

    hintBtn.addEventListener('click', () => {
        hintDisplay.style.display = 'block';
        hintBtn.style.display = 'none';
    });
}

// --- Feature: Progress Bar ---
function initProgressBar() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + "%";
    });
}

// --- Specific Fix: Copy Feature (Preserving Icons) ---
function initCopyFeature() {
    document.querySelectorAll('section h3').forEach(heading => {
        heading.style.cursor = 'pointer';
        heading.title = 'Click to copy text';

        heading.addEventListener('click', () => {
            // Get text without icon content if possible, or just textContent
            const textToCopy = heading.innerText.trim();

            navigator.clipboard.writeText(textToCopy).then(() => {
                // Visual feedback WITHOUT destroying innerHTML (icon)
                const originalColor = heading.style.color;

                // Add a temporary span for feedback
                const msg = document.createElement('span');
                msg.textContent = ' ✓ Copied!';
                msg.style.fontSize = '0.6em';
                msg.style.color = 'var(--secondary-color)';
                msg.style.marginLeft = '10px';
                msg.classList.add('animate-fadeInUp');

                heading.appendChild(msg);

                setTimeout(() => {
                    msg.remove();
                }, 1500);
            });
        });
    });
}

// --- Standard UI Features ---

function initSmoothScroll() {
    document.querySelectorAll('.navin a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 160;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                document.querySelectorAll('.navin a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Scroll Spy
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navin a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) btn.style.display = 'block';
        else btn.style.display = 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Hover effects on list items
    document.querySelectorAll('section ul li, section ol li').forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease';
        });
        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
        });
    });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Home' && e.ctrlKey) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (e.key === 'Escape') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}


