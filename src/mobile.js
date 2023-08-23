document.addEventListener("DOMContentLoaded", () => {
  const checklists = document.querySelectorAll(".checklist");
  let draggedElement = null;

  checklists.forEach((checklist) => {
    checklist.addEventListener("touchstart", handleTouchStart);
    checklist.addEventListener("touchmove", handleTouchMove);
    checklist.addEventListener("touchend", handleTouchEnd);
  });

  function handleTouchStart(e) {
    const touch = e.touches[0];
    if (touch) {
      e.preventDefault();
      draggedElement = e.target.closest(".checklist");
    }
  }

  function handleTouchMove(e) {
    const touch = e.touches[0];
    if (draggedElement && touch) {
      const deltaX = touch.clientX - draggedElement.offsetLeft;
    const deltaY = touch.clientY - draggedElement.offsetTop;
    draggedElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  }

  function handleTouchEnd(e) {
    if (draggedElement) {
      draggedElement.style.transform = "translate(0, 0)";
      draggedElement = null;
    }
  }
});