const formNameRef = document.querySelector('#name-input');
const outputFieldRef = document.querySelector('#name-output');

const handleInputName = (event) => {
  const { value } = event.target;
  outputFieldRef.textContent = value ? value : 'Anonymuos';
};

formNameRef.addEventListener('input', handleInputName);
