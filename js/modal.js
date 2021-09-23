let modalBut = document.querySelectorAll(`.more`),
modalView = document.querySelector(`.modal`);

modalBut.forEach((item) => item.addEventListener(`click`, () => modalView.classList.remove(`hidden`)));

modalView.addEventListener(`click`, (e) => modalClose(e));

function modalClose(e) {
  if (e.target.classList.contains(`overlay`) || e.target.classList.contains(`modal__close`)) {
    modalView.classList.add(`hidden`);
  }
}