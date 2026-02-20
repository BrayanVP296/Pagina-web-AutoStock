# AUTOSTOCK — Documento de Requisitos: Landing Page Web
**Versión:** 1.0 | **Fecha:** Febrero 2026

| Campo | Detalle |
|---|---|
| **Proyecto** | AutoStock — Landing Page Web |
| **Tipo de Documento** | Documento de Requisitos de Diseño y Desarrollo |
| **Versión** | 1.0 |
| **Fecha** | Febrero 2026 |
| **Autores** | Pedro Daniel Pirachican Vargas / Brayan Ricardo Vera Parra |
| **Institución** | SENA — Análisis y Desarrollo de Software (ADSO), Tunja, Colombia |
| **Objetivo del sitio** | Atraer y convertir clientes/empresas interesadas en adoptar AutoStock |

---

## 1. Introducción y Contexto del Proyecto

AutoStock es un sistema web profesional de gestión de inventarios diseñado para pequeñas y medianas empresas del sector mercantil. Su objetivo es automatizar y centralizar procesos como el control de entradas y salidas de mercancía, registro de novedades, gestión de proveedores, administración de bodegas, definición de roles y usuarios, y clasificación de productos por categorías.

El presente documento define los requisitos completos de diseño, contenido y desarrollo para la Landing Page oficial de AutoStock, cuyo propósito principal es **atraer y convertir clientes y empresas interesadas** en adoptar el sistema como su solución de gestión de inventarios.

### 1.1 Stack Tecnológico del Sistema

- **Frontend:** React.js (interfaz reactiva y moderna)
- **Backend:** FastAPI con Python (rápido y escalable)
- **Base de datos:** MySQL (relacional y robusta)
- **Integración externa:** API de Bsale (sincronización con sistema de ventas)
- **Arquitectura:** Modular, multi-tenancy, acceso por roles y JWT

---

## 2. Objetivo de la Landing Page

La Landing Page de AutoStock es una página web de presentación de **una sola página (single-page)** cuyo objetivo es:

- Presentar el sistema AutoStock de forma profesional y atractiva a empresas potenciales.
- Transmitir confianza tecnológica, eficiencia operativa y modernidad.
- Generar interés y captar leads mediante un llamado a la acción (CTA) de solicitud de demo.
- Mostrar las capacidades reales del sistema, su equipo de desarrollo y tecnologías utilizadas.

---

## 3. Identidad Visual — Requisitos Estrictos de Diseño

La identidad visual de la Landing Page debe respetar estrictamente los lineamientos definidos en la Plantilla de Elementos de Interfaz de AutoStock.

### 3.1 Paleta de Colores

| Nombre | HEX | Uso |
|---|---|---|
| Blanco (Fondo Principal) | `#FFFFFF` | Fondo base de la interfaz, limpieza visual |
| Azul Oscuro (Primario) | `#111827` | Headers, navbar, fondos de sección oscura, texto destacado |
| Cyan-Verde (Acento) | `#2DD4BF` | Botones CTA, highlights, bordes activos, acentos |
| Azul Grisáceo (Texto) | `#1F2937` | Textos de cuerpo, párrafos principales |
| Verde Azulado (Secundario) | `#345253` | Textos secundarios, subtítulos |
| Gris Claro (Fondo Alterno) | `#F3F4F6` | Secciones de fondo alterno |
| Verde (Éxito) | `#09B423` | Estados de confirmación y éxito |
| Naranja (Advertencia) | `#B45309` | Estados de advertencia o precaución |
| Rojo (Error) | `#B40909` | Estados de error o alerta crítica |
| Azul (Información) | `#3B82F6` | Mensajes informativos, badges |

### 3.2 Tipografía

Importar desde **Google Fonts** las siguientes familias:

| Fuente | Uso | Tamaños | Color |
|---|---|---|---|
| Inter / Roboto | Títulos H1 / H2 | H1: 32–40px \| H2: 24–28px | `#111827` o `#2DD4BF` según contexto |
| Inter / Roboto | Subtítulos H3 | 16–20px | `#111827`, `#2DD4BF` o gris |
| Roboto / Lato / DM Sans | Cuerpo de texto | 14–18px (párrafo) \| 12–14px (legal) | `#000000` o gris claro según fondo |

