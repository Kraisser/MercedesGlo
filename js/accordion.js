let accordButs = document.querySelectorAll(`.feature__link`),
accordList = document.querySelectorAll(`.feature-sub`);

accordButs.forEach((item) => item.addEventListener(`click`, () => accordShow(item)));

function accordShow(item) {
  
  accordButs.forEach((itemToActive) => itemToActive.classList.remove(`feature__link_active`));
  item.classList.add(`feature__link_active`);
  accordList.forEach((itemToHide) => itemToHide.classList.add(`hidden`));
  let accordTarget = item.parentNode.querySelector(`.feature-sub`);
  accordTarget.classList.remove(`hidden`);
  
}