/**
 * Educational Platform Animations Controller
 * Handles scroll animations, icon interactions, and dynamic effects
 */

(function () {
    'use strict';

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================

    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .slide-in-left, .slide-in-right');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const revealPoint = 100;

            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = revealPoint;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                } else {
                    // Optional: remove class to re-trigger animation
                    // element.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Check on load
    }

    // ========================================
    // AUTO-ANIMATE ELEMENTS ON PAGE LOAD
    // ========================================

    function autoAnimateElements() {
        // Add animation classes to specific elements

        // Animate course cards
        const courseCards = document.querySelectorAll('.course-card, .feature-card, .build-career-card');
        courseCards.forEach((card, index) => {
            card.classList.add('reveal');
            card.style.transitionDelay = `${index * 0.1}s`;
        });

        // Animate icons
        const icons = document.querySelectorAll('.fa-graduation-cap, .feature-icon i');
        icons.forEach(icon => {
            icon.classList.add('icon-bounce');
        });

        // Animate section headings
        const headings = document.querySelectorAll('h1, h2, .gradient-text');
        headings.forEach((heading, index) => {
            if (!heading.classList.contains('reveal') && !heading.classList.contains('animate-fadeInDown')) {
                heading.classList.add('animate-fadeInDown');
                heading.style.animationDelay = `${index * 0.2}s`;
            }
        });

        // Animate buttons
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.classList.add('hover-lift', 'btn-press');
        });

        // Animate PDF boxes
        const pdfBoxes = document.querySelectorAll('.pdf-box, .cheatsheet-box');
        pdfBoxes.forEach(box => {
            box.classList.add('hover-glow', 'transition-normal');
        });
    }

    // ========================================
    // ICON HOVER EFFECTS
    // ========================================

    function initIconEffects() {
        // Add glow effect to educational icons
        const educationalIcons = document.querySelectorAll('.fa-book, .fa-certificate, .fa-trophy, .fa-graduation-cap, .fa-award');

        educationalIcons.forEach(icon => {
            icon.addEventListener('mouseenter', function () {
                this.classList.add('icon-heartbeat');
            });

            icon.addEventListener('mouseleave', function () {
                this.classList.remove('icon-heartbeat');
            });
        });

        // Lightbulb icons glow on hover
        const lightbulbs = document.querySelectorAll('.fa-lightbulb');
        lightbulbs.forEach(bulb => {
            bulb.classList.add('bulb-interactive');
            bulb.addEventListener('mouseenter', function () {
                this.style.animation = 'bulbGlow 1s ease-in-out infinite';
            });
            bulb.addEventListener('mouseleave', function () {
                this.style.animation = '';
            });
        });
    }

    // ========================================
    // PROGRESS BAR ANIMATIONS
    // ========================================

    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar, [class*="progress"]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.classList.add('study-progress');
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }

    // ========================================
    // CARD HOVER EFFECTS
    // ========================================

    function initCardEffects() {
        const cards = document.querySelectorAll('.course-card, .stat-card, .roadmap-easylearn-card, .tool-card, .compiler-card, .build-career-card, .teacher-card, .student-card, .certificate');

        cards.forEach(card => {
            // Add 3D tilt effect on mouse move
            card.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ========================================
    // RIPPLE EFFECT ON BUTTONS
    // ========================================

    function initRippleEffect() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, button');

        buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');

                // Add ripple styling
                Object.assign(ripple.style, {
                    position: 'absolute',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.6)',
                    transform: 'scale(0)',
                    animation: 'ripple 0.6s ease-out',
                    pointerEvents: 'none'
                });

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });

            // Ensure button has position relative
            if (getComputedStyle(button).position === 'static') {
                button.style.position = 'relative';
            }
            button.style.overflow = 'hidden';
        });
    }

    // ========================================
    // NUMBER COUNTER ANIMATION
    // ========================================

    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.textContent = Math.floor(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target;
                            }
                        };
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }

    // ========================================
    // TOOLTIP ANIMATIONS
    // ========================================

    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');

        tooltipElements.forEach(element => {
            const tooltipText = element.getAttribute('data-tooltip');

            element.addEventListener('mouseenter', function (e) {
                const tooltip = document.createElement('div');
                tooltip.className = 'custom-tooltip';
                tooltip.textContent = tooltipText;
                tooltip.style.cssText = `
                    position: absolute;
                    background: rgba(0, 0, 0, 0.9);
                    color: white;
                    padding: 8px 12px;
                    border-radius: 6px;
                    font-size: 14px;
                    z-index: 10000;
                    pointer-events: none;
                    animation: fadeInUp 0.3s ease;
                    white-space: nowrap;
                `;

                document.body.appendChild(tooltip);

                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';

                this._tooltip = tooltip;
            });

            element.addEventListener('mouseleave', function () {
                if (this._tooltip) {
                    this._tooltip.remove();
                    this._tooltip = null;
                }
            });
        });
    }

    // ========================================
    // PARALLAX SCROLL EFFECT
    // ========================================

    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        window.addEventListener('scroll', () => {
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-parallax') || 0.5;
                const yPos = -(window.pageYOffset * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ========================================
    // LOADING ANIMATION
    // ========================================

    function initPageLoader() {
        // Add loader
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <i class="fas fa-graduation-cap icon-bounce" style="font-size: 3rem; color: var(--primary-color);"></i>
                <h3>Loading Easy Learn...</h3>
            </div>
        `;
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-color, #0f0f13);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            transition: opacity 0.5s ease;
        `;

        document.body.prepend(loader);

        window.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        });
    }

    // ========================================
    // MOBILE MENU TOGGLE (Shared across all pages)
    // ========================================

    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');

        // Skip if script.js already handles mobile menu (index.html)
        // We detect this by checking if the handler is already attached
        if (mobileMenuBtn && navLinks && !mobileMenuBtn.dataset.initialized) {
            mobileMenuBtn.dataset.initialized = 'true';

            mobileMenuBtn.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                // Toggle icon between bars and times
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            });

            // Close menu when clicking on a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function (e) {
                if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            });
        }
    }

    // ========================================
    // INITIALIZE ALL ANIMATIONS
    // ========================================

    document.addEventListener('DOMContentLoaded', function () {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion) {
            initScrollReveal();
            autoAnimateElements();
            initIconEffects();
            animateProgressBars();
            initCardEffects();
            initRippleEffect();
            animateCounters();
            initTooltips();
            initParallax();
        }

        // Mobile Menu Toggle (works on all pages)
        initMobileMenu();
    });

    // Optional: Show page loader
    // Uncomment to enable loading animation
    // initPageLoader();

})();