### 3.3 Logo AutoStock

- El texto **"Auto"** va en color azul oscuro `#111827`; el texto **"Stock"** en cyan `#2DD4BF`.
- El ícono integra: caja 3D en azul oscuro, trazos de circuito electrónico y flecha diagonal en cyan.
- El logo debe aparecer en la **Navbar** y en el **Hero**. Usar el archivo `logo.png` proporcionado.
- En contexto de fondo oscuro (navbar, hero), usar la variante con "Auto" en **blanco** y "Stock" en cyan.

### 3.4 Íconos

- **Biblioteca:** Bootstrap Icons v1.11.3
- **CDN:** `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css`
- **Color principal de íconos de acento:** `#2DD4BF`

### 3.5 Variables CSS Globales

Definir en `:root` para consistencia en todo el archivo:

```css
:root {
  --color-bg:         #FFFFFF;
  --color-dark:       #111827;
  --color-accent:     #2DD4BF;
  --color-dark-alt:   #1F2937;
  --color-deep:       #345253;
  --color-gray-light: #F3F4F6;
  --color-success:    #09B423;
  --color-warning:    #B45309;
  --color-error:      #B40909;
  --color-info:       #3B82F6;
  --color-black:      #000000;
}
```

---

## 4. Arquitectura y Requisitos Técnicos

### 4.1 Tecnología de Implementación

- Implementación: **HTML5 + CSS3 + JavaScript Vanilla** en un único archivo `index.html`
- Sin dependencias de npm. El archivo debe funcionar directamente al abrirlo en el navegador.
- CDN permitidos: Google Fonts, Bootstrap Icons CDN
- Semántica HTML5 correcta: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Accesibilidad básica: atributos `alt` en imágenes, `aria-label` en botones interactivos, contraste WCAG AA

### 4.2 Diseño Responsive

- Enfoque **Mobile-First**
- Breakpoints: `768px` (tablet) y `1024px` (desktop)
- Columnas adaptativas: 1 columna en mobile, 2 en tablet, hasta 3 en desktop
- Navbar debe colapsar en menú hamburguesa en mobile

### 4.3 Animaciones y Microinteracciones

- **Navbar:** aparición de sombra suave al hacer scroll (JavaScript, activar al pasar 50px)
- **Hero:** animación de entrada con `fade-in + slide-up` (CSS keyframes, staggered con `animation-delay`)
- **Tarjetas de módulos:** hover con transición suave `0.3s ease` — elevación de sombra y borde cyan
- **Scroll suave:** `scroll-behavior: smooth` en el CSS global
- **Botón CTA principal:** efecto hover con `scale(1.05)` y brillo aumentado
- **Mockup del dashboard:** efecto de perspectiva 3D (`transform: perspective(1000px) rotateY(-5deg)`)

---

## 5. Estructura y Requisitos por Sección

La Landing Page está compuesta por **7 secciones obligatorias** en el siguiente orden:

---

### SECCIÓN 1 — Navbar (Barra de Navegación Fija)

| Campo | Detalle |
|---|---|
| **Fondo** | `#111827` (azul oscuro) |
| **Objetivo** | Orientar al usuario y ofrecer acceso rápido al CTA principal |
| **Layout** | Horizontal, sticky, ancho completo. Logo izq. · Links centro · Botón CTA der. |
| **Animación** | Sombra suave (`box-shadow`) activada con JavaScript al hacer scroll > 50px |

**Especificaciones de componentes:**

- **Logo:** "Auto" en blanco, "Stock" en `#2DD4BF` sobre fondo oscuro. Usar `logo.png`
- **Links de navegación:** `Inicio` · `Características` · `Tecnologías` · `Equipo` — color `#FFFFFF`, hover en `#2DD4BF`, transición `0.2s`
- **Botón CTA "Solicitar Demo":** fondo `#2DD4BF`, texto `#111827`, `border-radius: 8px`, `padding: 10px 20px`
- **Hover del botón:** `box-shadow: 0 4px 15px rgba(45,212,191,0.4)`, brillo aumentado
- **Mobile (<768px):** links colapsados en menú hamburguesa (ícono `bi-list` de Bootstrap Icons)

