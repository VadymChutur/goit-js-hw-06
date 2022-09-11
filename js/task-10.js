function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]');
const valueRef = document.querySelector('[type="number"');
const divBoxesRef = document.querySelector('#boxes');

function createBoxes() {
  const arrayBoxes = [];
  let width = 20;
  let height = 20;
  for (let index = 0; index < Number(valueRef.value); index += 1) {
    const divEl = document.createElement('div');
    divEl.classList.add('random__box');
    divEl.style.width = `${(width += 10)}px`;
    divEl.style.height = `${(height += 10)}px`;
    divEl.style.border = '1px solid';
    divEl.style.margin = '10px';
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    arrayBoxes.push(divEl);
  }

  divBoxesRef.append(...arrayBoxes);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = '';
}

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);
