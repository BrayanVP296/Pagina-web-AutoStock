/* ============================================================
   AUTOSTOCK — Demo Modal
   Controla la apertura/cierre del modal de solicitud de demo
   y el envío del formulario con notificación por EmailJS.
   ============================================================ */

/* ── 1. INICIALIZAR EMAILJS ──────────────────────────────────
   Pasos para configurar EmailJS (gratuito, 200 emails/mes):
   1. Crear cuenta en https://emailjs.com
   2. Ir a Email Services → conectar Gmail u Outlook
   3. Ir a Email Templates → crear plantilla con variables:
      {{from_name}}, {{from_email}}, {{phone}},
      {{company}}, {{city}}, {{to_email}}
   4. Ir a Account → copiar Public Key
   5. Reemplazar los 3 valores marcados con ← REEMPLAZAR
   ──────────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';   // ← REEMPLAZAR
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';   // ← REEMPLAZAR
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';  // ← REEMPLAZAR

// Inicializar solo si EmailJS está disponible
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

/* ── 2. SELECTORES ───────────────────────────────────────────── */
const demoModalOverlay = document.getElementById('demoModal');
const demoModalClose = document.getElementById('demoModalClose');
const demoForm = document.getElementById('demoForm');
const demoSubmitBtn = demoForm.querySelector('.demo-form-submit');

// Todos los botones que abren el modal (navbar, hero, CTA)
const demoTriggers = document.querySelectorAll('[data-open-demo]');

/* ── 3. ABRIR MODAL ──────────────────────────────────────────── */
function openDemoModal() {
    demoModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Foco en el primer campo para accesibilidad
    setTimeout(() => {
        const firstInput = demoForm.querySelector('input');
        if (firstInput) firstInput.focus();
    }, 350);
}

/* ── 4. CERRAR MODAL ─────────────────────────────────────────── */
function closeDemoModal() {
    demoModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

/* ── 5. EVENTOS DE APERTURA ──────────────────────────────────── */
demoTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openDemoModal();
    });
});

/* ── 6. EVENTOS DE CIERRE ────────────────────────────────────── */
// Botón ✕
demoModalClose.addEventListener('click', closeDemoModal);

// Click en el overlay fuera del modal
demoModalOverlay.addEventListener('click', (e) => {
    if (e.target === demoModalOverlay) closeDemoModal();
});

// Tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModalOverlay.classList.contains('open')) {
        closeDemoModal();
    }
});

/* ── 7. TOAST DE NOTIFICACIÓN ────────────────────────────────── */
function showToast(message, isError = false) {
    // Eliminar toasts anteriores si existen
    document.querySelectorAll('.demo-toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'demo-toast' + (isError ? ' error' : '');
    toast.innerHTML = `
    <i class="bi ${isError ? 'bi-x-circle-fill' : 'bi-check-circle-fill'} toast-icon"></i>
    <span>${message}</span>
  `;
    document.body.appendChild(toast);

    // Mostrar con animación (doble rAF para garantizar transición)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });

    // Ocultar y eliminar después de 5 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 450);
    }, 5000);
}

/* ── 8. ESTADO DEL BOTÓN DE ENVÍO ────────────────────────────── */
function setSubmitLoading(isLoading) {
    demoSubmitBtn.disabled = isLoading;
    if (isLoading) {
        demoSubmitBtn.classList.add('loading');
        demoSubmitBtn.innerHTML = `
      <span class="btn-text">Enviando...</span>
      <span class="btn-spinner"></span>
    `;
    } else {
        demoSubmitBtn.classList.remove('loading');
        demoSubmitBtn.innerHTML = `<span class="btn-text">SOLICITAR DEMO</span>`;
    }
}

/* ── 9. ENVÍO DEL FORMULARIO ─────────────────────────────────── */
demoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validar checkbox de privacidad
    const privacyCheck = document.getElementById('demoPrivacy');
    if (!privacyCheck.checked) {
        showToast('Debes aceptar la Política de Tratamiento de Datos.', true);
        return;
    }

    // Recoger datos del formulario
    const nombre = document.getElementById('demoNombre').value.trim();
    const apellidos = document.getElementById('demoApellidos').value.trim();
    const email = document.getElementById('demoEmail').value.trim();
    const tel = document.getElementById('demoTel').value.trim();
    const empresa = document.getElementById('demoEmpresa').value.trim();
    const ciudad = document.getElementById('demoCiudad').value.trim();

    const templateParams = {
        from_name: `${nombre} ${apellidos}`,
        from_email: email,
        to_email: email,       // correo de confirmación al solicitante
        phone: tel || 'No proporcionado',
        company: empresa || 'No proporcionada',
        city: ciudad || 'No proporcionada',
    };

    // Activar estado de carga
    setSubmitLoading(true);

    try {
        // Verificar si EmailJS está configurado
        if (
            EMAILJS_PUBLIC_KEY === 'TU_PUBLIC_KEY' ||
            EMAILJS_SERVICE_ID === 'TU_SERVICE_ID' ||
            EMAILJS_TEMPLATE_ID === 'TU_TEMPLATE_ID'
        ) {
            // Modo simulación (EmailJS aún no configurado)
            await new Promise(resolve => setTimeout(resolve, 1200));
            showToast(`¡Solicitud recibida, ${nombre}! Pronto nos pondremos en contacto contigo.`);
            demoForm.reset();
            closeDemoModal();
            return;
        }

        // Envío real con EmailJS
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        showToast(`¡Solicitud enviada, ${nombre}! Revisa tu correo para la confirmación.`);
        demoForm.reset();
        closeDemoModal();

    } catch (error) {
        console.error('EmailJS error:', error);
        showToast('Ocurrió un error al enviar. Por favor intenta nuevamente.', true);

    } finally {
        setSubmitLoading(false);
    }
});
