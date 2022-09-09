const categoriesLength = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesLength.length);

categoriesLength.forEach((item) => {
  const titleRef = item.querySelector('h2');
  console.log('Category:', titleRef.textContent);
  const itemNumberRef = item.querySelectorAll('li');
  console.log('Elements:', itemNumberRef.length);
});
