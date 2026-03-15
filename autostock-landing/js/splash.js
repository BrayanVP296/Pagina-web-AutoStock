(function () {
    // Bloquear scroll durante el splash
    document.body.classList.add('splash-active');

    function hideSplash() {
        var splash = document.getElementById('splash');
        if (splash) {
            splash.classList.add('splash-exit');
            setTimeout(function () {
                splash.style.display = 'none';
            }, 500);
        }
        // SIEMPRE restaurar el scroll, pase lo que pase
        document.body.classList.remove('splash-active');
        document.body.style.overflow = '';
    }

    // Ocultar splash a los 2.6s
    setTimeout(hideSplash, 2600);

    // Fallback de seguridad: si algo falla, ocultar a los 4s
    setTimeout(hideSplash, 4000);

    // Fallback extra: si la página ya cargó, ocultar inmediatamente
    window.addEventListener('load', function () {
        setTimeout(hideSplash, 2600);
    });
})();
