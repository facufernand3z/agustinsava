document.addEventListener("DOMContentLoaded", function() {
  console.log("Página cargada correctamente");

  // Seleccionar todas las imágenes clickeables de la galería
  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Al hacer clic en una imagen, se abre el lightbox con la imagen ampliada
  galleryImages.forEach(image => {
    image.addEventListener("click", function() {
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
    });
  });

  // Cerrar el lightbox si se hace clic fuera de la imagen
  lightbox.addEventListener("click", function(e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
