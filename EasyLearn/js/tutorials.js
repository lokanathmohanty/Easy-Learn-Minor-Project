// Tutorials Page Logic

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initGlobalSearch();
    loadRecentlyViewed();
    setupTracking();
    initLegacyFeatures(); // Roadmap, PDF searches, etc.
});

// --- Feature 1: Global Search ---
function initGlobalSearch() {
    const input = document.getElementById('globalSearchInput');
    if (!input) return;

    input.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();

        // Define all searchable items
        const searchableItems = [
            { elements: document.querySelectorAll('.build-career-box'), textSelector: 'strong' },
            { elements: document.querySelectorAll('.roadmap-easylearn-card'), textSelector: 'div strong' },
            { elements: document.querySelectorAll('.cheatsheet-box'), textSelector: null }, // Text is direct
            { elements: document.querySelectorAll('.pdf-box'), textSelector: 'h3' }
        ];

        searchableItems.forEach(group => {
            group.elements.forEach(el => {
                let text = "";
                if (group.textSelector) {
                    const txtEl = el.querySelector(group.textSelector);
                    if (txtEl) text = txtEl.textContent.toLowerCase();
                } else {
                    text = el.textContent.toLowerCase();
                }

                if (text.includes(query)) {
                    el.style.display = "";
                    el.style.opacity = "1";
                    // Ensure parents are visible if needed (like hidden PDFs)
                    if (el.classList.contains('hidden')) el.classList.remove('hidden');
                } else {
                    el.style.display = "none";
                }
            });
        });

        // Optional: Expand "See More" sections automatically if searching
        if (query.length > 0) {
            const extraCourses = document.getElementById('extraCourses');
            if (extraCourses) extraCourses.style.display = 'block';

            const cheatsheetContainer = document.getElementById('cheatsheetContainer');
            if (cheatsheetContainer) cheatsheetContainer.style.height = 'auto';
        }
    });
}

// --- Feature 2: Recently Viewed ---
function loadRecentlyViewed() {
    const container = document.getElementById('recentlyViewedContainer');
    const section = document.getElementById('recentlyViewedSection');

    if (!container || !section) return;

    const history = JSON.parse(localStorage.getItem('tutorialHistory') || '[]');

    if (history.length === 0) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');
    container.innerHTML = '';

    history.forEach(item => {
        const card = document.createElement('a');
        card.href = item.url;
        card.className = 'recently-viewed-card hover-glow';
        card.innerHTML = `
            ${item.icon}
            <h5>${item.title}</h5>
            <span class="timestamp">${timeAgo(item.timestamp)}</span>
        `;
        card.addEventListener('click', () => trackView(item.title, item.icon, item.url)); // Re-track on click
        container.appendChild(card);
    });
}

function trackView(title, iconHTML, url) {
    const history = JSON.parse(localStorage.getItem('tutorialHistory') || '[]');

    // Remove duplicate if exists
    const newHistory = history.filter(h => h.title !== title);

    // Add new to top
    newHistory.unshift({
        title: title,
        icon: iconHTML,
        url: url,
        timestamp: new Date().getTime()
    });

    // Limit to 5
    if (newHistory.length > 5) newHistory.pop();

    localStorage.setItem('tutorialHistory', JSON.stringify(newHistory));
}

function setupTracking() {
    // Track clicks on Career Boxes
    document.querySelectorAll('.build-career-box').forEach(box => {
        box.addEventListener('click', function () {
            const title = this.querySelector('strong').innerText;
            const icon = this.querySelector('i').outerHTML;
            const url = this.getAttribute('href');
            trackView(title, icon, url);
        });
    });

    // Track clicks on Cheatsheets
    document.querySelectorAll('.cheatsheet-box').forEach(box => {
        box.parentElement.addEventListener('click', function () {
            const title = box.innerText.trim();
            const icon = box.querySelector('i').outerHTML;
            const url = this.getAttribute('href');
            trackView(title, icon, url);
        });
    });

    // Track clicks on PDF Downloads or Previews
    // (Optional: tracking downloads might be less useful as "viewed" but good for history)
}

function timeAgo(timestamp) {
    const seconds = Math.floor((new Date() - timestamp) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " mins ago";
    return "Just now";
}

// --- Legacy Features (Preserved) ---

function toggleCourses() {
    const extraCourses = document.getElementById('extraCourses');
    const btn = document.querySelector('.see-all-btn');

    if (extraCourses.style.display === 'block') {
        extraCourses.style.display = 'none';
        btn.textContent = 'See All';
    } else {
        extraCourses.style.display = 'block';
        btn.textContent = 'Show Less';
    }
}

function filterBoxes() {
    // Legacy Cheatsheet Search (now covered by Global, but kept for specific input)
    const input = document.getElementById('searchInput');
    if (!input) return;
    const filter = input.value.toUpperCase();
    const container = document.getElementById('cheatsheetContainer');
    const boxes = container.getElementsByClassName('cheatsheet-box');
    const links = container.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        const txtValue = boxes[i].textContent || boxes[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}

function toggleCheatsheets() {
    const container = document.getElementById('cheatsheetContainer');
    const btn = document.querySelector('.cheatsheet-see-all-btn');

    if (container.style.height === 'auto') {
        container.style.height = '380px';
        btn.textContent = 'Show More';
    } else {
        container.style.height = 'auto';
        btn.textContent = 'Show Less';
    }
}

function initLegacyFeatures() {
    // PDF Search Specific
    const pdfSearch = document.querySelector('.search-container input');
    if (pdfSearch) {
        pdfSearch.addEventListener('keyup', function () {
            const filter = this.value.toLowerCase();
            const boxes = document.querySelectorAll('.pdf-box');
            boxes.forEach(box => {
                const titleElement = box.querySelector('h3');
                if (titleElement) {
                    const title = titleElement.innerText.toLowerCase();
                    if (title.includes(filter)) {
                        box.style.display = 'block';
                        box.style.opacity = '1';
                    } else {
                        box.style.display = 'none';
                    }
                }
            });
        });
    }

    // PDF See More
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            const hiddenBoxes = document.querySelectorAll('.pdf-box.hidden');
            const isExpanded = seeMoreBtn.getAttribute('aria-expanded') === 'true';

            if (!isExpanded) {
                hiddenBoxes.forEach(box => {
                    box.classList.remove('hidden');
                    box.classList.add('visible');
                });
                seeMoreBtn.textContent = 'See Less';
                seeMoreBtn.setAttribute('aria-expanded', 'true');
            } else {
                const visibleBoxes = document.querySelectorAll('.pdf-box.visible');
                visibleBoxes.forEach(box => {
                    box.classList.remove('visible');
                    box.classList.add('hidden');
                });
                seeMoreBtn.textContent = 'See More';
                seeMoreBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // PDF Preview
    const previewButtons = document.querySelectorAll('.preview-btn');
    previewButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const pdfFile = this.getAttribute('data-file');
            if (pdfFile) window.open(pdfFile, '_blank');
            else alert('PDF file path not found.');
        });
    });

    // Expose global functions
    window.toggleCourses = toggleCourses;
    window.filterBoxes = filterBoxes;
    window.toggleCheatsheets = toggleCheatsheets;
}
