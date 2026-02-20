/* ============================================================
   AUTOSTOCK — Navbar
   Controla el comportamiento interactivo de la barra
   de navegación: sombra al scroll y menú hamburguesa mobile.
   ============================================================ */

/* ============================================================
   NAVBAR — Shadow on scroll
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const hamburgerIcon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburgerIcon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
  hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburgerIcon.className = 'bi bi-list';
  });
});
