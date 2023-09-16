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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNPO0FBQ0U7QUFDSTtBQUNNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNkNBQVM7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksK0NBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsMkJBQTJCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7VUNsQi9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04wQztBQUM2Qjs7QUFFdkU7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkIsSUFBSSx1RUFBMkI7QUFDL0IsR0FBRztBQUNIOztBQUVBLDJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmlnYXRpb25fZXZlbnRfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlX2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgLy8gQ3JlYXRlIG1lbnUgc2VjdGlvblxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBcbiAgLy8gQ3JlYXRlIG1lbnUgaXRlbXNcbiAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJywgJ2FwcGV0aXplcnMnKTtcbiAgbWVudUl0ZW0yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScsICdtYWluLWNvdXJzZXMnKTtcbiAgbWVudUl0ZW0xLmlubmVySFRNTCA9IGBcbiAgPGgzPkFwcGV0aXplcnM8L2gzPlxuICA8dWw+XG4gICAgPGxpPkFwcGV0aXplciAxIC0gJDEwLjk5PC9saT5cbiAgICA8bGk+QXBwZXRpemVyIDIgLSAkOS45OTwvbGk+XG4gIDwvdWw+XG4gIGA7XG4gIG1lbnVJdGVtMi5pbm5lckhUTUwgPSBgXG4gIDxoMz5NYWluIENvdXJzZXM8L2gzPlxuICA8dWw+XG4gICAgPGxpPk1haW4gQ291cnNlIDEgLSAkMTAuOTk8L2xpPlxuICAgIDxsaT5NYWluIENvdXJzZSAyIC0gJDkuOTk8L2xpPlxuICA8L3VsPmA7XG5cbiAgLy8gQXBwZW5kIG1lbnUgaXRlbXMgdG8gbWVudSBzZWN0aW9uXG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVJdGVtMSk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG5cbiAgLy8gQXBwZW5kIG1lbnUgc2VjdGlvbiB0byBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuXG4gIC8vIENsZWFyIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgXG4gIC8vIEFwcGVuZCBtZW51IHNlY3Rpb24gdG8gY29udGVudCBjb250YWluZXJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9wYWdlX2xvYWRcIjtcbmNvbnN0IGNsZWFyQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5jb25zdCBhZGROYXZpZ2F0aW9uRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbGluaycpO1xuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtbGluaycpO1xuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWxpbmsnKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1saW5rJyk7XG5cbiAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgaW5pdGlhbFBhZ2VMb2FkKCk7XG4gIH0pO1xuXG4gIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICBsb2FkQWJvdXQoKTtcbiAgfSk7XG4gIGNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzO1xuIiwiY29uc3QgaW5pdGlhbFBhZ2VMb2FkID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgaGVybyBzZWN0aW9uXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBjb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZXJvQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoZXJvLWNvbnRlbnQnKTtcbiAgaGVyb0NvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxoMj5XZWxjb21lIHRvIE1vbWF0YSBGaW5lIERpbmluZzwvaDI+XG4gICAgPHA+RGlzY292ZXIgZXhxdWlzaXRlIGZsYXZvcnMgYW5kIGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlLjwvcD5cbiAgICA8YSBocmVmPVwiI1wiIGlkPVwibWVudS1saW5rXCI+VmlldyBNZW51PC9hPlxuICBgO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9Db250ZW50KTtcblxuICAvLyBBcHBlbmQgaGVybyB0byB0aGUgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50Q29udGFpbnRlci5hcHBlbmRDaGlsZChoZXJvKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxQYWdlTG9hZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gXCIuL3BhZ2VfbG9hZFwiO1xuaW1wb3J0IGFkZE5hdmlnYXRpb25FdmVudExpc3RlbmVycyBmcm9tIFwiLi9uYXZpZ2F0aW9uX2V2ZW50X2xpc3RlbmVyc1wiO1xuXG5jb25zdCBkaXNwbGF5UmVzYXR1cmFudENvbnRlbnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgaW5pdGlhbFBhZ2VMb2FkKCk7XG4gICAgYWRkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzKCk7XG4gIH0pO1xufVxuXG5kaXNwbGF5UmVzYXR1cmFudENvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=