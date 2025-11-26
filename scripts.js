/* ==========================================
   CLASE 01: JAVASCRIPT PARA NAVEGACIÓN
   ========================================== */

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1️⃣ TOGGLE DEL MENÚ HAMBURGUESA
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    
    // 2️⃣ CERRAR MENÚ AL HACER CLICK EN UN ENLACE
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });    
});