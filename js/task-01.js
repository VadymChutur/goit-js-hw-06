const categoriesLength = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesLength.length);

categoriesLength.forEach((item) => {
  const titleRef = item.querySelector('h2');
  console.log('Category:', titleRef.textContent);
  const itemNumberRef = item.querySelectorAll('li');
  console.log('Elements:', itemNumberRef.length);
});

// function valueItem() {
//   const categoryArray = [...categoriesLength];
//   categoryArray.map((value) => {
//     const titleRef = value.querySelector('h2');
//     const itemNumberRef = value.querySelectorAll('li');
//     console.log('Category:', titleRef.textContent);
//     console.log('Elements:', itemNumberRef.length);
//   });
// }

// valueItem();
