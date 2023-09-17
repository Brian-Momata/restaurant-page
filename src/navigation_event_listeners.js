import loadMenu from "./menu";
import loadAbout from "./about";
import loadContact from "./contact";
import initialPageLoad from "./page_load";
const clearContentContainer = () => {
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
};
const addNavigationEventListeners = () => {
  const menuLink = document.getElementById('menu-link');
  const aboutLink = document.getElementById('about-link');
  const contactLink = document.getElementById('contact-link');
  const homeLink = document.getElementById('home-link');
  const menuButton = document.getElementById('menu-button');

  homeLink.addEventListener('click', () => {
    clearContentContainer();
    initialPageLoad();
  });

  menuLink.addEventListener('click', () => {
    clearContentContainer();
    loadMenu();
  });

  aboutLink.addEventListener('click', () => {
    clearContentContainer();
    loadAbout();
  });
  contactLink.addEventListener('click', () => {
    clearContentContainer();
    loadContact();
  });
  menuButton.addEventListener('click', () => {
    clearContentContainer();
    loadMenu();
  });
};

export default addNavigationEventListeners;
