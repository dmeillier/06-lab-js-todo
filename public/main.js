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

eval("var main = document.createElement('main');\nvar app = document.querySelector(\"#app\");\ndocument.body.append(main);\nmain.appendChild(app);\nvar divradio = document.createElement(\"div\");\ndivradio.id = \"radioContainer\";\ndivradio.className = \"radio-inputs\";\nvar options = [\"Toutes les tâches\", \"Tâches actives\", \"Tâches achevées\"];\n\n// Boucle à travers les options pour créer les boutons radio et les étiquettes\nfor (var i = 0; i < options.length; i++) {\n  // Créez l'élément label\n  var label = document.createElement(\"label\");\n  label.classList.add(\"radio\");\n\n  // Créez l'élément input de type radio\n  var radio = document.createElement(\"input\");\n  radio.type = \"radio\";\n  radio.name = \"radio\";\n  radio.value = options[i];\n  if (i === 0) {\n    radio.checked = true;\n  }\n\n  // Créez l'élément span contenant le texte de l'option\n  var span = document.createElement(\"span\");\n  span.classList.add(\"name\");\n  span.textContent = options[i];\n\n  // Ajoutez les éléments créés \n  label.appendChild(radio);\n  label.appendChild(span);\n  divradio.appendChild(label);\n}\n\n// Sélectionnez le conteneur pour les boutons radio (après les avoir créés)\nvar customRadioHolder = document.getElementById(\"radioContainer\");\n\n// Ajoutez \"divradio\" contenant les boutons radio\napp.prepend(divradio);\nvar checklist = document.querySelectorAll(\".checklist\");\nvar deleteButton = document.createElement(\"button\");\ndeleteButton.setAttribute(\"id\", \"delete\");\ndeleteButton.innerText = \"Supprimer les tâches terminées\";\napp.appendChild(deleteButton);\n\n//# sourceURL=webpack://my-webpack-project/./src/boutons.js?");

/***/ }),

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar header = document.querySelector(\"header\");\nvar main = document.querySelector(\"main\");\n\n// Créez les éléments HTML en JavaScript\n\nvar toggleButton = document.createElement(\"div\");\ntoggleButton.classList.add(\"toggle-button\");\nvar label = document.createElement(\"label\");\nlabel.setAttribute(\"aria-label\", \"dark-mode\");\nvar toggleCheckbox = document.createElement(\"input\");\ntoggleCheckbox.setAttribute(\"aria-label\", \"dark-mode\");\ntoggleCheckbox.setAttribute(\"type\", \"checkbox\");\ntoggleCheckbox.classList.add(\"toggle-checkbox\");\nvar toggleSlot = document.createElement(\"div\");\ntoggleSlot.classList.add(\"toggle-slot\");\nvar sunIconWrapper = document.createElement(\"div\");\nsunIconWrapper.classList.add(\"sun-icon-wrapper\");\nvar sunIcon = document.createElement(\"div\");\nsunIcon.classList.add(\"iconify\", \"sun-icon\");\nsunIcon.setAttribute(\"data-icon\", \"feather-sun\");\nsunIcon.setAttribute(\"data-inline\", \"false\");\nvar moonIconWrapper = document.createElement(\"div\");\nmoonIconWrapper.classList.add(\"moon-icon-wrapper\");\nvar moonIcon = document.createElement(\"div\");\nmoonIcon.classList.add(\"iconify\", \"moon-icon\");\nmoonIcon.setAttribute(\"data-icon\", \"feather-moon\");\nmoonIcon.setAttribute(\"data-inline\", \"false\");\n\n// Ajoutez les éléments dans le DOM\nsunIconWrapper.appendChild(sunIcon);\ntoggleSlot.appendChild(sunIconWrapper);\ntoggleSlot.appendChild(toggleButton);\nmoonIconWrapper.appendChild(moonIcon);\ntoggleSlot.appendChild(moonIconWrapper);\nlabel.appendChild(toggleCheckbox);\nlabel.appendChild(toggleSlot);\n\n// Ajoutez le label à un élément existant dans le DOM (par exemple, le corps du document)\nheader.appendChild(label);\n\n// Récupérez le paramètre prefers-color-scheme\nvar prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\");\n\n// Mettez à jour le mode en fonction de la préférence système\nif (prefersDarkScheme.matches) {\n  toggleCheckbox.checked = true;\n  updateToggle(); // Ici, nous appelons la fonction updateToggle\n}\n\nfunction updateToggle() {\n  var sunIcon = document.querySelector(\".sun-icon-wrapper\");\n  var moonIcon = document.querySelector(\".moon-icon-wrapper\");\n  var isChecked = toggleCheckbox.checked;\n  if (isChecked) {\n    sunIcon.style.display = \"none\";\n    moonIcon.style.display = \"block\";\n    main.classList.remove(\"day\");\n    main.classList.add(\"night\");\n    document.body.classList.add(\"night\");\n    document.body.classList.remove(\"day\");\n  } else {\n    sunIcon.style.display = \"block\";\n    moonIcon.style.display = \"none\";\n    main.classList.remove(\"night\");\n    main.classList.add(\"day\");\n    document.body.classList.remove(\"night\");\n    document.body.classList.add(\"day\");\n  }\n}\ntoggleCheckbox.addEventListener(\"change\", function () {\n  updateToggle();\n});\n\n// Mettre à jour le mode sombre lors du chargement initial\nupdateToggle();\n\n//# sourceURL=webpack://my-webpack-project/./src/dark-mode.js?");

