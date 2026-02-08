// Theme Management
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add a little bounce animation to the toggle
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
});

// Custom Cursor
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// Smooth follow effect for outline
function animateCursor() {
    const distX = mouseX - outlineX;
    const distY = mouseY - outlineY;
    
    outlineX += distX * 0.15;
    outlineY += distY * 0.15;
    
    cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor interactions
const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
    });
    
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '32px';
        cursorOutline.style.height = '32px';
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
    });
});

// Typewriter Effect
const typedTextElement = document.querySelector('.typed-text');
const textArray = ['Full-Stack Developer', 'Creative Designer', 'Problem Solver', 'UI/UX Enthusiast'];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function type() {
    const currentText = textArray[textArrayIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        typingDelay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        typingDelay = 500;
    }
    
    setTimeout(type, typingDelay);
}

// Start typewriter after page load
setTimeout(type, 1000);

// Navigation Active State
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Smooth Scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Interactive Grid in About Section
const interactiveGrid = document.getElementById('interactiveGrid');

// Create grid cells
for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    
    // Random activation
    cell.addEventListener('mouseenter', () => {
        cell.classList.add('active');
        
        // Deactivate after delay
        setTimeout(() => {
            cell.classList.remove('active');
        }, 1000);
    });
    
    // Auto-animate some cells randomly
    if (Math.random() > 0.9) {
        setTimeout(() => {
            cell.classList.add('active');
            setTimeout(() => {
                cell.classList.remove('active');
            }, 1000);
        }, Math.random() * 5000);
    }
    
    interactiveGrid.appendChild(cell);
}

// Random grid animation loop
setInterval(() => {
    const cells = document.querySelectorAll('.grid-cell');
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    randomCell.classList.add('active');
    
    setTimeout(() => {
        randomCell.classList.remove('active');
    }, 1000);
}, 2000);

// Project Card Tilt Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should animate on scroll
const animateOnScroll = document.querySelectorAll('.project-card, .skill-category, .experience-card');

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add parallax effect to geometric shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.geometric-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
    });
});

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            // Trigger easter egg
            document.body.style.animation = 'rainbow 2s ease infinite';
            
            // Add rainbow animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Performance: Reduce animations on low-performance devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c👋 Hey there! Thanks for checking out the code.', 'font-size: 16px; color: #d4511e; font-weight: bold;');
console.log('%cIf you have any questions or want to collaborate, feel free to reach out!', 'font-size: 14px; color: #6b6b6b;');