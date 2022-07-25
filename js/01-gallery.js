import { galleryItems } from './gallery-items.js';
// Change code below this line



// Refs

const refs = {
    gallery: document.querySelector('.gallery'),
}

// Functions

const createImgListMarkup = (arr) =>
    arr.map(value =>
        `<a class="gallery__link" href="${value.original}">
    <img
      class="gallery__image"
      src="${value.preview}"
      data-source="${value.original}"
      alt="${value.description}"
    />
  </a>`
    ).join('');


    
refs.gallery.insertAdjacentHTML('afterbegin', createImgListMarkup(galleryItems));


refs.gallery.addEventListener('click', event => {

  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImgLink = event.target.dataset.source;

  basicLightbox.create(`<img width="1280" height="851" src="${originalImgLink}">`).show()
})