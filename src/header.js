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
button.setAttribute("type", "button");
button.setAttribute("aria-label", "ajouter une tâche");

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

// Écouter l'événement 'input' sur l'élément input
input.addEventListener("input", () => {
  const searchText = input.value.toLowerCase(); 
  
  // Parcourir toutes les checklists pour les filtrer
  const checklists = document.querySelectorAll(".checklist");
  checklists.forEach(checklist => {
    const checklistText = checklist.textContent.toLowerCase();
    if (checklistText.includes(searchText)) {
      checklist.style.display = "grid"; 
    } else {
      checklist.style.display = "none"; 
    }
  });
});