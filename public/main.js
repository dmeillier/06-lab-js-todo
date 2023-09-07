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

eval("var main = document.createElement('main');\nvar app = document.querySelector(\"#app\");\ndocument.body.append(main);\nmain.appendChild(app);\nvar divradio = document.createElement(\"div\");\ndivradio.id = \"radioContainer\";\ndivradio.className = \"radio-inputs\";\nvar options = [\"Toutes les tâches\", \"Tâches actives\", \"Tâches achevées\"];\nvar ids = [\"allTasks\", \"actived\", \"finish\"];\n// Boucle à travers les options pour créer les boutons radio et les étiquettes\nfor (var i = 0; i < options.length; i++) {\n  // Créez l'élément label\n  var label = document.createElement(\"label\");\n  label.classList.add(\"radio\");\n\n  // Créez l'élément input de type radio\n  var radio = document.createElement(\"input\");\n  radio.type = \"radio\";\n  radio.name = \"radio\";\n  radio.value = options[i];\n  radio.id = ids[i];\n  if (i === 0) {\n    radio.checked = true;\n  }\n\n  // Créez l'élément span contenant le texte de l'option\n  var span = document.createElement(\"span\");\n  span.classList.add(\"name\");\n  span.textContent = options[i];\n\n  // Ajoutez les éléments créés \n  label.appendChild(radio);\n  label.appendChild(span);\n  divradio.appendChild(label);\n}\n\n// Sélectionnez le conteneur pour les boutons radio (après les avoir créés)\nvar customRadioHolder = document.getElementById(\"radioContainer\");\n\n// Ajoutez \"divradio\" contenant les boutons radio\napp.prepend(divradio);\n\n// setCheckLists(document.querySelectorAll(\".checklist\"));\n\nvar deleteButton = document.createElement(\"button\");\ndeleteButton.setAttribute(\"id\", \"delete\");\ndeleteButton.innerText = \"Supprimer les tâches terminées\";\napp.appendChild(deleteButton);\n\n//# sourceURL=webpack://my-webpack-project/./src/boutons.js?");

/***/ }),

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\nvar main = document.querySelector(\"main\");\n\n// Créez les éléments HTML en JavaScript\n\nvar toggleButton = document.createElement(\"div\");\ntoggleButton.classList.add(\"toggle-button\");\nvar label = document.createElement(\"label\");\nlabel.setAttribute(\"aria-label\", \"dark-mode\");\nvar toggleCheckbox = document.createElement(\"input\");\ntoggleCheckbox.setAttribute(\"aria-label\", \"dark-mode\");\ntoggleCheckbox.setAttribute(\"type\", \"checkbox\");\ntoggleCheckbox.classList.add(\"toggle-checkbox\");\nvar toggleSlot = document.createElement(\"div\");\ntoggleSlot.classList.add(\"toggle-slot\");\nvar sunIconWrapper = document.createElement(\"div\");\nsunIconWrapper.classList.add(\"sun-icon-wrapper\");\nvar sunIcon = document.createElement(\"div\");\nsunIcon.classList.add(\"iconify\", \"sun-icon\");\nsunIcon.setAttribute(\"data-icon\", \"feather-sun\");\nsunIcon.setAttribute(\"data-inline\", \"false\");\nvar moonIconWrapper = document.createElement(\"div\");\nmoonIconWrapper.classList.add(\"moon-icon-wrapper\");\nvar moonIcon = document.createElement(\"div\");\nmoonIcon.classList.add(\"iconify\", \"moon-icon\");\nmoonIcon.setAttribute(\"data-icon\", \"feather-moon\");\nmoonIcon.setAttribute(\"data-inline\", \"false\");\n\n// Ajoutez les éléments dans le DOM\nsunIconWrapper.appendChild(sunIcon);\ntoggleSlot.appendChild(sunIconWrapper);\ntoggleSlot.appendChild(toggleButton);\nmoonIconWrapper.appendChild(moonIcon);\ntoggleSlot.appendChild(moonIconWrapper);\nlabel.appendChild(toggleCheckbox);\nlabel.appendChild(toggleSlot);\n\n// Ajoutez le label à un élément existant dans le DOM (par exemple, le corps du document)\n_header__WEBPACK_IMPORTED_MODULE_0__.header.appendChild(label);\n\n// Récupérez le paramètre prefers-color-scheme\nvar prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n\n// Mettez à jour le mode en fonction de la préférence système\nif (prefersDarkScheme.matches) {\n  toggleCheckbox.checked = true;\n  updateToggle(); // Ici, nous appelons la fonction updateToggle\n}\n\nfunction updateToggle() {\n  var sunIcon = document.querySelector(\".sun-icon-wrapper\");\n  var moonIcon = document.querySelector(\".moon-icon-wrapper\");\n  var isChecked = toggleCheckbox.checked;\n  if (isChecked) {\n    sunIcon.style.display = \"none\";\n    moonIcon.style.display = \"block\";\n    main.classList.remove(\"day\");\n    main.classList.add(\"night\");\n    document.body.classList.add(\"night\");\n    document.body.classList.remove(\"day\");\n  } else {\n    sunIcon.style.display = \"block\";\n    moonIcon.style.display = \"none\";\n    main.classList.remove(\"night\");\n    main.classList.add(\"day\");\n    document.body.classList.remove(\"night\");\n    document.body.classList.add(\"day\");\n  }\n}\ntoggleCheckbox.addEventListener(\"change\", function () {\n  updateToggle();\n});\n\n// Mettre à jour le mode sombre lors du chargement initial\nupdateToggle();\n\n//# sourceURL=webpack://my-webpack-project/./src/dark-mode.js?");

