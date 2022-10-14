const navMain = document.querySelector('.navigation__list-navigation');
const navToggle = document.querySelector('.navigation__button');

navMain.classList.remove('navigation__list-navigation_nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('navigation__list-navigation_closed')) {
    navMain.classList.remove('navigation__list-navigation_closed');
    navMain.classList.add('navigation__list-navigation_opened');
  } else {
    navMain.classList.add('navigation__list-navigation_closed');
    navMain.classList.remove('navigation__list-navigation_opened');
  }
});
