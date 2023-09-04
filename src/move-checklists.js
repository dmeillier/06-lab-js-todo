const deleteButton = document.getElementById("delete");
const customRadioHolder = document.getElementById("radioContainer");
const checklists = document.querySelectorAll(".checklist");

function updateChecklistClasses() {
  const visibleChecklists = Array.from(document.querySelectorAll('.checklist[style*="grid"]'));
}

function displayChecklists(option) {
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

    updateChecklistClasses();
  });

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
updateChecklistClasses(checklist);
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