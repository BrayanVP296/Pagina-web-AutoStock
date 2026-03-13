(function () {
    /* Bloquear scroll mientras carga */
    document.body.classList.add('splash-active');

    /* Ocultar el splash después de 2.4s */
    setTimeout(function () {
        var splash = document.getElementById('splash');
        if (!splash) return;

        /* Activar animación de salida */
        splash.classList.add('splash-exit');

        /* Restaurar scroll y eliminar el splash del DOM */
        setTimeout(function () {
            splash.style.display = 'none';
            document.body.classList.remove('splash-active');
        }, 500);
    }, 2400);
})();
