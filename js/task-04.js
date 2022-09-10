const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const counterValueRef = document.querySelector('#value');
let counterValue = 0;

const incrementBtn = () => (counterValue += 1);
const decrementBtn = () => (counterValue -= 1);

incrementRef.addEventListener('click', () => {
  incrementBtn();
  counterValueRef.textContent = counterValue;
});

decrementRef.addEventListener('click', () => {
  decrementBtn();
  counterValueRef.textContent = counterValue;
});