---

### SECCIÓN 2 — Hero (Portada Principal)

| Campo | Detalle |
|---|---|
| **Fondo** | Gradiente `#111827` → `#1F2937` con patrón grid/circuito en `#2DD4BF` al 8% de opacidad |
| **Objetivo** | Impactar de inmediato. Transmitir tecnología, eficiencia y modernidad al primer vistazo |
| **Layout** | Dos columnas: Izquierda 60% (texto y CTAs) · Derecha 40% (mockup flotante del dashboard) |
| **Animación** | Fade-in + slide-up staggered al cargar (CSS keyframes). Mockup con perspectiva 3D |

#### Columna izquierda — Contenido:

- **Badge/chip:** `⚡ Sistema Inteligente de Inventarios` — fondo `rgba(45,212,191,0.15)`, texto `#2DD4BF`, `border-radius: 20px`
- **H1 línea 1:** `"Automatiza tu inventario,"` — color `#FFFFFF`, 40px, bold
- **H1 línea 2:** `"escala tu negocio."` — color `#2DD4BF`, 40px, bold
- **Párrafo:** `"AutoStock es el sistema web que centraliza, automatiza y optimiza la gestión de inventarios para PYMEs. Menos errores, más control, mayor rentabilidad."` — gris claro, 18px
- **Botón primario:** `"Solicitar Demo"` — fondo `#2DD4BF`, texto `#111827`, bold
- **Botón secundario:** `"Ver Características"` — `border: 2px solid #2DD4BF`, texto blanco, fondo transparente

#### Métricas estadísticas (fila horizontal debajo de los botones):

| Métrica | Descripción |
|---|---|
| `📦 5 Módulos` | número en `#2DD4BF`, descripción en gris claro |
| `⚡ Tiempo Real` | número en `#2DD4BF` |
| `🔗 Integración Bsale` | en `#2DD4BF` |
| `🔒 Acceso por Roles` | en `#2DD4BF` |

#### Mockup del dashboard (columna derecha):

- Tarjeta simulada con mini sidebar lateral izquierda (íconos Bootstrap Icons)
- Mini KPIs: Productos · Entradas hoy · Bajo Stock · Novedades — con números ficticios
- Colores del mockup: usar paleta oficial del sistema
- Efecto visual: `box-shadow` pronunciada, `border-radius: 16px`, `transform: perspective(1000px) rotateY(-5deg)`
- Animación de entrada: slide desde la derecha con fade-in, `animation-delay: 0.4s`

---

### SECCIÓN 3 — Características y Módulos

| Campo | Detalle |
|---|---|
| **Fondo** | `#F3F4F6` (gris muy claro) |
| **Objetivo** | Mostrar el valor real del sistema con los módulos reales de AutoStock |
| **Layout** | Grid 3×2 desktop · 2×3 tablet · 1 columna mobile. Título y subtítulo centrados arriba |
| **Animación** | Hover: elevación `box-shadow` + borde superior en `#2DD4BF` (`0.3s ease`) |

**Título de sección:**
- H2: `"Todo lo que necesitas, en un solo sistema"` — centrado, `#111827`
- Subtítulo: `"AutoStock organiza tu negocio por módulos inteligentes e interconectados"` — gris, centrado

**Las 6 tarjetas de módulos (datos reales del sistema):**

| Ícono Bootstrap Icons | Módulo | Descripción de la tarjeta |
|---|---|---|
| `bi-boxes` | **Gestión de Productos** | Registro, edición y clasificación de productos por categorías y bodegas con control de stock. |
| `bi-arrow-down-up` | **Entradas y Novedades** | Control de ingresos de mercancía y registro de devoluciones, faltantes y ajustes de inventario. |
| `bi-graph-up-arrow` | **Dashboard Inteligente** | Resumen en tiempo real: entradas del día, bajo stock, alertas y KPIs clave del negocio. |
| `bi-people` | **Usuarios y Roles** | Acceso diferenciado por rol con permisos granulares para cada área de la empresa. |
| `bi-file-earmark-bar-graph` | **Reportes e Informes** | Exportación en PDF, Excel y CSV. Kardex, auditoría y análisis de performance del inventario. |
| `bi-plugin` | **Integración con Bsale** | Sincronización automática con el sistema de ventas para un inventario siempre actualizado. |

