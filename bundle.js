/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./lidye-1Shk_PkNkNw-unsplash.jpg */ "./src/lidye-1Shk_PkNkNw-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Reset some default styles */
body, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-position-y: 70%;
}

header {
  background-color: #04030f;
  color: #fff;
  padding: 10px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

/* Hero styles */
.hero {
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  border-radius: 10px;
}

.hero-content h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.hero-content a {
  display: inline-block;
  background-color: #dd7230;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.hero-content a:hover {
  background-color: #04030f;
}

#content {
  flex: 1; /* Allow the content to grow and take remaining space */
  max-width: 1200px;
  width: 80%;
  margin: 20px auto;
  padding: 20px;
}

footer {
  text-align: center;
  background-color: #04030f;
  color: #fff;
  padding: 10px 0;
  margin-top: auto;
}

/* Style for the menu section */
.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center the categories horizontally */
}

.menu-category {
  flex-basis: 100%; /* Ensure each category spans the full width of the menu */
  margin-bottom: 20px;
}

.menu-category > h3 {
  color: #ccc;
  font-size: 22px;
}

/* Style for individual menu items */
.menu-item {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s; /* Add a subtle hover effect */
}

.menu-item:hover {
  transform: scale(1.02); /* Scale up slightly on hover */
}

.menu-item img {
  max-width: 150px;
  height: auto;
  margin-right: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.menu-item-info {
  flex: 1;
}

.menu-item-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #04030f;
}

.menu-item-description {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: #04030f;
}

.menu-item-price {
  font-size: 18px;
  font-weight: bold;
  color: #dd7230;
}

/* About styles */
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}

.about-heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-paragraph {
  font-size: 20px;
  line-height: 1.5;
}
/* Contact styles */
.contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}

.contact__title {
  font-size: 24px;
  font-weight: bold;
}

