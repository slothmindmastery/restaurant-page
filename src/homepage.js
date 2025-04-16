import homepageHeroImage from './assets/thirstys-homepage-image.png';
import { buildElements } from './helpers.js'

  const elementDefinitions = { 
    button: [
      { id: 'homepageHeroMenuButton',
        className: 'hero-button',
        textContent: 'Menu' }
    ],
    div: [
      { id: 'homepageHeroTextContainer',
        className: 'hero-text-container' }
    ],
    h1: [
      { id: 'homepageHeroHeading',
        className: 'hero-heading',
        textContent: "Thirsty's" }
    ],
    h2: [
      { id: 'homepageWelcomeHeading',
        className: 'section-heading',
        textContent: "Welcome to Thirsty's" }
    ],
    img: [
      { id: 'homepageHeroImage',
        className: 'hero-image',
        src: homepageHeroImage,
        alt: "Thirsty's signature drink background" }
    ],
    p: [
      { id: 'homepageHeroStrapline',
        className: 'hero-strapline',
        textContent: 'SIGNATURE SOFT DRINKS' },
      { id: 'homepageWelcomeInformationText',
        className: 'information-text',
        textContent: "Bored of basic? So are we. At Thirsty's, we mix magic by the glass — bold blends, wild colors, and flavours you didn't know you were craving. Foke, Spritsey, Rainbow Rush… they're not just drinks, they're an experience. Retro vibes, fizzy feels, and a menu full of “wait, what is THAT?!” Come thirsty, leave grinning." }
    ],
    section: [
      { id: 'homepageHeroSection',
        className: 'hero' },
      { id: 'homepageAboutThirstysSection',
        className: 'information-section' }
    ]
  };

  const renderHomepage = () => {
    const elements = buildElements(elementDefinitions);
    const content = document.getElementById('content');

    elements.homepageHeroTextContainer.append(
      elements.homepageHeroHeading,
      elements.homepageHeroStrapline,
      elements.homepageHeroMenuButton
    );

    elements.homepageHeroSection.append(
      elements.homepageHeroImage,
      elements.homepageHeroTextContainer
    );

    elements.homepageAboutThirstysSection.append(
      elements.homepageWelcomeHeading,
      elements.homepageWelcomeInformationText
    );

    content.append(
      elements.homepageHeroSection,
      elements.homepageAboutThirstysSection
    );

    return elements;
  };

  export { renderHomepage };