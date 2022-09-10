const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryRef = document.querySelector('.gallery');
galeryRef.style.margin = '0';
galeryRef.style.padding = '0';
galeryRef.style.listStyle = 'none';
galeryRef.style.display = 'grid';
galeryRef.style.gap = '25px';
galeryRef.style.justifyItems = 'center';

function createGalery() {
  const newArray = images.map(({ url, alt, width = 700 }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('galery__item');
    itemEl.style.display = 'block';
    const ImgEl = document.createElement('img');
    ImgEl.src = url;
    ImgEl.width = width;
    ImgEl.alt = alt;
    ImgEl.style.display = 'block';

    itemEl.append(ImgEl);

    return itemEl;
  });
  return galeryRef.append(...newArray);
}

createGalery();