.contact__info {
  font-size: 18px;
  line-height: 1.5;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact__form input[type="text"],
.contact__form input[type="email"],
.contact__form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.contact__form button {
  background-color: #dd7230;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}

.contact__form button:hover,
.contact__form button:focus {
  background-color: #fff;
  color: #dd7230;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Reset some default styles */\nbody, h1, h2, h3, p, ul, li {\n  margin: 0;\n  padding: 0;\n}\n\n/* Global styles */\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f2f2f2;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-image: url('./lidye-1Shk_PkNkNw-unsplash.jpg');\n  background-size: cover;\n  background-position: center;\n  background-position-y: 70%;\n}\n\nheader {\n  background-color: #04030f;\n  color: #fff;\n  padding: 10px 0;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.nav-links {\n  list-style: none;\n  display: flex;\n}\n\n.nav-links li {\n  margin-right: 20px;\n}\n\n.nav-links a {\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n}\n\n/* Hero styles */\n.hero {\n  background-size: cover;\n  background-position: center;\n  color: #fff;\n  text-align: center;\n  padding: 100px 0;\n}\n\n.hero-content {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */\n  border-radius: 10px;\n}\n\n.hero-content h2 {\n  font-size: 36px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.hero-content p {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 30px;\n}\n\n.hero-content a {\n  display: inline-block;\n  background-color: #dd7230;\n  color: #fff;\n  text-decoration: none;\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n\n.hero-content a:hover {\n  background-color: #04030f;\n}\n\n#content {\n  flex: 1; /* Allow the content to grow and take remaining space */\n  max-width: 1200px;\n  width: 80%;\n  margin: 20px auto;\n  padding: 20px;\n}\n\nfooter {\n  text-align: center;\n  background-color: #04030f;\n  color: #fff;\n  padding: 10px 0;\n  margin-top: auto;\n}\n\n/* Style for the menu section */\n.menu {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: center; /* Center the categories horizontally */\n}\n\n.menu-category {\n  flex-basis: 100%; /* Ensure each category spans the full width of the menu */\n  margin-bottom: 20px;\n}\n\n.menu-category > h3 {\n  color: #ccc;\n  font-size: 22px;\n}\n\n/* Style for individual menu items */\n.menu-item {\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s; /* Add a subtle hover effect */\n}\n\n.menu-item:hover {\n  transform: scale(1.02); /* Scale up slightly on hover */\n}\n\n.menu-item img {\n  max-width: 150px;\n  height: auto;\n  margin-right: 20px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n\n.menu-item-info {\n  flex: 1;\n}\n\n.menu-item-name {\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #04030f;\n}\n\n.menu-item-description {\n  font-size: 16px;\n  line-height: 1.4;\n  margin-bottom: 10px;\n  color: #04030f;\n}\n\n.menu-item-price {\n  font-size: 18px;\n  font-weight: bold;\n  color: #dd7230;\n}\n\n/* About styles */\n.about {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  color: #fff;\n}\n\n.about-heading {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.about-paragraph {\n  font-size: 20px;\n  line-height: 1.5;\n}\n/* Contact styles */\n.contact {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  color: #fff;\n}\n\n.contact__title {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.contact__info {\n  font-size: 18px;\n  line-height: 1.5;\n}\n\n.contact__form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.contact__form input[type=\"text\"],\n.contact__form input[type=\"email\"],\n.contact__form textarea {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.contact__form button {\n  background-color: #dd7230;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.contact__form button:hover,\n.contact__form button:focus {\n  background-color: #fff;\n  color: #dd7230;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  <p>Whether you're joining us for a romantic dinner, a family celebration, or a casual meal with friends, we aim to exceed your expectations. Thank you for choosing Momata Fine Dining, and we look forward to serving you.</p>
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadContact = () => {
  // Create contact section
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact');

  // Create contact title
  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('contact__title');
  contactTitle.textContent = 'Contact US';
  
  // Create an address field
  const addressField = document.createElement('div');
  addressField.classList.add('contact__info');
  addressField.innerHTML = `
  <p>Address: 123 Main Street, Kahawa, Nairobi</p>
  <p>Phone: +254 715332763</p>
  <p>Email: info@momatarestaurant.com</p>
  `;

  // Create contact form
  const contactForm = document.createElement('form');
  contactForm.classList.add('contact__form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // Create contact input fields
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = 'Name';
  nameInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.required = true;

  const messageInput = document.createElement('textarea');
  messageInput.name = 'message';
  messageInput.placeholder = 'Message';
  messageInput.required = true;

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';

  // Append input fields to contact form
  contactForm.appendChild(nameInput);
  contactForm.appendChild(emailInput);
  contactForm.appendChild(messageInput);
  contactForm.appendChild(submitButton);

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // Append contact title, address field and contact form to contact section
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(addressField);
  contactSection.appendChild(contactForm);

  // Append contact section to content container
  contentContainer.appendChild(contactSection);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appetizer1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appetizer1.jpg */ "./src/appetizer1.jpg");
/* harmony import */ var _appetizer2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appetizer2.jpg */ "./src/appetizer2.jpg");
/* harmony import */ var _maincourse1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maincourse1.jpg */ "./src/maincourse1.jpg");
/* harmony import */ var _maincourse2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maincourse2.jpg */ "./src/maincourse2.jpg");





const loadMenu = () => {
  // Create menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  
  // Define menu data (you can replace this with your actual menu data)
  const menuData = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Deviled Eggs:', description: 'A classic favorite, our deviled eggs are a delightful blend of creamy yolks, zesty mustard, and a sprinkle of paprika, served with a hint of nostalgia.', price: '$10.99', imageSrc: _appetizer1_jpg__WEBPACK_IMPORTED_MODULE_0__ },
        { name: 'Fluffy Pancakes', description: 'Our fluffy pancakes are a breakfast dream come true. These golden discs of perfection are served with a drizzle of maple syrup and a dollop of whipped butter.', price: '$9.99', imageSrc: _appetizer2_jpg__WEBPACK_IMPORTED_MODULE_1__ }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Paella', description: 'Savor the flavors of Spain with our delicious Paella. This savory rice dish is a symphony of saffron-infused rice, succulent seafood, and a burst of Mediterranean herbs and spices.', price: '$10.99', imageSrc: _maincourse1_jpg__WEBPACK_IMPORTED_MODULE_2__ },
        { name: 'Chicken Biryani', description: 'Dive into a fragrant world of spices and tender chicken with our Chicken Biryani. Basmati rice cooked to perfection, layered with marinated chicken, saffron, and a medley of aromatic spices.', price: '$9.99', imageSrc: _maincourse2_jpg__WEBPACK_IMPORTED_MODULE_3__ }
      ]
    }
  ];

  // Loop through menu data and create elements
  menuData.forEach(categoryData => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('menu-category');
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = categoryData.category;
    
    categoryElement.appendChild(categoryTitle);
    
    categoryData.items.forEach(itemData => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      
      const itemImage = document.createElement('img');
      itemImage.src = itemData.imageSrc;
      itemImage.alt = itemData.name;
      
      const itemInfo = document.createElement('div');
      itemInfo.classList.add('menu-item-info');
      
      const itemName = document.createElement('p');
      itemName.classList.add('menu-item-name');
      itemName.textContent = itemData.name;
      
      const itemDescription = document.createElement('p');
      itemDescription.classList.add('menu-item-description');
      itemDescription.textContent = itemData.description;
      
      const itemPrice = document.createElement('p');
      itemPrice.classList.add('menu-item-price');
      itemPrice.textContent = itemData.price;
      
      itemInfo.appendChild(itemName);
      itemInfo.appendChild(itemDescription);
      itemInfo.appendChild(itemPrice);
      
      menuItem.appendChild(itemImage);
      menuItem.appendChild(itemInfo);
      
      categoryElement.appendChild(menuItem);
    });
    
    menuSection.appendChild(categoryElement);
  });

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }
  
  // Append menu section to content container
  contentContainer.appendChild(menuSection);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/navigation_event_listeners.js":
