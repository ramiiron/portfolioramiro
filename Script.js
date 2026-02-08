// Theme Toggle Logic
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Fixed Magnetic Background
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#888888" },
        "line_linked": { "enable": true, "opacity": 0.1 },
        "move": { "enable": true, "speed": 0.8 }
    },
    "interactivity": {
        "detect_on": "window", // This ensures it tracks mouse across the whole UI
        "events": {
            "onhover": { "enable": true, "mode": "grab" }
        },
        "modes": {
            "grab": { "distance": 250, "line_linked": { "opacity": 0.4 } }
        }
    }
});