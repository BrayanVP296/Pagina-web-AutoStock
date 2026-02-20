# Prompt para Antigravity — Modal Formulario Demo + EmailJS

---

## CONTEXTO Y PROBLEMA A RESOLVER

La landing page de AutoStock ya tiene el HTML del modal 
(`div.demo-modal-overlay#demoModal`) correctamente ubicado 
después del `</footer>` en el `index.html`, y el `index.html` 
ya importa `js/demo-modal.js`.

El problema es que **faltan dos archivos** que nunca fueron creados:
- `css/modal.css` → el modal no tiene estilos, se ve como HTML plano
- `js/demo-modal.js` → no tiene lógica para abrir/cerrar el modal

La tarea es **crear estos dos archivos completos** y además 
agregar el enlace al CSS en el `index.html`.

---

## CAMBIO EN index.html

En el `<head>`, después de la línea:
```html
<link rel="stylesheet" href="css/sections.css">
```
Agregar:
```html
<link rel="stylesheet" href="css/modal.css">
```

También agregar el CDN de EmailJS antes del cierre `</body>`,
antes de los demás scripts:
```html
<!-- EmailJS -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

---

## ARCHIVO 1: css/modal.css

Crear este archivo con todos los estilos del modal.
Respetar estrictamente la paleta de colores de AutoStock.

### Diseño visual a replicar (basado en la imagen de referencia):
- Ventana modal centrada, fondo blanco `#FFFFFF`
- Bordes redondeados `border-radius: 24px`
- Sombra pronunciada: `box-shadow: 0 25px 60px rgba(0,0,0,0.25)`
- Ancho máximo: `500px`, ancho en mobile: `95vw`
- Padding interno: `40px` desktop, `24px` mobile

### Overlay (fondo oscuro detrás del modal):
```css
/* Estado CERRADO por defecto — MUY IMPORTANTE */
.demo-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  /* OCULTO por defecto */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s ease;
}

/* Estado ABIERTO */
.demo-modal-overlay.open {
  opacity: 1;
  visibility: visible;
}
```

### Contenedor del modal:
```css
.demo-modal {
  background: #FFFFFF;
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  position: relative;
  transform: translateY(30px) scale(0.97);
  transition: transform 0.35s ease;
  max-height: 90vh;
  overflow-y: auto;
}

.demo-modal-overlay.open .demo-modal {
  transform: translateY(0) scale(1);
}
```

### Título y subtítulo:
- `.demo-modal-title`: `font-size: 26px`, `font-weight: 800`, 
  `color: #111827`, `text-align: center`, `margin-bottom: 8px`
- `.demo-modal-sub`: `font-size: 14px`, `color: #6B7280`, 
  `text-align: center`, `margin-bottom: 28px`

### Botón cerrar ✕:
```css
.demo-modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  color: #6B7280;
  cursor: pointer;
  transition: color 0.2s ease;
  line-height: 1;
}
.demo-modal-close:hover { color: #111827; }
```

### Campos del formulario (replicar diseño de la imagen):
- Inputs con solo `border-bottom: 1.5px solid #D1D5DB` (sin borde lateral ni superior)
- Sin `border-radius` visible, fondo transparente
- `padding: 10px 0`, `font-size: 15px`, `width: 100%`
- `outline: none`
- Al hacer focus: `border-bottom-color: #2DD4BF`
- Placeholder color: `#9CA3AF`
- `.demo-form-row`: `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 20px`
- `.demo-form-group`: `margin-bottom: 20px`

### Checkbox de privacidad:
- `.demo-form-check`: `display: flex`, `align-items: flex-start`, `gap: 10px`
- `font-size: 13px`, `color: #6B7280`, `margin-bottom: 24px`
- `.demo-link`: `color: #2DD4BF`, `font-weight: 600`

### Botón SOLICITAR DEMO:
```css
.demo-form-submit {
  width: 100%;
  background: linear-gradient(135deg, #3B82F6 0%, #2DD4BF 100%);
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 16px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}
.demo-form-submit:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 25px rgba(59,130,246,0.4);
  filter: brightness(1.05);
}
.demo-form-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}
```

### Términos y condiciones:
- `.demo-form-terms`: `text-align: center`, `margin-top: 12px`, 
  `font-size: 12px`, `color: #9CA3AF`
- El link en color `#2DD4BF`, `text-decoration: underline`

