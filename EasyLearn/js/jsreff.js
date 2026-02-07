// JavaScript Reference Page - Enhanced Functionality

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollSpy();
    initCopyAndRun();
    initSearch();
    initKeyboardShortcuts();

    // Modal Close
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        document.getElementById('runModal').style.display = 'none';
    });

    // Close modal on click outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('runModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// --- Feature: Sidebar Search ---
function initSearch() {
    const input = document.getElementById('topicSearch');
    const list = document.getElementById('sidebarList');
    const items = list.querySelectorAll('li');

    input.addEventListener('keyup', (e) => {
        const filter = e.target.value.toLowerCase();

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
}

// --- Feature: Try Code & Copy ---
function initCopyAndRun() {
    document.querySelectorAll('pre code').forEach(block => {
        const pre = block.parentElement;
        pre.style.position = 'relative';

        // Container for buttons
        const btnContainer = document.createElement('div');
        btnContainer.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 0.5rem;
        `;

        // Copy Button
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyBtn.className = 'action-btn copy-btn';
        copyBtn.style.cssText = getButtonStyle('#6c5ce7'); // Primary

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(block.innerText).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy', 2000);
            });
        });

        // Run Button
        const runBtn = document.createElement('button');
        runBtn.innerHTML = '<i class="fas fa-play"></i> Run';
        runBtn.className = 'action-btn run-btn';
        runBtn.style.cssText = getButtonStyle('#00cec9'); // Secondary

        runBtn.addEventListener('click', () => {
            runCode(block.innerText);
        });

        btnContainer.appendChild(copyBtn);
        btnContainer.appendChild(runBtn);
        pre.appendChild(btnContainer);
    });
}

function getButtonStyle(color) {
    return `
        background: ${color};
        color: white;
        border: none;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.8rem;
        font-family: inherit;
        transition: transform 0.2s;
        opacity: 0.9;
    `;
}

function runCode(codeString) {
    const modal = document.getElementById('runModal');
    const outputDiv = document.getElementById('consoleOutput');
    modal.style.display = 'flex';
    outputDiv.innerText = ''; // Clear previous

    // Capture Console
    const logs = [];
    const originalLog = console.log;

    // Override log
    console.log = function (...args) {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        // originalLog.apply(console, args); // Optional: keep real console working
    };

    try {
        // Execute safe-ish
        // Note: 'eval' in strictly controlled environment is okay for this toy example
        // Wrapping in async IIFE to allow await if present
        eval(`(async () => { 
            ${codeString} 
        })()`);

        // Wait briefly for async logs (not perfect but works for simple examples)
        setTimeout(() => {
            if (logs.length > 0) {
                outputDiv.innerText = logs.join('\n');
            } else {
                outputDiv.innerText = 'Code executed. No output log.';
            }
            console.log = originalLog; // Restore
        }, 500);

    } catch (e) {
        outputDiv.innerHTML = `<span style="color:#ff7675">Error: ${e.message}</span>`;
        console.log = originalLog; // Restore
    }
}

// --- Standard UI Features ---
function initMobileMenu() {
    if (window.innerWidth > 1024) return;

    const menuToggle = document.createElement('button');
    menuToggle.id = 'menuToggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.style.cssText = `
      position: fixed; top: 15px; left: 15px;
      font-size: 1.5rem; background: var(--bg-card); color: var(--text-color);
      border: 1px solid var(--border-color); width: 45px; height: 45px;
      border-radius: 8px; cursor: pointer; z-index: 1001;
      display: flex; align-items: center; justify-content: center;
    `;
    document.body.appendChild(menuToggle);

    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        else menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });

    // Close on link click
    document.querySelectorAll('#sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#sidebar a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 250)) {
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

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('runModal').style.display = 'none';
        }
    });

    // Back to Top Logic
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) backToTop.style.display = 'block';
        else backToTop.style.display = 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


