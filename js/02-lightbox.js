import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGallery = document.querySelector(".gallery");
const cardsMarkup = createPhotoCardsMarkup(galleryItems);

console.log(containerGallery);

containerGallery.insertAdjacentHTML("beforeend", cardsMarkup);
containerGallery.addEventListener("click", onContainerGalleryClick);

function createPhotoCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

function onContainerGalleryClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  evt.preventDefault();

  console.log(evt.target);
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
