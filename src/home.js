import heroImage from './assets/home/hero.png';
import { buildElements } from './helpers.js'

  const elementDefinitions = { 
    button: [
      { id: 'homeHeroMenuButton',
        className: 'hero-button',
        textContent: 'Menu' }
    ],
    div: [
      { id: 'homeHeroTextContainer',
        className: 'hero-text-container' }
    ],
    h1: [
      { id: 'homeHeroHeading',
        className: 'hero-heading',
        textContent: "Thirsty's" }
    ],
    h2: [
      { id: 'homeWelcomeHeading',
        className: 'section-heading',
        textContent: "Welcome to Thirsty's" }
    ],
    img: [
      { id: 'homeHeroImage',
        className: 'hero-image',
        src: heroImage,
        alt: "Thirsty's signature drink background" }
    ],
    p: [
      { id: 'homeHeroStrapline',
        className: 'hero-strapline',
        textContent: 'SIGNATURE SOFT DRINKS' },
      { id: 'homeWelcomeInformationText',
        className: 'information-text',
        textContent: "Bored of basic? So are we. At Thirsty's, we mix magic by the glass — bold blends, wild colors, and flavours you didn't know you were craving. Foke, Spritsey, Rainbow Rush… they're not just drinks, they're an experience. Retro vibes, fizzy feels, and a menu full of “wait, what is THAT?!” Come thirsty, leave grinning." }
    ],
    section: [
      { id: 'homeHeroSection',
        className: 'hero' },
      { id: 'homeAboutThirstysSection',
        className: 'information-section' }
    ]
  };

  const renderHomePage = () => {
    window.scrollTo(0, 0);
    const elements = buildElements(elementDefinitions);
    const content = document.getElementById('content');

    elements.homeHeroTextContainer.append(
      elements.homeHeroHeading,
      elements.homeHeroStrapline,
      elements.homeHeroMenuButton
    );

    elements.homeHeroSection.append(
      elements.homeHeroImage,
      elements.homeHeroTextContainer
    );

    elements.homeAboutThirstysSection.append(
      elements.homeWelcomeHeading,
      elements.homeWelcomeInformationText
    );

    content.append(
      elements.homeHeroSection,
      elements.homeAboutThirstysSection
    );

    return elements;
  };

  export { renderHomePage };