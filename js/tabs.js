let tabsButs = document.querySelectorAll(`[data-tabs-handler]`),
tabsContent = document.querySelectorAll(`[data-tabs-field]`);

for (let but of tabsButs) {
  but.addEventListener(`click`, (e) => dataChangeContent(e));
}

function dataChangeContent(e) {
  tabsButs.forEach((item) => item.classList.remove(`design-list__item_active`));
  e.target.classList.add(`design-list__item_active`);

  let targetData = e.target.getAttribute(`data-tabs-handler`);

  tabsContent.forEach((item) => {
    if (item.getAttribute(`data-tabs-field`) === targetData) {
      item.classList.remove(`hidden`);
    } else {
      item.classList.add(`hidden`);
    }
  });
}