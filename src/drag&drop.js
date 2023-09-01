document.addEventListener("mousedown", function(e)  {
    const checklists = document.querySelectorAll(".checklist");
    const containers = document.querySelectorAll(".container");
    let draggedElement = null;
  
   
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
        e.dataTransfer.setData("text/plain", ""); // Nécessaire pour Firefox
        draggedElement = checklist;
      });
    });

    function handleDrop(e) {
      e.preventDefault();
      if (!draggedElement) return;
  
      const dropTarget = e.target.closest(".checklist");
      const container = dropTarget ? dropTarget.parentElement : e.target;
      const dropTargetIndex = dropTarget ? [...container.children].indexOf(dropTarget) : 0;
      const draggedElementIndex = [...container.children].indexOf(draggedElement);
  
      container.insertBefore(
        draggedElement, 
        draggedElementIndex < dropTargetIndex ? dropTarget.nextSibling : dropTarget);
  
        const newChecklists = container.querySelectorAll(".checklist");
      newChecklists.forEach((checklist, index) => {
        const isEven = index % 2 === 0;
        checklist.classList.toggle("impair", isEven);
        checklist.classList.toggle("pair", !isEven);
      });
  
      draggedElement = null;
    }
  });
