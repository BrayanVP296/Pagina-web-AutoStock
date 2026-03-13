/* ============================================================
   AUTOSTOCK — Carousel
   Controla el carrusel interactivo de la Sección 3:
   navegación, puntos indicadores, swipe táctil,
   expansión de detalle y respuesta al resize.
   ============================================================ */

(function () {
    /* ---- Data ---- */
    const cardsData = [
        {
            img: 'assets/img/Dashboard.png',
            icon: 'bi bi-graph-up-arrow',
            title: 'Dashboard Inteligente',
            desc: 'Resumen en tiempo real: entradas del día, bajo stock, alertas y KPIs clave del negocio.',
            detail: 'Visualiza de un vistazo el estado completo de tu inventario con indicadores en tiempo real.',
            features: [
                'KPIs del día: entradas, bajo stock y novedades',
                'Alertas automáticas de productos críticos',
                'Gráficas de rendimiento por período',
                'Acceso rápido a los módulos más usados'
            ]
        },
        {
            img: 'assets/img/Entradas y Novedades.jfif',
            icon: 'bi bi-arrow-down-up',
            title: 'Entradas y Novedades',
            desc: 'Control de ingresos de mercancía y registro de devoluciones, faltantes y ajustes de inventario.',
            detail: 'Registra y rastrea cada movimiento de mercancía con trazabilidad completa y sin errores.',
            features: [
                'Registro de entradas por bodega y proveedor',
                'Gestión de devoluciones y faltantes',
                'Historial detallado con fecha, usuario y observaciones',
                'Notificaciones automáticas por novedades críticas'
            ]
        },
        {
            img: 'assets/img/Gestión de Productos.jfif',
            icon: 'bi bi-boxes',
            title: 'Gestión de Productos',
            desc: 'Registro, edición y clasificación de productos por categorías y bodegas con control de stock.',
            detail: 'Administra tu catálogo completo de productos con toda la información que tu negocio necesita.',
            features: [
                'Creación y edición de productos con imagen',
                'Clasificación por categorías y bodegas',
                'Control de stock mínimo y alertas de reposición',
                'Filtros avanzados y búsqueda en tiempo real'
            ]
        },
        {
            img: 'assets/img/Integración con Bsale.jfif',
            icon: 'bi bi-plugin',
            title: 'Integración con Bsale',
            desc: 'Sincronización automática con el sistema de ventas para un inventario siempre actualizado.',
            detail: 'Conecta AutoStock con tu sistema de ventas Bsale y mantén el inventario siempre sincronizado.',
            features: [
                'Sincronización automática de ventas y stock',
                'Actualización en tiempo real de cantidades',
                'Gestión de precios y devoluciones integrada',
                'API robusta para conexión fluida y segura'
            ]
        },
        {
            img: 'assets/img/Reportes e Informes.jfif',
            icon: 'bi bi-file-earmark-bar-graph',
            title: 'Reportes e Informes',
            desc: 'Exportación en PDF, Excel y CSV. Kardex, auditoría y análisis de performance del inventario.',
            detail: 'Genera reportes completos de tu inventario en los formatos que necesitas, cuando los necesitas.',
            features: [
                'Informes diarios, semanales, mensuales y anuales',
                'Exportación en PDF, Excel y CSV',
                'Kardex completo por producto',
                'Registro de auditoría con historial de acciones'
            ]
        },
        {
            img: 'assets/img/Usuarios y Roles.jfif',
            icon: 'bi bi-people',
            title: 'Usuarios y Roles',
            desc: 'Acceso diferenciado por rol con permisos granulares para cada área de la empresa.',
            detail: 'Controla quién puede ver y hacer qué dentro del sistema con un manejo de roles flexible y seguro.',
            features: [
                'Creación de roles personalizados con permisos granulares',
                'Invitación de usuarios por correo electrónico',
                'Activación y desactivación de cuentas',
                'Registro de acciones por usuario en auditoría'
            ]
        }
    ];

    /* ---- DOM refs ---- */
    const track = document.getElementById('carouselTrack');
    const dotsContainer = document.getElementById('carouselDots');
    const btnPrev = document.getElementById('carouselPrev');
    const btnNext = document.getElementById('carouselNext');
    const detailPanel = document.getElementById('featureDetail');

    if (!track) return; // guard

    let currentIndex = 0;
    let activeCard = -1; // index of expanded card, -1 = none

    /* ---- Helpers ---- */
    function getVisibleCount() {
        const w = window.innerWidth;
        if (w >= 1024) return 3;
        if (w >= 768) return 2;
        return 1;
    }

    function getMaxIndex() {
        return Math.max(0, cardsData.length - getVisibleCount());
    }

    /* ---- Build cards ---- */
    function buildCards() {
        track.innerHTML = '';
        cardsData.forEach((card, i) => {
            const el = document.createElement('div');
            el.className = 'carousel-item reveal glow-on-hover';
            el.setAttribute('data-index', i);
            el.setAttribute('data-stagger', (i % 3) + 1); // Stagger by 3s since 3 are usually visible
            el.innerHTML = `
        <img class="carousel-img" src="${card.img}" alt="${card.title}" loading="lazy">
        <div class="carousel-body">
          <div class="carousel-icon"><i class="${card.icon}"></i></div>
          <h3>${card.title}</h3>
          <p>${card.desc}</p>
        </div>
      `;
            el.addEventListener('click', () => toggleDetail(i));
            track.appendChild(el);
        });
    }

    /* ---- Build dots ---- */
    function buildDots() {
        dotsContainer.innerHTML = '';
        const maxI = getMaxIndex();
        for (let i = 0; i <= maxI; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', `Ir al grupo ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    }

    /* ---- Move ---- */
    function goTo(index) {
        const maxI = getMaxIndex();
        currentIndex = Math.max(0, Math.min(index, maxI));
        updatePosition();
        updateDots();
        updateButtons();
    }

    function updatePosition() {
        const itemWidth = 100 / getVisibleCount();
        track.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    function updateButtons() {
        btnPrev.disabled = currentIndex === 0;
        btnNext.disabled = currentIndex >= getMaxIndex();
        btnPrev.style.opacity = currentIndex === 0 ? '0.35' : '1';
        btnNext.style.opacity = currentIndex >= getMaxIndex() ? '0.35' : '1';
    }

    /* ---- Detail panel ---- */
    function toggleDetail(index) {
        const items = track.querySelectorAll('.carousel-item');

        if (activeCard === index) {
            // close
            detailPanel.classList.remove('open');
            items[index].classList.remove('active');
            activeCard = -1;
            return;
        }

        // remove previous active
        if (activeCard >= 0) items[activeCard].classList.remove('active');

        activeCard = index;
        items[index].classList.add('active');
        const card = cardsData[index];

        detailPanel.innerHTML = `
      <button class="detail-close" aria-label="Cerrar detalle">
        <i class="bi bi-x-lg"></i>
      </button>
      <div class="detail-grid">
        <img class="detail-img" src="${card.img}" alt="${card.title}">
        <div class="detail-content">
          <div class="detail-icon"><i class="${card.icon}"></i></div>
          <h3>${card.title}</h3>
          <p>${card.detail}</p>
          <ul class="detail-features">
            ${card.features.map(f => `<li><i class="bi bi-check-circle-fill"></i>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

        detailPanel.classList.add('open');

        detailPanel.querySelector('.detail-close').addEventListener('click', () => {
            detailPanel.classList.remove('open');
            items[activeCard].classList.remove('active');
            activeCard = -1;
        });

        // Scroll detail into view smoothly
        setTimeout(() => detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }

    /* ---- Nav buttons ---- */
    btnPrev.addEventListener('click', () => goTo(currentIndex - 1));
    btnNext.addEventListener('click', () => goTo(currentIndex + 1));

    /* ---- Swipe support ---- */
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goTo(currentIndex + 1);
            else goTo(currentIndex - 1);
        }
    }, { passive: true });

    /* ---- Resize ---- */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
            buildDots();
            updatePosition();
            updateButtons();
        }, 150);
    });

    /* ---- Init ---- */
    buildCards();
    buildDots();
    updatePosition();
    updateButtons();
})();
