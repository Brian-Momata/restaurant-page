/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadMenu = () => {
  // Create menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  
  // Create menu items
  const menuItem1 = document.createElement('div');
  const menuItem2 = document.createElement('div');
  menuItem1.classList.add('menu-item', 'appetizers');
  menuItem2.classList.add('menu-item', 'main-courses');
  menuItem1.innerHTML = `
  <h3>Appetizers</h3>
  <ul>
    <li>Appetizer 1 - $10.99</li>
    <li>Appetizer 2 - $9.99</li>
  </ul>
  `;
  menuItem2.innerHTML = `
  <h3>Main Courses</h3>
  <ul>
    <li>Main Course 1 - $10.99</li>
    <li>Main Course 2 - $9.99</li>
  </ul>`;

  // Append menu items to menu section
  menuSection.appendChild(menuItem1);
  menuSection.appendChild(menuItem2);

  // Add footer to menu section
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>&copy; 2023 Momata Fine Dining. All rights reserved.</p>';
  menuSection.appendChild(footer);

  // Append menu section to page
  document.body.appendChild(menuSection);

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }
  
  // Append menu section to content container
  contentContainer.appendChild(menuSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/navigation_event_listeners.js":
/*!*******************************************!*\
  !*** ./src/navigation_event_listeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_2__);



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
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  aboutLink.addEventListener('click', () => {
    clearContentContainer();
    _about__WEBPACK_IMPORTED_MODULE_1___default()();
  });
  contactLink.addEventListener('click', () => {
    clearContentContainer();
    _contact__WEBPACK_IMPORTED_MODULE_2___default()();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNavigationEventListeners);


/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialPageLoad = () => {
  // Create header element
  const header = document.createElement('header');

  // Create navigation element and its contents
  const nav = document.createElement('nav');
  const logo = document.createElement('div');
  logo.innerHTML = '<h1>Momata Fine Dining</h1>';
  logo.classList.add('logo')

  const navLinks = document.createElement('ul');
  const menuLink = document.createElement('li');
  const aboutLink = document.createElement('li');
  const contactLink = document.createElement('li');

  navLinks.classList.add('nav-links');

  menuLink.innerHTML = '<a href="#" id="menu-link">Menu</a>';
  aboutLink.innerHTML = '<a href="#" id="about-link">About Us</a>';
  contactLink.innerHTML = '<a href="#" id="contact-link">Contact</a>';

  // Append navigation elements to header
  nav.appendChild(logo);
  navLinks.appendChild(menuLink);
  navLinks.appendChild(aboutLink);
  navLinks.appendChild(contactLink);
  nav.appendChild(navLinks);

  header.appendChild(nav);

  // Create hero section
  const hero = document.createElement('section');
  hero.classList.add('hero');
  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.innerHTML = `
    <h2>Welcome to Momata Fine Dining</h2>
    <p>Discover exquisite flavors and a memorable dining experience.</p>
    <a href="#" id="menu-link">View Menu</a>
  `;
  hero.appendChild(heroContent);

  // Create footer element
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>&copy; 2023 Momata Fine Dining. All rights reserved.</p>';

  // Append header, hero, and footer to the content container
  const contentContainter = document.getElementById('content');
  contentContainter.appendChild(header);
  contentContainter.appendChild(hero);
  contentContainter.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ "./src/page_load.js");
/* harmony import */ var _navigation_event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation_event_listeners */ "./src/navigation_event_listeners.js");



