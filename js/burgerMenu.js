let burgerBut = document.querySelector(`.humburger-menu`),
menuList = document.querySelector(`.menu`);

burgerBut.addEventListener(`click`, menuToggle);

function menuToggle() {
  menuList.classList.toggle(`menu-active`);
  burgerBut.classList.toggle(`humburger-menu-active`);
}

menuList.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`menu-list__link`)) {
    menuToggle();
  }
});