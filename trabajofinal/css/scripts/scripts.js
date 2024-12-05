// script.js
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Mostrar/Ocultar el menú hamburguesa al hacer clic
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Mostrar el botón "subir" cuando se haga scroll
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Hacer scroll hacia arriba cuando se haga clic en el botón
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
