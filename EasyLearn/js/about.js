document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Quote Generator ---
    const quotes = [
        { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
        { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
        { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
        { text: "Investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
        { text: "Change is the end result of all true learning.", author: "Leo Buscaglia" }
    ];

    const quoteContainer = document.getElementById('quotes-container');
    if (quoteContainer) {
        // Create marquee content
        const marqueeContent = quotes.map(quote =>
            `<div class="quote-item">
                <i class="fas fa-quote-left"></i>
                <p>"${quote.text}"</p>
                <span>- ${quote.author}</span>
            </div>`
        ).join('');

        // Duplicate for seamless scroll
        quoteContainer.innerHTML = `<div class="quote-wrapper">${marqueeContent}${marqueeContent}</div>`;
    }

    // --- 2. Stats Counter Animation ---
    const stats = document.querySelectorAll('.stat-box h3');
    let statsAnimated = false;

    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps

            let current = 0;
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current) + "+";
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + "+";
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
    }, { threshold: 0.5 });

    if (stats.length > 0) {
        statsObserver.observe(stats[0].parentElement.parentElement);
    }

    // --- 3. Scroll Animations (Reveal on Scroll) ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 4. FAQ Toggle ---
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            parent.classList.toggle('active');

            // Close others (Accordion effect - optional)
            // faqItems.forEach(other => {
            //     if (other !== item) other.parentElement.classList.remove('active');
            // });
        });
    });

    // --- 5. Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 6. Side Navigation Dots ---
    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.nav-dot');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href').includes(current)) {
                dot.classList.add('active');
            }
        });
    });

    // --- 7. Parallax Effect ---
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            heroImg.style.transform = `translate(-${mouseX * 20}px, -${mouseY * 20}px) rotate(${mouseX * 5}deg)`;
        }

        const lottieBg = document.querySelector('.lottie-bg');
        if (lottieBg) {
            lottieBg.style.transform = `translate(-50%, -50%) translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        }
    });

    // --- 8. Skill Bar Animation ---
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scaleX(1)";
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

});