/***/ }),

/***/ "./src/drag&drop.js":
/*!**************************!*\
  !*** ./src/drag&drop.js ***!
  \**************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var checklists = document.querySelectorAll(\".checklist\");\n  var containers = document.querySelectorAll(\".container\");\n  var draggedElement = null;\n  containers.forEach(function (container) {\n    container.addEventListener(\"dragover\", function (e) {\n      return e.preventDefault();\n    });\n    container.addEventListener(\"drop\", handleDrop);\n  });\n  checklists.forEach(function (checklist) {\n    checklist.addEventListener(\"dragstart\", function (e) {\n      e.dataTransfer.setData(\"text/plain\", \"\"); // Nécessaire pour Firefox\n      draggedElement = checklist;\n    });\n  });\n  function handleDrop(e) {\n    e.preventDefault();\n    if (!draggedElement) return;\n    var dropTarget = e.target.closest(\".checklist\");\n    var container = dropTarget ? dropTarget.parentElement : e.target;\n    var dropTargetIndex = dropTarget ? _toConsumableArray(container.children).indexOf(dropTarget) : 0;\n    var draggedElementIndex = _toConsumableArray(container.children).indexOf(draggedElement);\n    container.insertBefore(draggedElement, draggedElementIndex < dropTargetIndex ? dropTarget.nextSibling : dropTarget);\n    var newChecklists = container.querySelectorAll(\".checklist\");\n    newChecklists.forEach(function (checklist, index) {\n      var isEven = index % 2 === 0;\n      checklist.classList.toggle(\"impair\", isEven);\n      checklist.classList.toggle(\"pair\", !isEven);\n    });\n    draggedElement = null;\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/drag&drop.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ (() => {

eval("var header = document.createElement('header');\nvar box = document.createElement(\"div\");\nbox.setAttribute(\"class\", \"box\");\n\n// search-bar \nvar div = document.createElement(\"div\");\ndiv.setAttribute(\"class\", \"search\");\n\n// Création de l'élément input\nvar input = document.createElement(\"input\");\ninput.setAttribute(\"type\", \"text\");\ninput.setAttribute(\"class\", \"search_input\");\ninput.setAttribute(\"placeholder\", \"Rechercher\");\n\n// Création de l'élément bouton\nvar button = document.createElement(\"button\");\nbutton.setAttribute(\"class\", \"search_button\");\nbutton.setAttribute(\"type\", \"button\");\nbutton.setAttribute(\"aria-label\", \"ajouter une tâche\");\n\n// Ajout des éléments dans le div\ndiv.appendChild(box);\ndiv.appendChild(input);\ndiv.appendChild(button);\n\n// Ajout du div dans le document\ndocument.body.append(header);\nheader.appendChild(div);\n\n// Ajoutez un événement 'click' au bouton pour le notifier lorsque le bouton est cliqué\nbutton.addEventListener(\"click\", function () {\n  var event = new CustomEvent(\"customButtonClick\");\n  document.dispatchEvent(event);\n});\n\n// Écouter l'événement 'input' sur l'élément input\ninput.addEventListener(\"input\", function () {\n  var searchText = input.value.toLowerCase();\n\n  // Parcourir toutes les checklists pour les filtrer\n  var checklists = document.querySelectorAll(\".checklist\");\n  checklists.forEach(function (checklist) {\n    var checklistText = checklist.textContent.toLowerCase();\n    if (checklistText.includes(searchText)) {\n      checklist.style.display = \"grid\";\n    } else {\n      checklist.style.display = \"none\";\n    }\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dark-mode.js */ \"./src/dark-mode.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boutons.js */ \"./src/boutons.js\");\n/* harmony import */ var _boutons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_boutons_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template.js */ \"./src/template.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_template_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag&drop.js */ \"./src/drag&drop.js\");\n/* harmony import */ var _drag_drop_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_drag_drop_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar deleteButton = document.getElementById(\"delete\");\nvar app = document.querySelector(\"#app\");\nvar customRadioHolder = document.getElementById(\"radioContainer\");\nvar checklists = document.querySelectorAll(\".checklist\"); // Déplacer cette ligne ici\nvar containers = document.querySelectorAll(\".container\"); // Déplacer cette ligne ici\nvar checkboxes = document.querySelectorAll(\".checklist input[type='checkbox']\"); // Déplacer cette ligne ici\nvar filters = document.querySelectorAll('.radio');\n\n// Fonction pour afficher les div checklists selon l'option sélectionnée\nfunction displayChecklists(option) {\n  var showDeleteButton = option === \"Tâches achevées\"; // Variable pour indiquer si le bouton deleteButton doit être affiché\n  var displayedChecklistsCount = 0; // Compteur pour les checklists affichées\n\n  checklists.forEach(function (checklist, index) {\n    var input = checklist.querySelector(\"input[type='checkbox']\");\n    var shouldDisplay = option === \"Toutes les tâches\" ||\n    // Afficher toutes les tâches si l'option est \"Toutes les tâches\"\n    option === \"Tâches actives\" && input && !input.checked ||\n    // Afficher les tâches actives si l'option est \"Tâches actives\" et la checkbox n'est pas cochée\n    option === \"Tâches achevées\" && input && input.checked; // Afficher les tâches achevées si l'option est \"Tâches achevées\" et la checkbox est cochée\n\n    checklist.style.display = shouldDisplay ? \"grid\" : \"none\";\n    if (shouldDisplay) {\n      checklist.classList.remove(\"pair\", \"impair\");\n      if (index % 2 === 0) {\n        checklist.classList.add(\"impair\");\n      } else {\n        checklist.classList.add(\"pair\");\n      }\n    } else {\n      checklist.classList.remove(\"pair\", \"impair\");\n    }\n    if (shouldDisplay) {\n      displayedChecklistsCount++;\n      checklist.classList.remove(\"pair\", \"impair\");\n      checklist.classList.add(displayedChecklistsCount % 2 === 0 ? \"pair\" : \"impair\");\n    }\n  });\n  deleteButton.style.display = showDeleteButton ? \"block\" : \"none\";\n}\n\n// Supprimer une checklist\nfunction deleteChecklist(checklist) {\n  checklist.remove();\n  saveChecklistItemsToLocalStorage(getChecklistItems());\n  updateChecklistClasses(); // Appeler handleChecklistClass pour mettre à jour les classes des checklists restantes\n}\n\ndeleteButton.addEventListener(\"click\", function () {\n  // Parcourez toutes les checklists\n  checklists.forEach(function (checklist) {\n    if (checklist.style.display !== \"none\") {\n      var corbeilleButton = checklist.querySelector(\".corbeille\");\n      if (corbeilleButton) {\n        // Activez le bouton corbeille pour chaque checklist affichée\n        corbeilleButton.click();\n      }\n    }\n  });\n});\n\n// Ajouter un gestionnaire d'événement pour le changement d'état des boutons radio\ncustomRadioHolder.addEventListener(\"change\", function (event) {\n  var selectedOption = event.target.value;\n  displayChecklists(selectedOption);\n});\n\n// Gérer le déplacement de la checklist\nfunction moveChecklist(checklist, dropTarget) {\n  var container = dropTarget ? dropTarget.parentElement : document.getElementById(\"app\");\n  var dropTargetIndex = dropTarget ? Array.from(container.children).indexOf(dropTarget) : 0;\n  var draggedElementIndex = Array.from(container.children).indexOf(checklist);\n  if (draggedElementIndex < dropTargetIndex) {\n    if (dropTarget.nextSibling) {\n      container.insertBefore(checklist, dropTarget.nextSibling);\n    } else {\n      container.appendChild(checklist);\n    }\n  } else {\n    container.insertBefore(checklist, dropTarget);\n  }\n}\n\n// Gérer le clic sur le bouton corbeille pour supprimer une checklist\nfunction handleDeleteButtonClick(event) {\n  var checklist = event.target.closest(\".checklist\");\n  if (checklist) {\n    deleteChecklist(checklist);\n  }\n  // updateChecklistClasses();\n}\n\n// Gérer le début du glisser-déposer\nfunction handleDragStart(event) {\n  event.dataTransfer.setData('text/plain', event.target.id);\n}\n\n// Gérer le survol pendant le glisser-déposer\nfunction handleDragOver(event) {\n  event.preventDefault();\n}\n\n// Gérer le dépôt lors du lâcher de l'élément\nfunction handleDrop(event) {\n  event.preventDefault();\n  var checklistId = event.dataTransfer.getData('text/plain');\n  var draggedChecklist = document.getElementById(checklistId);\n  var dropTarget = event.target.closest(\".container\");\n  if (draggedChecklist && dropTarget) {\n    moveChecklist(draggedChecklist, dropTarget);\n  }\n}\n\n// Attacher les gestionnaires d'événements aux éléments\nchecklists.forEach(function (checklist) {\n  checklist.addEventListener(\"dragstart\", handleDragStart);\n});\ncontainers.forEach(function (container) {\n  container.addEventListener(\"dragover\", handleDragOver);\n  container.addEventListener(\"drop\", handleDrop);\n});\nfunction saveChecklistItemsToLocalStorage() {\n  var checklistStates = [];\n  checklists.forEach(function (checklist) {\n    if (input) {\n      var state = {\n        id: checklist.id,\n        checked: input.checked\n      };\n      checklistStates.push(state);\n    }\n  });\n  localStorage.setItem(\"checklistStates\", JSON.stringify(checklistStates));\n}\n// .........................................\n\n// Ajouter un gestionnaire d'événement aux cases à cocher des checklists\nchecklists.forEach(function (checklist) {\n  var input = checklist.querySelector(\"input[type='checkbox']\");\n  input.addEventListener('change', function () {\n    var isChecked = input.checked;\n    if (isChecked) {\n      checklist.style.display = 'none';\n    } else {\n      var selectedOption = document.querySelector('.radio:checked');\n      if (selectedOption && selectedOption.value === \"Tâches achevées\") {\n        checklist.style.display = 'none';\n      } else {\n        checklist.style.display = 'grid';\n      }\n    }\n    applyFilters();\n  });\n});\nfunction applyFilters() {\n  var selectedOption = document.querySelector('.radio:checked');\n  checklists.forEach(function (checklist) {\n    var input = checklist.querySelector(\"input[type='checkbox']\");\n    if (selectedOption && input) {\n      if (selectedOption.value === \"Tâches actives\" && input.checked || selectedOption.value === \"Tâches achevées\" && !input.checked) {\n        checklist.style.display = 'none';\n      } else {\n        checklist.style.display = 'grid';\n      }\n    }\n  });\n}\n\n// Ajouter un gestionnaire d'événement aux filtres\nfilters.forEach(function (filter) {\n  filter.addEventListener('change', applyFilters);\n});\n\n// Appliquer les filtres au chargement de la page\napplyFilters();\n\n// Ajouter des gestionnaires d'événements pour la suppression, le déplacement et le drag and drop des checklists\nvar deleteButtons = document.querySelectorAll(\".corbeille\");\ndeleteButtons.forEach(function (button) {\n  button.addEventListener(\"click\", handleDeleteButtonClick);\n});\nchecklists.forEach(function (checklist) {\n  checklist.ondragstart = handleDragStart;\n});\ncontainers.forEach(function (container) {\n  container.ondragover = handleDragOver;\n  container.ondrop = handleDrop;\n});\ncheckboxes.forEach(function (checkbox) {\n  checkbox.addEventListener(\"change\", _template_js__WEBPACK_IMPORTED_MODULE_4__.handleCheckboxChange);\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ (() => {

