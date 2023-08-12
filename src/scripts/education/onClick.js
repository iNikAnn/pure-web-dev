const body = document.getElementById('body');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');

document.addEventListener('click', (e) => {
    if (e.target.id === 'menu-btn') {
        menu.classList.toggle('collapsed');
        menuBtn.classList.toggle('active');
    };

    if (e.target.id === 'mobile-menu-btn' || e.target.id === 'overlay') {
        menu.classList.toggle('visible');
        body.classList.toggle('disabled');
        overlay.classList.toggle('visible');
    }
});