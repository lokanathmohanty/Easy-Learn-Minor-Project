// Universal Dark Mode Script
// Include this in all pages for consistent theme support

(function () {
    'use strict';

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update icon based on current theme
    function updateIcon(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                // In dark mode show sun (to switch to light), in light mode show moon (to switch to dark)
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Apply theme with transition
        document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update icon
        updateIcon(newTheme);

        // Remove transition after animation
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
    }

    // Initialize on DOM ready
    function init() {
        updateIcon(savedTheme);

        // Add click listener to theme toggle button
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            // Remove any existing onclick to prevent double triggers
            toggleBtn.onclick = null;
            toggleBtn.addEventListener('click', function (e) {
                e.preventDefault();
                toggleTheme();
            });
        }
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Also expose globally for manual triggering (for onclick attributes)
    window.toggleDarkMode = toggleTheme;

})();
