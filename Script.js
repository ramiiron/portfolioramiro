particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "opacity": { "value": 0.2 },
        "size": { "value": 2 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1
        },
        "move": { "enable": true, "speed": 1 }
    },
    "interactivity": {
        "detect_on": "window", // Changed from 'canvas' to 'window' for better reach
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // This is the "magnetic" effect
            }
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": { "opacity": 0.5 }
            }
        }
    },
    "retina_detect": true
});

/* Keep your existing toggle listener below this */