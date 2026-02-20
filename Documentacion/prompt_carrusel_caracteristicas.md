# Prompt para Antigravity — Carrusel Interactivo Sección Características

---

## CONTEXTO

Tengo una landing page de AutoStock en HTML/CSS/JS vanilla. 
Quiero reemplazar únicamente la **Sección 3 — Características** 
por un carrusel interactivo con expansión de detalle, 
inspirado visualmente en el estilo Apple Cards Carousel, 
pero implementado 100% en HTML, CSS y JavaScript puro 
sin ninguna librería externa ni framework.

---

## QUÉ REEMPLAZAR

Eliminar completamente este bloque HTML de la Sección 3:

```html
<div class="features-grid">
  <div class="feature-card reveal"> ... </div>
  <!-- (las 6 tarjetas actuales) -->
</div>
```

Y también eliminar del CSS todos los estilos asociados:
`.features-grid`, `.feature-card`, `.feature-card:hover`, 
`.feature-card .icon`, `.feature-card .icon i`, 
`.feature-card h3`, `.feature-card p`
y sus media queries correspondientes.

Conservar intacto el `.section-header` con su título y subtítulo.

---

## COMPORTAMIENTO DEL CARRUSEL

### Vista normal (carrusel horizontal)
- Las 6 tarjetas se muestran en un carrusel deslizable horizontalmente
- En **desktop (1024px+):** mostrar 3 tarjetas visibles a la vez
- En **tablet (768px):** mostrar 2 tarjetas visibles
- En **mobile:** mostrar 1 tarjeta a la vez
- Botones de navegación ← → a los lados del carrusel, 
  color `#2DD4BF`, fondo `#111827`, circulares
- Indicadores de puntos debajo del carrusel, 
  punto activo en `#2DD4BF`, inactivos en `#374151`
- Soporte para swipe táctil en mobile

### Diseño de cada tarjeta (estado normal)
- Fondo: `#FFFFFF`
- Border-radius: `16px`
- Box-shadow: `0 4px 20px rgba(0,0,0,0.08)`
- Border-top: `3px solid transparent`
- La imagen ocupa la parte superior de la tarjeta 
  con height `200px`, `object-fit: cover`, 
  `border-radius: 16px 16px 0 0`
- Debajo de la imagen: ícono Bootstrap Icons + título + descripción corta
- Hover: `border-top-color: #2DD4BF`, 
  `box-shadow: 0 12px 40px rgba(45,212,191,0.2)`,
  `transform: translateY(-6px)`, transición `0.3s ease`
- Cursor `pointer` en toda la tarjeta

### Expansión al hacer click (panel de detalle)
- Al hacer click en una tarjeta, se abre un panel expandido 
  debajo del carrusel con animación suave (`0.4s ease`)
- El panel expandido tiene:
  - Fondo: `#111827`
  - Border-radius: `20px`
  - Border: `1px solid rgba(45,212,191,0.2)`
  - Padding: `40px`
  - Imagen a la izquierda (40% del ancho) con border-radius `12px`
  - Contenido a la derecha (60%): ícono grande + título + 
    descripción detallada + lista de características específicas
  - Botón de cerrar ✕ en la esquina superior derecha, 
    color `#2DD4BF`
- Si se hace click en otra tarjeta, el panel cambia su contenido
- Si se hace click en la misma tarjeta activa, el panel se cierra
- La tarjeta activa en el carrusel muestra 
  `border-top-color: #2DD4BF` permanentemente mientras está abierta

---

## LAS 6 TARJETAS — DATOS EXACTOS

Usar exactamente estos datos para cada tarjeta, 
en este orden, sin modificar textos:

### Tarjeta 1 — Dashboard
```
imagen:       assets/img/Dashboard.png
icono:        bi bi-graph-up-arrow
titulo:       Dashboard Inteligente
descripcion:  Resumen en tiempo real: entradas del día, bajo stock, alertas y KPIs clave del negocio.
detalle:      Visualiza de un vistazo el estado completo de tu inventario con indicadores en tiempo real.
caracteristicas:
  - KPIs del día: entradas, bajo stock y novedades
  - Alertas automáticas de productos críticos
  - Gráficas de rendimiento por período
  - Acceso rápido a los módulos más usados
```

### Tarjeta 2 — Entradas y Novedades
```
imagen:       assets/img/Entradas y Novedades.jfif
icono:        bi bi-arrow-down-up
titulo:       Entradas y Novedades
descripcion:  Control de ingresos de mercancía y registro de devoluciones, faltantes y ajustes de inventario.
detalle:      Registra y rastrea cada movimiento de mercancía con trazabilidad completa y sin errores.
caracteristicas:
  - Registro de entradas por bodega y proveedor
  - Gestión de devoluciones y faltantes
  - Historial detallado con fecha, usuario y observaciones
  - Notificaciones automáticas por novedades críticas
```

