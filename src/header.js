
export let checklists = document.querySelectorAll(".checklist");

export function setCheckLists(listChecklist){
  checklists = listChecklist;
}

export const header = document.createElement('header');
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
button.hidden = true;

// Ajout des éléments dans le div
div.appendChild(box);
div.appendChild(input);
div.appendChild(button);

// Ajout du div dans le document
document.body.append(header);
header.appendChild(div);


input.addEventListener("keyup", function() {
  
  //Activation de l'affichage de toutes les tâches
  const option = document.querySelector("#allTasks");
  const buttonDeleteAllTasks = document.querySelector("#delete");
  option.checked = true;
  buttonDeleteAllTasks.style.display = 'none';

  const checklists = document.querySelectorAll(".checklist");
  const checklistStates = JSON.parse(localStorage.getItem("checklistStates"));    
  const regex = new RegExp(`^${input.value}`);
  let numberFindWords = 0;
  checklistStates.forEach( (checklistState, index) => {
    if( regex.test(checklistState.labelText)){
      checklists[index].classList.remove("rose", "blanc");
      checklists[index].style.display = "grid";
      numberFindWords++;
    }else{
      checklists[index].style.display = "none";
    }

    if (numberFindWords - 1 % 2 === 0) {
      checklists[index].classList.add("rose");
    } else {
      checklists[index].classList.add("blanc");
    }


  });

  if( numberFindWords === 0 ) {
    console.log(numberFindWords);
    button.hidden = false;    
  }
  
});