/*!*******************************************!*\
  !*** ./src/navigation_event_listeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
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
  const menuButton = document.getElementById('menu-button');

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
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  menuButton.addEventListener('click', () => {
    clearContentContainer();
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNavigationEventListeners);


/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    <a href="#" id="menu-button">View Menu</a>
  `;
  hero.appendChild(heroContent);

  // Append hero to the content container
  const contentContainter = document.getElementById('content');
  contentContainter.appendChild(hero);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);


/***/ }),

/***/ "./src/appetizer1.jpg":
/*!****************************!*\
  !*** ./src/appetizer1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f11f339e2eea1d9e2885.jpg";

/***/ }),

/***/ "./src/appetizer2.jpg":
/*!****************************!*\
  !*** ./src/appetizer2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c548975541c100835ad6.jpg";

/***/ }),

/***/ "./src/lidye-1Shk_PkNkNw-unsplash.jpg":
/*!********************************************!*\
  !*** ./src/lidye-1Shk_PkNkNw-unsplash.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13a089572e056938a784.jpg";

/***/ }),

/***/ "./src/maincourse1.jpg":
/*!*****************************!*\
  !*** ./src/maincourse1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2358e5c5af8da5ce0847.jpg";

/***/ }),

/***/ "./src/maincourse2.jpg":
/*!*****************************!*\
  !*** ./src/maincourse2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa414484aeade2edda8d.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load */ "./src/page_load.js");
