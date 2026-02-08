document.addEventListener('DOMContentLoaded', () => {
    const roleToggle = document.getElementById('roleToggle');
    const heroTitle = document.querySelector('h1');
    const accentText = document.querySelector('.accent-text');

    roleToggle.addEventListener('change', () => {
        if (roleToggle.checked) {
            // DEVELOPER MODE
            heroTitle.innerHTML = 'Building Robust & Scalable <br><span class="accent-text">Software Systems.</span>';
            document.body.style.setProperty('--accent', '#3498db'); // Blue
        } else {
            // DESIGNER MODE
            heroTitle.innerHTML = 'Functional & Powerful <br><span class="accent-text">Digital Experiences.</span>';
            document.body.style.setProperty('--accent', '#e67e22'); // Orange/Bronze accent
        }
    });
});