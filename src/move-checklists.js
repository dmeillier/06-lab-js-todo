import { checklists } from "./header";
const deleteButton = document.getElementById("delete");
const customRadioHolder = document.getElementById("radioContainer");
// Récupérez les données de checklist depuis le localStorage
const localStorageChecklistStates = JSON.parse(localStorage.getItem("checklistStates"));


export function updateChecklistClasses() {
  const checklistsArray = Array.from(checklists);

  let visibleChecklists = checklistsArray.filter((checklist) => {
    return checklist.style.display === 'grid';
  });

  visibleChecklists.forEach((checklist, index) => {
    const isEven = index % 2 === 0;
     if (isEven) {
      checklist.classList.add("rose");
      checklist.classList.remove("blanc");
    } else {
      checklist.classList.add("blanc");
      checklist.classList.remove("rose");
    }
  });
}

  export function displayChecklists(option) {
  checklists.forEach(checklist => {
    const input = checklist.querySelector("input[type='checkbox']");
    const isChecked = input.checked;

    if (
      (option === "Toutes les tâches") ||
      (option === "Tâches actives" && !isChecked) ||
      (option === "Tâches achevées" && isChecked)
      
    ) {
      checklist.style.display = 'grid';
    } else {
      checklist.style.display = 'none';
    }
   
  });
  updateChecklistClasses();
  deleteButton.style.display = option === "Tâches achevées" ? "block" : "none";


checklists.forEach((checklist, index) => {
  const input = checklist.querySelector("input[type='checkbox']");
  input.addEventListener("click", function () {
    const actived = document.getElementById("actived");
    const finish = document.getElementById("finish");
    const isChecked = input.checked;

    if (actived.checked) {
      if (isChecked) {
        // Si "Tâches actives" est coché et la checklist est cochée, masquez la checklist
        checklist.style.display = "none";
      } else {
        // Sinon, affichez la checklist
        checklist.style.display = "grid";
       }
    } else if (finish.checked) {
      if (!isChecked) {
        // Si "Tâches achevées" est coché et la checklist n'est pas cochée, masquez la checklist
        checklist.style.display = "none";
      } else {
        // Sinon, affichez la checklist
        checklist.style.display = "grid";
      }
    } else {
      // Si aucune option n'est cochée, affichez toujours la checklist
      checklist.style.display = "grid";
    }

    // Mettez à jour le localStorage avec l'état actuel de la checklist
    if (localStorageChecklistStates && localStorageChecklistStates[index]) {
      localStorageChecklistStates[index].checked = input.checked;
      localStorage.setItem("checklistStates", JSON.stringify(localStorageChecklistStates));
    }

    updateChecklistClasses();
    const updateEvent = new Event("updateDisplay");
    document.dispatchEvent(updateEvent);
  });
});
}
customRadioHolder.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  displayChecklists(selectedOption);
});

const initialOption = customRadioHolder.querySelector('.radio:checked');
if (initialOption) {
  displayChecklists(initialOption.value);
  updateChecklistClasses();
}

