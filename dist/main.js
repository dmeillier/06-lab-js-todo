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

eval("var main = document.createElement('main');\nvar app = document.querySelector(\"#app\");\ndocument.body.append(main);\nmain.appendChild(app);\nvar divradio = document.createElement(\"div\");\ndivradio.id = \"radioContainer\";\ndivradio.className = \"radio-inputs\";\nvar options = [\"Toutes les tâches\", \"Tâches actives\", \"Tâches achevées\"];\n\n// Boucle à travers les options pour créer les boutons radio et les étiquettes\nfor (var i = 0; i < options.length; i++) {\n  // Créez l'élément label\n  var label = document.createElement(\"label\");\n  label.classList.add(\"radio\");\n\n  // Créez l'élément input de type radio\n  var radio = document.createElement(\"input\");\n  radio.type = \"radio\";\n  radio.name = \"radio\";\n  radio.value = options[i];\n  if (i === 0) {\n    radio.checked = true; // Assurez-vous qu'un seul bouton radio est coché au départ\n  }\n\n  // Créez l'élément span contenant le texte de l'option\n  var span = document.createElement(\"span\");\n  span.classList.add(\"name\");\n  span.textContent = options[i];\n\n  // Ajoutez les éléments créés au DOM\n  label.appendChild(radio);\n  label.appendChild(span);\n  divradio.appendChild(label); // Utilisez \"divradio\" ici au lieu de \"customRadioHolder\"\n}\n\n// Sélectionnez le conteneur pour les boutons radio (après les avoir créés)\nvar customRadioHolder = document.getElementById(\"radioContainer\");\n\n// Ajoutez \"divradio\" contenant les boutons radio au DOM\napp.prepend(divradio);\n\n//# sourceURL=webpack://my-webpack-project/./src/boutons.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-mode.js */ \"./src/dark-mode.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ \"./src/template.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_template_js__WEBPACK_IMPORTED_MODULE_4__);\n//import { document } from \"postcss\";\n\n\n\n\n\n\nvar options = [\"Toutes les tâches\", \"Tâches actives\", \"Tâches achevées\"];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var app = document.querySelector(\"#app\");\n  var customRadioHolder = document.getElementById(\"radioContainer\");\n  // Fonction pour afficher les div checklists selon l'option sélectionnée\n  function displayChecklists(option) {\n    var checklists = app.querySelectorAll(\".checklist\");\n    if (option === \"Tâches actives\") {\n      checklists.forEach(function (checklist) {\n        var input = checklist.querySelector(\"input[type='checkbox']\");\n        if (input && !input.checked) {\n          checklist.style.display = \"grid\";\n        } else {\n          checklist.style.display = \"none\";\n        }\n      });\n    } else if (option === \"Tâches achevées\") {\n      checklists.forEach(function (checklist) {\n        var input = checklist.querySelector(\"input[type='checkbox']\");\n        if (input && input.checked) {\n          checklist.style.display = \"grid\";\n        } else {\n          checklist.style.display = \"none\";\n        }\n      });\n    } else {\n      // Afficher toutes les div checklists pour l'option \"Toutes les tâches\"\n      checklists.forEach(function (checklist) {\n        checklist.style.display = \"grid\";\n      });\n    }\n  }\n  function createChecklist(labelText, index) {\n    var checklist = document.createElement(\"div\");\n    checklist.classList.add(\"checklist\");\n    var checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.id = \"checkbox_\".concat(index);\n    checkbox.name = \"r\";\n    checkbox.value = \"1\";\n    var label = document.createElement(\"label\");\n    label.setAttribute(\"for\", \"checkbox_\".concat(index));\n    label.textContent = labelText;\n    var corbeilleButton = document.createElement(\"button\");\n    corbeilleButton.classList.add(\"corbeille\");\n    corbeilleButton.addEventListener(\"click\", function () {\n      checklist.remove();\n      saveChecklistItemsToLocalStorage(getChecklistItems());\n      updateChecklistClasses();\n    });\n    checklist.appendChild(checkbox);\n    checklist.appendChild(label);\n    checklist.appendChild(corbeilleButton);\n    return checklist;\n  }\n\n  // Display all the checklists at the loading of the page\n  displayChecklists(options[0]);\n\n  // Add a handler for the radio button change event\n  customRadioHolder.addEventListener(\"change\", function (event) {\n    var selectedOption = event.target.value;\n    displayChecklists(selectedOption);\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var checklists = document.querySelectorAll(\".checklist\");\n  checklists.forEach(function (checklist) {\n    checklist.ondragstart = startDrag;\n  });\n  var containers = document.querySelectorAll(\".container\");\n  containers.forEach(function (container) {\n    container.ondragover = allowDrop;\n    container.ondrop = handleDrop;\n  });\n  var draggedElement = null;\n  function startDrag(e) {\n    draggedElement = e.target.closest('.checklist');\n    e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox\n  }\n\n  function allowDrop(e) {\n    e.preventDefault();\n  }\n  function handleDrop(e) {\n    e.preventDefault();\n    if (draggedElement) {\n      var dropTarget = e.target.closest('.checklist');\n      var container = dropTarget ? dropTarget.parentElement : e.target;\n      var dropTargetIndex = dropTarget ? Array.from(container.children).indexOf(dropTarget) : 0;\n      var draggedElementIndex = Array.from(container.children).indexOf(draggedElement);\n      if (draggedElementIndex < dropTargetIndex) {\n        container.insertBefore(draggedElement, dropTarget.nextSibling);\n      } else {\n        container.insertBefore(draggedElement, dropTarget);\n      }\n      draggedElement = null;\n    }\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var input = document.querySelector(\"input.search_input\");\n  function createChecklist(labelText) {\n    var checklist = document.createElement(\"div\");\n    checklist.classList.add(\"checklist\");\n    checklist.draggable = true;\n    var checkbox = document.createElement(\"input\");\n    checkbox.type = \"checkbox\";\n    checkbox.value = \"1\";\n    var label = document.createElement(\"label\");\n    label.textContent = labelText;\n    var corbeilleButton = document.createElement(\"button\");\n    corbeilleButton.classList.add(\"corbeille\");\n    corbeilleButton.addEventListener(\"click\", function () {\n      checklist.remove();\n      saveChecklistItemsToLocalStorage(getChecklistItems());\n      updateChecklistClasses();\n    });\n    checklist.appendChild(checkbox);\n    checklist.appendChild(label);\n    checklist.appendChild(corbeilleButton);\n    return checklist;\n  }\n\n  // Création de la div container pour les checklists\n  var checklistContainer = document.createElement(\"div\");\n  checklistContainer.classList.add(\"container\");\n  function getChecklistItemsFromLocalStorage() {\n    var checklistItemsString = localStorage.getItem(\"checklistItems\");\n    if (checklistItemsString) {\n      return JSON.parse(checklistItemsString);\n    } else {\n      return [];\n    }\n  }\n\n  // Fonction pour sauvegarder les données dans le localStorage\n  function saveChecklistItemsToLocalStorage(checklistItems) {\n    var checklistItemsString = JSON.stringify(checklistItems);\n    localStorage.setItem(\"checklistItems\", checklistItemsString);\n  }\n\n  // Fonction pour mettre à jour les classes \"pair\" et \"impair\" des divs checklist\n  function updateChecklistClasses() {\n    var checklistDivs = checklistContainer.querySelectorAll(\".checklist\");\n    checklistDivs.forEach(function (checklist, index) {\n      if (index % 2 === 0) {\n        checklist.classList.remove(\"impair\");\n        checklist.classList.add(\"pair\");\n      } else {\n        checklist.classList.remove(\"pair\");\n        checklist.classList.add(\"impair\");\n      }\n    });\n  }\n  function addChecklist(labelText) {\n    var checklist = createChecklist(labelText);\n    var index = document.querySelectorAll(\".checklist\").length;\n    if (index % 2 === 0) {\n      checklist.classList.add(\"pair\");\n    } else {\n      checklist.classList.add(\"impair\");\n    }\n    var input = checklist.querySelector(\"input[type='checkbox']\");\n    var label = checklist.querySelector(\"label\");\n\n    // Gérer le clic sur le label pour cocher/décocher la case à cocher\n    label.addEventListener(\"click\", function () {\n      input.checked = !input.checked;\n      handleChecklistClass(checklist);\n      saveChecklistItemsToLocalStorage(getChecklistItems());\n    });\n\n    // Gérer le clic sur la case à cocher elle-même pour mettre à jour les classes\n    input.addEventListener(\"click\", function () {\n      handleChecklistClass(checklist);\n      saveChecklistItemsToLocalStorage(getChecklistItems());\n    });\n    checklistContainer.appendChild(checklist);\n    updateChecklistClasses();\n  }\n  function handleChecklistClass(checklist) {\n    var index = Array.from(document.querySelectorAll(\".checklist\")).indexOf(checklist);\n    if (index % 2 === 0) {\n      checklist.classList.remove(\"impair\");\n      checklist.classList.add(\"pair\");\n    } else {\n      checklist.classList.remove(\"pair\");\n      checklist.classList.add(\"impair\");\n    }\n  }\n  function getChecklistItems() {\n    var checklistItems = [];\n    var labels = document.querySelectorAll(\"div.checklist > label\");\n    labels.forEach(function (label) {\n      checklistItems.push(label.textContent.trim().toLowerCase());\n    });\n    return checklistItems;\n  }\n\n  // Charger les éléments de la liste depuis le localStorage lors du chargement de la page\n  var checklistItems = getChecklistItemsFromLocalStorage();\n  checklistItems.forEach(function (item) {\n    addChecklist(item);\n  });\n\n  // Ajouter la div container checklistContainer à l'élément ayant l'id \"app\"\n  var app = document.getElementById(\"app\");\n  app.appendChild(checklistContainer);\n  var button = document.querySelector(\"button.search_button\");\n\n  // Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste\n  button.addEventListener(\"click\", function () {\n    var searchText = input.value.trim().toLowerCase();\n    if (searchText !== \"\") {\n      var labels = document.querySelectorAll(\"div.checklist > label\");\n      var labelExists = false;\n      labels.forEach(function (label) {\n        var labelText = label.textContent.trim().toLowerCase();\n        if (searchText === labelText) {\n          labelExists = true;\n          var checklistDiv = label.closest(\".checklist\");\n          var checklistParent = checklistDiv.parentNode;\n          // Remonter la div \"checklist\" en première position dans son parent (prepend)\n          checklistParent.prepend(checklistDiv);\n        }\n      });\n      if (!labelExists) {\n        addChecklist(searchText);\n      }\n      input.value = \"\"; // Réinitialiser le champ d'entrée après avoir ajouté l'élément\n      var _checklistItems = getChecklistItems();\n      saveChecklistItemsToLocalStorage(_checklistItems);\n    }\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/template.js?");

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