**Diseño de tarjetas:**
- Fondo: `#FFFFFF`, `border-radius: 12px`, `box-shadow: 0 2px 12px rgba(0,0,0,0.08)`
- Ícono Bootstrap centrado arriba, tamaño 36px, color `#2DD4BF`
- Título: bold, 18px, `#111827`
- Descripción: 14px, `#6B7280`
- Hover: `box-shadow` aumentada + `border-top: 3px solid #2DD4BF`

---

### SECCIÓN 4 — Tecnologías Utilizadas

| Campo | Detalle |
|---|---|
| **Fondo** | `#111827` (oscuro — contrasta con sección anterior) |
| **Objetivo** | Transmitir credibilidad técnica y modernidad |
| **Layout** | Grid 3 columnas desktop · 2 tablet · 1 mobile. Título centrado arriba |
| **Animación** | Hover: brillo de borde y leve elevación |

**Título de sección:**
- H2: `"Construido con tecnología de punta"` — blanco, centrado
- Subtítulo: `"Un stack moderno, escalable y seguro para gestionar tu inventario"` — gris claro

**Las 6 tecnologías a mostrar:**

| Tecnología | Rol | Descripción para el usuario |
|---|---|---|
| `⚛️ React.js` | Frontend | Interfaz moderna, reactiva y fluida para una experiencia de usuario óptima. |
| `🐍 FastAPI (Python)` | Backend | API REST rápida y escalable que potencia toda la lógica del sistema. |
| `🗄️ MySQL` | Base de datos | Almacenamiento relacional robusto, confiable y optimizado para consultas complejas. |
| `🔗 Bsale API` | Integración externa | Sincronización automática con el sistema de ventas para datos siempre actualizados. |
| `☁️ Cloud / Web` | Infraestructura | Accesible desde cualquier navegador y dispositivo, sin instalaciones locales. |
| `🔐 JWT + Roles` | Seguridad | Autenticación segura con tokens JWT y control de acceso diferenciado por rol. |

**Diseño de pills/tarjetas de tecnología:**
- Fondo: `#1F2937`
- Borde: `1px solid rgba(45,212,191,0.3)`
- Ícono a la izquierda en `#2DD4BF`, tamaño 28px
- Nombre: bold, 16px, color blanco
- Descripción: 13px, `#9CA3AF`
- Hover: `border-color: #2DD4BF` al 100%, leve `box-shadow` cyan

---

### SECCIÓN 5 — Equipo de Desarrollo

| Campo | Detalle |
|---|---|
| **Fondo** | `#FFFFFF` (blanco) |
| **Objetivo** | Humanizar el proyecto, generar confianza y mostrar las capacidades del equipo |
| **Layout** | Dos tarjetas de perfil centradas en fila (desktop) / apiladas (mobile). Título centrado arriba |
| **Animación** | Hover: leve elevación y `border-top: 3px solid #2DD4BF` |

**Título de sección:**
- H2: `"El equipo detrás de AutoStock"` — centrado, `#111827`
- Subtítulo: `"Desarrollado por aprendices del SENA — Análisis y Desarrollo de Software"` — gris

#### Tarjeta 1 — Pedro Daniel Pirachican Vargas

- **Avatar circular:** iniciales `PD` — fondo `#111827`, texto `#2DD4BF`, `border: 3px solid #2DD4BF`
- **Nombre:** `Pedro Daniel Pirachican Vargas` — H3, bold, `#111827`
- **Rol:** `🛠️ Líder Técnico / Backend & Arquitectura` — color `#2DD4BF`, 14px
- **Descripción:** `"Responsable de la arquitectura del sistema, backend con FastAPI, base de datos, seguridad e integraciones externas."` — gris, 14px
- **Tags:** `FastAPI` · `Python` · `MySQL` · `DevOps` · `Arquitectura`

