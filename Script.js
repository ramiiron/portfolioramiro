// Initialize background particles
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40 },
        "color": { "value": "#ffffff" },
        "opacity": { "value": 0.1 },
        "size": { "value": 2 },
        "move": { "enable": true, "speed": 1 }
    }
});

const toggle = document.getElementById('roleToggle');
const title = document.getElementById('hero-title');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // DEVELOPER MODE
        title.innerHTML = 'Functional & <span class="gradient-text">Robust</span> <br>Digital Systems.';
        document.documentElement.style.setProperty('--accent', '#3498db');
    } else {
        // DESIGNER MODE
        title.innerHTML = 'Functional & <span class="gradient-text">Intuitive</span> <br>Digital Experiences.';
        document.documentElement.style.setProperty('--accent', '#e67e22');
    }
});