// Baeroh Design Studio Portfolio — Script

// --- Project Data ---
const projectsData = {
    1: {
        title: "The C-Scheme Duplex",
        category: "Residential",
        city: "Jaipur",
        description: "A modern, light-filled duplex in the heart of C-Scheme. The design integrates local Jodhpur sandstone flooring, bespoke walnut furniture, and custom copper lighting, resulting in an airy space that feels grounded in Rajasthani craftsmanship.",
        images: [
            "assets/unnamed (4).webp",
            "assets/515018580_17873657514379780_114806818264473941_n.jpg",
            "assets/unnamed (1).webp"
        ]
    },
    2: {
        title: "The Raja Park Residence",
        category: "Residential",
        city: "Jaipur",
        description: "A contemporary family sanctuary featuring high ceilings, warm plaster walls, and hand-woven cane details. Large windows open to a private courtyard, creating a peaceful escape within Raja Park.",
        images: [
            "assets/unnamed (1).webp",
            "assets/515375713_17873657511379780_1361309602168478996_n.jpg",
            "assets/unnamed (3).webp"
        ]
    },
    3: {
        title: "The Malviya Nagar Penthouse",
        category: "Residential",
        city: "Jaipur",
        description: "A minimalist penthouse with a warm material palette. It blends sage green upholstery, fluted oak paneling, and micro-cement finishes, resulting in a sanctuary that is both sophisticated and sensory.",
        images: [
            "assets/unnamed (2).webp",
            "assets/515682765_17873657493379780_5956521238110530393_n.jpg",
            "assets/unnamed (4).webp"
        ]
    },
    4: {
        title: "The Civil Lines Bungalow",
        category: "Residential",
        city: "Jaipur",
        description: "A styling project for a historic bungalow. We curated a collection of Rajasthani block-printed textiles, mid-century modern furniture, and contemporary art, highlighting the dialogue between heritage and modernity.",
        images: [
            "assets/unnamed (3).webp",
            "assets/515903200_17873657496379780_2094141731495515911_n.jpg",
            "assets/unnamed (2).webp"
        ]
    },
    5: {
        title: "The Vaishali Nagar Villa",
        category: "Residential",
        city: "Jaipur",
        description: "A luxury residential project focused on open-plan living and clean geometries. Natural stone walls, raw timber ceilings, and warm copper accents define the spaces, giving the villa a sense of quiet luxury.",
        images: [
            "assets/unnamed.webp",
            "assets/515963142_17873657523379780_8362843561450044996_n.jpg",
            "assets/unnamed (5).webp"
        ]
    },
    6: {
        title: "The Jaipur Art Gallery",
        category: "Commercial",
        city: "Jaipur",
        description: "A boutique exhibition space in Jaipur. Designed to display contemporary artworks, the layout features custom curved white walls, textured plaster finishes, and minimal track lighting to let the art speak.",
        images: [
            "assets/unnamed (5).webp",
            "assets/515018580_17873657514379780_114806818264473941_n.jpg",
            "assets/515682765_17873657493379780_5956521238110530393_n.jpg"
        ]
    }
};

// --- DOM Elements ---
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-links a');
const portfolioCards = document.querySelectorAll('.portfolio-card');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalContent = document.getElementById('modalContent');
const contactForm = document.getElementById('contactForm');

// --- Sticky Navigation Scroll Listener ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Hamburger Mobile Navigation ---
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('open');
    });
});

// --- Portfolio Detail Modal Opening/Closing ---
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    // Build Modal Layout with slideshow (removed text description and header details)
    modalContent.innerHTML = `
        <div class="modal-slideshow-container">
            <div class="modal-slides-wrapper">
                ${project.images.map((imgUrl, i) => `
                    <div class="modal-slide ${i === 0 ? 'active' : ''}">
                        <img src="${imgUrl}" alt="${project.title} photo ${i + 1}">
                    </div>
                `).join('')}
            </div>
            
            <button class="modal-nav-btn prev-slide-btn" id="prevProjectSlide" aria-label="Previous slide">&#8592;</button>
            <button class="modal-nav-btn next-slide-btn" id="nextProjectSlide" aria-label="Next slide">&#8594;</button>
            
            <div class="modal-slide-dots" id="modalSlideDots">
                ${project.images.map((_, i) => `
                    <span class="m-dot ${i === 0 ? 'active' : ''}" data-slide-index="${i}"></span>
                `).join('')}
            </div>
        </div>
    `;
    
    // Set up modal slider logic
    let currentModalSlide = 0;
    const modalSlides = modalContent.querySelectorAll('.modal-slide');
    const modalDots = modalContent.querySelectorAll('.m-dot');
    const prevSlideBtn = modalContent.querySelector('.prev-slide-btn');
    const nextSlideBtn = modalContent.querySelector('.next-slide-btn');
    
    function showModalSlide(index) {
        modalSlides.forEach(s => s.classList.remove('active'));
        modalDots.forEach(d => d.classList.remove('active'));
        
        if (index >= modalSlides.length) currentModalSlide = 0;
        else if (index < 0) currentModalSlide = modalSlides.length - 1;
        else currentModalSlide = index;
        
        modalSlides[currentModalSlide].classList.add('active');
        modalDots[currentModalSlide].classList.add('active');
    }
    
    if (prevSlideBtn && nextSlideBtn) {
        prevSlideBtn.addEventListener('click', () => showModalSlide(currentModalSlide - 1));
        nextSlideBtn.addEventListener('click', () => showModalSlide(currentModalSlide + 1));
    }
    
    modalDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-slide-index'));
            showModalSlide(idx);
        });
    });
    
    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    projectModal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
    modalContent.innerHTML = '';
}

