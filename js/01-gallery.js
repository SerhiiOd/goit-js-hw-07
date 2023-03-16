import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
const cardsMarkup = createPhotoCardsMarkup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);
containerGallery.addEventListener('click', onContainerGalleryClick);

function createPhotoCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join('');
}

function onContainerGalleryClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  evt.preventDefault();

  console.log(evt.target);

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  containerGallery.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