### Toast de confirmación (notificación emergente):
```css
.demo-toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #111827;
  color: #FFFFFF;
  padding: 16px 24px;
  border-radius: 12px;
  border-left: 4px solid #2DD4BF;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  font-size: 14px;
  font-weight: 500;
  z-index: 99999;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.4s ease;
  max-width: 320px;
}
.demo-toast.show {
  transform: translateY(0);
  opacity: 1;
}
.demo-toast .toast-icon {
  color: #2DD4BF;
  font-size: 18px;
  margin-right: 8px;
}
```

### Estado de carga del botón:
```css
.demo-form-submit.loading::after {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-left: 10px;
  vertical-align: middle;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Responsive mobile:
```css
@media (max-width: 480px) {
  .demo-modal { padding: 28px 20px; }
  .demo-modal-title { font-size: 22px; }
  .demo-form-row { grid-template-columns: 1fr; gap: 0; }
  .demo-toast { bottom: 16px; right: 16px; left: 16px; }
}
```

---

## ARCHIVO 2: js/demo-modal.js

Crear este archivo con toda la lógica del modal y EmailJS.

### Estructura completa del archivo:

```javascript
/* ============================================================
   AUTOSTOCK — Demo Modal
   Controla la apertura/cierre del modal de solicitud de demo
   y el envío del formulario con notificación por EmailJS.
   ============================================================ */

/* ── 1. INICIALIZAR EMAILJS ─────────────────────────────────
   Reemplazar 'TU_PUBLIC_KEY' con la Public Key de tu cuenta
   en https://dashboard.emailjs.com/admin/account
   ──────────────────────────────────────────────────────────── */
emailjs.init('TU_PUBLIC_KEY');

/* ── 2. SELECTORES ─────────────────────────────────────────── */
const demoModal        = document.getElementById('demoModal');
const demoModalClose   = document.getElementById('demoModalClose');
const demoForm         = document.getElementById('demoForm');
const demoSubmitBtn    = demoForm.querySelector('.demo-form-submit');

// Todos los botones que deben abrir el modal
// (btn navbar, btn hero primario, btn CTA final)
const demoTriggers = document.querySelectorAll(
  '.btn-cta-nav, .btn-primary, .btn-cta-big'
);

/* ── 3. ABRIR MODAL ─────────────────────────────────────────── */
function openDemoModal() {
  demoModal.classList.add('open');
  document.body.style.overflow = 'hidden'; // bloquear scroll de fondo
}

/* ── 4. CERRAR MODAL ────────────────────────────────────────── */
function closeDemoModal() {
  demoModal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── 5. EVENTOS DE APERTURA ─────────────────────────────────── */
demoTriggers.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openDemoModal();
  });
});

/* ── 6. EVENTOS DE CIERRE ───────────────────────────────────── */
// Botón ✕
demoModalClose.addEventListener('click', closeDemoModal);

// Click en el overlay (fuera del modal)
demoModal.addEventListener('click', (e) => {
  if (e.target === demoModal) closeDemoModal();
});

// Tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && demoModal.classList.contains('open')) {
    closeDemoModal();
  }
});

