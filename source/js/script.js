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


const selectSingle = document.querySelector('.form__wrapper');
const selectSingle_title = selectSingle.querySelector('.form__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.form__select-label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

