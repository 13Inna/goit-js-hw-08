// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let galleryEl = document.querySelector('.gallery');

const imgEl = galleryItems
  .map(
    img => `<div class="gallery__item">
                <a class="gallery__link" href=${img.original}>
                    <img
                    class="gallery__image"
                    src=${img.preview}
                    data-source=${img.original}
                    alt=${img.description}
                    />
                </a>
            </div>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', imgEl);

for (let i = 0; i < document.getElementsByClassName('gallery__item').length; i++) {
  document.getElementsByClassName('gallery__link')[i].addEventListener('click', function (e) {
    e.preventDefault();
    return false;
  });
  const currentImg = document.getElementsByClassName('gallery__image')[i].dataset.source;
  document.getElementsByClassName('gallery__item')[i].onclick = () => {
    const imageLibrary = basicLightbox.create(`<img width="1280" height="720" src=${currentImg}>`);
    imageLibrary.show();
    document.addEventListener('keyup', e => {
      if (e.code === 'Escape') imageLibrary.close();
    });
  };
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationSpeed: 250,
});


