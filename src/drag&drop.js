
// Drag and drop
document.addEventListener("DOMContentLoaded", () => {
    
    const checklists = document.querySelectorAll(".checklist");
    const containers = document.querySelectorAll(".container");
  
    containers.forEach((container) => {
      container.ondragover = (e) => e.preventDefault();
      container.ondrop = handleDrop;
    });
  
    checklists.forEach((checklist) => {
      checklist.ondragstart = (e) => {
        e.dataTransfer.setData("text/plain", ""); // Nécessaire pour Firefox
        draggedElement = checklist;
      };
    });
  
    let draggedElement = null;
  
    function handleDrop(e) {
      e.preventDefault();
      if (draggedElement) {
        const dropTarget = e.target.closest(".checklist");
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
