document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input.search_input");
  const template = `
    <template id="checklistTemplate">
      <div class="checklist">
        <input type="checkbox" id="01" name="r" value="1">
        <label for="01">Bread</label>
        <button class="corbeille"></button>
      </div>
    </template>`;

  // Ajout du template dans le document body
  document.body.insertAdjacentHTML("beforeend", template);

    // Récupération du template
    const checklistTemplate = document.querySelector("#checklistTemplate");

   // Création de la div container pour les clones
  const checklistContainer = document.createElement("div");
  checklistContainer.classList.add("container"); 

  function getChecklistItemsFromLocalStorage() {
    const checklistItemsString = localStorage.getItem("checklistItems");
    if (checklistItemsString) {
      return JSON.parse(checklistItemsString);
    } else {
      return [];
    }
  }

  // Fonction pour sauvegarder les données dans le localStorage
  function saveChecklistItemsToLocalStorage(checklistItems) {
    const checklistItemsString = JSON.stringify(checklistItems);
    localStorage.setItem("checklistItems", checklistItemsString);
  }
// Fonction pour mettre à jour les classes "pair" et "impair" des divs checklist
function updateChecklistClasses() {
  const checklistDivs = checklistContainer.querySelectorAll(".checklist");
  checklistDivs.forEach((checklist, index) => {
    if (index % 2 === 0) {
      checklist.classList.remove("impair");
      checklist.classList.add("pair");
    } else {
      checklist.classList.remove("pair");
      checklist.classList.add("impair");
    }
  
  });
}


  function addChecklist(labelText) {
    const clone = document.importNode(checklistTemplate.content, true);
    const label = clone.querySelector("label");
    const input = clone.querySelector("input[type='checkbox']"); // Récupérer l'input (case à cocher)
    label.textContent = labelText;

    const checklist = clone.querySelector(".checklist");
    const index = document.querySelectorAll(".checklist").length;
    if (index % 2 === 0) {
      checklist.classList.add("pair");
    } else {
      checklist.classList.add("impair");
    }

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
    // Gérer le clic sur le bouton "corbeille" pour supprimer la div checklist
  const corbeilleButton = clone.querySelector(".corbeille");
  corbeilleButton.addEventListener("click", () => {
    const checklistDiv = corbeilleButton.closest(".checklist");
    if (checklistDiv) {
      checklistDiv.remove();
      saveChecklistItemsToLocalStorage(getChecklistItems());
      updateChecklistClasses(); // Mettre à jour les classes après la suppression
    }
  });

    checklistContainer.appendChild(clone);
    updateChecklistClasses(); // Mettre à jour les classes après l'ajout
  }
  function handleChecklistClass(checklist) {
    const index = Array.from(document.querySelectorAll(".checklist")).indexOf(checklist);
    if (index % 2 === 0) {
      checklist.classList.remove("impair");
      checklist.classList.add("pair");
    } else {
      checklist.classList.remove("pair");
      checklist.classList.add("impair");
    }
  }

  function getChecklistItems() {
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
  const labels = document.querySelectorAll("label");

  // Écouter l'événement 'click' sur le bouton pour ajouter un nouvel élément de liste
  button.addEventListener("click", () => {
    const input = document.querySelector("input");
  const searchText = input.value.trim().toLowerCase();
  

  if (searchText !== "") {
    console.log("Texte saisi :", searchText);
    
    const labels = document.querySelectorAll("div.checklist > label");
    let labelExists = false;

    labels.forEach((label) => {
      const labelText = label.textContent.trim().toLowerCase();

      console.log("Texte dans le label :", labelText);

      if (searchText === labelText) {
        labelExists = true;
        console.log("Le texte saisi correspond au texte dans ce label !");
        const checklistDiv = label.closest(".checklist");
        const checklistParent = checklistDiv.parentNode;

        // Remonter la div "checklist" en première position dans son parent (prepend)
        checklistParent.prepend(checklistDiv);
      } 
    });
    if (!labelExists) {
      console.log("Le texte saisi ne correspond à aucun label. Création d'un nouvel élément de liste :", searchText);
      addChecklist(searchText);
    }
      input.value = ""; // Réinitialiser le champ d'entrée après avoir ajouté l'élément
      const checklistItems = getChecklistItems();
      saveChecklistItemsToLocalStorage(checklistItems);
    }
  });
});
