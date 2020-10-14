//after scrolling to the middle of the screen nav background changes
const nav = document.querySelector('.header__nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight / 2) {
        nav.classList.add('nav__bgc--active');
    } else {
        nav.classList.remove('nav__bgc--active');
    }
})

// window.addEventListener('scroll', (e) => {
//     var scrolled = window.pageYOffset;
//     const background = document.querySelector('.header');
//     header.style.backroundPosition = `(${scrolled} * .2 )px`;
// });