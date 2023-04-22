import menus from './menus.js';
import carousel from './carousel.js';
import products from './products.js';

// prepare hamburger menu
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", menus.toggleMenu);

// prepare carousel
carousel.prepareCarousel();

// prepare product description
products.prepareProduct(0)

// GLÖM INTE ATT products.prepareProduct(nr) måste anropas i carousel
// när man byter produkt