/* ============================================================
   AUTOSTOCK — Demo Modal
   Controla la apertura/cierre del modal de solicitud de demo
   y el envío del formulario con notificación por EmailJS.

   Pasos para configurar EmailJS (gratuito, 200 emails/mes):
   1. Crear cuenta en https://emailjs.com
   2. Ir a Email Services → conectar Gmail u Outlook
   3. Ir a Email Templates → crear plantilla con variables:
      {{from_name}}, {{from_email}}, {{phone}}, {{company}}, {{city}}
   4. Ir a Account → copiar Public Key
   5. Reemplazar los 3 valores marcados abajo con ← REEMPLAZAR
   ============================================================ */

(function() {
      var EMAILJS_PUBLIC_KEY  = 'TU_PUBLIC_KEY';
      var EMAILJS_SERVICE_ID  = 'TU_SERVICE_ID';
      var EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';

      if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

      var overlay     = document.getElementById('demoModal');
      var btnClose    = document.getElementById('demoModalClose');
      var form        = document.getElementById('demoForm');
      var submitBtn   = form.querySelector('.demo-form-submit');
      var triggers    = document.querySelectorAll('[data-open-demo], .btn-cta-nav, .btn-cta-big');

      function openModal() {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }

      triggers.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          openModal();
        });
      });

      // También capturar el btn-primary del hero (Solicitar Demo)
      var heroBtns = document.querySelectorAll('.btn-primary, .hero-buttons a, .hero-buttons button');
      heroBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          openModal();
        });
      });

      btnClose.addEventListener('click', closeModal);
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeModal();
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
      });

      function showToast(msg, isError) {
        document.querySelectorAll('.demo-toast').forEach(function(t) { t.remove(); });
        var t = document.createElement('div');
        t.className = 'demo-toast' + (isError ? ' error' : '');
        t.innerHTML = '<i class="bi ' + (isError ? 'bi-x-circle-fill' : 'bi-check-circle-fill') + ' toast-icon"></i><span>' + msg + '</span>';
        document.body.appendChild(t);
        requestAnimationFrame(function() {
          requestAnimationFrame(function() { t.classList.add('show'); });
        });
        setTimeout(function() {
          t.classList.remove('show');
          setTimeout(function() { t.remove(); }, 450);
        }, 5000);
      }

      function setLoading(on) {
        submitBtn.disabled = on;
        if (on) {
          submitBtn.classList.add('loading');
          submitBtn.innerHTML = '<span>Enviando...</span><span class="btn-spinner"></span>';
        } else {
          submitBtn.classList.remove('loading');
          submitBtn.innerHTML = 'SOLICITAR DEMO';
        }
      }

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var privacy = document.getElementById('demoPrivacy');
        if (!privacy.checked) {
          showToast('Debes aceptar la Política de Tratamiento de Datos.', true);
          return;
        }
        var nombre    = document.getElementById('demoNombre').value.trim();
        var apellidos = document.getElementById('demoApellidos').value.trim();
        var email     = document.getElementById('demoEmail').value.trim();
        var tel       = document.getElementById('demoTel').value.trim();
        var empresa   = document.getElementById('demoEmpresa').value.trim();
        var ciudad    = document.getElementById('demoCiudad').value.trim();

        var params = {
          from_name: nombre + ' ' + apellidos,
          from_email: email, to_email: email,
          phone: tel || 'No proporcionado',
          company: empresa || 'No proporcionada',
          city: ciudad || 'No proporcionada'
        };

        setLoading(true);
        var noConfig = EMAILJS_PUBLIC_KEY === 'TU_PUBLIC_KEY';

        function onSuccess() {
          showToast('¡Solicitud recibida, ' + nombre + '! Pronto nos pondremos en contacto contigo.');
          form.reset();
          closeModal();
          setLoading(false);
        }
        function onError() {
          showToast('Ocurrió un error al enviar. Intenta nuevamente.', true);
          setLoading(false);
        }

        if (noConfig) {
          setTimeout(onSuccess, 1200);
        } else {
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(onSuccess, onError);
        }
      });
    })();