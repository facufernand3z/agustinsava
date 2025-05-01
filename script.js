document.addEventListener("DOMContentLoaded", function() {
  console.log("Página cargada correctamente");
  
  /* --- Funcionalidad de pestañas para la galería --- */
  const btnTattoos = document.getElementById("btn-tattoos");
  const btnGraffiti = document.getElementById("btn-graffiti");
  const tattoosSection = document.getElementById("tattoos");
  const graffitiSection = document.getElementById("graffiti");
  
  btnTattoos.addEventListener("click", function() {
    tattoosSection.style.display = "block";
    graffitiSection.style.display = "none";
    btnTattoos.classList.add("active");
    btnGraffiti.classList.remove("active");
  });
  
  btnGraffiti.addEventListener("click", function() {
    tattoosSection.style.display = "none";
    graffitiSection.style.display = "block";
    btnGraffiti.classList.add("active");
    btnTattoos.classList.remove("active");
  });
  
  /* --- Funcionalidad de lightbox para imágenes de galería --- */
  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  
  galleryImages.forEach(image => {
    image.addEventListener("click", function() {
      lightboxImg.src = this.src;
      lightbox.style.display = "flex";
    });
  });
  
  // Cerrar el lightbox al hacer clic fuera de la imagen
  lightbox.addEventListener("click", function(e) {
    if(e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
