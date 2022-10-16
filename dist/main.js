/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\nconst load = () => {\n    const content = document.querySelector('#content');\n    const home = document.createElement('div');\n    const header = document.createElement('h2');\n    const p1 = document.createElement('p');\n    const p2 = document.createElement('p');\n\n    content.classList.remove('normal-bg');\n    content.classList.add('black-bg');\n    home.classList.add('home');\n    home.classList.add('tab')\n    header.textContent = 'STEAKHOUSE IN WARSAW';\n    p1.innerHTML = '<strong>Meatiest</strong> and <strong>Tastiest</strong>.';\n    p2.innerHTML = 'The <span class=\"significant\">Experience</span> you won\\'t forget.'\n    \n    home.appendChild(header);\n    home.appendChild(p1);\n    home.appendChild(p2);\n    content.appendChild(home)\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nconst content = document.querySelector('#content');\nconst navBar = document.createElement('div');\nconst navLogo = document.createElement('h1');\nconst navLinks = document.createElement('div');\nconst homeLink = document.createElement('button');\nconst menuLink = document.createElement('button');\nconst contactLink = document.createElement('button');\n\nnavBar.classList.add('nav');\nnavLinks.classList.add('links')\nnavLogo.textContent = 'WARSAW STEAKHOUSE';\nhomeLink.textContent = 'HOME';\nmenuLink.textContent = 'MENU';\ncontactLink.textContent = 'CONTACT';\n\nnavLinks.appendChild(homeLink);\nnavLinks.appendChild(menuLink);\nnavLinks.appendChild(contactLink);\n\nnavBar.appendChild(navLogo);\nnavBar.appendChild(navLinks);\n\ncontent.appendChild(navBar);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.load)();\n\nconst wipeContent = () => {\n    const tab = document.querySelector('.tab');\n    if (tab) tab.remove();\n}\n\nhomeLink.addEventListener('click', () => {\n    wipeContent();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.load)();\n})\n\nmenuLink.addEventListener('click', () => {\n    wipeContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.load)();\n})\n\ncontactLink.addEventListener('click', () => {\n    wipeContent();\n})\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"load\": () => (/* binding */ load)\n/* harmony export */ });\nconst load = () => {\n    const content = document.querySelector('#content');\n\n    content.classList.remove('black-bg');\n    content.classList.add('normal-bg');\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;