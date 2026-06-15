const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const images = Array.from(document.querySelectorAll('.gallery-item img'));
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const closeBtn = document.querySelector('.close-lightbox');
let currentIndex = 0;
let isZoomed = false; // Estado del zoom

// Abrir Lightbox
images.forEach((img, index) => {
    img.style.cursor = "zoom-in";
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        showImage(index);
    });
});

function showImage(index) {
    resetZoom(); // Resetear zoom antes de cambiar de imagen
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
}

// Función para manejar el Zoom en el punto exacto del clic
function toggleZoom(e) {
    if (e) e.stopPropagation(); // Evita que se cierre el lightbox
    
    if (!isZoomed) {
        // Obtener las coordenadas del clic respecto a la imagen
        const rect = lightboxImg.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X dentro de la imagen
        const y = e.clientY - rect.top;  // Posición Y dentro de la imagen
        
        // Convertir las coordenadas a porcentajes
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        // Cambiar el origen del zoom al punto del clic y aplicar escala
        lightboxImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        lightboxImg.style.transform = "scale(2.5)"; // Nivel de zoom (puedes ajustarlo)
        lightboxImg.style.cursor = "zoom-out";
        isZoomed = true;
    } else {
        resetZoom();
    }
}

// Función para resetear el zoom al estado original
function resetZoom() {
    lightboxImg.style.transform = "scale(1)";
    lightboxImg.style.transformOrigin = "center center"; // Devuelve el origen al centro
    lightboxImg.style.cursor = "zoom-in";
    isZoomed = false;
}

// Evento de clic en la imagen del lightbox para hacer zoom
lightboxImg.addEventListener('click', toggleZoom);

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
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    resetZoom();
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.style.display = 'none';
        resetZoom();
    }
});

// Teclado
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "Escape") {
            lightbox.style.display = 'none';
            resetZoom();
        }
    }
});

// Teclado
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "Escape") {
            lightbox.style.display = 'none';
            resetZoom();
        }
    }
});


// 1. Aquí configuras el orden de tus series
const seriesOrder = [
    { url: "los-rostros-detras-de-mito.html", title: "Los rostros detrás del mito" },
    { url: "gritos-de-oracion.html", title: "Gritos de oración" },
    { url: "peso-del-aire-en-la-habitacion.html", title: "El peso del aire en la habitación" },
    { url: "caminando-por-ahi.html", title: "Caminando por ahí" },

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
    const prevIndex = (currentIndex === 0) ? seriesOrder.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex === seriesOrder.length - 1) ? 0 : currentIndex + 1;

    const prevSeries = seriesOrder[prevIndex];
    const nextSeries = seriesOrder[nextIndex];

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
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.add('has-loaded');
        }

        img.addEventListener('load', function() {
            img.classList.add('loaded');
            img.parentElement.classList.add('has-loaded');
        });
    });
});