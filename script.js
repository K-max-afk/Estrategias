// Función para cambiar de sección (pestañas)
function cambiarSeccion(tabId, titulo, elementoBoton) {
    // 1. Ocultar todas las secciones
    const secciones = document.querySelectorAll('.tab-content');
    secciones.forEach(sec => sec.classList.remove('active'));

    // 2. Desactivar todos los botones de navegación
    const botones = document.querySelectorAll('.nav-item');
    botones.forEach(btn => btn.classList.remove('active'));

    // 3. Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(`sec-${tabId}`);
    if (seccionActiva) {
        seccionActiva.classList.add('active');
    }

    // 4. Marcar botón como activo
    elementoBoton.classList.add('active');

    // 5. Actualizar título del encabezado
    document.getElementById('header-title').textContent = titulo;
}

// Acción de ejemplo para probar la interacción
function mostrarAlerta() {
    alert('¡Acción ejecutada correctamente!');
}