/***/ }),

/***/ "./src/drag&drop.js":
/*!**************************!*\
  !*** ./src/drag&drop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _move_checklists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-checklists.js */ \"./src/move-checklists.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _readOnlyError(name) { throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\"); }\n\n\nvar draggedElement = null;\ndocument.addEventListener(\"mousedown\", function (e) {\n  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.setCheckLists)(document.querySelectorAll(\".checklist\"));\n\n  // Ajouter un ID unique à chaque checklist\n  _header_js__WEBPACK_IMPORTED_MODULE_1__.checklists.forEach(function (checklist, index) {\n    checklist.setAttribute(\"data-checklist-id\", \"checklist-\".concat(index));\n  });\n  var containers = document.querySelectorAll(\".container\");\n  containers.forEach(function (container) {\n    container.addEventListener(\"dragover\", function (e) {\n      return e.preventDefault();\n    });\n    container.addEventListener(\"drop\", handleDrop);\n  });\n  _header_js__WEBPACK_IMPORTED_MODULE_1__.checklists.forEach(function (checklist) {\n    checklist.addEventListener(\"dragstart\", function (e) {\n      var checklistId = e.target.getAttribute(\"data-checklist-id\");\n      e.dataTransfer.setData(\"text/plain\", \"\"); // Nécessaire pour Firefox\n      draggedElement = {\n        element: checklist,\n        id: checklistId\n      };\n    });\n  });\n  function handleDrop(e) {\n    e.preventDefault();\n    if (!draggedElement) return;\n    var checklistId = e.dataTransfer.getData(\"text/plain\");\n    var dropTargetId = e.target.getAttribute(\"data-checklist-id\");\n    var container = dropTargetId ? e.target.parentElement : e.target;\n\n    // Trouvez l'élément glissé en fonction de son ID\n    var draggedElement = document.querySelector(\"[data-checklist-id=\\\"\".concat(checklistId, \"\\\"]\"));\n    var dropTarget = dropTargetId ? document.querySelector(\"[data-checklist-id=\\\"\".concat(dropTargetId, \"\\\"]\")) : null;\n    var dropTargetIndex = dropTarget ? _toConsumableArray(container.children).indexOf(dropTarget) : 0;\n    var draggedElementIndex = _toConsumableArray(container.children).indexOf(draggedElement);\n    container.insertBefore(draggedElement, draggedElementIndex < dropTargetIndex ? dropTarget.nextSibling : dropTarget);\n    null, _readOnlyError(\"draggedElement\");\n    // Mettez à jour les classes des checklists après le déplacement\n    (0,_move_checklists_js__WEBPACK_IMPORTED_MODULE_0__.updateChecklistClasses)();\n\n    // Réinitialisez les couleurs après le déplacement\n    resetChecklistColors();\n  }\n  // Fonction pour réinitialiser les couleurs\n  function resetChecklistColors() {\n    var checklists = document.querySelectorAll(\".checklist\");\n    checklists.forEach(function (checklist, index) {\n      checklist.classList.remove(\"rose\", \"blanc\");\n      if (index % 2 === 0) {\n        checklist.classList.add(\"rose\");\n      } else {\n        checklist.classList.add(\"blanc\");\n      }\n    });\n  }\n  resetChecklistColors(); // Appelez-le également lors du chargement initial de la page\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/drag&drop.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checklists: () => (/* binding */ checklists),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   setCheckLists: () => (/* binding */ setCheckLists)\n/* harmony export */ });\n//import  {checklists, setCheckLists} from \"./move-checklists.js\";\nvar checklists = document.querySelectorAll(\".checklist\");\nfunction setCheckLists(listChecklist) {\n  checklists = listChecklist;\n}\nvar header = document.createElement('header');\nvar box = document.createElement(\"div\");\nbox.setAttribute(\"class\", \"box\");\n\n// search-bar \nvar div = document.createElement(\"div\");\ndiv.setAttribute(\"class\", \"search\");\n\n// Création de l'élément input\nvar input = document.createElement(\"input\");\ninput.setAttribute(\"type\", \"text\");\ninput.setAttribute(\"class\", \"search_input\");\ninput.setAttribute(\"placeholder\", \"Rechercher\");\n\n// Création de l'élément bouton\nvar button = document.createElement(\"button\");\nbutton.setAttribute(\"class\", \"search_button\");\nbutton.setAttribute(\"type\", \"button\");\nbutton.setAttribute(\"aria-label\", \"ajouter une tâche\");\n\n// Ajout des éléments dans le div\ndiv.appendChild(box);\ndiv.appendChild(input);\ndiv.appendChild(button);\n\n// Ajout du div dans le document\ndocument.body.append(header);\nheader.appendChild(div);\n\n// Ajoutez un événement 'click' au bouton pour le notifier lorsque le bouton est cliqué\nbutton.addEventListener(\"click\", function () {\n  var event = new CustomEvent(\"customButtonClick\");\n  document.dispatchEvent(event);\n});\n\n// Écouter l'événement 'input' sur l'élément input\n// input.addEventListener(\"input\", () => {\n//   const searchText = input.value.toLowerCase(); \n\n//   // Parcourir toutes les checklists pour les filtrer\n//   setCheckLists(document.querySelectorAll(\".checklist\"));\n//   checklists.forEach(checklist => {\n//     const checklistText = checklist.textContent.toLowerCase();\n//     if (checklistText.includes(searchText)) {\n//       checklist.style.display = \"grid\"; \n//     } else {\n//       checklist.style.display = \"none\"; \n//     }\n//   });\n// });\n\n//# sourceURL=webpack://my-webpack-project/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDragOver: () => (/* binding */ handleDragOver),\n/* harmony export */   handleDragStart: () => (/* binding */ handleDragStart),\n/* harmony export */   handleDrop: () => (/* binding */ handleDrop),\n/* harmony export */   moveChecklist: () => (/* binding */ moveChecklist)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dark-mode.js */ \"./src/dark-mode.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ \"./src/template.js\");\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag&drop.js */ \"./src/drag&drop.js\");\n/* harmony import */ var _move_checklists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./move-checklists */ \"./src/move-checklists.js\");\n\n\n\n\n\n\n\n\n\nvar deleteButton = document.getElementById(\"delete\");\n(0,_header_js__WEBPACK_IMPORTED_MODULE_1__.setCheckLists)(document.querySelectorAll(\".checklist\"));\nvar containers = document.querySelectorAll(\".container\");\n\n// Supprimer une checklist\nfunction deleteChecklist(checklist) {\n  checklist.remove();\n  saveChecklistItemsToLocalStorage(getChecklistItems());\n}\ndeleteButton.addEventListener(\"click\", function () {\n  // Parcourez toutes les checklists\n  _header_js__WEBPACK_IMPORTED_MODULE_1__.checklists.forEach(function (checklist) {\n    if (checklist.style.display !== \"none\") {\n      var corbeilleButton = checklist.querySelector(\".corbeille\");\n      if (corbeilleButton) {\n        // Activez le bouton corbeille pour chaque checklist affichée\n        corbeilleButton.click();\n      }\n    }\n  });\n});\n\n// Gérer le déplacement de la checklist\n\nfunction moveChecklist(checklist, dropTarget) {\n  var container = dropTarget ? dropTarget.parentElement : document.getElementById(\"app\");\n  var dropTargetIndex = dropTarget ? Array.from(container.children).indexOf(dropTarget) : 0;\n  var draggedElementIndex = Array.from(container.children).indexOf(checklist);\n  if (draggedElementIndex < dropTargetIndex) {\n    if (dropTarget.nextSibling) {\n      container.insertBefore(checklist, dropTarget.nextSibling);\n    } else {\n      container.appendChild(checklist);\n    }\n  } else {\n    container.insertBefore(checklist, dropTarget);\n  }\n}\n\n// Gérer le clic sur le bouton corbeille pour supprimer une checklist\nfunction handleDeleteButtonClick(event) {\n  var checklist = event.target.closest(\".checklist\");\n  if (checklist) {\n    deleteChecklist(checklist);\n  }\n}\n\n// Gérer le début du glisser-déposer\nfunction handleDragStart(event) {\n  event.dataTransfer.setData('text/plain', event.target.id);\n}\n\n// Gérer le survol pendant le glisser-déposer\nfunction handleDragOver(event) {\n  event.preventDefault();\n}\n\n// Gérer le dépôt lors du lâcher de l'élément\nfunction handleDrop(event) {\n  event.preventDefault();\n  var checklistId = event.dataTransfer.getData('text/plain');\n  var draggedChecklist = document.getElementById(checklistId);\n  var dropTarget = event.target.closest(\".container\");\n  if (draggedChecklist && dropTarget) {\n    moveChecklist(draggedChecklist, dropTarget);\n  }\n}\n\n// Attacher les gestionnaires d'événements aux éléments\n_header_js__WEBPACK_IMPORTED_MODULE_1__.checklists.forEach(function (checklist) {\n  checklist.addEventListener(\"dragstart\", handleDragStart);\n});\ncontainers.forEach(function (container) {\n  container.addEventListener(\"dragover\", handleDragOver);\n  container.addEventListener(\"drop\", handleDrop);\n});\n\n// Ajouter des gestionnaires d'événements pour la suppression, le déplacement et le drag and drop des checklists\n// const deleteButtons = document.querySelectorAll(\".corbeille\");\n// deleteButtons.forEach(button => {\n//   button.addEventListener(\"click\", handleDeleteButtonClick);\n// });\n\n_header_js__WEBPACK_IMPORTED_MODULE_1__.checklists.forEach(function (checklist) {\n  checklist.ondragstart = handleDragStart;\n});\ncontainers.forEach(function (container) {\n  container.ondragover = handleDragOver;\n  container.ondrop = handleDrop;\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/move-checklists.js":
