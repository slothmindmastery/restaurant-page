import heroImage from './assets/thirstys-about-image.png';
import familyImage from './assets/thirstys-family.png';
import qualityImage from './assets/thirstys-quality.png';
import { buildElements } from './helpers.js'

  const elementDefinitions = { 
    blockquote: [
      { id: 'aboutFamilyBlockquote',
        className: 'information-blockquote',
        textContent: "If you can pour a good drink, make someone smile, or serve a glass full of joy — you'll always have a place in the world." }
    ],
    cite: [
      { id: 'aboutFamilyBlockquoteCite',
        className: 'information-blockquote-cite',
        textContent: "Thirsty's Nana" }
    ],
    div: [
      { id: 'aboutHeroTextContainer',
        className: 'hero-text-container' }
    ],
    h1: [
      { id: 'aboutHeroHeading',
        className: 'hero-heading',
        textContent: 'About Us' }
    ],
    h2: [
      { id: 'aboutFamilyHeading',
        className: 'section-heading',
        textContent: "Family" },
      { id: 'aboutQualityHeading',
        className: 'section-heading',
        textContent: "Family" }
    ],
    img: [
      { id: 'aboutHeroImage',
        className: 'hero-image',
        src: heroImage,
        alt: "Everyone having an amazing time at Thirstys's" },
      { id: 'aboutFamilyImage',
        className: 'information-image',
        src: familyImage,
        alt: "TODO!!!" },
      { id: 'aboutQualityImage',
        className: 'information-image',
        src: qualityImage,
        alt: "TODO!!!" }
    ],
    p: [
      { id: 'aboutFamilyInformationTextPara1',
        className: 'information-text',
        textContent: "Bedford, England, 2024. It started with a little boy and a big idea: open a bar called Thirsty's, where the drinks are wild, the flavours are fun, and anything is possible — like mixing Fanta and Coke and calling it Foke. That spark of imagination lit the fuse for what became Thirsty's: a family-led soda bar built on bold drinks and good times." },
      { id: 'aboutFamilyInformationTextPara2',
        className: 'information-text',
        textContent: "Our recipe? It's simple. \"Mix it, love it, serve it.\" Every fizzy creation is handcrafted with heart — from Spritsey to Purp Pop — and our family's still behind the counter, still laughing at the same jokes, still chasing that first-day feeling." },
      { id: 'aboutQualityInformationTextPara1',
        className: 'information-text',
        textContent: "At Thirsty's, we take quality very seriously. That's why we open only the finest cans of Fanta and Coke with great care and pour them — expertly, might we add — into one glass, at just the right angle. That's Foke, baby." },
      { id: 'aboutQualityInformationTextPara2',
        className: 'information-text',
        textContent: "We're talking premium carbonated beverages here. Each drink is lovingly assembled using the highest-grade ice our freezer trays can produce, and garnished with real fruit (that someone definitely sliced, probably this morning)." },
      { id: 'aboutQualityInformationTextPara3',
        className: 'information-text',
        textContent: "Our toppings? Bought from actual shops. Our whipped cream? Sprayed with flair. And our straws? Bent at exactly the right jaunty angle for optimal sipping." },
      { id: 'aboutQualityInformationTextPara4',
        className: 'information-text',
        textContent: "No gimmicks. No secrets. Just pure, bubbly brilliance — cracked open and poured fresh, one can at a time." },
    ],
    section: [
      { id: 'aboutHeroSection',
        className: 'hero' },
      { id: 'aboutFamilySection',
        className: 'information-section' },
      { id: 'aboutQualitySection', 
        className: 'information-section' }
    ]
  };

  const renderMenuPage = () => {
    const elements = buildElements(elementDefinitions);
    const content = document.getElementById('content');

    elements.aboutHeroTextContainer.append(
      elements.aboutHeroHeading,
    );

    elements.aboutHeroSection.append(
      elements.aboutHeroImage,
      elements.aboutHeroTextContainer
    );

    elements.aboutFamilyBlockquote.append(
      elements.aboutFamilyBlockquoteCite
    );

    elements.aboutFamilySection.append(
      elements.aboutFamilyHeading,
      elements.aboutFamilyInformationTextPara1,
      elements.aboutFamilyInformationTextPara2,
      elements.aboutFamilyBlockquote,
      elements.aboutFamilyImage
    );

    elements.aboutQualitySection.append(
      elements.aboutQualityHeading,
      elements.aboutQualityInformationTextPara1,
      elements.aboutQualityInformationTextPara2,
      elements.aboutQualityInformationTextPara3,
      elements.aboutQualityInformationTextPara4,
      elements.aboutQualityImage
    );

    content.append(
      elements.aboutHeroSection,
      elements.aboutFamilySection,
      elements.aboutQualitySection
    );

    return elements;
  };

  export { renderMenuPage };