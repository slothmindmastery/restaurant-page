import heroImage from './assets/thirstys-homepage-image.png';
import { buildElements } from './helpers.js'

  const elementDefinitions = { 
    button: [
      { id: 'menuButton',
        className: 'menu-button',
        textContent: 'Menu' }
    ],
    div: [
      { id: 'heroText',
        className: 'hero-text' }
    ],
    h1: [
      { id: 'heroHeading',
        className: 'hero-heading',
        textContent: 'Thirsty\'s' }
    ],
    h2: [
      { id: 'welcomeHeading',
        className: 'welcome-heading',
        textContent: "Welcome to Thirsty's" }
    ],
    img: [
      { id: 'heroImage',
        className: 'hero-image',
        src: heroImage,
        alt: "Thirsty's signature drink background" }
    ],
    p: [
      { id: 'heroStrapline',
        className: 'hero-strapline',
        textContent: 'SIGNATURE SOFT DRINKS' },
      { id: 'welcomeText',
        className: 'welcome-text',
        textContent: "Bored of basic? So are we. At Thirsty's, we mix magic by the glass — bold blends, wild colors, and flavours you didn't know you were craving. Foke, Spritsey, Rainbow Rush… they're not just drinks, they're an experience. Retro vibes, fizzy feels, and a menu full of “wait, what is THAT?!” Come thirsty, leave grinning." }
    ],
    section: [
      { id: 'hero',
        className: 'hero' },
      { id: 'aboutThirstys',
        className: 'about-thirstys' }
    ],
  };

  const renderHomepage = () => {
    const elements = buildElements(elementDefinitions);
    const content = document.getElementById('content');

    elements.heroText.append(
      elements.heroHeading,
      elements.heroStrapline,
      elements.menuButton
    );

    elements.hero.append(
      elements.heroImage,
      elements.heroText
    );

    elements.aboutThirstys.append(
      elements.welcomeHeading,
      elements.welcomeText
    );

    content.append(
      elements.hero,
      elements.aboutThirstys
    );

    return elements;
  };

  export { renderHomepage };