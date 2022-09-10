function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonRef = document.querySelector('.change-color');
const bodyColorRef = document.querySelector('body');
const colorValueRef = document.querySelector('.color');

function switchBackgroundColor() {
  colorValueRef.textContent = `${getRandomHexColor()}`;
  bodyColorRef.style.backgroundColor = colorValueRef.textContent;
}

changeColorButtonRef.addEventListener('click', switchBackgroundColor);
