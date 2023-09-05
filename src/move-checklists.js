import { checklists, setCheckLists } from "./header";
const deleteButton = document.getElementById("delete");
const customRadioHolder = document.getElementById("radioContainer");

  export function updateChecklistClasses() {
     checklists.forEach((checklist, index) => {
      if (checklist.style.display === 'grid') {
      checklist.classList.remove("even");
      checklist.classList.remove("odd");
      if (index % 2 === 0) {
        checklist.classList.add('even');
      //  checklist.classList.remove('odd');
      } else {
        checklist.classList.add('odd');
      //  checklist.classList.remove('even');
      }
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
}


checklists.forEach(checklist => {
  const input = checklist.querySelector("input[type='checkbox']");
  input.addEventListener("click", function () {
const isActiveOption = document.getElementById("actived");
const isCompletedOption = document.getElementById("finish");
   
    if (isActiveOption.checked) {
      if (input.checked) {
        checklist.style.display = "none";

      } 
       else {
        checklist.style.display = "grid";
       }
    } else 
    if (isCompletedOption.checked) {
      if (!input.checked) {
        checklist.style.display = "none";
      } else {
        checklist.style.display = "grid";
      }
    } else {
      checklist.style.display = "grid";
    }


updateChecklistClasses();
    const updateEvent = new Event("updateDisplay");
    document.dispatchEvent(updateEvent);
  });
});

customRadioHolder.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  displayChecklists(selectedOption);
});

const initialOption = customRadioHolder.querySelector('.radio:checked');
if (initialOption) {
  displayChecklists(initialOption.value);
  updateChecklistClasses();
}