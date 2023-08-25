import "./style.scss"
import "./header.js"
import "./dark-mode.js"
import "./boutons.js"
import "./template.js"
import "./drag&drop.js"
import {handleCheckboxChange } from "./template.js"

const deleteButton = document.getElementById("delete");
const app = document.querySelector("#app");
const customRadioHolder = document.getElementById("radioContainer");
const checklists = document.querySelectorAll(".checklist"); // Déplacer cette ligne ici
const containers = document.querySelectorAll(".container"); // Déplacer cette ligne ici
const checkboxes = document.querySelectorAll(".checklist input[type='checkbox']"); // Déplacer cette ligne ici
const filters = document.querySelectorAll('.radio');

    // Fonction pour afficher les div checklists selon l'option sélectionnée
    function displayChecklists(option) {
      const showDeleteButton = option === "Tâches achevées"; // Variable pour indiquer si le bouton deleteButton doit être affiché
      let displayedChecklistsCount = 0; // Compteur pour les checklists affichées
      
      checklists.forEach((checklist, index) => {
        const input = checklist.querySelector("input[type='checkbox']");
        const shouldDisplay = 
          option === "Toutes les tâches" || // Afficher toutes les tâches si l'option est "Toutes les tâches"
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
        }if (shouldDisplay) {
          displayedChecklistsCount++;
    
          checklist.classList.remove("pair", "impair");
          checklist.classList.add(displayedChecklistsCount % 2 === 0 ? "pair" : "impair");
        }
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
 // updateChecklistClasses();
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

// Ajouter un gestionnaire d'événement aux cases à cocher des checklists
checklists.forEach(checklist => {
  const input = checklist.querySelector("input[type='checkbox']");
  
  input.addEventListener('change', function() {
    const isChecked = input.checked;
        
    if (isChecked) {
      checklist.style.display = 'none';
    } else {
      const selectedOption = document.querySelector('.radio:checked');
      if (selectedOption && selectedOption.value === "Tâches achevées") {
        checklist.style.display = 'none';
      } else {
        checklist.style.display = 'grid';
      }
    }

    applyFilters();
  });
});

function applyFilters() {
  const selectedOption = document.querySelector('.radio:checked')

  checklists.forEach(checklist => {
    const input = checklist.querySelector("input[type='checkbox']");
    if (selectedOption && input) {
    if ((selectedOption.value === "Tâches actives" && input.checked) ||
        (selectedOption.value === "Tâches achevées" && !input.checked)) {
      checklist.style.display = 'none';
    }
    else {
      checklist.style.display = 'grid';
    }
    }
  });
}

// Ajouter un gestionnaire d'événement aux filtres
filters.forEach(filter => {
  filter.addEventListener('change', applyFilters);
});

// Appliquer les filtres au chargement de la page
applyFilters();

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


  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });