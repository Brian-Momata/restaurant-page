import initialPageLoad from "./page_load";
import addNavigationEventListeners from "./navigation_event_listeners";
import './style.css';

const displayResaturantContent = () => {
  document.addEventListener('DOMContentLoaded', () => {
    initialPageLoad();
    addNavigationEventListeners();
  });
}

displayResaturantContent();