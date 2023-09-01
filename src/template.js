
const input = document.querySelector("input.search_input");

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
function getRandomInt(){
  return Math.floor(Math.random() * 100);
  }
  console.log(getRandomInt());
  function createChecklist(labelText) {
    const checklist = document.createElement("div");
  
    checklist.classList.add("checklist");
    checklist.draggable = true;
    if(checklist){
      checklist.id = getRandomInt();
    }
   
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", checkbox);
    
    const label = document.createElement("label");
    label.textContent = labelText;

    const boutons = document.createElement("div");
    boutons.classList.add("boutons");
    const modify = document.createElement("button");
    modify.classList.add("stylo");
    modify.setAttribute("aria-label", "stylo");

    // modify.addEventListener("click", () => {
    //   const newLabelText = prompt("Entrez le nouveau label :");
    //   if (newLabelText !== null && newLabelText.trim() !== "") {
    //     label.textContent = newLabelText;
    //     saveChecklistItemsToLocalStorage(getChecklistItems());
    //   }
    // });
    modify.addEventListener("click", () => {
      // Créer un champ d'édition pour modifier le label
      const editField = document.createElement("input");
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
        saveChecklistItemsToLocalStorage(getChecklistItems());
      });
    
      // Appuyer sur la touche "Entrée" pour enregistrer les modifications
      editField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          label.textContent = editField.value;
          saveChecklistItemsToLocalStorage(getChecklistItems());
        }
      });
    });

    const corbeilleButton = document.createElement("button");
    corbeilleButton.classList.add("corbeille");
    corbeilleButton.setAttribute("aria-label", "corbeille");

    corbeilleButton.addEventListener("click", () => {
      checklist.remove();
      saveChecklistItemsToLocalStorage(getChecklistItems());
      updateChecklistClasses();
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

  // Fonction pour sauvegarder les données dans le localStorage
  export function saveChecklistItemsToLocalStorage(checklistItems) {
    const checklistItemsString = JSON.stringify(checklistItems);
    localStorage.setItem("checklistItems", checklistItemsString);
  }

  // Fonction pour mettre à jour les classes "pair" et "impair" des divs checklist
  export function updateChecklistClasses() {
    const checklistDivs = checklistContainer.querySelectorAll(".checklist");
    checklistDivs.forEach((checklist, index) => {
      if (index % 2 === 0) {
        checklist.classList.remove("pair");
        checklist.classList.add("impair");
      } else {
        checklist.classList.remove("impair");
        checklist.classList.add("pair");
      }
    });
  }

    export function addChecklist(labelText) {
    const checklist = createChecklist(labelText);
    const index = document.querySelectorAll(".checklist").length;
    if (index % 2 === 0) {
      checklist.classList.add("pair");
    } else {
      checklist.classList.add("impair");
    }

    const input = checklist.querySelector("input[type='checkbox']");
    const label = checklist.querySelector("label");

    // Gérer le clic sur le label pour cocher/décocher la case à cocher
    label.addEventListener("click", () => {
      input.checked = !input.checked;
      handleChecklistClass(checklist);
      saveChecklistItemsToLocalStorage(getChecklistItems());
    });

    // Gérer le clic sur la case à cocher elle-même pour mettre à jour les classes
    input.addEventListener("click", () => {
      handleChecklistClass(checklist);
      saveChecklistItemsToLocalStorage(getChecklistItems());
    });

    checklistContainer.appendChild(checklist);
    updateChecklistClasses();
  }

  function handleChecklistClass(checklist) {
    const index = Array.from(document.querySelectorAll(".checklist")).indexOf(checklist);
    if (index % 2 === 0) {
      checklist.classList.remove("pair");
      checklist.classList.add("impair");
    } else {
      checklist.classList.remove("impair");
      checklist.classList.add("pair");
    }
  }

  export function getChecklistItems() {
    const checklistItems = [];
    const labels = document.querySelectorAll("div.checklist > label");
    labels.forEach((label) => {
      checklistItems.push(label.textContent.trim().toLowerCase());
    });
    return checklistItems;
  }

  // Charger les éléments de la liste depuis le localStorage lors du chargement de la page
  const checklistItems = getChecklistItemsFromLocalStorage();
  checklistItems.forEach((item) => {
    addChecklist(item);
  });

  // Ajouter la div container checklistContainer à l'élément ayant l'id "app"
  const app = document.getElementById("app");
  app.appendChild(checklistContainer);

  const button = document.querySelector("button.search_button");

  // Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste
  button.addEventListener("click", () => {
    const searchText = input.value.trim().toLowerCase();
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
      }
        updateChecklistClasses();

      input.value = ""; // Réinitialiser le champ d'entrée après avoir ajouté l'élément
      const checklistItems = getChecklistItems();
      saveChecklistItemsToLocalStorage(checklistItems);
    }
    const checklists = document.querySelectorAll(".checklist");
  checklists.forEach(checklist => {
    checklist.style.display = "grid";
  })
  });