/* harmony import */ var _navigation_event_listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation_event_listeners */ "./src/navigation_event_listeners.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNklBQW1EO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsd0JBQXdCLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxzQkFBc0IsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQzZCO0FBQ2xEOztBQUVyQjtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJLHVFQUEyQjtBQUMvQixHQUFHO0FBQ0g7O0FBRUEsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmlnYXRpb25fZXZlbnRfbGlzdGVuZXJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9wYWdlX2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbGlkeWUtMVNoa19Qa05rTnctdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBSZXNldCBzb21lIGRlZmF1bHQgc3R5bGVzICovXG5ib2R5LCBoMSwgaDIsIGgzLCBwLCB1bCwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIEdsb2JhbCBzdHlsZXMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA3MCU7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDAzMGY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5uYXYtbGlua3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubmF2LWxpbmtzIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubmF2LWxpbmtzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogSGVybyBzdHlsZXMgKi9cbi5oZXJvIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuXG4uaGVyby1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogU2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5oZXJvLWNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaGVyby1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5oZXJvLWNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNzIzMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG5cbi5oZXJvLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDAzMGY7XG59XG5cbiNjb250ZW50IHtcbiAgZmxleDogMTsgLyogQWxsb3cgdGhlIGNvbnRlbnQgdG8gZ3JvdyBhbmQgdGFrZSByZW1haW5pbmcgc3BhY2UgKi9cbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDAzMGY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi8qIFN0eWxlIGZvciB0aGUgbWVudSBzZWN0aW9uICovXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBjYXRlZ29yaWVzIGhvcml6b250YWxseSAqL1xufVxuXG4ubWVudS1jYXRlZ29yeSB7XG4gIGZsZXgtYmFzaXM6IDEwMCU7IC8qIEVuc3VyZSBlYWNoIGNhdGVnb3J5IHNwYW5zIHRoZSBmdWxsIHdpZHRoIG9mIHRoZSBtZW51ICovXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51LWNhdGVnb3J5ID4gaDMge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4vKiBTdHlsZSBmb3IgaW5kaXZpZHVhbCBtZW51IGl0ZW1zICovXG4ubWVudS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yczsgLyogQWRkIGEgc3VidGxlIGhvdmVyIGVmZmVjdCAqL1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgLyogU2NhbGUgdXAgc2xpZ2h0bHkgb24gaG92ZXIgKi9cbn1cblxuLm1lbnUtaXRlbSBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWVudS1pdGVtLWluZm8ge1xuICBmbGV4OiAxO1xufVxuXG4ubWVudS1pdGVtLW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzA0MDMwZjtcbn1cblxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMwNDAzMGY7XG59XG5cbi5tZW51LWl0ZW0tcHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2RkNzIzMDtcbn1cblxuLyogQWJvdXQgc3R5bGVzICovXG4uYWJvdXQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5hYm91dC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmFib3V0LXBhcmFncmFwaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi8qIENvbnRhY3Qgc3R5bGVzICovXG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFjdF9fdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGFjdF9faW5mbyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNvbnRhY3RfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5jb250YWN0X19mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuLmNvbnRhY3RfX2Zvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLmNvbnRhY3RfX2Zvcm0gdGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNvbnRhY3RfX2Zvcm0gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNzIzMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhY3RfX2Zvcm0gYnV0dG9uOmhvdmVyLFxuLmNvbnRhY3RfX2Zvcm0gYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNkZDcyMzA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEJBQThCO0FBQzlCO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlEQUF5RDtFQUN6RCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJB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c291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBzb21lIGRlZmF1bHQgc3R5bGVzICovXFxuYm9keSwgaDEsIGgyLCBoMywgcCwgdWwsIGxpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2xpZHllLTFTaGtfUGtOa053LXVuc3BsYXNoLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNzAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MDMwZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubmF2LWxpbmtzIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLm5hdi1saW5rcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIEhlcm8gc3R5bGVzICovXFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTAwcHggMDtcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBTZW1pLXRyYW5zcGFyZW50IGJhY2tncm91bmQgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgaDIge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaGVyby1jb250ZW50IHAge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ3MjMwO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmhlcm8tY29udGVudCBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDAzMGY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZsZXg6IDE7IC8qIEFsbG93IHRoZSBjb250ZW50IHRvIGdyb3cgYW5kIHRha2UgcmVtYWluaW5nIHNwYWNlICovXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwMzBmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4vKiBTdHlsZSBmb3IgdGhlIG1lbnUgc2VjdGlvbiAqL1xcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBjYXRlZ29yaWVzIGhvcml6b250YWxseSAqL1xcbn1cXG5cXG4ubWVudS1jYXRlZ29yeSB7XFxuICBmbGV4LWJhc2lzOiAxMDAlOyAvKiBFbnN1cmUgZWFjaCBjYXRlZ29yeSBzcGFucyB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgbWVudSAqL1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1lbnUtY2F0ZWdvcnkgPiBoMyB7XFxuICBjb2xvcjogI2NjYztcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLyogU3R5bGUgZm9yIGluZGl2aWR1YWwgbWVudSBpdGVtcyAqL1xcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzOyAvKiBBZGQgYSBzdWJ0bGUgaG92ZXIgZWZmZWN0ICovXFxufVxcblxcbi5tZW51LWl0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgLyogU2NhbGUgdXAgc2xpZ2h0bHkgb24gaG92ZXIgKi9cXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWl0ZW0taW5mbyB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ubWVudS1pdGVtLW5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICMwNDAzMGY7XFxufVxcblxcbi5tZW51LWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBjb2xvcjogIzA0MDMwZjtcXG59XFxuXFxuLm1lbnUtaXRlbS1wcmljZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZGQ3MjMwO1xcbn1cXG5cXG4vKiBBYm91dCBzdHlsZXMgKi9cXG4uYWJvdXQge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYWJvdXQtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5hYm91dC1wYXJhZ3JhcGgge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLyogQ29udGFjdCBzdHlsZXMgKi9cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRhY3RfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFjdF9faW5mbyB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uY29udGFjdF9fZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhY3RfX2Zvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5jb250YWN0X19mb3JtIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxuLmNvbnRhY3RfX2Zvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250YWN0X19mb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ3MjMwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFjdF9fZm9ybSBidXR0b246aG92ZXIsXFxuLmNvbnRhY3RfX2Zvcm0gYnV0dG9uOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogI2RkNzIzMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBsb2FkQWJvdXQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBhIGFib3V0IHVzIHNlY3Rpb25cbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGFib3V0LmlkID0gJ2Fib3V0JztcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAvLyBDcmVhdGUgYSBoZWFkaW5nXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdhYm91dC1oZWFkaW5nJyk7XG5cbiAgLy8gQ3JlYXRlIGEgcGFyYWdyYXBoXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFyYWdyYXBoJyk7XG4gIHBhcmFncmFwaC5pbm5lckhUTUwgPSBgXG4gIDxwPldlbGNvbWUgdG8gTW9tYXRhIEZpbmUgRGluaW5nLCB3aGVyZSB3ZSBhcmUgZGVkaWNhdGVkIHRvIHByb3ZpZGluZyB5b3Ugd2l0aCBhIHVuaXF1ZSBkaW5pbmcgZXhwZXJpZW5jZS4gT3VyIHBhc3Npb24gZm9yIGZvb2QgYW5kIGhvc3BpdGFsaXR5IGRyaXZlcyB1cyB0byBjcmVhdGUgbWVtb3JhYmxlIG1vbWVudHMgZm9yIG91ciBndWVzdHMuPC9wPlxuICA8cD5BdCBSZXN0YXVyYW50IE5hbWUsIHdlIHNvdXJjZSB0aGUgZmluZXN0IGluZ3JlZGllbnRzLCBwcmVwYXJlIHRoZW0gd2l0aCBjYXJlLCBhbmQgc2VydmUgdGhlbSB3aXRoIGEgdG91Y2ggb2YgY3VsaW5hcnkgYXJ0aXN0cnkuIE91ciBjaGVmcyBicmluZyBhIHdlYWx0aCBvZiBleHBlcmllbmNlLCBhbmQgb3VyIGZyaWVuZGx5IHN0YWZmIGlzIGhlcmUgdG8gbWFrZSB5b3VyIHZpc2l0IHNwZWNpYWwuPC9wPlxuICA8cD5XaGV0aGVyIHlvdSdyZSBqb2luaW5nIHVzIGZvciBhIHJvbWFudGljIGRpbm5lciwgYSBmYW1pbHkgY2VsZWJyYXRpb24sIG9yIGEgY2FzdWFsIG1lYWwgd2l0aCBmcmllbmRzLCB3ZSBhaW0gdG8gZXhjZWVkIHlvdXIgZXhwZWN0YXRpb25zLiBUaGFuayB5b3UgZm9yIGNob29zaW5nIE1vbWF0YSBGaW5lIERpbmluZywgYW5kIHdlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdS48L3A+XG4gIGA7XG5cbiAgLy8gQXBwZW5kIHRoZSBoZWFkaW5nIGFuZCBwYXJhZ3JhcGggdG8gdGhlIGFib3V0IHNlY3Rpb25cbiAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGFib3V0LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgLy8gQ2xlYXIgY29udGVudCBjb250YWluZXJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCB0aGUgYWJvdXQgc2VjdGlvbiB0byB0aGUgY29udGVudCBjb250YWluZXJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRBYm91dDtcbiIsImNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAvLyBDcmVhdGUgY29udGFjdCBzZWN0aW9uXG4gIGNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgLy8gQ3JlYXRlIGNvbnRhY3QgdGl0bGVcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX3RpdGxlJyk7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVTJztcbiAgXG4gIC8vIENyZWF0ZSBhbiBhZGRyZXNzIGZpZWxkXG4gIGNvbnN0IGFkZHJlc3NGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRyZXNzRmllbGQuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9faW5mbycpO1xuICBhZGRyZXNzRmllbGQuaW5uZXJIVE1MID0gYFxuICA8cD5BZGRyZXNzOiAxMjMgTWFpbiBTdHJlZXQsIEthaGF3YSwgTmFpcm9iaTwvcD5cbiAgPHA+UGhvbmU6ICsyNTQgNzE1MzMyNzYzPC9wPlxuICA8cD5FbWFpbDogaW5mb0Btb21hdGFyZXN0YXVyYW50LmNvbTwvcD5cbiAgYDtcblxuICAvLyBDcmVhdGUgY29udGFjdCBmb3JtXG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19mb3JtJyk7XG4gIGNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICAvLyBDcmVhdGUgY29udGFjdCBpbnB1dCBmaWVsZHNcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIG5hbWVJbnB1dC5uYW1lID0gJ25hbWUnO1xuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG4gIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XG4gIGVtYWlsSW5wdXQubmFtZSA9ICdlbWFpbCc7XG4gIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xuICBlbWFpbElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBtZXNzYWdlSW5wdXQubmFtZSA9ICdtZXNzYWdlJztcbiAgbWVzc2FnZUlucHV0LnBsYWNlaG9sZGVyID0gJ01lc3NhZ2UnO1xuICBtZXNzYWdlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAvLyBBcHBlbmQgaW5wdXQgZmllbGRzIHRvIGNvbnRhY3QgZm9ybVxuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAvLyBDbGVhciBjb250ZW50IGNvbnRhaW5lclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgLy8gQXBwZW5kIGNvbnRhY3QgdGl0bGUsIGFkZHJlc3MgZmllbGQgYW5kIGNvbnRhY3QgZm9ybSB0byBjb250YWN0IHNlY3Rpb25cbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc0ZpZWxkKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gIC8vIEFwcGVuZCBjb250YWN0IHNlY3Rpb24gdG8gY29udGVudCBjb250YWluZXJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImltcG9ydCBBcHBldGl6ZXIxIGZyb20gJy4vYXBwZXRpemVyMS5qcGcnO1xuaW1wb3J0IEFwcGV0aXplcjIgZnJvbSAnLi9hcHBldGl6ZXIyLmpwZyc7XG5pbXBvcnQgTWFpbkNvdXJzZTEgZnJvbSAnLi9tYWluY291cnNlMS5qcGcnO1xuaW1wb3J0IE1haW5Db3Vyc2UyIGZyb20gJy4vbWFpbmNvdXJzZTIuanBnJztcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBtZW51IHNlY3Rpb25cbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgXG4gIC8vIERlZmluZSBtZW51IGRhdGEgKHlvdSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggeW91ciBhY3R1YWwgbWVudSBkYXRhKVxuICBjb25zdCBtZW51RGF0YSA9IFtcbiAgICB7XG4gICAgICBjYXRlZ29yeTogJ0FwcGV0aXplcnMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBuYW1lOiAnRGV2aWxlZCBFZ2dzOicsIGRlc2NyaXB0aW9uOiAnQSBjbGFzc2ljIGZhdm9yaXRlLCBvdXIgZGV2aWxlZCBlZ2dzIGFyZSBhIGRlbGlnaHRmdWwgYmxlbmQgb2YgY3JlYW15IHlvbGtzLCB6ZXN0eSBtdXN0YXJkLCBhbmQgYSBzcHJpbmtsZSBvZiBwYXByaWthLCBzZXJ2ZWQgd2l0aCBhIGhpbnQgb2Ygbm9zdGFsZ2lhLicsIHByaWNlOiAnJDEwLjk5JywgaW1hZ2VTcmM6IEFwcGV0aXplcjEgfSxcbiAgICAgICAgeyBuYW1lOiAnRmx1ZmZ5IFBhbmNha2VzJywgZGVzY3JpcHRpb246ICdPdXIgZmx1ZmZ5IHBhbmNha2VzIGFyZSBhIGJyZWFrZmFzdCBkcmVhbSBjb21lIHRydWUuIFRoZXNlIGdvbGRlbiBkaXNjcyBvZiBwZXJmZWN0aW9uIGFyZSBzZXJ2ZWQgd2l0aCBhIGRyaXp6bGUgb2YgbWFwbGUgc3lydXAgYW5kIGEgZG9sbG9wIG9mIHdoaXBwZWQgYnV0dGVyLicsIHByaWNlOiAnJDkuOTknLCBpbWFnZVNyYzogQXBwZXRpemVyMiB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXRlZ29yeTogJ01haW4gQ291cnNlcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IG5hbWU6ICdQYWVsbGEnLCBkZXNjcmlwdGlvbjogJ1Nhdm9yIHRoZSBmbGF2b3JzIG9mIFNwYWluIHdpdGggb3VyIGRlbGljaW91cyBQYWVsbGEuIFRoaXMgc2F2b3J5IHJpY2UgZGlzaCBpcyBhIHN5bXBob255IG9mIHNhZmZyb24taW5mdXNlZCByaWNlLCBzdWNjdWxlbnQgc2VhZm9vZCwgYW5kIGEgYnVyc3Qgb2YgTWVkaXRlcnJhbmVhbiBoZXJicyBhbmQgc3BpY2VzLicsIHByaWNlOiAnJDEwLjk5JywgaW1hZ2VTcmM6IE1haW5Db3Vyc2UxIH0sXG4gICAgICAgIHsgbmFtZTogJ0NoaWNrZW4gQmlyeWFuaScsIGRlc2NyaXB0aW9uOiAnRGl2ZSBpbnRvIGEgZnJhZ3JhbnQgd29ybGQgb2Ygc3BpY2VzIGFuZCB0ZW5kZXIgY2hpY2tlbiB3aXRoIG91ciBDaGlja2VuIEJpcnlhbmkuIEJhc21hdGkgcmljZSBjb29rZWQgdG8gcGVyZmVjdGlvbiwgbGF5ZXJlZCB3aXRoIG1hcmluYXRlZCBjaGlja2VuLCBzYWZmcm9uLCBhbmQgYSBtZWRsZXkgb2YgYXJvbWF0aWMgc3BpY2VzLicsIHByaWNlOiAnJDkuOTknLCBpbWFnZVNyYzogTWFpbkNvdXJzZTIgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICAvLyBMb29wIHRocm91Z2ggbWVudSBkYXRhIGFuZCBjcmVhdGUgZWxlbWVudHNcbiAgbWVudURhdGEuZm9yRWFjaChjYXRlZ29yeURhdGEgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhdGVnb3J5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhdGVnb3J5Jyk7XG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5RGF0YS5jYXRlZ29yeTtcbiAgICBcbiAgICBjYXRlZ29yeUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUaXRsZSk7XG4gICAgXG4gICAgY2F0ZWdvcnlEYXRhLml0ZW1zLmZvckVhY2goaXRlbURhdGEgPT4ge1xuICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgICAgXG4gICAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtRGF0YS5pbWFnZVNyYztcbiAgICAgIGl0ZW1JbWFnZS5hbHQgPSBpdGVtRGF0YS5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaXRlbUluZm8uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWluZm8nKTtcbiAgICAgIFxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tbmFtZScpO1xuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtRGF0YS5uYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtRGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgIFxuICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1wcmljZScpO1xuICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbURhdGEucHJpY2U7XG4gICAgICBcbiAgICAgIGl0ZW1JbmZvLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgIGl0ZW1JbmZvLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICBpdGVtSW5mby5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuICAgICAgXG4gICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUluZm8pO1xuICAgICAgXG4gICAgICBjYXRlZ29yeUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH0pO1xuICAgIFxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5RWxlbWVudCk7XG4gIH0pO1xuXG4gIC8vIENsZWFyIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgXG4gIC8vIEFwcGVuZCBtZW51IHNlY3Rpb24gdG8gY29udGVudCBjb250YWluZXJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsImltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tIFwiLi9wYWdlX2xvYWRcIjtcbmNvbnN0IGNsZWFyQ29udGVudENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5jb25zdCBhZGROYXZpZ2F0aW9uRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbGluaycpO1xuICBjb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtbGluaycpO1xuICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWxpbmsnKTtcbiAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1saW5rJyk7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idXR0b24nKTtcblxuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICBpbml0aWFsUGFnZUxvYWQoKTtcbiAgfSk7XG5cbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG5cbiAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGxvYWRBYm91dCgpO1xuICB9KTtcbiAgY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbiAgfSk7XG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgbG9hZE1lbnUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGROYXZpZ2F0aW9uRXZlbnRMaXN0ZW5lcnM7XG4iLCJjb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBoZXJvIHNlY3Rpb25cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGNvbnN0IGhlcm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm9Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2hlcm8tY29udGVudCcpO1xuICBoZXJvQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGgyPldlbGNvbWUgdG8gTW9tYXRhIEZpbmUgRGluaW5nPC9oMj5cbiAgICA8cD5EaXNjb3ZlciBleHF1aXNpdGUgZmxhdm9ycyBhbmQgYSBtZW1vcmFibGUgZGluaW5nIGV4cGVyaWVuY2UuPC9wPlxuICAgIDxhIGhyZWY9XCIjXCIgaWQ9XCJtZW51LWJ1dHRvblwiPlZpZXcgTWVudTwvYT5cbiAgYDtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvQ29udGVudCk7XG5cbiAgLy8gQXBwZW5kIGhlcm8gdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyXG4gIGNvbnN0IGNvbnRlbnRDb250YWludGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29udGVudENvbnRhaW50ZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vcGFnZV9sb2FkXCI7XG5pbXBvcnQgYWRkTmF2aWdhdGlvbkV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL25hdmlnYXRpb25fZXZlbnRfbGlzdGVuZXJzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZGlzcGxheVJlc2F0dXJhbnRDb250ZW50ID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGluaXRpYWxQYWdlTG9hZCgpO1xuICAgIGFkZE5hdmlnYXRpb25FdmVudExpc3RlbmVycygpO1xuICB9KTtcbn1cblxuZGlzcGxheVJlc2F0dXJhbnRDb250ZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9