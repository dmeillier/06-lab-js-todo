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
      // Ajoutez ici la logique de mise à jour visuelle pour le déplacement tactile
    }
  }

  function handleTouchEnd(e) {
    if (draggedElement) {
      // Ajoutez ici la logique de traitement lorsque le glissement tactile se termine
      draggedElement = null;
    }
  }
});