/* ── 7. TOAST DE NOTIFICACIÓN ───────────────────────────────── */
function showToast(message, isError = false) {
  // Crear el toast dinámicamente
  const toast = document.createElement('div');
  toast.className = 'demo-toast';
  toast.innerHTML = `
    <span class="toast-icon">
      <i class="bi ${isError ? 'bi-x-circle' : 'bi-check-circle-fill'}"></i>
    </span>
    ${message}
  `;
  if (isError) toast.style.borderLeftColor = '#B40909';
  document.body.appendChild(toast);

  // Mostrar con animación
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  // Ocultar y eliminar después de 5 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

/* ── 8. ENVÍO DEL FORMULARIO CON EMAILJS ───────────────────── 
   Configuración requerida en EmailJS:
   
   A) Service ID: conectar tu cuenta Gmail u Outlook
      → https://dashboard.emailjs.com/admin
      
   B) Template ID: crear una plantilla con estas variables:
      - {{from_name}}    → nombre + apellidos del solicitante
      - {{from_email}}   → correo del solicitante
      - {{phone}}        → teléfono/WhatsApp
      - {{company}}      → empresa
      - {{city}}         → ciudad
      - {{to_email}}     → correo destino (el del solicitante)
      
   C) Reemplazar los valores en el código:
      - 'TU_PUBLIC_KEY'  → Account > Public Key
      - 'TU_SERVICE_ID'  → Email Services > Service ID  
      - 'TU_TEMPLATE_ID' → Email Templates > Template ID
   ──────────────────────────────────────────────────────────── */
demoForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validar checkbox de privacidad
  const privacyCheck = document.getElementById('demoPrivacy');
  if (!privacyCheck.checked) {
    showToast('Debes aceptar la Política de Tratamiento de Datos.', true);
    return;
  }

  // Estado de carga
  demoSubmitBtn.disabled = true;
  demoSubmitBtn.classList.add('loading');
  demoSubmitBtn.textContent = 'Enviando...';

  // Parámetros del template EmailJS
  const templateParams = {
    from_name  : `${document.getElementById('demoNombre').value} ${document.getElementById('demoApellidos').value}`,
    from_email : document.getElementById('demoEmail').value,
    to_email   : document.getElementById('demoEmail').value,
    phone      : document.getElementById('demoTel').value,
    company    : document.getElementById('demoEmpresa').value,
    city       : document.getElementById('demoCiudad').value,
  };

  try {
    await emailjs.send(
      'TU_SERVICE_ID',    // ← reemplazar
      'TU_TEMPLATE_ID',   // ← reemplazar
      templateParams
    );

    // Éxito
    showToast('✅ ¡Solicitud enviada! Revisa tu correo para la confirmación.');
    demoForm.reset();
    closeDemoModal();

  } catch (error) {
    // Error
    console.error('EmailJS error:', error);
    showToast('Ocurrió un error al enviar. Intenta nuevamente.', true);

  } finally {
    // Restaurar botón
    demoSubmitBtn.disabled = false;
    demoSubmitBtn.classList.remove('loading');
    demoSubmitBtn.textContent = 'SOLICITAR DEMO';
  }
});
```

---

## PLANTILLA DE CORREO PARA EMAILJS

Crear en el dashboard de EmailJS una plantilla con este contenido
para que el usuario reciba la confirmación en su correo:

**Asunto:**
```
✅ Tu demo con AutoStock está agendada, {{from_name}}
```

**Cuerpo:**
```
Hola {{from_name}},

¡Gracias por tu interés en AutoStock!

Hemos recibido tu solicitud de demo para {{company}}.
Un asesor se pondrá en contacto contigo muy pronto al correo 
{{from_email}} o al número {{phone}}.

Datos de tu solicitud:
- Nombre: {{from_name}}
- Empresa: {{company}}
- Ciudad: {{city}}
- Teléfono: {{phone}}

Mientras tanto, si tienes alguna pregunta puedes responder 
este correo directamente.

— Equipo AutoStock
SENA, Análisis y Desarrollo de Software
Tunja, Colombia
```

---

## BOTONES QUE DEBEN ABRIR EL MODAL

Verificar que estos 3 botones en el `index.html` 
tienen exactamente estas clases (no modificar el HTML, 
solo verificar que el selector JS los captura):

| Botón | Clase CSS | Ubicación |
|---|---|---|
| "Solicitar Demo" | `.btn-cta-nav` | Navbar |
| "Solicitar Demo" | `.btn-primary` | Hero |
| "Solicitar una Demo Gratuita" | `.btn-cta-big` | Sección CTA Final |

---

## RESUMEN DE ARCHIVOS A ENTREGAR

| Archivo | Acción |
|---|---|
| `index.html` | Agregar `<link css/modal.css>` en head y CDN EmailJS antes de scripts |
| `css/modal.css` | **CREAR** — estilos completos del modal |
| `js/demo-modal.js` | **CREAR** — lógica completa del modal + EmailJS |

---

## PASOS QUE EL DESARROLLADOR DEBE HACER EN EMAILJS

Después de implementar el código, completar estos pasos:

1. Crear cuenta gratuita en **https://emailjs.com**
2. Ir a **Email Services** → conectar cuenta Gmail o Outlook
3. Ir a **Email Templates** → crear plantilla con las variables indicadas
4. Ir a **Account** → copiar la **Public Key**
5. Reemplazar en `js/demo-modal.js`:
   - `'TU_PUBLIC_KEY'` → tu Public Key
   - `'TU_SERVICE_ID'` → tu Service ID
   - `'TU_TEMPLATE_ID'` → tu Template ID

---

## REGLAS IMPORTANTES

- No modificar ninguna otra sección de la página
- No alterar el HTML existente del modal en `index.html`
- Respetar 100% la paleta de colores de AutoStock
- El modal debe abrirse sobre toda la página con `z-index: 9999`
- El fondo de la página debe bloquearse al abrir el modal
- El formulario debe funcionar aunque EmailJS falle 
  (mostrar mensaje de error, no romper la página)

---

*AutoStock — SENA, Análisis y Desarrollo de Software (ADSO) | 2026*
