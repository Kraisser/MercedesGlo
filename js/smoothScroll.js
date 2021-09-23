let menuLinks = document.querySelectorAll(`.menu-list__link`),
nextViewBut = document.getElementById(`nextViewLink`),
allScrollLinks = [...menuLinks, nextViewBut];


allScrollLinks.forEach((item) => item.addEventListener(`click`, (e) => smoothScrollTo(e)));

function smoothScrollTo(e) {
  
  e.preventDefault();
  let targetId = e.target.getAttribute(`href`).slice(1),
  targetElement = document.getElementById(targetId);

  targetElement.scrollIntoView({
    behavior: `smooth`,
    block: `start`,
  });

}