document.addEventListener("DOMContentLoaded", function() {
  console.log("Página actualizada sin decoraciones rojas cargada");

  // Scroll suave en navegación.
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Habilitar carga diferida para imágenes con clase "lazy" (si se utiliza).
  const images = document.querySelectorAll("img.lazy");
  images.forEach(img => {
    img.setAttribute("loading", "lazy");
  });
});
