import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
const cardsMarkup = createPhotoCardsMarkup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createPhotoCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
