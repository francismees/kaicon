/* ===========================
   COUNTERS.JS — Animated stat counters
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    function animateCounter(el) {
        const target = el.getAttribute('data-target');
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const isDecimal = target.includes('.');

        // Parse numeric part
        const numericTarget = parseFloat(target);
        const start = performance.now();

        function step(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericTarget * eased;
            el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        counterObserver.observe(el);
    });

});
