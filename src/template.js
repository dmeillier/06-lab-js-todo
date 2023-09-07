import  {checklists, setCheckLists} from "./header";
const searchInput = document.querySelector("input.search_input");

 // Template pour la checklist
 const checklistTemplate = (labelText) => `
 <div class="checklist" draggable="true">
   <input type="checkbox">
   <label>${labelText}</label>
   <div class=boutons><button class="modify"></button>
   <button class="corbeille"></button>
   </div>
 </div>
 `;
   function createChecklist(labelText,) {
     const checklist = document.createElement("div");
   
     checklist.classList.add("checklist");
     checklist.draggable = true;
 
     const checkbox = document.createElement("input");
     checkbox.type = "checkbox";
     checkbox.setAttribute("aria-label", "Cocher pour définir la tâche actice");
 
     
     const label = document.createElement("label");
     label.textContent = labelText;
 
     const boutons = document.createElement("div");
     boutons.classList.add("boutons");
     const modify = document.createElement("button");
     modify.classList.add("stylo");
     modify.setAttribute("aria-label", "stylo");
 
     modify.addEventListener("click", () => {
       // Créer un champ d'édition pour modifier le label
       const editField = document.createElement("input");
       editField.style.border = "2px outset grey";
       editField.type = "text";
       editField.value = label.textContent;
       editField.style.width = "100%";
     
       // Remplacer le texte par le champ d'édition
       label.textContent = "";
       label.appendChild(editField);
     
       // Mettre le focus sur le champ d'édition
       editField.focus();
     
       // Gérer la sauvegarde du label modifié
       editField.addEventListener("blur", () => {
         label.textContent = editField.value;
         saveChecklistStatesToLocalStorage(getChecklistItems());
       });
     
       // Appuyer sur la touche "Entrée" pour enregistrer les modifications
       editField.addEventListener("keyup", (event) => {
         if (event.key === "Enter") {
           label.textContent = editField.value;
           saveChecklistStatesToLocalStorage(getChecklistItems());
         }
       });
     });
 
     const corbeilleButton = document.createElement("button");
     corbeilleButton.classList.add("corbeille");
     corbeilleButton.setAttribute("aria-label", "corbeille");
 
     corbeilleButton.addEventListener("click", () => {      
      checklist.remove();     
      saveChecklistStatesToLocalStorage();
     });
 
     checklist.appendChild(checkbox);
     checklist.appendChild(label);
     checklist.appendChild(boutons);
     boutons.appendChild(modify);
     boutons.appendChild(corbeilleButton);
     return checklist;
   }
 
   // Création de la div container pour les checklists
   const checklistContainer = document.createElement("div");
   checklistContainer.classList.add("container");
   
   checklistContainer.addEventListener("dragstart", (event) => {
     event.dataTransfer.setData("text/plain", ""); // Élément doit avoir des données pour le glisser-déposer
     event.target.classList.add("dragging");
   });
   
   checklistContainer.addEventListener("dragover", (event) => {
     event.preventDefault(); // Empêche le comportement par défaut (par ex. l'ouverture de liens)
   });
   
   checklistContainer.addEventListener("drop", (event) => {
     event.preventDefault();
   
     const draggingElement = document.querySelector(".dragging");
     const targetElement = event.target.closest(".checklist");
   
     if (draggingElement && targetElement) {
       // Échangez les positions des éléments dans le DOM
       checklistContainer.insertBefore(draggingElement, targetElement.nextSibling);
   
       // Réinitialisez les styles
       draggingElement.classList.remove("dragging");
     }
   });
   
   export function getChecklistItemsFromLocalStorage() {
    const checklistItemsString = localStorage.getItem("checklistItems");
     if (checklistItemsString) {
      return JSON.parse(checklistItemsString);
    } else {
      return [];
    }
   }

   export function getChecklistStatesFromLocalStorage() {
      const checklistStatesString = localStorage.getItem("checklistStates");    
      if (checklistStatesString) {
        return JSON.parse(checklistStatesString);
      } else {
        return [];
      }
   }
   
   export function saveChecklistStatesToLocalStorage() {
    const checklistStates= [];
    const updateChecklists = getChecklistStates(); 
    console.log(updateChecklists)   ;
    updateChecklists.forEach((checklist) => {
      
       const input = checklist.querySelector("input[type='checkbox']");
       //console.log(input);
       if (input) {                  
         const state = {
           id: checklist.id,
           checked: input.checked,
           labelText: checklist.querySelector("label").textContent.trim()
         };
         checklistStates.push(state);
       }
     });
  localStorage.setItem("checklistStates", JSON.stringify(checklistStates));
}
 

  
   
 
   export function getChecklistStates() {
     const checklistStates = [];
     const tasks = document.querySelectorAll("div.checklist");     
     tasks.forEach((task) => {
      checklistStates.push(task)
     });    
     return checklistStates;
   }
 

 
   // Ajouter la div container checklistContainer à l'élément ayant l'id "app"
   const app = document.getElementById("app");
   app.appendChild(checklistContainer);
 
   const button = document.querySelector("button.search_button");
 
   // Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste
   button.addEventListener("click", function() {
     const searchText = searchInput.value.trim().toLowerCase();
     if (searchText !== "") {
       const labels = document.querySelectorAll("div.checklist > label");
       let labelExists = false;
 
       labels.forEach((label) => {
         const labelText = label.textContent.trim().toLowerCase();
 
         if (searchText === labelText) {
           labelExists = true;
         }
       });
 
       if (!labelExists) {
         addChecklist(searchText);
         setCheckLists(document.querySelectorAll(".checklist"));
       }
 
       searchInput.value = ""; // Réinitialiser le champ d'entrée après avoir ajouté l'élément
       getChecklistStates();
       console.log(checklists);
       saveChecklistStatesToLocalStorage();
     }
   
     checklists.forEach(checklist => {
       checklist.style.display = "grid";   
     })
   });


  export function addChecklist(labelText, index) {
  
  const statesStorage = getChecklistStatesFromLocalStorage();
  
  const checklist = createChecklist(labelText);
  const input = checklist.querySelector("input[type='checkbox']");
  const label = checklist.querySelector("label");

  if (statesStorage[index].checked ) {
    input.checked = true;  
  }

  // Gérer le clic sur le label pour cocher/décocher la case à cocher
  label.addEventListener("click", () => {
    input.checked = !input.checked;
    getChecklistItems();
  saveChecklistStatesToLocalStorage();
  });
  
  // Gérer le clic sur la case à cocher elle-même pour mettre à jour les classes
  input.addEventListener("click", () => {
    saveChecklistStatesToLocalStorage();
  });
    
  if (index % 2 === 0) {
    checklist.classList.add("rose");
  } else {
    checklist.classList.add("blanc");
  }

  checklistContainer.appendChild(checklist);
  //saveChecklistStatesToLocalStorage();
}

// Charger les éléments de la liste depuis le localStorage lors du chargement de la page
const checklistStates = getChecklistStatesFromLocalStorage();

checklistStates.forEach((item, index) => {  
  addChecklist(item.labelText, index);
});