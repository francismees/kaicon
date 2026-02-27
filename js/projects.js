/* ===========================
   PROJECTS.JS — Portfolio filtering
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-filter');
            cards.forEach(card => {
                const show = cat === 'all' || card.getAttribute('data-category') === cat;
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                if (show) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.pointerEvents = 'auto';
                    card.parentElement.style.display = '';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    card.style.pointerEvents = 'none';
                    setTimeout(() => {
                        if (card.getAttribute('data-category') !== cat && cat !== 'all') {
                            card.parentElement.style.display = 'none';
                        }
                    }, 350);
                }
            });
        });
    });

});
