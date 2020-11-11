
const nav = document.querySelector('.header__nav');
const arrow = document.querySelector('.circle');

//nav background and arrow up appears after scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight / 2) {
        nav.classList.add('nav__bgc--active');
        arrow.classList.add('active')
    } else {
        nav.classList.remove('nav__bgc--active');
        arrow.classList.remove('active');
    }
})


// return to the top arrow
arrow.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});

// do sledzenia nav switch?
const scrollHeight = ;

switch (scrollHeight) {
  case 1:
      alert('section1');
      break;
  case 2:
      alert("section2");
      break;
 case 3:
      alert("section3");
      break;
}