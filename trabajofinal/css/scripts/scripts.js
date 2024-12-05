const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active'); // Cierra el menú si el clic es fuera
    }
});

// script.js
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Muestra el botón
    } else {
        scrollToTopBtn.style.display = "none"; // Oculta el botón cuando está arriba
    }
};

// Hacer scroll hacia arriba cuando el usuario haga clic en el botón
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave hacia arriba
    });
});
