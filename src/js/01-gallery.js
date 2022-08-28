

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css"
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item"> 
        <a class="gallery__link" href="${original}">
            <img class=gallery__image src="${preview}" data-source="${original}" alt="${description}">
            </a>
        </div>
        `;
    })
        .join('');
}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250'
});