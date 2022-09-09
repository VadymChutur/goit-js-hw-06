const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

function createItemRef() {
  const newArray = [];
  ingredients.forEach((element) => {
    const itemLiRef = document.createElement('li');
    const addClassToItem = itemLiRef.classList.add('js--ingredients__item');
    itemLiRef.textContent = `${element}`;
    newArray.push(itemLiRef);
  });
  return ingredientsRef.append(...newArray);
}

createItemRef();
