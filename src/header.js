const header = document.createElement('header');
const box = document.createElement("div");
box.setAttribute("class", "box");

// search-bar 
const div = document.createElement("div");
div.setAttribute("class", "search");


// Création de l'élément input
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "search_input");
input.setAttribute("placeholder", "Rechercher");



// Création de l'élément bouton
let button = document.createElement("button");
button.setAttribute("class", "search_button");


// Ajout des éléments dans le div
div.appendChild(box);
div.appendChild(input);
div.appendChild(button);

// Ajout du div dans le document
document.body.append(header);
header.appendChild(div);

// Ajoutez un événement 'click' au bouton pour le notifier lorsque le bouton est cliqué

button.addEventListener("click", () => {
  const event = new CustomEvent("customButtonClick");
  document.dispatchEvent(event);
});
