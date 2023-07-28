/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/boutons.js":
/*!************************!*\
  !*** ./src/boutons.js ***!
  \************************/
/***/ (() => {

eval("var main = document.createElement('main');\nvar app = document.querySelector(\"#app\");\ndocument.body.append(main);\nmain.appendChild(app);\nvar divradio = document.createElement(\"div\");\ndivradio.id = \"radioContainer\";\ndivradio.className = \"radio-inputs\";\nvar options = [\"Toutes les tâches\", \"Tâches actives\", \"Tâches achevées\"];\n\n// Boucle à travers les options pour créer les boutons radio et les étiquettes\nfor (var i = 0; i < options.length; i++) {\n  // Créez l'élément label\n  var label = document.createElement(\"label\");\n  label.classList.add(\"radio\");\n\n  // Créez l'élément input de type radio\n  var radio = document.createElement(\"input\");\n  radio.type = \"radio\";\n  radio.name = \"radio\";\n  if (i === 0) {\n    radio.checked = true; // Assurez-vous qu'un seul bouton radio est coché au départ\n  }\n\n  // Créez l'élément span contenant le texte de l'option\n  var span = document.createElement(\"span\");\n  span.classList.add(\"name\");\n  span.textContent = options[i];\n\n  // Ajoutez les éléments créés au DOM\n  label.appendChild(radio);\n  label.appendChild(span);\n  divradio.appendChild(label); // Utilisez \"divradio\" ici au lieu de \"customRadioHolder\"\n}\n\n// Sélectionnez le conteneur pour les boutons radio (après les avoir créés)\nvar customRadioHolder = document.getElementById(\"radioContainer\");\n\n// Ajoutez \"divradio\" contenant les boutons radio au DOM\napp.prepend(divradio);\n\n//# sourceURL=webpack://my-webpack-project/./src/boutons.js?");

/***/ }),

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar header = document.querySelector(\"header\");\nvar main = document.querySelector(\"main\");\n\n// Créez les éléments HTML en JavaScript\nvar label = document.createElement(\"label\");\nvar toggleCheckbox = document.createElement(\"input\");\ntoggleCheckbox.setAttribute(\"type\", \"checkbox\");\ntoggleCheckbox.classList.add(\"toggle-checkbox\");\nvar toggleSlot = document.createElement(\"div\");\ntoggleSlot.classList.add(\"toggle-slot\");\nvar sunIconWrapper = document.createElement(\"div\");\nsunIconWrapper.classList.add(\"sun-icon-wrapper\");\nvar sunIcon = document.createElement(\"div\");\nsunIcon.classList.add(\"iconify\", \"sun-icon\");\nsunIcon.setAttribute(\"data-icon\", \"feather-sun\");\nsunIcon.setAttribute(\"data-inline\", \"false\");\nvar toggleButton = document.createElement(\"div\");\ntoggleButton.classList.add(\"toggle-button\");\nvar moonIconWrapper = document.createElement(\"div\");\nmoonIconWrapper.classList.add(\"moon-icon-wrapper\");\nvar moonIcon = document.createElement(\"div\");\nmoonIcon.classList.add(\"iconify\", \"moon-icon\");\nmoonIcon.setAttribute(\"data-icon\", \"feather-moon\");\nmoonIcon.setAttribute(\"data-inline\", \"false\");\n\n// Ajoutez les éléments dans le DOM\nsunIconWrapper.appendChild(sunIcon);\ntoggleSlot.appendChild(sunIconWrapper);\ntoggleSlot.appendChild(toggleButton);\nmoonIconWrapper.appendChild(moonIcon);\ntoggleSlot.appendChild(moonIconWrapper);\nlabel.appendChild(toggleCheckbox);\nlabel.appendChild(toggleSlot);\n\n// Ajoutez le label à un élément existant dans le DOM (par exemple, le corps du document)\nheader.appendChild(label);\n\n// Ajoutez le code pour gérer le basculement en JavaScript\ntoggleButton.addEventListener(\"click\", function () {\n  toggleCheckbox.checked = !toggleCheckbox.checked;\n  document.body.classList.toggle('night');\n  updateToggle();\n});\ntoggleCheckbox.addEventListener(\"change\", function () {\n  updateToggle();\n});\nfunction updateToggle() {\n  var sunIcon = document.querySelector(\".sun-icon-wrapper\");\n  var moonIcon = document.querySelector(\".moon-icon-wrapper\");\n  var isChecked = toggleCheckbox.checked;\n  if (isChecked) {\n    sunIcon.style.display = \"none\";\n    moonIcon.style.display = \"block\";\n    main.classList.remove(\"day\");\n    main.classList.add(\"night\");\n    document.body.classList.add(\"night\");\n    document.body.classList.remove(\"day\");\n    // Ajoutez ici d'autres actions à effectuer lorsque le bouton est activé\n  } else {\n    sunIcon.style.display = \"block\";\n    moonIcon.style.display = \"none\";\n    main.classList.remove(\"night\");\n    main.classList.add(\"day\");\n    document.body.classList.remove(\"night\");\n    document.body.classList.add(\"day\");\n    // Ajoutez ici d'autres actions à effectuer lorsque le bouton est désactivé\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/dark-mode.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ (() => {

eval("var header = document.createElement('header');\nvar box = document.createElement(\"div\");\nbox.setAttribute(\"class\", \"box\");\n\n// search-bar \nvar div = document.createElement(\"div\");\ndiv.setAttribute(\"class\", \"search\");\n\n// Création de l'élément input\nvar input = document.createElement(\"input\");\ninput.setAttribute(\"type\", \"text\");\ninput.setAttribute(\"class\", \"search_input\");\ninput.setAttribute(\"placeholder\", \"Rechercher\");\n\n// Création de l'élément bouton\nvar button = document.createElement(\"button\");\nbutton.setAttribute(\"class\", \"search_button\");\n\n// Ajout des éléments dans le div\ndiv.appendChild(box);\ndiv.appendChild(input);\ndiv.appendChild(button);\n\n// Ajout du div dans le document\ndocument.body.append(header);\nheader.appendChild(div);\n\n// Ajoutez un événement 'click' au bouton pour le notifier lorsque le bouton est cliqué\n\nbutton.addEventListener(\"click\", function () {\n  var event = new CustomEvent(\"customButtonClick\");\n  document.dispatchEvent(event);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-mode.js */ \"./src/dark-mode.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ \"./src/template.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_template_js__WEBPACK_IMPORTED_MODULE_4__);\n//import { document } from \"postcss\";\n\n\n\n\n\n\n\n// Fonction pour récupérer les données du localStorage\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ (() => {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar input = document.querySelector(\"input.search_input\");\nvar button = document.querySelector(\"button.search_button\");\nvar template = \"<template id=\\\"checklistTemplate\\\">\\n<div class=\\\"checklist\\\">\\n  <input type=\\\"checkbox\\\" id=\\\"01\\\" name=\\\"r\\\" value=\\\"1\\\">\\n  <label for=\\\"01\\\">Bread</label>\\n  <div class=\\\"corbeille\\\"></div>\\n</div>\\n</template>\";\n\n// Ajout du template dans le document body\ndocument.body.insertAdjacentHTML(\"beforeend\", template);\n\n// Récupération du template\nvar checklistTemplate = document.querySelector(\"#checklistTemplate\");\nvar searchText = input.value;\nvar labels = document.querySelectorAll(\"div.checklist > label\");\ninput.addEventListener(\"input\", function () {\n  console.log(\"Texte saisi :\", searchText);\n  var labels = document.querySelectorAll(\"div.checklist > label\");\n  labels.forEach(function (label) {\n    var labelContent = label.textContent.trim().toLowerCase();\n    if (labelContent.includes(searchText)) {\n      console.log(\"Label correspondant :\", labelContent);\n    }\n  });\n});\nvar length = labels.length;\nvar checklist = document.querySelectorAll(\"checklist\");\nvar _iterator = _createForOfIteratorHelper(labels.entries()),\n  _step;\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var _step$value = _slicedToArray(_step.value, 2),\n      index = _step$value[0],\n      label = _step$value[1];\n    var isEven = index % 2 === 0;\n    if (isEven) {\n      label.parentNode.classList.remove(\"impair\");\n      label.parentNode.classList.add(\"pair\");\n    } else {\n      label.parentNode.classList.remove(\"pair\");\n      label.parentNode.classList.add(\"impair\");\n    }\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\nfunction getChecklistItemsFromLocalStorage() {\n  var checklistItemsString = localStorage.getItem(\"checklistItems\");\n  if (checklistItemsString) {\n    return JSON.parse(checklistItemsString);\n  } else {\n    return [];\n  }\n}\n\n// Fonction pour sauvegarder les données dans le localStorage\nfunction saveChecklistItemsToLocalStorage(checklistItems) {\n  var checklistItemsString = JSON.stringify(checklistItems);\n  localStorage.setItem(\"checklistItems\", checklistItemsString);\n}\n// Écoutez l'événement 'customButtonClick' sur le document pour détecter le clic du bouton\ndocument.addEventListener(\"customButtonClick\", function () {\n  var searchText = input.value.trim().toLowerCase();\n  if (searchText !== \"\") {\n    console.log(\"Texte saisi :\", searchText);\n    addChecklist(searchText);\n    input.value = \"\"; // Réinitialiser le champ d'entrée après avoir ajouté l'élément\n    var checklistItems = getChecklistItemsFromLocalStorage();\n    checklistItems.push(searchText);\n\n    // Sauvegarder les éléments de la liste mis à jour dans le localStorage\n    saveChecklistItemsToLocalStorage(checklistItems);\n  }\n});\n\n// Fonction pour ajouter un nouvel élément de liste avec un texte donné\nfunction addChecklist(labelText) {\n  var clone = document.importNode(checklistTemplate.content, true);\n  var label = clone.querySelector(\"label\");\n  label.textContent = labelText;\n  var checklist = clone.querySelector(\".checklist\");\n  var index = document.querySelectorAll(\".checklist\").length;\n  if (index % 2 === 0) {\n    checklist.classList.add(\"pair\");\n  } else {\n    checklist.classList.add(\"impair\");\n  }\n  document.getElementById(\"app\").appendChild(clone);\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var checklistItems = getChecklistItemsFromLocalStorage();\n  checklistItems.forEach(function (item) {\n    addChecklist(item);\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/template.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;