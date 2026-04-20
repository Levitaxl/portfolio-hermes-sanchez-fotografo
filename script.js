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


    // 1. Aquí configuras el orden de tus series
const seriesOrder = [
    { url: "peso-del-aire-en-la-habitacion.html", title: "El peso del aire en la habitación" },
    { url: "caminando-por-ahi.html", title: "Caminando por ahí" },
    { url: "gritos-de-oracion.html", title: "Gritos de oración" }
];

function generateSeriesNav() {
    const container = document.getElementById('series-nav-container');
    if (!container) return;

    // Obtener el nombre del archivo actual
    const currentPath = window.location.pathname.split("/").pop();
    
    // Buscar la posición actual
    const currentIndex = seriesOrder.findIndex(series => series.url === currentPath);

    if (currentIndex === -1) return; 

    // LÓGICA CÍCLICA
    // Si es el primero, el anterior es el último. Si no, es el actual - 1.
    const prevIndex = (currentIndex === 0) ? seriesOrder.length - 1 : currentIndex - 1;
    
    // Si es el último, el siguiente es el primero. Si no, es el actual + 1.
    const nextIndex = (currentIndex === seriesOrder.length - 1) ? 0 : currentIndex + 1;

    const prevSeries = seriesOrder[prevIndex];
    const nextSeries = seriesOrder[nextIndex];

    // Construir el HTML (Ya no necesitamos los divs "disabled" porque siempre habrá contenido)
    container.innerHTML = `
        <section class="series-navigation">
            <div class="nav-links">
                <a href="${prevSeries.url}" class="nav-series prev">
                    <i class="ri-arrow-left-s-line"></i>
                    <span>${prevSeries.title}</span>
                </a>

                <a href="${nextSeries.url}" class="nav-series next">
                    <span>${nextSeries.title}</span>
                    <i class="ri-arrow-right-s-line"></i>
                </a>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', generateSeriesNav);

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-item img');

    images.forEach(img => {
        // Si la imagen ya está en caché y cargó instantáneamente
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.add('has-loaded');
        }

        // Evento para cuando termine de cargar
        img.addEventListener('load', function() {
            img.classList.add('loaded');
            img.parentElement.classList.add('has-loaded');
        });
    });
});