// Grab the toggle by ID
const toggle = document.getElementById('themeToggle');

// Listen for the flip
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Switch to Light Mode when checked (Sun)
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // Switch back to Dark Mode when unchecked (Moon)
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});