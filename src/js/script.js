const burgerMenu = document.querySelector('.header__burger-menu');
const navLinks = document.querySelector('.header__nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});
