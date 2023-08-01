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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar header = document.querySelector(\"header\");\nvar main = document.querySelector(\"main\");\n\n// Créez les éléments HTML en JavaScript\n\nvar toggleButton = document.createElement(\"div\");\ntoggleButton.classList.add(\"toggle-button\");\nvar label = document.createElement(\"label\");\nvar toggleCheckbox = document.createElement(\"input\");\ntoggleCheckbox.setAttribute(\"type\", \"checkbox\");\ntoggleCheckbox.classList.add(\"toggle-checkbox\");\nvar toggleSlot = document.createElement(\"div\");\ntoggleSlot.classList.add(\"toggle-slot\");\nvar sunIconWrapper = document.createElement(\"div\");\nsunIconWrapper.classList.add(\"sun-icon-wrapper\");\nvar sunIcon = document.createElement(\"div\");\nsunIcon.classList.add(\"iconify\", \"sun-icon\");\nsunIcon.setAttribute(\"data-icon\", \"feather-sun\");\nsunIcon.setAttribute(\"data-inline\", \"false\");\nvar moonIconWrapper = document.createElement(\"div\");\nmoonIconWrapper.classList.add(\"moon-icon-wrapper\");\nvar moonIcon = document.createElement(\"div\");\nmoonIcon.classList.add(\"iconify\", \"moon-icon\");\nmoonIcon.setAttribute(\"data-icon\", \"feather-moon\");\nmoonIcon.setAttribute(\"data-inline\", \"false\");\n\n// Ajoutez les éléments dans le DOM\nsunIconWrapper.appendChild(sunIcon);\ntoggleSlot.appendChild(sunIconWrapper);\ntoggleSlot.appendChild(toggleButton);\nmoonIconWrapper.appendChild(moonIcon);\ntoggleSlot.appendChild(moonIconWrapper);\nlabel.appendChild(toggleCheckbox);\nlabel.appendChild(toggleSlot);\n\n// Ajoutez le label à un élément existant dans le DOM (par exemple, le corps du document)\nheader.appendChild(label);\n\n// Ajoutez le code pour gérer le basculement en JavaScript\ntoggleButton.addEventListener(\"click\", function () {\n  toggleCheckbox.checked = !toggleCheckbox.checked;\n  document.body.classList.toggle('night');\n  updateToggle();\n});\ntoggleCheckbox.addEventListener(\"change\", function () {\n  updateToggle();\n});\nfunction updateToggle() {\n  var sunIcon = document.querySelector(\".sun-icon-wrapper\");\n  var moonIcon = document.querySelector(\".moon-icon-wrapper\");\n  var isChecked = toggleCheckbox.checked;\n  if (isChecked) {\n    sunIcon.style.display = \"none\";\n    moonIcon.style.display = \"block\";\n    main.classList.remove(\"day\");\n    main.classList.add(\"night\");\n    document.body.classList.add(\"night\");\n    document.body.classList.remove(\"day\");\n    // Ajoutez ici d'autres actions à effectuer lorsque le bouton est activé\n  } else {\n    sunIcon.style.display = \"block\";\n    moonIcon.style.display = \"none\";\n    main.classList.remove(\"night\");\n    main.classList.add(\"day\");\n    document.body.classList.remove(\"night\");\n    document.body.classList.add(\"day\");\n    // Ajoutez ici d'autres actions à effectuer lorsque le bouton est désactivé\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/dark-mode.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-mode.js */ \"./src/dark-mode.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ \"./src/template.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_template_js__WEBPACK_IMPORTED_MODULE_4__);\n//import { document } from \"postcss\";\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var input = document.querySelector(\"input.search_input\");\n  var template = \"\\n    <template id=\\\"checklistTemplate\\\">\\n      <div class=\\\"checklist\\\">\\n        <input type=\\\"checkbox\\\" id=\\\"01\\\" name=\\\"r\\\" value=\\\"1\\\">\\n        <label for=\\\"01\\\">Bread</label>\\n        <button class=\\\"corbeille\\\"></button>\\n      </div>\\n    </template>\";\n\n  // Ajout du template dans le document body\n  document.body.insertAdjacentHTML(\"beforeend\", template);\n\n  // Récupération du template\n  var checklistTemplate = document.querySelector(\"#checklistTemplate\");\n\n  // Création de la div container pour les clones\n  var checklistContainer = document.createElement(\"div\");\n  checklistContainer.classList.add(\"container\");\n  function getChecklistItemsFromLocalStorage() {\n    var checklistItemsString = localStorage.getItem(\"checklistItems\");\n    if (checklistItemsString) {\n      return JSON.parse(checklistItemsString);\n    } else {\n      return [];\n    }\n  }\n\n  // Fonction pour sauvegarder les données dans le localStorage\n  function saveChecklistItemsToLocalStorage(checklistItems) {\n    var checklistItemsString = JSON.stringify(checklistItems);\n    localStorage.setItem(\"checklistItems\", checklistItemsString);\n  }\n  // Fonction pour mettre à jour les classes \"pair\" et \"impair\" des divs checklist\n  function updateChecklistClasses() {\n    var checklistDivs = checklistContainer.querySelectorAll(\".checklist\");\n    checklistDivs.forEach(function (checklist, index) {\n      if (index % 2 === 0) {\n        checklist.classList.remove(\"impair\");\n        checklist.classList.add(\"pair\");\n      } else {\n        checklist.classList.remove(\"pair\");\n        checklist.classList.add(\"impair\");\n      }\n    });\n  }\n  function addChecklist(labelText) {\n    var clone = document.importNode(checklistTemplate.content, true);\n    var label = clone.querySelector(\"label\");\n    var input = clone.querySelector(\"input[type='checkbox']\"); // Récupérer l'input (case à cocher)\n    label.textContent = labelText;\n    var checklist = clone.querySelector(\".checklist\");\n    var index = document.querySelectorAll(\".checklist\").length;\n    if (index % 2 === 0) {\n      checklist.classList.add(\"pair\");\n    } else {\n      checklist.classList.add(\"impair\");\n    }\n\n    // Gérer le clic sur le label pour cocher/décocher la case à cocher\n    label.addEventListener(\"click\", function () {\n      input.checked = !input.checked;\n      handleChecklistClass(checklist);\n      saveChecklistItemsToLocalStorage(getChecklistItems());\n    });\n\n    // Gérer le clic sur la case à cocher elle-même pour mettre à jour les classes\n    input.addEventListener(\"click\", function () {\n      handleChecklistClass(checklist);\n      saveChecklistItemsToLocalStorage(getChecklistItems());\n    });\n    // Gérer le clic sur le bouton \"corbeille\" pour supprimer la div checklist\n    var corbeilleButton = clone.querySelector(\".corbeille\");\n    corbeilleButton.addEventListener(\"click\", function () {\n      var checklistDiv = corbeilleButton.closest(\".checklist\");\n      if (checklistDiv) {\n        checklistDiv.remove();\n        saveChecklistItemsToLocalStorage(getChecklistItems());\n        updateChecklistClasses(); // Mettre à jour les classes après la suppression\n      }\n    });\n\n    checklistContainer.appendChild(clone);\n    updateChecklistClasses(); // Mettre à jour les classes après l'ajout\n  }\n\n  function handleChecklistClass(checklist) {\n    var index = Array.from(document.querySelectorAll(\".checklist\")).indexOf(checklist);\n    if (index % 2 === 0) {\n      checklist.classList.remove(\"impair\");\n      checklist.classList.add(\"pair\");\n    } else {\n      checklist.classList.remove(\"pair\");\n      checklist.classList.add(\"impair\");\n    }\n  }\n  function getChecklistItems() {\n    var checklistItems = [];\n    var labels = document.querySelectorAll(\"div.checklist > label\");\n    labels.forEach(function (label) {\n      checklistItems.push(label.textContent.trim().toLowerCase());\n    });\n    return checklistItems;\n  }\n\n  // Charger les éléments de la liste depuis le localStorage lors du chargement de la page\n  var checklistItems = getChecklistItemsFromLocalStorage();\n  checklistItems.forEach(function (item) {\n    addChecklist(item);\n  });\n  // Ajouter la div container checklistContainer à l'élément ayant l'id \"app\"\n  var app = document.getElementById(\"app\");\n  app.appendChild(checklistContainer);\n  var button = document.querySelector(\"button.search_button\");\n  var labels = document.querySelectorAll(\"label\");\n\n  // Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste\n  button.addEventListener(\"click\", function () {\n    var input = document.querySelector(\"input\");\n    var searchText = input.value.trim().toLowerCase();\n    if (searchText !== \"\") {\n      console.log(\"Texte saisi :\", searchText);\n      var _labels = document.querySelectorAll(\"div.checklist > label\");\n      var labelExists = false;\n      _labels.forEach(function (label) {\n        var labelText = label.textContent.trim().toLowerCase();\n        console.log(\"Texte dans le label :\", labelText);\n        if (searchText === labelText) {\n          labelExists = true;\n          console.log(\"Le texte saisi correspond au texte dans ce label !\");\n          var checklistDiv = label.closest(\".checklist\");\n          var checklistParent = checklistDiv.parentNode;\n\n          // Remonter la div \"checklist\" en première position dans son parent (prepend)\n          checklistParent.prepend(checklistDiv);\n        }\n      });\n      if (!labelExists) {\n        console.log(\"Le texte saisi ne correspond à aucun label. Création d'un nouvel élément de liste :\", searchText);\n        addChecklist(searchText);\n      }\n      input.value = \"\"; // Réinitialiser le champ d'entrée après avoir ajouté l'élément\n      var _checklistItems = getChecklistItems();\n      saveChecklistItemsToLocalStorage(_checklistItems);\n    }\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/template.js?");

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