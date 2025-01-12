// Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
});

const slides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

// Show active slide
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
        slide.style.transform = index === currentSlide ? 'translateX(0)' : 
            index < currentSlide ? 'translateX(-100%)' : 'translateX(100%)';
    });
}

// Move to the next or previous slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateSlides();
}

// Event listeners for buttons
prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

// Auto-slide functionality
setInterval(() => changeSlide(1), 5000);

// Initialize
updateSlides();


// Reveal Elements on Scroll
function revealOnScroll() {
    const revealElements = document.querySelectorAll('.feature, .plan, .testimonial-slide, .step-icon');
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.style.opacity = '1';
            el.style.animationPlayState = 'running';
        }
    });
}

// Event Listener for Scroll Reveal
window.addEventListener('scroll', revealOnScroll);

// Ensure elements are revealed on initial load
revealOnScroll();

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Form Submission Handling
document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thank you for reaching out! We’ll get back to you soon.');
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle the hamburger to X
    hamburger.classList.toggle('open');

    // Toggle the icons
    const icon = hamburger.querySelector('i');
    if (hamburger.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});


// Assuming this code is added after the previous hamburger code
const navbar = document.querySelector('.navbar');  // Add reference to the navbar

hamburger.addEventListener('click', () => {
    // Toggle the nav-links visibility
    navLinks.classList.toggle('active');

    // Toggle the hamburger icon to X
    hamburger.classList.toggle('open');

    // Toggle the icons between hamburger and X
    const icon = hamburger.querySelector('i');
    if (hamburger.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }

    // Toggle the navbar's 'active' class to show the nav-links
    navbar.classList.toggle('active');
});
