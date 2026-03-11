document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const bioImg = document.getElementById('bio-img');

    // 1. Marcar link activo al hacer click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.style.fontWeight = '400');
            e.target.style.fontWeight = 'bold';
        });
    });

    // 2. Efecto de aparición suave para la imagen
    bioImg.style.opacity = '0';
    bioImg.style.transition = 'opacity 1.5s ease-in-out';
    
    setTimeout(() => {
        bioImg.style.opacity = '1';
    }, 200);
});