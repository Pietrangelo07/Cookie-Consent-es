window.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('cookie-banner');
    var button = document.getElementById('accept-cookie');
    if (!localStorage.getItem('cookieAccepted')) {
        banner.style.display = 'block';
    }
    button.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        banner.style.display = 'none';
    });
});