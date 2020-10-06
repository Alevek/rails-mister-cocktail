import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Decouvrez toutes nos recettes de cocktail"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
