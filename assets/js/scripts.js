document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let currentImageIndex = 0;
    let images = [];
  
    galleryItems.forEach((item, index) => {
      item.addEventListener("click", function() {
        const folder = this.getAttribute('data-folder');
        const total = this.getAttribute('images');
        images = [];
        // Dynamically load images from the folder
        for (let i = 1; i <= total; i++) {
          images.push(`assets/images/data/projects/${folder}/${i}.jpeg`);
        }
        currentImageIndex = 0;
        lightbox.style.display = "flex";
        lightboxImage.src = images[currentImageIndex];
      });
    });
  
    closeBtn.addEventListener("click", function() {
      lightbox.style.display = "none";
    });
  
    prevBtn.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
      lightboxImage.src = images[currentImageIndex];
    });
  
    nextBtn.addEventListener("click", function() {
      currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
      lightboxImage.src = images[currentImageIndex];
    });
  
    lightbox.addEventListener("click", function(e) {
      if (e.target === lightbox || e.target === closeBtn) {
        lightbox.style.display = "none";
      }
    });
  });
  