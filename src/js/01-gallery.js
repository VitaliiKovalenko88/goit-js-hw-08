// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const gelleryEl = document.querySelector('.gallery');

const markupItemsGallery = ({ original, preview, description }) => {
  return `<li class="gallery-item">
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
};
const createItemsGallaryMarkup = img => {
  return img.map(markupItemsGallery).join('');
};

gelleryEl.insertAdjacentHTML('beforeend', createItemsGallaryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
