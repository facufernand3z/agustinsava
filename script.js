document.addEventListener("DOMContentLoaded", function() {
  console.log("Página Trash Polka cargada");

  // Scroll suave en navegación
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Habilitar carga diferida para imágenes con la clase "lazy" (añádela a tus <img> si lo deseas)
  const images = document.querySelectorAll("img.lazy");
  images.forEach(img => {
    img.setAttribute("loading", "lazy");
  });
});