#### Tarjeta 2 — Brayan Ricardo Vera Parra

- **Avatar circular:** iniciales `BR` — fondo `#111827`, texto `#2DD4BF`, `border: 3px solid #2DD4BF`
- **Nombre:** `Brayan Ricardo Vera Parra` — H3, bold, `#111827`
- **Rol:** `🎨 Frontend & Experiencia de Usuario` — color `#2DD4BF`, 14px
- **Descripción:** `"Encargado del desarrollo de la interfaz, UI/UX, consumo de APIs y optimización de la experiencia de usuario."` — gris, 14px
- **Tags:** `React.js` · `UI/UX` · `CSS` · `APIs` · `Testing`

**Pie común en ambas tarjetas:**
- `🎓 SENA — Análisis y Desarrollo de Software (ADSO)`
- `📍 Tunja, Colombia`

**Diseño de tags/chips de habilidades:**
- Fondo: `rgba(45,212,191,0.1)`, borde: `1px solid #2DD4BF`, color texto: `#2DD4BF`
- `border-radius: 20px`, `padding: 4px 12px`, `font-size: 12px`

---

### SECCIÓN 6 — CTA Final (Llamado a la Acción)

| Campo | Detalle |
|---|---|
| **Fondo** | Gradiente `#111827` → `#1F2937` |
| **Objetivo** | Capturar leads. Invitar al usuario a solicitar una demo antes de salir de la página |
| **Layout** | Centrado. Texto grande + subtexto + botón principal prominente |
| **Animación** | Botón hover: `scale(1.05)` + `box-shadow` cyan pronunciada |

- **Título:** `"¿Listo para transformar tu inventario?"` — H2, blanco, centrado, 36px
- **Subtexto:** `"Únete a las empresas que ya gestionan su stock de forma inteligente con AutoStock."` — gris claro, centrado
- **Botón:** `"Solicitar una Demo Gratuita"` — fondo `#2DD4BF`, texto `#111827`, bold, `padding: 16px 40px`, `border-radius: 10px`, `font-size: 18px`

---

### SECCIÓN 7 — Footer

| Campo | Detalle |
|---|---|
| **Fondo** | `#0D1117` (casi negro) |
| **Objetivo** | Cerrar la página con información institucional y links de navegación secundaria |
| **Layout** | Logo izquierda · Copyright centro · Links navegación derecha |

- **Logo:** "Auto" en blanco, "Stock" en `#2DD4BF`
- **Copyright:** `© 2026 AutoStock — SENA, Análisis y Desarrollo de Software`
- **Color texto:** `#6B7280`
- **Links:** `Características` · `Tecnologías` · `Equipo` — hover en `#2DD4BF`

---

## 6. Tono Visual y Estilo General

| Atributo | Descripción |
|---|---|
| **Estilo general** | Tecnológico, moderno, profesional y limpio. SaaS B2B de alto nivel. |
| **Sensación** | Confiable, inteligente y eficiente. Una empresa real lista para escalar. |
| ❌ **NO usar** | Gradientes morados genéricos, sombras excesivas, animaciones lentas, iconos clipart, diseños saturados. |
| ✅ **SÍ usar** | Micro-detalles cuidados, espaciado generoso, jerarquía tipográfica clara, efectos sutiles de profundidad, patrón grid/circuito como detalle decorativo. |

---

## 7. Entregable Esperado

El resultado del desarrollo debe ser:

- Un único archivo **`index.html`** completo y funcional.
- Que incluya todo el CSS embebido en una etiqueta `<style>` dentro del `<head>`.
- Que incluya todo el JavaScript embebido en una etiqueta `<script>` al final del `<body>`.
- Que funcione correctamente al abrirlo directamente en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).
- Que sea visualmente impactante y listo para presentar a clientes potenciales.
- Responsive en mobile (360px+), tablet (768px) y desktop (1024px+).

---

*AutoStock — SENA, Análisis y Desarrollo de Software (ADSO)*
*Pedro Daniel Pirachican Vargas & Brayan Ricardo Vera Parra | Tunja, Colombia | 2026*