### Tarjeta 3 — Gestión de Productos
```
imagen:       assets/img/Gestión de Productos.jfif
icono:        bi bi-boxes
titulo:       Gestión de Productos
descripcion:  Registro, edición y clasificación de productos por categorías y bodegas con control de stock.
detalle:      Administra tu catálogo completo de productos con toda la información que tu negocio necesita.
caracteristicas:
  - Creación y edición de productos con imagen
  - Clasificación por categorías y bodegas
  - Control de stock mínimo y alertas de reposición
  - Filtros avanzados y búsqueda en tiempo real
```

### Tarjeta 4 — Integración con Bsale
```
imagen:       assets/img/Integración con Bsale.jfif
icono:        bi bi-plugin
titulo:       Integración con Bsale
descripcion:  Sincronización automática con el sistema de ventas para un inventario siempre actualizado.
detalle:      Conecta AutoStock con tu sistema de ventas Bsale y mantén el inventario siempre sincronizado.
caracteristicas:
  - Sincronización automática de ventas y stock
  - Actualización en tiempo real de cantidades
  - Gestión de precios y devoluciones integrada
  - API robusta para conexión fluida y segura
```

### Tarjeta 5 — Reportes e Informes
```
imagen:       assets/img/Reportes e Informes.jfif
icono:        bi bi-file-earmark-bar-graph
titulo:       Reportes e Informes
descripcion:  Exportación en PDF, Excel y CSV. Kardex, auditoría y análisis de performance del inventario.
detalle:      Genera reportes completos de tu inventario en los formatos que necesitas, cuando los necesitas.
caracteristicas:
  - Informes diarios, semanales, mensuales y anuales
  - Exportación en PDF, Excel y CSV
  - Kardex completo por producto
  - Registro de auditoría con historial de acciones
```

### Tarjeta 6 — Usuarios y Roles
```
imagen:       assets/img/Usuarios y Roles.jfif
icono:        bi bi-people
titulo:       Usuarios y Roles
descripcion:  Acceso diferenciado por rol con permisos granulares para cada área de la empresa.
detalle:      Controla quién puede ver y hacer qué dentro del sistema con un manejo de roles flexible y seguro.
caracteristicas:
  - Creación de roles personalizados con permisos granulares
  - Invitación de usuarios por correo electrónico
  - Activación y desactivación de cuentas
  - Registro de acciones por usuario en auditoría
```

---

## PALETA DE COLORES A RESPETAR

Usar exclusivamente las variables CSS ya definidas en el archivo:
```css
--color-bg:         #FFFFFF
--color-dark:       #111827
--color-accent:     #2DD4BF
--color-dark-alt:   #1F2937
--color-gray-light: #F3F4F6
```

---

## CSS — NUEVAS CLASES A AGREGAR

Agregar al bloque de estilos de la Sección 3 
las siguientes clases nuevas. No tocar ningún otro CSS:

```
.features-carousel      → contenedor del carrusel con overflow hidden
.carousel-track         → fila deslizable con transition transform 0.4s ease
.carousel-item          → cada tarjeta del carrusel
.carousel-img           → imagen superior de la tarjeta
.carousel-body          → contenido inferior (icono + titulo + desc)
.carousel-nav           → contenedor de botones ← →
.carousel-btn           → botón circular de navegación
.carousel-dots          → contenedor de puntos indicadores
.carousel-dot           → cada punto indicador
.carousel-dot.active    → punto activo en color accent
.feature-detail         → panel expandido debajo del carrusel
.feature-detail.open    → panel visible con animación
.detail-img             → imagen dentro del panel expandido
.detail-content         → contenido textual del panel
.detail-features        → lista de características del módulo
.detail-close           → botón cerrar ✕
.carousel-item.active   → tarjeta seleccionada actualmente
```

---

## JS — LÓGICA A IMPLEMENTAR

Agregar al final del archivo, antes del `</script>` de cierre 
o en `js/animations.js` si el proyecto ya fue separado.

La lógica debe incluir:

1. **Inicialización:** calcular cuántas tarjetas mostrar según el ancho de pantalla
2. **Navegación:** botones ← → desplazan el carrusel actualizando `transform: translateX()`
3. **Puntos indicadores:** se actualizan con cada movimiento del carrusel
4. **Click en tarjeta:** abre el panel de detalle con el contenido correspondiente, 
   cierra si se vuelve a clickear la misma
5. **Swipe táctil:** detectar `touchstart` y `touchend` para mobile
6. **Resize:** recalcular tarjetas visibles si la ventana cambia de tamaño
7. **Accesibilidad:** botones con `aria-label`, panel con `role="region"`

---

## REGLAS IMPORTANTES

- No modificar ninguna otra sección de la página
- No usar ninguna librería externa (ni jQuery, ni Swiper, ni nada)
- Todo en HTML/CSS/JS vanilla puro
- Respetar al 100% la paleta de colores y tipografías ya definidas
- El carrusel debe verse y sentirse premium, fluido y profesional
- Las imágenes `.jfif` deben tratarse igual que `.png`, 
  son formatos soportados por todos los navegadores modernos

---

*AutoStock — SENA, Análisis y Desarrollo de Software (ADSO) | 2026*
