// Aptitude & Reasoning Tutorial JavaScript

document.addEventListener('DOMContentLoaded', () => {

    // --- References ---
    const aptitudeBtn = document.getElementById('aptitudeBtn');
    const reasoningBtn = document.getElementById('reasoningBtn');
    const aptitudeSection = document.getElementById('aptitude');
    const reasoningSection = document.getElementById('reasoning');
    const searchInput = document.getElementById('topic-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const shortcutsGuide = document.getElementById('shortcuts-guide');
    const allTopics = document.querySelectorAll('.topics-list li');
    const checkAnswerBtn = document.querySelector('.check-answer-btn');

    // --- 1. Tab Switching ---
    aptitudeBtn.addEventListener('click', () => switchTab('aptitude'));
    reasoningBtn.addEventListener('click', () => switchTab('reasoning'));

    function switchTab(tab) {
        if (tab === 'aptitude') {
            aptitudeSection.classList.remove('hidden');
            reasoningSection.classList.add('hidden');
            aptitudeBtn.classList.add('active');
            reasoningBtn.classList.remove('active');
        } else {
            reasoningSection.classList.remove('hidden');
            aptitudeSection.classList.add('hidden');
            reasoningBtn.classList.add('active');
            aptitudeBtn.classList.remove('active');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- 2. Search & Filter ---
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (query.length > 0) clearSearchBtn.classList.remove('hidden');
        else clearSearchBtn.classList.add('hidden');

        allTopics.forEach(topic => {
            const text = topic.innerText.toLowerCase();
            const originalText = topic.getAttribute('data-original-text') || topic.innerText;

            // Highlight Match
            if (text.includes(query)) {
                topic.style.display = 'block';
                if (query.length > 1) {
                    if (!topic.hasAttribute('data-original-text')) {
                        topic.setAttribute('data-original-text', originalText);
                    }
                    const regex = new RegExp(`(${query})`, 'gi');
                    topic.innerHTML = originalText.replace(regex, '<mark>$1</mark>');
                    // Add checkmark if completed
                    if (localStorage.getItem('completed_' + originalText)) {
                        topic.classList.add('completed');
                    }
                } else {
                    topic.innerHTML = originalText;
                    if (localStorage.getItem('completed_' + originalText)) {
                        topic.classList.add('completed');
                    }
                }
            } else {
                topic.style.display = 'none';
            }
        });
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.focus();
    });

    // --- 3. Progress Tracking ---
    function updateProgress() {
        // Calculate total items and completed items
        const total = allTopics.length;
        let completed = 0;

        allTopics.forEach(topic => {
            // Save original text if not saved
            if (!topic.getAttribute('data-original-text')) {
                topic.setAttribute('data-original-text', topic.innerText);
            }
            const key = 'completed_' + topic.getAttribute('data-original-text');

            // Check state
            if (localStorage.getItem(key)) {
                topic.classList.add('completed');
                completed++;
            }

            // Click listener
            topic.onclick = function () {
                this.classList.toggle('completed');
                const isCompleted = this.classList.contains('completed');
                if (isCompleted) {
                    localStorage.setItem(key, 'true');
                    // Add check animation/sound here if desired
                } else {
                    localStorage.removeItem(key);
                }
                updateProgress(); // Recursive update for counters if we had a main progress bar
            };
        });

        // We could update a visual progress bar here if we added one
        // console.log(`Progress: ${Math.round((completed/total)*100)}%`);
    }

    updateProgress();

    // --- 4. Counter Animation ---
    const stats = document.querySelectorAll('[data-count]');
    const statsSection = document.querySelector('.amp-stats');

    let statsAnimated = false;
    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const duration = 2000;
            const increment = target / (duration / 16);

            let current = 0;
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = (target >= 1000 && target < 1000000) ? (target / 1000 + 'k') :
                        (target >= 1000000) ? (target / 1000000 + '') : target;
                }
            };
            updateCount();
        });
        statsAnimated = true;
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
            }
        });
    });

    if (statsSection) statsObserver.observe(statsSection);


    // --- 5. Interactive Quiz ---
    if (checkAnswerBtn) {
        checkAnswerBtn.addEventListener('click', () => {
            const selected = document.querySelector('input[name="q1"]:checked');
            const feedback = document.querySelector('.feedback');
            const solution = document.querySelector('.solution');

            if (!selected) {
                feedback.innerHTML = '<span style="color:red">Please select an option!</span>';
                feedback.classList.remove('hidden');
                return;
            }

            if (selected.value === '36') {
                feedback.innerHTML = '<span style="color: #00cec9; font-weight: bold;"><i class="fas fa-check-circle"></i> Correct Answer!</span>';
                feedback.classList.remove('hidden');
                solution.classList.remove('hidden');
                // Pulse animation
                solution.classList.add('animate-fadeInUp');
            } else {
                feedback.innerHTML = '<span style="color: #ff7675; font-weight: bold;"><i class="fas fa-times-circle"></i> Incorrect. Try again!</span>';
                feedback.classList.remove('hidden');
                solution.classList.add('hidden');
            }
        });
    }

    // --- 6. Scroll to Top ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 7. Keyboard Shortcuts & Guide ---
    // Show guide on load
    setTimeout(() => {
        shortcutsGuide.classList.remove('hidden');
        setTimeout(() => {
            shortcutsGuide.classList.add('hidden');
        }, 10000); // Hide after 10s
    }, 2000);

    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') {
            if (e.key === 'Escape') {
                searchInput.blur();
                shortcutsGuide.classList.add('hidden');
            }
            return;
        }

        switch (e.key) {
            case '1':
                e.preventDefault();
                switchTab('aptitude');
                break;
            case '2':
                e.preventDefault();
                switchTab('reasoning');
                break;
            case '/':
                e.preventDefault();
                searchInput.focus();
                break;
            case 'Escape':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                shortcutsGuide.classList.add('hidden');
                break;
        }
    });

    // Hover Enhancements (JS based tilt or just CSS classes added)
    // CSS handles most hover effects, but we can add 'tilt' or similar if needed.
    // Preserving existing functionality

    // Animate Progress Bars on Scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scaleX(1)";
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));

    // Features initialized
});
