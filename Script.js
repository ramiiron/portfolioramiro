/* Initialize Particles Background */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 2 },
    "move": { "enable": true, "speed": 1 }
  }
});

/* Role Toggle Logic */
const toggle = document.getElementById('roleToggle');
toggle.addEventListener('change', () => {
    if(toggle.checked) {
        document.querySelector('.text-gradient').style.backgroundImage = "linear-gradient(to right, #00c6ff, #0072ff)";
        // Add more style shifts for 'Developer' mode
    } else {
        document.querySelector('.text-gradient').style.backgroundImage = "linear-gradient(to right, #6dd5ed, #2193b0)";
        // Add more style shifts for 'Designer' mode
    }
});