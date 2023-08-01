import "./boutons.js"
const header = document.querySelector("header");
const main = document.querySelector("main");

// Créez les éléments HTML en JavaScript

const toggleButton = document.createElement("div");
toggleButton.classList.add("toggle-button");
const label = document.createElement("label");
const toggleCheckbox = document.createElement("input");
toggleCheckbox.setAttribute("type", "checkbox");
toggleCheckbox.classList.add("toggle-checkbox");

const toggleSlot = document.createElement("div");
toggleSlot.classList.add("toggle-slot");

const sunIconWrapper = document.createElement("div");
sunIconWrapper.classList.add("sun-icon-wrapper");

const sunIcon = document.createElement("div");
sunIcon.classList.add("iconify", "sun-icon");
sunIcon.setAttribute("data-icon", "feather-sun");
sunIcon.setAttribute("data-inline", "false");



const moonIconWrapper = document.createElement("div");
moonIconWrapper.classList.add("moon-icon-wrapper");

const moonIcon = document.createElement("div");
moonIcon.classList.add("iconify", "moon-icon");
moonIcon.setAttribute("data-icon", "feather-moon");
moonIcon.setAttribute("data-inline", "false");

// Ajoutez les éléments dans le DOM
sunIconWrapper.appendChild(sunIcon);
toggleSlot.appendChild(sunIconWrapper);
toggleSlot.appendChild(toggleButton);
moonIconWrapper.appendChild(moonIcon);
toggleSlot.appendChild(moonIconWrapper);

label.appendChild(toggleCheckbox);
label.appendChild(toggleSlot);

// Ajoutez le label à un élément existant dans le DOM (par exemple, le corps du document)
header.appendChild(label);

// Ajoutez le code pour gérer le basculement en JavaScript
toggleButton.addEventListener("click", () => {
  toggleCheckbox.checked = !toggleCheckbox.checked;
  document.body.classList.toggle('night');
  updateToggle();
});

toggleCheckbox.addEventListener("change", () => {
  updateToggle();
});

function updateToggle() {
  const sunIcon = document.querySelector(".sun-icon-wrapper");
  const moonIcon = document.querySelector(".moon-icon-wrapper");
  const isChecked = toggleCheckbox.checked;
  
  if (isChecked) {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    main.classList.remove("day");
    main.classList.add("night");
    document.body.classList.add("night");
    document.body.classList.remove("day");
    // Ajoutez ici d'autres actions à effectuer lorsque le bouton est activé
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    main.classList.remove("night");
    main.classList.add("day");
    document.body.classList.remove("night");
    document.body.classList.add("day");
    // Ajoutez ici d'autres actions à effectuer lorsque le bouton est désactivé
  }
}