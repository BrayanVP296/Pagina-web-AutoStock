/* ============================================================
   AUTOSTOCK — Animations
   Controla las animaciones de entrada al hacer scroll.
   Usa IntersectionObserver para activar la clase .visible
   en todos los elementos con clase .reveal.
   ============================================================ */

/* ============================================================
   SCROLL-REVEAL  (Intersection Observer)
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;

            // Check if it's part of a staggered group
            if (el.hasAttribute('data-stagger')) {
                const delay = el.getAttribute('data-stagger') * 150;
                setTimeout(() => {
                    el.classList.add('visible');
                }, delay);
            } else {
                el.classList.add('visible');
            }

            revealObserver.unobserve(el);
        }
    });
}, { threshold: 0.15 });

const initReveal = () => {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
};

// Run on load and after a short delay to catch dynamic items
document.addEventListener('DOMContentLoaded', initReveal);
window.addEventListener('load', initReveal);

// Fallback for very late dynamic items
setTimeout(initReveal, 1000);
