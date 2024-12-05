// script.js

// Seleccionamos el botón hamburguesa y el menú
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Cuando se hace clic en el botón hamburguesa, alternamos la clase "active" en el menú
hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el evento se propague al document
    menu.classList.toggle('active');
});

// Cuando se hace clic fuera del menú, lo cerramos
document.addEventListener('click', (event) => {
    // Verificamos si el clic fue fuera del menú y del botón hamburguesa
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});


// Mostrar el botón de "subir" cuando se hace scroll hacia abajo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Hacer que el botón de "subir" funcione con scroll suave hacia arriba
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Obtener el enlace de "Inicio"
const homeLink = document.getElementById('home-link');

// Añadir un evento de clic al enlace
homeLink.addEventListener('click', (event) => {
    event.preventDefault();  // Prevenir el comportamiento normal del enlace
    window.location.reload();  // Recargar la página
});

