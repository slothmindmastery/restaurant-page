import { renderHomePage } from './home.js';
import { renderAboutPage } from './about.js';
import { renderMenuPage } from './menu.js';
import { clearContent } from './helpers.js';
import "./styles.css";

console.log('Hello from src/index.js — everything is set up correctly!');

renderHomePage()

document.addEventListener('click', (e) => {
  const targetId = e.target.id;

  if (targetId === 'homeHeroMenuButton' || targetId === 'menuButton') {
    clearContent();
    renderMenuPage();
  }

  if (targetId === 'homeButton') {
    clearContent();
    renderHomePage();
  }

  if (targetId === 'aboutButton') {
    clearContent();
    renderAboutPage();
  }
});