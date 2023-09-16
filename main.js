/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadAbout = () => {
  // Create a about us section
  const about = document.createElement('section');
  about.id = 'about';
  about.classList.add('about');

  // Create a heading
  const heading = document.createElement('h2');
  heading.textContent = 'About Us';
  heading.classList.add('about-heading');

  // Create a paragraph
  const paragraph = document.createElement('div');
  paragraph.classList.add('about-paragraph');
  paragraph.innerHTML = `
  <p>Welcome to Momata Fine Dining, where we are dedicated to providing you with a unique dining experience. Our passion for food and hospitality drives us to create memorable moments for our guests.</p>
  <p>At Restaurant Name, we source the finest ingredients, prepare them with care, and serve them with a touch of culinary artistry. Our chefs bring a wealth of experience, and our friendly staff is here to make your visit special.</p>
  <p>Whether you're joining us for a romantic dinner, a family celebration, or a casual meal with friends, we aim to exceed your expectations. Thank you for choosing Restaurant Name, and we look forward to serving you.</p>
  `;

  // Append the heading and paragraph to the about section
  about.appendChild(heading);
  about.appendChild(paragraph);

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // Append the about section to the content container
  contentContainer.appendChild(about);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);


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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page_load */ "./src/page_load.js");




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

  homeLink.addEventListener('click', () => {
    clearContentContainer();
    (0,_page_load__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });

  menuLink.addEventListener('click', () => {
    clearContentContainer();
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  aboutLink.addEventListener('click', () => {
    clearContentContainer();
    (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
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

  // Append hero to the content container
  const contentContainter = document.getElementById('content');
  contentContainter.appendChild(hero);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDRTtBQUNJO0FBQ007QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxrREFBUztBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSwrQ0FBVztBQUNmLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSwyQkFBMkIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7OztVQ2xCL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzZCOztBQUV2RTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJLHVFQUEyQjtBQUMvQixHQUFHO0FBQ0g7O0FBRUEsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmlnYXRpb25fZXZlbnRfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlX2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkQWJvdXQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBhIGFib3V0IHVzIHNlY3Rpb25cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGFib3V0LmlkID0gJ2Fib3V0JztcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAvLyBDcmVhdGUgYSBoZWFkaW5nXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdhYm91dC1oZWFkaW5nJyk7XG5cbiAgLy8gQ3JlYXRlIGEgcGFyYWdyYXBoXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYWdyYXBoJyk7XG4gIHBhcmFncmFwaC5pbm5lckhUTUwgPSBgXG4gIDxwPldlbGNvbWUgdG8gTW9tYXRhIEZpbmUgRGluaW5nLCB3aGVyZSB3ZSBhcmUgZGVkaWNhdGVkIHRvIHByb3ZpZGluZyB5b3Ugd2l0aCBhIHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIHBhc3Npb24gZm9yIGZvb2QgYW5kIGhvc3BpdGFsaXR5IGRyaXZlcyB1cyB0byBjcmVhdGUgbWVtb3JhYmxlIG1vbWVudHMgZm9yIG91ciBndWVzdHMuPC9wPlxuICA8cD5BdCBSZXN0YXVyYW50IE5hbWUsIHdlIHNvdXJjZSB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCBwcmVwYXJlIHRoZW0gd2l0aCBjYXJlLCBhbmQgc2VydmUgdGhlbSB3aXRoIGEgdG91Y2ggb2YgY3VsaW5hcnkgYXJ0aXN0cnkuIE91ciBjaGVmcyBicmluZyBhIHdlYWx0aCBvZiBleHBlcmllbmNlLCBhbmQgb3VyIGZyaWVuZGx5IHN0YWZmIGlzIGhlcmUgdG8gbWFrZSB5b3VyIHZpc2l0IHNwZWNpYWwuPC9wPlxuICA8cD5XaGV0aGVyIHlvdSdyZSBqb2luaW5nIHVzIGZvciBhIHJvbWFudGljIGRpbm5lciwgYSBmYW1pbHkgY2VsZWJyYXRpb24sIG9yIGEgY2FzdWFsIG1lYWwgd2l0aCBmcmllbmRzLCB3ZSBhaW0gdG8gZXhjZWVkIHlvdXIgZXhwZWN0YXRpb25zLiBUaGFuayB5b3UgZm9yIGNob29zaW5nIFJlc3RhdXJhbnQgTmFtZSwgYW5kIHdlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdS48L3A+XG4gIGA7XG5cbiAgLy8gQXBwZW5kIHRoZSBoZWFkaW5nIGFuZCBwYXJhZ3JhcGggdG8gdGhlIGFib3V0IHNlY3Rpb25cbiAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGFib3V0LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgLy8gQ2xlYXIgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCB0aGUgYWJvdXQgc2VjdGlvbiB0byB0aGUgY29udGVudCBjb250YWluZXJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDtcbiIsImNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgbWVudSBzZWN0aW9uXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIFxuICAvLyBDcmVhdGUgbWVudSBpdGVtc1xuICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVJdGVtMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nLCAnYXBwZXRpemVycycpO1xuICBtZW51SXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJywgJ21haW4tY291cnNlcycpO1xuICBtZW51SXRlbTEuaW5uZXJIVE1MID0gYFxuICA8aDM+QXBwZXRpemVyczwvaDM+XG4gIDx1bD5cbiAgICA8bGk+QXBwZXRpemVyIDEgLSAkMTAuOTk8L2xpPlxuICAgIDxsaT5BcHBldGl6ZXIgMiAtICQ5Ljk5PC9saT5cbiAgPC91bD5cbiAgYDtcbiAgbWVudUl0ZW0yLmlubmVySFRNTCA9IGBcbiAgPGgzPk1haW4gQ291cnNlczwvaDM+XG4gIDx1bD5cbiAgICA8bGk+TWFpbiBDb3Vyc2UgMSAtICQxMC45OTwvbGk+XG4gICAgPGxpPk1haW4gQ291cnNlIDIgLSAkOS45OTwvbGk+XG4gIDwvdWw+YDtcblxuICAvLyBBcHBlbmQgbWVudSBpdGVtcyB0byBtZW51IHNlY3Rpb25cbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcblxuICAvLyBBcHBlbmQgbWVudSBzZWN0aW9uIHRvIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG5cbiAgLy8gQ2xlYXIgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBcbiAgLy8gQXBwZW5kIG1lbnUgc2VjdGlvbiB0byBjb250ZW50IGNvbnRhaW5lclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VfbG9hZFwiO1xuY29uc3QgY2xlYXJDb250ZW50Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufTtcbmNvbnN0IGFkZE5hdmlnYXRpb25FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1saW5rJyk7XG4gIGNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1saW5rJyk7XG4gIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbGluaycpO1xuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWxpbmsnKTtcblxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICBpbml0aWFsUGFnZUxvYWQoKTtcbiAgfSk7XG5cbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG5cbiAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGxvYWRBYm91dCgpO1xuICB9KTtcbiAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGROYXZpZ2F0aW9uRXZlbnRMaXN0ZW5lcnM7XG4iLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBoZXJvIHNlY3Rpb25cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGNvbnN0IGhlcm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm8tY29udGVudCcpO1xuICBoZXJvQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGgyPldlbGNvbWUgdG8gTW9tYXRhIEZpbmUgRGluaW5nPC9oMj5cbiAgICA8cD5EaXNjb3ZlciBleHF1aXNpdGUgZmxhdm9ycyBhbmQgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuPC9wPlxuICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJtZW51LWxpbmtcIj5WaWV3IE1lbnU8L2E+XG4gIGA7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvbnRlbnQpO1xuXG4gIC8vIEFwcGVuZCBoZXJvIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lclxuICBjb25zdCBjb250ZW50Q29udGFpbnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnRDb250YWludGVyLmFwcGVuZENoaWxkKGhlcm8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vcGFnZV9sb2FkXCI7XG5pbXBvcnQgYWRkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL25hdmlnYXRpb25fZXZlbnRfbGlzdGVuZXJzXCI7XG5cbmNvbnN0IGRpc3BsYXlSZXNhdHVyYW50Q29udGVudCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBpbml0aWFsUGFnZUxvYWQoKTtcbiAgICBhZGROYXZpZ2F0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSk7XG59XG5cbmRpc3BsYXlSZXNhdHVyYW50Q29udGVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==