document.addEventListener("DOMContentLoaded", function () {
    console.log("Portafolio Trash Polka cargado correctamente.");

    // Scroll suave en navegación
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Cargar imágenes de forma optimizada
    const images = document.querySelectorAll("img.lazy");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});
