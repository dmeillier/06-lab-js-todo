//import { document } from "postcss";

import "./style.scss"
import "./header.js"
import "./dark-mode.js"
import "./boutons.js"
import "./template.js"
import "./drag&drop.js"


//const options = ["Toutes les tâches", "Tâches actives", "Tâches achevées"];
const deleteButton = document.getElementById("delete");
const app = document.querySelector("#app");
const customRadioHolder = document.getElementById("radioContainer");

    // Fonction pour afficher les div checklists selon l'option sélectionnée
    function displayChecklists(option) {
      const checklists = app.querySelectorAll(".checklist");
      const showDeleteButton = option === "Tâches achevées"; // Variable pour indiquer si le bouton deleteButton doit être affiché
      let displayedChecklistsCount = 0; // Compteur pour les checklists affichées

      checklists.forEach((checklist, index) => {
        const input = checklist.querySelector("input[type='checkbox']");
        const shouldDisplay = option === "Toutes les tâches" || // Afficher toutes les tâches si l'option est "Toutes les tâches"
          (option === "Tâches actives" && input && !input.checked) || // Afficher les tâches actives si l'option est "Tâches actives" et la checkbox n'est pas cochée
          (option === "Tâches achevées" && input && input.checked); // Afficher les tâches achevées si l'option est "Tâches achevées" et la checkbox est cochée
    
        checklist.style.display = shouldDisplay ? "grid" : "none";
       
        if (shouldDisplay) {
          checklist.classList.remove("pair", "impair");
            if (index % 2 === 0) {
              checklist.classList.add("impair");
            } else {
              checklist.classList.add("pair");
            }
          } else {
          checklist.classList.remove("pair", "impair");
        }/*if (shouldDisplay) {
          displayedChecklistsCount++;
    
          checklist.classList.remove("pair", "impair");
          checklist.classList.add(displayedChecklistsCount % 2 === 0 ? "pair" : "impair");
        }*/
      });
       
      deleteButton.style.display = showDeleteButton ? "block" : "none"; 
        }

    // Supprimer une checklist
    function deleteChecklist(checklist) {
      checklist.remove();
      saveChecklistItemsToLocalStorage(getChecklistItems());
      updateChecklistClasses(); // Appeler handleChecklistClass pour mettre à jour les classes des checklists restantes
    }

    deleteButton.addEventListener("click", () => {
      const checklists = app.querySelectorAll(".checklist");
      // Parcourez toutes les checklists
      checklists.forEach(checklist => {
        if (checklist.style.display !== "none") {
          const corbeilleButton = checklist.querySelector(".corbeille");
          if (corbeilleButton) {
            // Activez le bouton corbeille pour chaque checklist affichée
            corbeilleButton.click();
          }
        }
      });
    })

   
    // Ajouter un gestionnaire d'événement pour le changement d'état des boutons radio
    customRadioHolder.addEventListener("change", (event) => {
      const selectedOption = event.target.value;
      displayChecklists(selectedOption);
    });

// Gérer le déplacement de la checklist
function moveChecklist(checklist, dropTarget) {
  const container = dropTarget ? dropTarget.parentElement : document.getElementById("app");
  const dropTargetIndex = dropTarget ? Array.from(container.children).indexOf(dropTarget) : 0;
  const draggedElementIndex = Array.from(container.children).indexOf(checklist);

  if (draggedElementIndex < dropTargetIndex) {
    container.insertBefore(checklist, dropTarget.nextSibling);
  } else {
    container.insertBefore(checklist, dropTarget);
  }
  updateChecklistClasses(); // Appeler handleChecklistClass pour mettre à jour les classes des checklists après le déplacement
}

// Gérer le clic sur le bouton corbeille pour supprimer une checklist
function handleDeleteButtonClick(event) {
  const checklist = event.target.closest(".checklist");
  if (checklist) {
    deleteChecklist(checklist);
  }
  updateChecklistClasses();
}

// Gérer le drag and drop
function handleDragStart(event) {
  const draggedElement = event.target.closest(".checklist");
  if (draggedElement) {
    event.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setDragImage(draggedElement, 0, 0);
  }
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const draggedElement = event.target.closest(".checklist");
  const dropTarget = draggedElement ? event.target.closest(".checklist") : null;
  if (draggedElement && dropTarget) {
    moveChecklist(draggedElement, dropTarget);
  }
}
function saveChecklistItemsToLocalStorage() {
 
  const checklistStates = [];

  checklists.forEach(checklist => {
    
    if (input) {
      const state = {
        id: checklist.id,
        checked: input.checked
      };
      checklistStates.push(state);
    }
  });

  localStorage.setItem("checklistStates", JSON.stringify(checklistStates));

}
// Gérer le changement d'état de la case à cocher
function handleCheckboxChange(event) {
  const checkbox = event.target;
  const checklist = checkbox.closest(".checklist");
  if (checklist) {
    // Mettre à jour l'état dans le stockage local
    saveChecklistItemsToLocalStorage();
    updateChecklistClasses();
    }
}

  // Ajouter des gestionnaires d'événements pour la suppression, le déplacement et le drag and drop des checklists
  const deleteButtons = document.querySelectorAll(".corbeille");
  deleteButtons.forEach(button => {
    button.addEventListener("click", handleDeleteButtonClick);
  });

  const checklists = document.querySelectorAll(".checklist");
  checklists.forEach(checklist => {
  checklist.ondragstart = handleDragStart;
  });

  const containers = document.querySelectorAll(".container");
  containers.forEach(container => {
  container.ondragover = handleDragOver;
  container.ondrop = handleDrop;
  });

const checkboxes = document.querySelectorAll(".checklist input[type='checkbox']");
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });
  

  