portfolioCards.forEach(card => {
    const projectId = card.getAttribute('data-project');
    
    // Open on click
    card.addEventListener('click', () => openModal(projectId));
    
    // Open on Enter key for accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            openModal(projectId);
        }
    });
});

modalClose.addEventListener('click', closeModal);

// Close on clicking outside the modal box
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeModal();
    }
});

// Close on Escape key press
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('open')) {
        closeModal();
    }
});

// --- Testimonials Slider Logic ---
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap-around index
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Start auto slideshow
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 7000); // changes every 7s
}

// Reset auto slideshow interval
function resetSlideShowInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideShowInterval();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideShowInterval();
    });
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetIndex = parseInt(e.target.getAttribute('data-index'));
        showSlide(targetIndex);
        resetSlideShowInterval();
    });
});

// Initialize testimonials slideshow
if (slides.length > 0) {
    startSlideShow();
}

// --- Scroll Reveal Animations ---
const revealElements = document.querySelectorAll('.reveal-fade');

const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Trigger only once
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealOnScrollObserver.observe(el));

// --- Contact Form Submission Feedback ---
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        
        // Custom elegant notification popup
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '2rem';
        notification.style.right = '2rem';
        notification.style.backgroundColor = '#1C1C1A';
        notification.style.color = '#F7F5F0';
        notification.style.padding = '1.5rem 2.5rem';
        notification.style.border = '1px solid #B07D5B';
        notification.style.zIndex = '100000';
        notification.style.fontFamily = 'Jost, sans-serif';
        notification.style.fontSize = '0.9rem';
        notification.style.letterSpacing = '0.05em';
        notification.style.textTransform = 'uppercase';
        notification.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        notification.style.transition = 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        
        notification.innerText = `Thank you, ${name}. We will connect shortly.`;
        
        document.body.appendChild(notification);
        
        // Trigger reveal reflow
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // Clear Form
        contactForm.reset();
        
        // Fade out notification
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 4000);
    });
}

// --- Visual Journal Carousel Logic ---
const track = document.getElementById('journalTrack');
const prevJBtn = document.getElementById('prevJournal');
const nextJBtn = document.getElementById('nextJournal');
const dotsContainer = document.getElementById('journalSliderDots');

let currentJSlideIndex = 0;
let itemsVisible = 3;
let carouselInterval;

function updateCarouselSettings() {
    if (!track) return;
    const width = window.innerWidth;
    if (width <= 576) {
        itemsVisible = 1;
    } else if (width <= 991) {
        itemsVisible = 2;
    } else {
        itemsVisible = 3;
    }
    
    const items = track.querySelectorAll('.journal-carousel-item');
    const totalSteps = Math.max(1, items.length - itemsVisible + 1);
    
    // Ensure index is valid
    if (currentJSlideIndex >= totalSteps) {
        currentJSlideIndex = totalSteps - 1;
    }
    if (currentJSlideIndex < 0) {
        currentJSlideIndex = 0;
    }
    
    // Build dots dynamically based on number of steps
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSteps; i++) {
            const dot = document.createElement('span');
            dot.classList.add('j-dot');
            if (i === currentJSlideIndex) dot.classList.add('active');
            dot.setAttribute('data-j-index', i);
            dotsContainer.appendChild(dot);
            
            dot.addEventListener('click', (e) => {
                currentJSlideIndex = parseInt(e.target.getAttribute('data-j-index'));
                moveToStep(currentJSlideIndex);
                resetAutoplay();
            });
        }
    }
    
    moveToStep(currentJSlideIndex);
}

function moveToStep(step) {
    if (!track) return;
    const items = track.querySelectorAll('.journal-carousel-item');
    if (items.length === 0) return;
    
    const totalSteps = Math.max(1, items.length - itemsVisible + 1);
    
    if (step >= totalSteps) currentJSlideIndex = 0;
    else if (step < 0) currentJSlideIndex = totalSteps - 1;
    else currentJSlideIndex = step;
    
    const firstItem = track.querySelector('.journal-carousel-item');
    if (!firstItem) return;
    
    const itemWidth = firstItem.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    
    // Translate track
    const amountToMove = (itemWidth + gap) * currentJSlideIndex;
    track.style.transform = `translateX(-${amountToMove}px)`;
    
    // Update dots
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.j-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentJSlideIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }
}

function nextCarousel() {
    moveToStep(currentJSlideIndex + 1);
}

function prevCarousel() {
    moveToStep(currentJSlideIndex - 1);
}

function startAutoplay() {
    carouselInterval = setInterval(nextCarousel, 5000);
}

function resetAutoplay() {
    clearInterval(carouselInterval);
    startAutoplay();
}

if (prevJBtn && nextJBtn) {
    prevJBtn.addEventListener('click', () => {
        prevCarousel();
        resetAutoplay();
    });
    nextJBtn.addEventListener('click', () => {
        nextCarousel();
        resetAutoplay();
    });
}

if (track) {
    window.addEventListener('resize', updateCarouselSettings);
    // Initialize settings
    updateCarouselSettings();
    startAutoplay();
}
