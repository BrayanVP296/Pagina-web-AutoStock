/* ============================================================
   AUTOSTOCK — Animations
   Controla las animaciones de entrada al hacer scroll.
   Usa IntersectionObserver para activar la clase .visible
   en todos los elementos con clase .reveal.
   ============================================================ */

/* ============================================================
   SCROLL-REVEAL  (Intersection Observer)
   ============================================================ */
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));
