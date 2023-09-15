import loadMenu from "./menu";
import loadAbout from "./about";
import loadContact from "./contact";
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
};

export default addNavigationEventListeners;
