/* Background Particles */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 },
    "size": { "value": 3 },
    "move": { "enable": true, "speed": 0.8 }
  }
});

/* Content Switcher */
const toggle = document.getElementById('roleToggle');
const gradientText = document.querySelector('.gradient-text');

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        // Developer Side
        gradientText.innerText = "Digital Systems";
        document.documentElement.style.setProperty('--accent', '#3498db');
    } else {
        // Designer Side
        gradientText.innerText = "Digital Experiences";
        document.documentElement.style.setProperty('--accent', '#e67e22');
    }
});