/*!********************************!*\
  !*** ./src/move-checklists.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayChecklists: () => (/* binding */ displayChecklists),\n/* harmony export */   updateChecklistClasses: () => (/* binding */ updateChecklistClasses)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\nvar deleteButton = document.getElementById(\"delete\");\nvar customRadioHolder = document.getElementById(\"radioContainer\");\n// Récupérez les données de checklist depuis le localStorage\nvar localStorageChecklistStates = JSON.parse(localStorage.getItem(\"checklistStates\"));\nfunction updateChecklistClasses() {\n  var checklistsArray = Array.from(_header__WEBPACK_IMPORTED_MODULE_0__.checklists);\n  var visibleChecklists = checklistsArray.filter(function (checklist) {\n    return checklist.style.display === 'grid';\n  });\n  visibleChecklists.forEach(function (checklist, index) {\n    var isEven = index % 2 === 0;\n    if (isEven) {\n      checklist.classList.add(\"rose\");\n      checklist.classList.remove(\"blanc\");\n    } else {\n      checklist.classList.add(\"blanc\");\n      checklist.classList.remove(\"rose\");\n    }\n  });\n}\nfunction displayChecklists(option) {\n  _header__WEBPACK_IMPORTED_MODULE_0__.checklists.forEach(function (checklist) {\n    var input = checklist.querySelector(\"input[type='checkbox']\");\n    var isChecked = input.checked;\n    if (option === \"Toutes les tâches\" || option === \"Tâches actives\" && !isChecked || option === \"Tâches achevées\" && isChecked) {\n      checklist.style.display = 'grid';\n    } else {\n      checklist.style.display = 'none';\n    }\n  });\n  updateChecklistClasses();\n  deleteButton.style.display = option === \"Tâches achevées\" ? \"block\" : \"none\";\n  _header__WEBPACK_IMPORTED_MODULE_0__.checklists.forEach(function (checklist, index) {\n    var input = checklist.querySelector(\"input[type='checkbox']\");\n    input.addEventListener(\"click\", function () {\n      var actived = document.getElementById(\"actived\");\n      var finish = document.getElementById(\"finish\");\n      var isChecked = input.checked;\n      if (actived.checked) {\n        if (isChecked) {\n          // Si \"Tâches actives\" est coché et la checklist est cochée, masquez la checklist\n          checklist.style.display = \"none\";\n        } else {\n          // Sinon, affichez la checklist\n          checklist.style.display = \"grid\";\n        }\n      } else if (finish.checked) {\n        if (!isChecked) {\n          // Si \"Tâches achevées\" est coché et la checklist n'est pas cochée, masquez la checklist\n          checklist.style.display = \"none\";\n        } else {\n          // Sinon, affichez la checklist\n          checklist.style.display = \"grid\";\n        }\n      } else {\n        // Si aucune option n'est cochée, affichez toujours la checklist\n        checklist.style.display = \"grid\";\n      }\n\n      // Mettez à jour le localStorage avec l'état actuel de la checklist\n      if (localStorageChecklistStates && localStorageChecklistStates[index]) {\n        localStorageChecklistStates[index].checked = input.checked;\n        localStorage.setItem(\"checklistStates\", JSON.stringify(localStorageChecklistStates));\n      }\n      updateChecklistClasses();\n      var updateEvent = new Event(\"updateDisplay\");\n      document.dispatchEvent(updateEvent);\n    });\n  });\n}\ncustomRadioHolder.addEventListener(\"change\", function (event) {\n  var selectedOption = event.target.value;\n  displayChecklists(selectedOption);\n});\nvar initialOption = customRadioHolder.querySelector('.radio:checked');\nif (initialOption) {\n  displayChecklists(initialOption.value);\n  updateChecklistClasses();\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/move-checklists.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addChecklist: () => (/* binding */ addChecklist),\n/* harmony export */   getChecklistItemsFromLocalStorage: () => (/* binding */ getChecklistItemsFromLocalStorage),\n/* harmony export */   getChecklistStates: () => (/* binding */ getChecklistStates),\n/* harmony export */   getChecklistStatesFromLocalStorage: () => (/* binding */ getChecklistStatesFromLocalStorage),\n/* harmony export */   saveChecklistStatesToLocalStorage: () => (/* binding */ saveChecklistStatesToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\nvar searchInput = document.querySelector(\"input.search_input\");\n\n// Template pour la checklist\nvar checklistTemplate = function checklistTemplate(labelText) {\n  return \"\\n <div class=\\\"checklist\\\" draggable=\\\"true\\\">\\n   <input type=\\\"checkbox\\\">\\n   <label>\".concat(labelText, \"</label>\\n   <div class=boutons><button class=\\\"modify\\\"></button>\\n   <button class=\\\"corbeille\\\"></button>\\n   </div>\\n </div>\\n \");\n};\nfunction createChecklist(labelText) {\n  var checklist = document.createElement(\"div\");\n  checklist.classList.add(\"checklist\");\n  checklist.draggable = true;\n  var checkbox = document.createElement(\"input\");\n  checkbox.type = \"checkbox\";\n  checkbox.setAttribute(\"aria-label\", \"Cocher pour définir la tâche actice\");\n  var label = document.createElement(\"label\");\n  label.textContent = labelText;\n  var boutons = document.createElement(\"div\");\n  boutons.classList.add(\"boutons\");\n  var modify = document.createElement(\"button\");\n  modify.classList.add(\"stylo\");\n  modify.setAttribute(\"aria-label\", \"stylo\");\n  modify.addEventListener(\"click\", function () {\n    // Créer un champ d'édition pour modifier le label\n    var editField = document.createElement(\"input\");\n    editField.style.border = \"2px outset grey\";\n    editField.type = \"text\";\n    editField.value = label.textContent;\n    editField.style.width = \"100%\";\n\n    // Remplacer le texte par le champ d'édition\n    label.textContent = \"\";\n    label.appendChild(editField);\n\n    // Mettre le focus sur le champ d'édition\n    editField.focus();\n\n    // Gérer la sauvegarde du label modifié\n    editField.addEventListener(\"blur\", function () {\n      label.textContent = editField.value;\n      saveChecklistStatesToLocalStorage(getChecklistItems());\n    });\n\n    // Appuyer sur la touche \"Entrée\" pour enregistrer les modifications\n    editField.addEventListener(\"keyup\", function (event) {\n      if (event.key === \"Enter\") {\n        label.textContent = editField.value;\n        saveChecklistStatesToLocalStorage(getChecklistItems());\n      }\n    });\n  });\n  var corbeilleButton = document.createElement(\"button\");\n  corbeilleButton.classList.add(\"corbeille\");\n  corbeilleButton.setAttribute(\"aria-label\", \"corbeille\");\n  corbeilleButton.addEventListener(\"click\", function () {\n    checklist.remove();\n    saveChecklistStatesToLocalStorage();\n  });\n  checklist.appendChild(checkbox);\n  checklist.appendChild(label);\n  checklist.appendChild(boutons);\n  boutons.appendChild(modify);\n  boutons.appendChild(corbeilleButton);\n  return checklist;\n}\n\n// Création de la div container pour les checklists\nvar checklistContainer = document.createElement(\"div\");\nchecklistContainer.classList.add(\"container\");\nchecklistContainer.addEventListener(\"dragstart\", function (event) {\n  event.dataTransfer.setData(\"text/plain\", \"\"); // Élément doit avoir des données pour le glisser-déposer\n  event.target.classList.add(\"dragging\");\n});\nchecklistContainer.addEventListener(\"dragover\", function (event) {\n  event.preventDefault(); // Empêche le comportement par défaut (par ex. l'ouverture de liens)\n});\n\nchecklistContainer.addEventListener(\"drop\", function (event) {\n  event.preventDefault();\n  var draggingElement = document.querySelector(\".dragging\");\n  var targetElement = event.target.closest(\".checklist\");\n  if (draggingElement && targetElement) {\n    // Échangez les positions des éléments dans le DOM\n    checklistContainer.insertBefore(draggingElement, targetElement.nextSibling);\n\n    // Réinitialisez les styles\n    draggingElement.classList.remove(\"dragging\");\n  }\n});\nfunction getChecklistItemsFromLocalStorage() {\n  var checklistItemsString = localStorage.getItem(\"checklistItems\");\n  if (checklistItemsString) {\n    return JSON.parse(checklistItemsString);\n  } else {\n    return [];\n  }\n}\nfunction getChecklistStatesFromLocalStorage() {\n  var checklistStatesString = localStorage.getItem(\"checklistStates\");\n  if (checklistStatesString) {\n    return JSON.parse(checklistStatesString);\n  } else {\n    return [];\n  }\n}\nfunction saveChecklistStatesToLocalStorage() {\n  var checklistStates = [];\n  var updateChecklists = getChecklistStates();\n  console.log(updateChecklists);\n  updateChecklists.forEach(function (checklist) {\n    var input = checklist.querySelector(\"input[type='checkbox']\");\n    //console.log(input);\n    if (input) {\n      var state = {\n        id: checklist.id,\n        checked: input.checked,\n        labelText: checklist.querySelector(\"label\").textContent.trim()\n      };\n      checklistStates.push(state);\n    }\n  });\n  localStorage.setItem(\"checklistStates\", JSON.stringify(checklistStates));\n}\nfunction getChecklistStates() {\n  var checklistStates = [];\n  var tasks = document.querySelectorAll(\"div.checklist\");\n  tasks.forEach(function (task) {\n    checklistStates.push(task);\n  });\n  return checklistStates;\n}\n\n// Ajouter la div container checklistContainer à l'élément ayant l'id \"app\"\nvar app = document.getElementById(\"app\");\napp.appendChild(checklistContainer);\nvar button = document.querySelector(\"button.search_button\");\n\n// Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste\nbutton.addEventListener(\"click\", function () {\n  var searchText = searchInput.value.trim().toLowerCase();\n  if (searchText !== \"\") {\n    var labels = document.querySelectorAll(\"div.checklist > label\");\n    var labelExists = false;\n    labels.forEach(function (label) {\n      var labelText = label.textContent.trim().toLowerCase();\n      if (searchText === labelText) {\n        labelExists = true;\n      }\n    });\n    if (!labelExists) {\n      addChecklist(searchText);\n      (0,_header__WEBPACK_IMPORTED_MODULE_0__.setCheckLists)(document.querySelectorAll(\".checklist\"));\n    }\n    searchInput.value = \"\"; // Réinitialiser le champ d'entrée après avoir ajouté l'élément\n    getChecklistStates();\n    console.log(_header__WEBPACK_IMPORTED_MODULE_0__.checklists);\n    saveChecklistStatesToLocalStorage();\n  }\n  _header__WEBPACK_IMPORTED_MODULE_0__.checklists.forEach(function (checklist) {\n    checklist.style.display = \"grid\";\n  });\n});\nfunction addChecklist(labelText, index) {\n  var statesStorage = getChecklistStatesFromLocalStorage();\n  var checklist = createChecklist(labelText);\n  var input = checklist.querySelector(\"input[type='checkbox']\");\n  var label = checklist.querySelector(\"label\");\n  if (statesStorage[index].checked) {\n    input.checked = true;\n  }\n\n  // Gérer le clic sur le label pour cocher/décocher la case à cocher\n  label.addEventListener(\"click\", function () {\n    input.checked = !input.checked;\n    getChecklistItems();\n    saveChecklistStatesToLocalStorage();\n  });\n\n  // Gérer le clic sur la case à cocher elle-même pour mettre à jour les classes\n  input.addEventListener(\"click\", function () {\n    saveChecklistStatesToLocalStorage();\n  });\n  if (index % 2 === 0) {\n    checklist.classList.add(\"rose\");\n  } else {\n    checklist.classList.add(\"blanc\");\n  }\n  checklistContainer.appendChild(checklist);\n  //saveChecklistStatesToLocalStorage();\n}\n\n// Charger les éléments de la liste depuis le localStorage lors du chargement de la page\nvar checklistStates = getChecklistStatesFromLocalStorage();\nchecklistStates.forEach(function (item, index) {\n  addChecklist(item.labelText, index);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/template.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

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