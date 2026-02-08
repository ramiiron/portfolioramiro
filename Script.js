const toggle = document.getElementById('themeToggle');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Switch to Light Mode when Checked
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // Default to Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});