const displayResaturantContent = () => {
  document.addEventListener('DOMContentLoaded', () => {
    (0,_page_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_navigation_event_listeners__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
}

displayResaturantContent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDTztBQUNFO0FBQ0k7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLDZDQUFTO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLCtDQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBLGlFQUFlLDJCQUEyQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0IzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7OztVQ3JEL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzZCOztBQUV2RTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJLHVFQUEyQjtBQUMvQixHQUFHO0FBQ0g7O0FBRUEsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2aWdhdGlvbl9ldmVudF9saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3BhZ2VfbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiIsImNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgbWVudSBzZWN0aW9uXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIFxuICAvLyBDcmVhdGUgbWVudSBpdGVtc1xuICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nLCAnYXBwZXRpemVycycpO1xuICBtZW51SXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJywgJ21haW4tY291cnNlcycpO1xuICBtZW51SXRlbTEuaW5uZXJIVE1MID0gYFxuICA8aDM+QXBwZXRpemVyczwvaDM+XG4gIDx1bD5cbiAgICA8bGk+QXBwZXRpemVyIDEgLSAkMTAuOTk8L2xpPlxuICAgIDxsaT5BcHBldGl6ZXIgMiAtICQ5Ljk5PC9saT5cbiAgPC91bD5cbiAgYDtcbiAgbWVudUl0ZW0yLmlubmVySFRNTCA9IGBcbiAgPGgzPk1haW4gQ291cnNlczwvaDM+XG4gIDx1bD5cbiAgICA8bGk+TWFpbiBDb3Vyc2UgMSAtICQxMC45OTwvbGk+XG4gICAgPGxpPk1haW4gQ291cnNlIDIgLSAkOS45OTwvbGk+XG4gIDwvdWw+YDtcblxuICAvLyBBcHBlbmQgbWVudSBpdGVtcyB0byBtZW51IHNlY3Rpb25cbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcblxuICAvLyBBZGQgZm9vdGVyIHRvIG1lbnUgc2VjdGlvblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD4mY29weTsgMjAyMyBNb21hdGEgRmluZSBEaW5pbmcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPic7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgLy8gQXBwZW5kIG1lbnUgc2VjdGlvbiB0byBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuXG4gIC8vIENsZWFyIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgXG4gIC8vIEFwcGVuZCBtZW51IHNlY3Rpb24gdG8gY29udGVudCBjb250YWluZXJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuY29uc3QgY2xlYXJDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufTtcbmNvbnN0IGFkZE5hdmlnYXRpb25FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1saW5rJyk7XG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1saW5rJyk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbGluaycpO1xuXG4gIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICBsb2FkQWJvdXQoKTtcbiAgfSk7XG4gIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzO1xuIiwiY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgaGVhZGVyIGVsZW1lbnRcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgLy8gQ3JlYXRlIG5hdmlnYXRpb24gZWxlbWVudCBhbmQgaXRzIGNvbnRlbnRzXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ28uaW5uZXJIVE1MID0gJzxoMT5Nb21hdGEgRmluZSBEaW5pbmc8L2gxPic7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXG5cbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICBuYXZMaW5rcy5jbGFzc0xpc3QuYWRkKCduYXYtbGlua3MnKTtcblxuICBtZW51TGluay5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIiBpZD1cIm1lbnUtbGlua1wiPk1lbnU8L2E+JztcbiAgYWJvdXRMaW5rLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiIGlkPVwiYWJvdXQtbGlua1wiPkFib3V0IFVzPC9hPic7XG4gIGNvbnRhY3RMaW5rLmlubmVySFRNTCA9ICc8YSBocmVmPVwiI1wiIGlkPVwiY29udGFjdC1saW5rXCI+Q29udGFjdDwvYT4nO1xuXG4gIC8vIEFwcGVuZCBuYXZpZ2F0aW9uIGVsZW1lbnRzIHRvIGhlYWRlclxuICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdkxpbmtzLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcbiAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIC8vIENyZWF0ZSBoZXJvIHNlY3Rpb25cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGNvbnN0IGhlcm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm8tY29udGVudCcpO1xuICBoZXJvQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGgyPldlbGNvbWUgdG8gTW9tYXRhIEZpbmUgRGluaW5nPC9oMj5cbiAgICA8cD5EaXNjb3ZlciBleHF1aXNpdGUgZmxhdm9ycyBhbmQgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuPC9wPlxuICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJtZW51LWxpbmtcIj5WaWV3IE1lbnU8L2E+XG4gIGA7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvbnRlbnQpO1xuXG4gIC8vIENyZWF0ZSBmb290ZXIgZWxlbWVudFxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD4mY29weTsgMjAyMyBNb21hdGEgRmluZSBEaW5pbmcuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPic7XG5cbiAgLy8gQXBwZW5kIGhlYWRlciwgaGVybywgYW5kIGZvb3RlciB0byB0aGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50Q29udGFpbnRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50Q29udGFpbnRlci5hcHBlbmRDaGlsZChoZXJvKTtcbiAgY29udGVudENvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VfbG9hZFwiO1xuaW1wb3J0IGFkZE5hdmlnYXRpb25FdmVudExpc3RlbmVycyBmcm9tIFwiLi9uYXZpZ2F0aW9uX2V2ZW50X2xpc3RlbmVyc1wiO1xuXG5jb25zdCBkaXNwbGF5UmVzYXR1cmFudENvbnRlbnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaW5pdGlhbFBhZ2VMb2FkKCk7XG4gICAgYWRkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzKCk7XG4gIH0pO1xufVxuXG5kaXNwbGF5UmVzYXR1cmFudENvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=