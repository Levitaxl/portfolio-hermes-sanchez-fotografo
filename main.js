const sobremi = document.getElementById("ht-ctc-chat");
const whatsappText = document.querySelector(".whatsapp-text");

if (sobremi && whatsappText) {
    sobremi.addEventListener("mouseover", () => {
        whatsappText.style.display = "block";
    });
    
    sobremi.addEventListener("mouseout", () => {
        whatsappText.style.display = "none";
    });
}



// --- SECCIÓN LIGHTBOX (CORREGIDA) ---
const images = Array.from(document.querySelectorAll('.portfolio__grid img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Solo ejecutamos esto si el lightbox existe en el HTML actual
if (lightbox && nextBtn && prevBtn) {

    const updateLightbox = (index) => {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;
        
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
    };

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            updateLightbox(index);
        });
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightbox(currentIndex + 1);
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightbox(currentIndex - 1);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && e.target !== nextBtn && e.target !== prevBtn) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}












const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});



ScrollReveal().reveal(".gallery-container", {
  ...scrollRevealOption,
  origin: "right",
}); 


ScrollReveal().reveal(".travel__sessions img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 50,
});

ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
  origin: "left",
});


ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});
