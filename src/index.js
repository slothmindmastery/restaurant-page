import { renderHomepage } from './homepage.js';
import { renderAboutPage } from './about.js';
import { renderMenuPage } from './menu.js';
import { clearContent } from './helpers.js';
import "./styles.css";

console.log('Hello from src/index.js — everything is set up correctly!');

renderHomepage()

document.addEventListener('click', (e) => {
  const targetId = e.target.id;

  if (targetId === 'homepageHeroMenuButton' || targetId === 'menuButton') {
    clearContent();
    renderMenuPage();
  }

  if (targetId === 'homeButton') {
    clearContent();
    renderHomepage();
  }

  if (targetId === 'aboutButton') {
    clearContent();
    renderAboutPage();
  }
});