import { preloadImages } from './utils';
import { Grid } from './grid';

// Preload images then remove loader (loading class) from body
preloadImages('.column__item-img').then(() => {
    document.body.classList.remove('loading');

    // Initialize the grid
    new Grid(document.querySelector('.columns'));
});

window.addEventListener('resize', () =>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});