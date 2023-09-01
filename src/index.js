import "./style.scss"
import "./header.js"
import "./dark-mode.js"
import "./boutons.js"
import "./template.js"
import "./drag&drop.js"
import "./move-checklists.js"
//import {handleCheckboxChange } from "./template.js"
import {updateChecklistClasses, getChecklistItems} from "./template.js"

const deleteButton = document.getElementById("delete");
const checklists = document.querySelectorAll(".checklist"); 
const containers = document.querySelectorAll(".container"); 

    checklists.forEach((checklist, index) => {
        checklist.classList.remove("pair", "impair");
        checklist.classList.add(index % 2 === 0 ? "impair" : "pair");
      })
      

    // Supprimer une checklist
    function deleteChecklist(checklist) {
      checklist.remove();
      saveChecklistItemsToLocalStorage(getChecklistItems());
      updateChecklistClasses(); // Appeler handleChecklistClass pour mettre à jour les classes des checklists restantes
    }

    deleteButton.addEventListener("click", () => {

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
//  customRadioHolder.addEventListener("change", (event) => {
//   const selectedOption = event.target.value;
//   displayChecklists(selectedOption);
// });

// Gérer le déplacement de la checklist
function moveChecklist(checklist, dropTarget) {
  const container = dropTarget ? dropTarget.parentElement : document.getElementById("app");
  const dropTargetIndex = dropTarget ? Array.from(container.children).indexOf(dropTarget) : 0;
  const draggedElementIndex = Array.from(container.children).indexOf(checklist);

  if (draggedElementIndex < dropTargetIndex) {
    if (dropTarget.nextSibling) {
      container.insertBefore(checklist, dropTarget.nextSibling);
    } else {
      container.appendChild(checklist);
    }
  } else {
    container.insertBefore(checklist, dropTarget);
  }
}

// Gérer le clic sur le bouton corbeille pour supprimer une checklist
function handleDeleteButtonClick(event) {
  const checklist = event.target.closest(".checklist");
  if (checklist) {
    deleteChecklist(checklist);
  }
 updateChecklistClasses();
}

// Gérer le début du glisser-déposer
function handleDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

// Gérer le survol pendant le glisser-déposer
function handleDragOver(event) {
  event.preventDefault();
}

// Gérer le dépôt lors du lâcher de l'élément
function handleDrop(event) {
  event.preventDefault();
  const checklistId = event.dataTransfer.getData('text/plain');
  const draggedChecklist = document.getElementById(checklistId);

  const dropTarget = event.target.closest(".container");
  if (draggedChecklist && dropTarget) {
    moveChecklist(draggedChecklist, dropTarget);
  }
}

// Attacher les gestionnaires d'événements aux éléments
checklists.forEach(checklist => {
  checklist.addEventListener("dragstart", handleDragStart);
});

containers.forEach(container => {
  container.addEventListener("dragover", handleDragOver);
  container.addEventListener("drop", handleDrop);
});
function saveChecklistItemsToLocalStorage() {
  const checklistStates = [];

  checklists.forEach(checklist => {
    const input = checklist.querySelector("input")
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
// .........................................

  // Ajouter des gestionnaires d'événements pour la suppression, le déplacement et le drag and drop des checklists
  const deleteButtons = document.querySelectorAll(".corbeille");
  deleteButtons.forEach(button => {
    button.addEventListener("click", handleDeleteButtonClick);
  });

  checklists.forEach(checklist => {
  checklist.ondragstart = handleDragStart;
  });

  containers.forEach(container => {
  container.ondragover = handleDragOver;
  container.ondrop = handleDrop;
  });


  // checkboxes.forEach(checkbox => {
  //   checkbox.addEventListener("change", handleCheckboxChange);
  // });