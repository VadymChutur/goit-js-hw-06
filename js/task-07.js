const sliderRef = document.querySelector('#font-size-control');
const outputTextSize = document.querySelector('#text');

function sizeTextContent(event) {
  const { value } = event.target;
  outputTextSize.style.fontSize = `${value}px`;
}

sliderRef.addEventListener('input', sizeTextContent);
