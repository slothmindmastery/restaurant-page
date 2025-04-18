import heroImage from './assets/menu/hero.png';
import fokeImage from './assets/menu/foke.png';
import spritseyImage from './assets/menu/spritsey.png';
import blueBubblerImage from './assets/menu/blue-bubbler.png';
import lemokolaImage from './assets/menu/lemokola.png';
import purpPopImage from './assets/menu/purp-pop.png';
import cherryChugImage from './assets/menu/cherry-chug.png';
import rainbowRushImage from './assets/menu/rainbow-rush.png';
import { buildElements } from './helpers.js'

  const elementDefinitions = { 
    div: [
      { id: 'menuHeroTextContainer',
        className: 'hero-text-container' },
      { id: 'menuFokeDrinkCard',
        className: 'drink-card' },
      { id: 'menuSpritseyDrinkCard',
        className: 'drink-card' },
      { id: 'menuBlueBubblerDrinkCard',
        className: 'drink-card' },
      { id: 'menuLemokolaDrinkCard',
        className: 'drink-card' },
      { id: 'menuPurpPopDrinkCard',
        className: 'drink-card' },
      { id: 'menuCherryChugDrinkCard',
        className: 'drink-card' },
      { id: 'menuRainbowRushDrinkCard',
        className: 'drink-card' }
    ],
    h1: [
      { id: 'menuHeroHeading',
        className: 'hero-heading',
        textContent: 'Our Menu' }
    ],
    h3: [
      { id: 'menuFokeHeading',
        classsName: 'menu-heading',
        textContent: 'Foke' },
      { id: 'menuSpritseyHeading',
        classsName: 'menu-heading',
        textContent: 'Spritsey' },
      { id: 'menuBlueBubblerHeading',
        classsName: 'menu-heading',
        textContent: 'Blue Bubbler' },
      { id: 'menuLemokolaHeading',
        classsName: 'menu-heading',
        textContent: 'Sharp lemonade and smooth cola in a perfect 50/50 pour. A zesty, dark-citrus dance.' },
      { id: 'menuPurpPopHeading',
        classsName: 'menu-heading',
        textContent: 'Purp Pop' },
      { id: 'menuCherryChugHeading',
        classsName: 'menu-heading',
        textContent: 'Cherry Chug' },
      { id: 'menuRainbowRushHeading',
        classsName: 'menu-heading',
        textContent: 'Rainbow Rush' }
    ],
    img: [
      { id: 'menuHeroImage',
        className: 'hero-image',
        src: heroImage,
        alt: "All the drinks lined up at the bar at Thirstys's" },
      { id: 'menuFokeImage',
        className: 'menu-image',
        src: fokeImage,
        alt: 'foke' },
      { id: 'menuSpritseyImage',
        className: 'menu-image',
        src: spritseyImage,
        alt: 'Spritsey' },
      { id: 'menuBlueBubblerImage',
        className: 'menu-image',
        src: blueBubblerImage,
        alt: 'Blue Bubbler' },
      { id: 'menuLemokolaImage',
        className: 'menu-image',
        src: lemokolaImage,
        alt: 'LemoKola' },
      { id: 'menuPurpPopImage',
        className: 'menu-image',
        src: purpPopImage,
        alt: 'Purp Pop' },
      { id: 'menuCherryChugImage',
        className: 'menu-image',
        src: cherryChugImage,
        alt: 'Cherry Chug' },
      { id: 'menuRainbowRushImage',
        className: 'menu-image',
        src: rainbowRushImage,
        alt: 'Rainbow Rush' }
    ],
    p: [
      { id: 'menuFokeInformation',
        classsName: 'menu-information',
        textContent: 'The classic clash — Fanta meets Coke in a fizzy, two-tone explosion. Served with an orange slice and cherry twist.' },
      { id: 'menuSpritseyInformation',
        classsName: 'menu-information',
        textContent: 'Zingy Sprite blended with a splash of tropical juice and a dash of mint. Sparkling and refreshing with a green glow.' },
      { id: 'menuBlueBubblerInformation',
        classsName: 'menu-information',
        textContent: 'Electric blue raspberry soda with popping candy fizz. A bubblegum-sweet blast from the past.' },
      { id: 'menuLemokolaInformation',
        classsName: 'menu-information',
        textContent: 'LemoKola' },
      { id: 'menuPurpPopInformation',
        classsName: 'menu-information',
        textContent: 'Purp Pop' },
      { id: 'menuCherryChugInformation',
        classsName: 'menu-information',
        textContent: 'Grape soda meets vanilla cream for a smooth and vibrant treat. Topped with a swirl of whipped foam.' },
      { id: 'menuRainbowRushInformation',
        classsName: 'menu-information',
        textContent: 'A layered slushie of all your favorite sodas — lemon, lime, cherry, cola, and orange. Stir it or sip it as-is.' }
    ],
    section: [
      { id: 'menuHeroSection',
        className: 'hero-section' },
      { id: 'menuGridSection',
        className: 'grid-section' },
    ]
  };

  const renderMenuPage = () => {
    const elements = buildElements(elementDefinitions);
    const content = document.getElementById('content');

    elements.menuHeroTextContainer.append(
      elements.menuHeroHeading
    );

    elements.menuHeroSection.append(
      elements.menuHeroImage,
      elements.menuHeroTextContainer
    );

    elements.menuFokeDrinkCard.append(
      elements.menuFokeImage,
      elements.menuFokeHeading,
      elements.menuFokeInformation
    );

    elements.menuSpritseyDrinkCard.append(
      elements.menuSpritseyImage,
      elements.menuSpritseyHeading,
      elements.menuSpritseyInformation
    );

    elements.menuBlueBubblerDrinkCard.append(
      elements.menuBlueBubblerImage,
      elements.menuBlueBubblerHeading,
      elements.menuBlueBubblerInformation
    );

    elements.menuLemokolaDrinkCard.append(
      elements.menuLemokolaImage,
      elements.menuLemokolaHeading,
      elements.menuLemokolaInformation
    );

    elements.menuPurpPopDrinkCard.append(
      elements.menuPurpPopImage,
      elements.menuPurpPopHeading,
      elements.menuPurpPopInformation
    );

    elements.menuCherryChugDrinkCard.append(
      elements.menuCherryChugImage,
      elements.menuCherryChugHeading,
      elements.menuCherryChugInformation
    );

    elements.menuCherryChugDrinkCard.append(
      elements.menuRainbowRushImage,
      elements.menuRainbowRushHeading,
      elements.menuRainbowRushInformation
    );

    elements.menuGridSection.append(
      elements.menuFokeDrinkCard,
      elements.menuSpritseyDrinkCard,
      elements.menuBlueBubblerDrinkCard,
      elements.menuLemokolaDrinkCard,
      elements.menuPurpPopDrinkCard,
      elements.menuCherryChugDrinkCard,
      elements.menuRainbowRushDrinkCard,
    );

    content.append(
      elements.menuHeroSection,
      elements.menuGridSection,
    );

    return elements;
  };

  export { renderMenuPage };