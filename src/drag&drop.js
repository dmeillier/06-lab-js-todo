import {updateChecklistClasses} from "./template.js"
let draggedElement = null; // 

document.addEventListener("mousedown", function(e)  {
    const checklists = document.querySelectorAll(".checklist");

    // Ajouter un ID unique à chaque checklist
  checklists.forEach((checklist, index) => {
    checklist.setAttribute("data-checklist-id", `checklist-${index}`);
  });

    const containers = document.querySelectorAll(".container");
   
   
    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => e.preventDefault());
      container.addEventListener("drop", handleDrop);
      //dragStart(evt);
    });
  

  //   function dragStart(evt){
  //     evt.dataTransfer.setData('text/plain', evt.target.id);
  // }

    checklists.forEach((checklist) => {
      checklist.addEventListener("dragstart", (e) => {
        const checklistId = e.target.getAttribute("data-checklist-id");
        e.dataTransfer.setData("text/plain", ""); // Nécessaire pour Firefox
        draggedElement = {
          element: checklist,
          id: checklistId,
        };
      });
    });

    function handleDrop(e) {
      e.preventDefault();
      if (!draggedElement) return;
    
      const checklistId = e.dataTransfer.getData("text/plain");
      const dropTargetId = e.target.getAttribute("data-checklist-id");
      const container = dropTargetId ? e.target.parentElement : e.target;
    
      // Trouvez l'élément glissé en fonction de son ID
      const draggedElement = document.querySelector(`[data-checklist-id="${checklistId}"]`);
      
      const dropTarget = dropTargetId ? document.querySelector(`[data-checklist-id="${dropTargetId}"]`) : null;
    
      const dropTargetIndex = dropTarget ? [...container.children].indexOf(dropTarget) : 0;
      const draggedElementIndex = [...container.children].indexOf(draggedElement);
    
      container.insertBefore(
        draggedElement, 
        draggedElementIndex < dropTargetIndex ? dropTarget.nextSibling : dropTarget
      );
    
      draggedElement = null;
    }
  //  updateChecklistClasses();
  })
