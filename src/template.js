const input = document.querySelector("input.search_input")
const button = document.querySelector("button.search_button")
const template = 
`<template id="checklistTemplate">
<div class="checklist">
  <input type="checkbox" id="01" name="r" value="1">
  <label for="01">Bread</label>
  <div class="corbeille"></div>
</div>
</template>`;
  

    // Ajout du template dans le document body
    document.body.insertAdjacentHTML("beforeend", template);

    // Récupération du template
    const checklistTemplate = document.querySelector("#checklistTemplate");
    const searchText = input.value;
    const labels = document.querySelectorAll("div.checklist > label")
  input.addEventListener("input", () => {
    
    console.log("Texte saisi :", searchText);
    const labels = document.querySelectorAll("div.checklist > label");
   
        labels.forEach((label) => {
      const labelContent = label.textContent.trim().toLowerCase();
      if (labelContent.includes(searchText)) {
        console.log("Label correspondant :", labelContent);
      }
    });
  });

  const length = labels.length;
  const checklist = document.querySelectorAll("checklist")
  for (const [index, label] of labels.entries()) {
    const isEven = index % 2 === 0;
    if (isEven) {
      label.parentNode.classList.remove("impair");
      label.parentNode.classList.add("pair");
    } else {
      label.parentNode.classList.remove("pair");
      label.parentNode.classList.add("impair");
    }
  }
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
  // Écoutez l'événement 'customButtonClick' sur le document pour détecter le clic du bouton
  document.addEventListener("customButtonClick", () => {
    const searchText = input.value.trim().toLowerCase();
    if (searchText !== "") {
      console.log("Texte saisi :", searchText);
      addChecklist(searchText);
      input.value = ""; // Réinitialiser le champ d'entrée après avoir ajouté l'élément
      const checklistItems = getChecklistItemsFromLocalStorage();
    checklistItems.push(searchText);

    // Sauvegarder les éléments de la liste mis à jour dans le localStorage
    saveChecklistItemsToLocalStorage(checklistItems);
    }
  });
   
  // Fonction pour ajouter un nouvel élément de liste avec un texte donné
  function addChecklist(labelText) {
    const clone = document.importNode(checklistTemplate.content, true);
    const label = clone.querySelector("label");
    label.textContent = labelText;
    const checklist = clone.querySelector(".checklist");
    const index = document.querySelectorAll(".checklist").length;
    if (index % 2 === 0) {
      checklist.classList.add("pair");
    } else {
      checklist.classList.add("impair");
    }
    document.getElementById("app").appendChild(clone);
  }
  document.addEventListener("DOMContentLoaded", () => {
  const checklistItems = getChecklistItemsFromLocalStorage();
  checklistItems.forEach((item) => {
    addChecklist(item);
  });
});