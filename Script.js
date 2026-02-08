const toggle = document.getElementById('themeToggle');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Toggle Checked (Slid to Sun) -> Switch to Light Mode
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // Toggle Unchecked (Slid to Moon) -> Revert to Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});