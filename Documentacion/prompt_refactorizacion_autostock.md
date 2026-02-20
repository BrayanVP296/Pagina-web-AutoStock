# Prompt para Antigravity — Refactorización de AutoStock Landing Page

---

Toma el archivo `index.html` de AutoStock y reorganízalo en la siguiente 
estructura de carpetas y archivos profesional, sin modificar absolutamente 
ninguna línea de código existente. Solo mover, separar y enlazar correctamente.

---

## ESTRUCTURA DE CARPETAS A CREAR

```
autostock-landing/
├── index.html
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── components.css
│   └── sections.css
├── js/
│   ├── navbar.js
│   └── animations.js
└── assets/
    └── img/
        └── logo.png          ← mover aquí el logo.png original
```

---

## INSTRUCCIONES EXACTAS POR ARCHIVO

### 📄 index.html
- Eliminar la etiqueta `<style>` completa y todo su contenido (líneas 18–782)
- Eliminar la etiqueta `<script>` completa y todo su contenido (líneas 1084–1128)
- Actualizar la ruta del logo: cambiar `src="logo.png"` por `src="assets/img/logo.png"`
- Actualizar la ruta del favicon: cambiar `href="logo.png"` por `href="assets/img/logo.png"`
- En el `<head>`, después de los CDN externos, agregar los enlaces CSS en este orden exacto:
```html
<!-- Estilos AutoStock -->
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/sections.css">
```
- Antes del cierre `</body>`, agregar los scripts en este orden:
```html
<!-- Scripts AutoStock -->
<script src="js/navbar.js"></script>
<script src="js/animations.js"></script>
```
- El resto del HTML queda 100% intacto, sin tocar ningún elemento, clase ni id.

---

### 🎨 css/variables.css
Extraer únicamente el bloque de variables CSS (líneas 19–37 del `<style>` original):

```css
/* ============================================================
   AUTOSTOCK — Variables globales
   Paleta de colores, tipografía y tokens de diseño.
   Modificar aquí afecta toda la interfaz.
   ============================================================ */

:root {
  /* Colores principales */
  --color-bg:         #FFFFFF;
  --color-dark:       #111827;
  --color-accent:     #2DD4BF;
  --color-dark-alt:   #1F2937;
  --color-deep:       #345253;
  --color-gray-light: #F3F4F6;

  /* Colores de estado */
  --color-success:    #09B423;
  --color-warning:    #B45309;
  --color-error:      #B40909;
  --color-info:       #3B82F6;
  --color-black:      #000000;

  /* Tipografía */
  --font-heading: 'Inter', 'Roboto', sans-serif;
  --font-body:    'DM Sans', 'Roboto', sans-serif;
}
```

---

### 🎨 css/base.css
Extraer los bloques: Reset & Globals + Keyframe Animations (líneas 39–81 del `<style>` original).

Agregar este encabezado de comentario al inicio del archivo:
```css
/* ============================================================
   AUTOSTOCK — Base
   Reset global, estilos generales del documento y
   todas las animaciones @keyframe reutilizables.
   ============================================================ */
```
Luego pegar el contenido extraído sin modificar nada.

---

### 🎨 css/components.css
Extraer los estilos de los componentes reutilizables que aparecen en más de una sección:
- `.container`
- `.section-header` y `.section-header h2` y `.section-header p`
- `.btn-primary` y `.btn-primary:hover`
- `.btn-secondary` y `.btn-secondary:hover`
- `.btn-cta-nav` y `.btn-cta-nav:hover`
- `.btn-cta-big` y `.btn-cta-big:hover`
- `.reveal` y `.reveal.visible`

Agregar este encabezado al inicio del archivo:
```css
/* ============================================================
   AUTOSTOCK — Componentes reutilizables
   Estilos de elementos que se repiten en múltiples secciones:
   contenedor, botones, encabezados de sección y utilidades.
   ============================================================ */
```
Luego pegar todos los bloques extraídos sin modificar nada.

---

### 🎨 css/sections.css
Extraer todos los estilos específicos de cada sección de la página.
Deben ir en este orden, manteniendo sus comentarios originales:

1. `/* SECTION 1 — NAVBAR */` → `.navbar`, `.navbar.scrolled`, `.navbar .container`, `.navbar-brand`, `.nav-links`, `.hamburger` y sus media queries
2. `/* SECTION 2 — HERO */` → `.hero`, `.hero::before`, `.hero::after`, `.hero-grid`, `.hero-badge`, `.hero-title`, `.hero-desc`, `.hero-buttons`, `.hero-stats`, `.hero-stat`, `.hero-mockup`, `.dashboard-card`, `.dash-sidebar`, `.dash-main`, `.dash-header`, `.dash-kpis`, `.dash-kpi` y sus variantes y media queries
3. `/* SECTION 3 — CARACTERÍSTICAS */` → `.features`, `.features-grid`, `.feature-card` y sus media queries
4. `/* SECTION 4 — TECNOLOGÍAS */` → `.tech`, `.tech-grid`, `.tech-pill`, `.tech-pill .emoji`, `.tech-pill .tech-info` y sus media queries
5. `/* SECTION 5 — EQUIPO */` → `.team`, `.team-grid`, `.team-card`, `.team-avatar`, `.team-tags`, `.team-footer` y sus media queries
6. `/* SECTION 6 — CTA FINAL */` → `.cta-section`, `.cta-section::before`, `.cta-section h2`, `.cta-sub` y sus media queries
7. `/* SECTION 7 — FOOTER */` → `.footer`, `.footer .container`, `.footer-brand`, `.footer-copy`, `.footer-links` y sus media queries

Agregar este encabezado al inicio del archivo:
```css
/* ============================================================
   AUTOSTOCK — Secciones
   Estilos específicos de cada sección de la landing page.
   Para modificar una sección específica, buscar su bloque aquí.
   ============================================================ */
```

---

### ⚙️ js/navbar.js
Extraer los dos primeros bloques del `<script>` original: 
"NAVBAR — Shadow on scroll" y "HAMBURGER MENU" (incluyendo el cierre del menú al hacer click en un link).

Agregar este encabezado al inicio del archivo:
```js
/* ============================================================
   AUTOSTOCK — Navbar
   Controla el comportamiento interactivo de la barra
   de navegación: sombra al scroll y menú hamburguesa mobile.
   ============================================================ */
```
Luego pegar el código extraído sin modificar nada.

---

### ⚙️ js/animations.js
Extraer el tercer bloque del `<script>` original: 
"SCROLL-REVEAL (Intersection Observer)".

Agregar este encabezado al inicio del archivo:
```js
/* ============================================================
   AUTOSTOCK — Animations
   Controla las animaciones de entrada al hacer scroll.
   Usa IntersectionObserver para activar la clase .visible
   en todos los elementos con clase .reveal.
   ============================================================ */
```
Luego pegar el código extraído sin modificar nada.

---

## REGLAS GENERALES — MUY IMPORTANTE

1. **No modificar ningún código.** Solo mover contenido a su archivo correspondiente.
2. **No agregar ni eliminar ningún selector, propiedad, valor o línea de JavaScript.**
3. **Conservar todos los comentarios originales** dentro de cada archivo.
4. **El resultado debe verse y funcionar exactamente igual** que el index.html original.
5. **Entregar todos los archivos completos** y listos para usar, uno por uno.
6. Entregar en este orden: `index.html` → `variables.css` → `base.css` → `components.css` → `sections.css` → `navbar.js` → `animations.js`

---

*AutoStock — SENA, Análisis y Desarrollo de Software (ADSO) | 2026*