eval("var input = document.querySelector(\"input.search_input\");\n\n// Template pour la checklist\nvar checklistTemplate = function checklistTemplate(labelText) {\n  return \"\\n<div class=\\\"checklist\\\" draggable=\\\"true\\\">\\n  <input type=\\\"checkbox\\\">\\n  <label>\".concat(labelText, \"</label>\\n  <button class=\\\"corbeille\\\"></button>\\n</div>\\n\");\n};\nfunction createChecklist(labelText) {\n  var checklist = document.createElement(\"div\");\n  checklist.classList.add(\"checklist\");\n  checklist.draggable = true;\n  var checkbox = document.createElement(\"input\");\n  checkbox.type = \"checkbox\";\n  checkbox.setAttribute(\"aria-label\", checkbox);\n  var label = document.createElement(\"label\");\n  label.textContent = labelText;\n  var corbeilleButton = document.createElement(\"button\");\n  corbeilleButton.classList.add(\"corbeille\");\n  corbeilleButton.setAttribute(\"aria-label\", \"corbeille\");\n  corbeilleButton.addEventListener(\"click\", function () {\n    checklist.remove();\n    saveChecklistItemsToLocalStorage(getChecklistItems());\n    updateChecklistClasses();\n  });\n  checklist.appendChild(checkbox);\n  checklist.appendChild(label);\n  checklist.appendChild(corbeilleButton);\n  return checklist;\n}\n\n// Création de la div container pour les checklists\nvar checklistContainer = document.createElement(\"div\");\nchecklistContainer.classList.add(\"container\");\nchecklistContainer.addEventListener(\"dragstart\", function (event) {\n  event.dataTransfer.setData(\"text/plain\", \"\"); // Élément doit avoir des données pour le glisser-déposer\n  event.target.classList.add(\"dragging\");\n});\nchecklistContainer.addEventListener(\"dragover\", function (event) {\n  event.preventDefault(); // Empêche le comportement par défaut (par ex. l'ouverture de liens)\n});\n\nchecklistContainer.addEventListener(\"drop\", function (event) {\n  event.preventDefault();\n  var draggingElement = document.querySelector(\".dragging\");\n  var targetElement = event.target.closest(\".checklist\");\n  if (draggingElement && targetElement) {\n    // Échangez les positions des éléments dans le DOM\n    checklistContainer.insertBefore(draggingElement, targetElement.nextSibling);\n\n    // Réinitialisez les styles\n    draggingElement.classList.remove(\"dragging\");\n  }\n});\nfunction getChecklistItemsFromLocalStorage() {\n  var checklistItemsString = localStorage.getItem(\"checklistItems\");\n  if (checklistItemsString) {\n    return JSON.parse(checklistItemsString);\n  } else {\n    return [];\n  }\n}\n\n// Fonction pour sauvegarder les données dans le localStorage\nfunction saveChecklistItemsToLocalStorage(checklistItems) {\n  var checklistItemsString = JSON.stringify(checklistItems);\n  localStorage.setItem(\"checklistItems\", checklistItemsString);\n}\n\n// Fonction pour mettre à jour les classes \"pair\" et \"impair\" des divs checklist\nfunction updateChecklistClasses() {\n  var checklistDivs = checklistContainer.querySelectorAll(\".checklist\");\n  checklistDivs.forEach(function (checklist, index) {\n    if (index % 2 === 0) {\n      checklist.classList.remove(\"pair\");\n      checklist.classList.add(\"impair\");\n    } else {\n      checklist.classList.remove(\"impair\");\n      checklist.classList.add(\"pair\");\n    }\n  });\n}\nfunction addChecklist(labelText) {\n  var checklist = createChecklist(labelText);\n  var index = document.querySelectorAll(\".checklist\").length;\n  if (index % 2 === 0) {\n    checklist.classList.add(\"pair\");\n  } else {\n    checklist.classList.add(\"impair\");\n  }\n  var input = checklist.querySelector(\"input[type='checkbox']\");\n  var label = checklist.querySelector(\"label\");\n\n  // Gérer le clic sur le label pour cocher/décocher la case à cocher\n  label.addEventListener(\"click\", function () {\n    input.checked = !input.checked;\n    handleChecklistClass(checklist);\n    saveChecklistItemsToLocalStorage(getChecklistItems());\n  });\n\n  // Gérer le clic sur la case à cocher elle-même pour mettre à jour les classes\n  input.addEventListener(\"click\", function () {\n    handleChecklistClass(checklist);\n    saveChecklistItemsToLocalStorage(getChecklistItems());\n  });\n  checklistContainer.appendChild(checklist);\n  updateChecklistClasses();\n}\nfunction handleChecklistClass(checklist) {\n  var index = Array.from(document.querySelectorAll(\".checklist\")).indexOf(checklist);\n  if (index % 2 === 0) {\n    checklist.classList.remove(\"pair\");\n    checklist.classList.add(\"impair\");\n  } else {\n    checklist.classList.remove(\"impair\");\n    checklist.classList.add(\"pair\");\n  }\n}\nfunction getChecklistItems() {\n  var checklistItems = [];\n  var labels = document.querySelectorAll(\"div.checklist > label\");\n  labels.forEach(function (label) {\n    checklistItems.push(label.textContent.trim().toLowerCase());\n  });\n  return checklistItems;\n}\n\n// Charger les éléments de la liste depuis le localStorage lors du chargement de la page\nvar checklistItems = getChecklistItemsFromLocalStorage();\nchecklistItems.forEach(function (item) {\n  addChecklist(item);\n});\n\n// Ajouter la div container checklistContainer à l'élément ayant l'id \"app\"\nvar app = document.getElementById(\"app\");\napp.appendChild(checklistContainer);\nvar button = document.querySelector(\"button.search_button\");\n\n// Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste\nbutton.addEventListener(\"click\", function () {\n  var searchText = input.value.trim().toLowerCase();\n  if (searchText !== \"\") {\n    var labels = document.querySelectorAll(\"div.checklist > label\");\n    var labelExists = false;\n    labels.forEach(function (label) {\n      var labelText = label.textContent.trim().toLowerCase();\n      if (searchText === labelText) {\n        labelExists = true;\n      }\n    });\n    if (!labelExists) {\n      addChecklist(searchText);\n    }\n    updateChecklistClasses();\n    input.value = \"\"; // Réinitialiser le champ d'entrée après avoir ajouté l'élément\n    var _checklistItems = getChecklistItems();\n    saveChecklistItemsToLocalStorage(_checklistItems);\n  }\n  var checklists = document.querySelectorAll(\".checklist\");\n  checklists.forEach(function (checklist) {\n    checklist.style.display = \"grid\";\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/template.js?");

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