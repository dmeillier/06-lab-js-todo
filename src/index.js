
//import { document } from "postcss";

import "./style.css"
import "./header.js"
import "./dark-mode.js"
import "./boutons.js"
import "./template.js"

const options = ["Toutes les tâches", "Tâches actives", "Tâches achevées"];

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
  
  
    const customRadioHolder = document.getElementById("radioContainer");
    // Fonction pour afficher les div checklists selon l'option sélectionnée
    function displayChecklists(option) {
      const checklists = app.querySelectorAll(".checklist");
  
      if (option === "Tâches actives") {
        checklists.forEach((checklist) => {
          const input = checklist.querySelector("input[type='checkbox']");
          if (input && !input.checked) {
            checklist.style.display = "grid";
          } else {
            checklist.style.display = "none";
          }
        });
      } else if (option === "Tâches achevées") {
        checklists.forEach((checklist) => {
          const input = checklist.querySelector("input[type='checkbox']");
          if (input && input.checked) {
            checklist.style.display = "grid";
          } else {
            checklist.style.display = "none";
          }
        });
      } else {
        // Afficher toutes les div checklists pour l'option "Toutes les tâches"
        checklists.forEach((checklist) => {
          checklist.style.display = "grid";
        });
      }
    }
  
    function createChecklist(labelText, index) {
      const checklist = document.createElement("div");
      checklist.classList.add("checklist");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox_${index}`;
      checkbox.name = "r";
      checkbox.value = "1";
  
      const label = document.createElement("label");
      label.setAttribute("for", `checkbox_${index}`);
      label.textContent = labelText;
  
      const corbeilleButton = document.createElement("button");
      corbeilleButton.classList.add("corbeille");
  
      corbeilleButton.addEventListener("click", () => {
        checklist.remove();
        saveChecklistItemsToLocalStorage(getChecklistItems());
        updateChecklistClasses();
      });
  
      checklist.appendChild(checkbox);
      checklist.appendChild(label);
      checklist.appendChild(corbeilleButton);
  
      return checklist;
    }
  
    // Créer et ajouter dynamiquement les checklists
    const contenuChecklists = ["Checklist 1", "Checklist 2", "Checklist 3"];
    contenuChecklists.forEach((contenu, index) => {
      const checklist = createChecklist(contenu, index);
      app.appendChild(checklist);
    });
  
    // Display all the checklists at the loading of the page
    displayChecklists(options[0]);
   
    // Add a handler for the radio button change event
    customRadioHolder.addEventListener("change", (event) => {
      const selectedOption = event.target.value;
      displayChecklists(selectedOption);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const checklists = document.querySelectorAll(".checklist");
  
    checklists.forEach(checklist => {
      checklist.ondragstart = startDrag;
    });
  
    const containers = document.querySelectorAll(".container");
    containers.forEach(container => {
      container.ondragover = allowDrop;
      container.ondrop = handleDrop;
    });
  
    let draggedElement = null;
  
    function startDrag(e) {
      draggedElement = e.target.closest('.checklist');
      e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
    }
  
    function allowDrop(e) {
      e.preventDefault();
    }
  
    function handleDrop(e) {
      e.preventDefault();
      if (draggedElement) {
        const dropTarget = e.target.closest('.checklist');
        const container = dropTarget ? dropTarget.parentElement : e.target;
        const dropTargetIndex = dropTarget ? Array.from(container.children).indexOf(dropTarget) : 0;
        const draggedElementIndex = Array.from(container.children).indexOf(draggedElement);
  
        if (draggedElementIndex < dropTargetIndex) {
          container.insertBefore(draggedElement, dropTarget.nextSibling);
        } else {
          container.insertBefore(draggedElement, dropTarget);
        }
        draggedElement = null;
      }
    }
  });