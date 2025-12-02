const btn = document.querySelector('.navbar .hamburger');
const menu = document.querySelector('.nav-items');
const header = document.querySelector('.navbar');
if (btn) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const height = header.clientHeight;
        menu.style.top = `${height}px`;
        btn.classList.toggle('is-active');
    });
}