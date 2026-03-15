const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = Array.from(document.querySelectorAll('.gallery-item img'));
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const closeBtn = document.querySelector('.close-lightbox');
    let currentIndex = 0;

    // Abrir Lightbox
    images.forEach((img, index) => {
        img.style.cursor = "zoom-in";
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            showImage(index);
        });
    });

    function showImage(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
    }

    // Navegación
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Cerrar
    closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) lightbox.style.display = 'none';
    });

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "Escape") lightbox.style.display = 'none';
        }
    });