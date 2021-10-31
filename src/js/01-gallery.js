// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const images = galleryItems.map(({preview, original, description}) => {
    return `
    <li>
        <a class="gallery__item" href=${original}>
        <img 
            class="gallery__image" 
            src=${preview} 
            alt="${description}" 
            />
        </a>
    </li>`
}).join('')
gallery.innerHTML = images

const galleryClick = gallery.addEventListener('click', handleClick)

function handleClick(e) {
    e.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
})