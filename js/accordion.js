let accordButs = document.querySelectorAll(`.feature__link`),
accordList = document.querySelectorAll(`.feature-sub`);

accordButs.forEach((item) => item.addEventListener(`click`, () => accordShow(item)));

// function accordShow(item) {  
//   if (item.classList.contains(`feature__link_active`)) {
//     hideElems();
//     return
//   }
  
//   hideElems();  
  
//   item.classList.add(`feature__link_active`);
  
//   let accordTarget = item.parentNode.querySelector(`.feature-sub`);
//   accordTarget.classList.remove(`hidden`);

//   function hideElems() {
//     accordButs.forEach((itemToDisActive) => itemToDisActive.classList.remove(`feature__link_active`));
//     accordList.forEach((itemToHide) => itemToHide.classList.add(`hidden`));
//   }
// }

function accordShow(item) {
  let alreadyActive = item.classList.contains(`feature__link_active`);
  
  accordButs.forEach((itemToDisActive) => itemToDisActive.classList.remove(`feature__link_active`));
  accordList.forEach((itemToHide) => itemToHide.classList.add(`hidden`));

  if (alreadyActive) {
    return
  }
  
  item.classList.add(`feature__link_active`);
  
  let accordTarget = item.parentNode.querySelector(`.feature-sub`);
  accordTarget.classList.remove(`hidden`);
}