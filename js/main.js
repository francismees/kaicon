/* ===========================
   MAIN.JS — Navbar, Mobile Menu, Back to Top
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    // ── NAVBAR SCROLL BEHAVIOUR ──────────────────────
    const navbar = document.querySelector('.navbar');
    const isHeroPage = document.querySelector('.hero-section');

    function updateNavbar() {
        if (!navbar) return;
        if (isHeroPage) {
            if (window.scrollY > 60) {
                navbar.classList.replace('transparent', 'solid');
            } else {
                navbar.classList.replace('solid', 'transparent');
            }
        } else {
            navbar.classList.add('solid');
        }
    }

    if (navbar) {
        navbar.classList.add(isHeroPage ? 'transparent' : 'solid');
        window.addEventListener('scroll', updateNavbar, { passive: true });
        updateNavbar();
    }

    // ── MOBILE MENU ──────────────────────────────────
    const toggle = document.querySelector('.navbar__toggle');
    const mobileMenu = document.querySelector('.navbar__mobile');

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Animate hamburger
            const spans = toggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                mobileMenu.classList.remove('open');
                const spans = toggle.querySelectorAll('span');
                spans.forEach(s => s.style.transform = s.style.opacity = '');
            }
        });
    }

    // ── ACTIVE NAV LINK ──────────────────────────────
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ── BACK TO TOP ──────────────────────────────────
    const btt = document.querySelector('.back-to-top');
    if (btt) {
        window.addEventListener('scroll', () => {
            btt.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        btt.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});
