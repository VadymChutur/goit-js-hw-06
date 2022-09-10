const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

function createItemEL() {
  const newArray = [];
  ingredients.forEach((element) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('js--ingredients__item');
    itemEl.textContent = `${element}`;
    newArray.push(itemEl);
  });
  return ingredientsRef.append(...newArray);
}

createItemEL();
