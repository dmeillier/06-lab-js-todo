

const main = document.createElement('main');
const app = document.querySelector("#app");

document.body.append(main);
main.appendChild(app);

const divradio = document.createElement("div");
divradio.id = "radioContainer";
divradio.className = "radio-inputs";
export const options = ["Toutes les tâches", "Tâches actives", "Tâches achevées"];
const ids = ["allTasks", "actived", "finish"]
// Boucle à travers les options pour créer les boutons radio et les étiquettes

for (let i = 0; i < options.length; i++) {
    // Créez l'élément label
    const label = document.createElement("label");
    label.classList.add("radio");
    
    // Créez l'élément input de type radio
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio";
    radio.value = options[i];
    radio.id = ids[i];
    if (i === 0) {
        radio.checked = true; 
    }

    // Créez l'élément span contenant le texte de l'option
    const span = document.createElement("span");
    span.classList.add("name");
    span.textContent = options[i];

    // Ajoutez les éléments créés 
    label.appendChild(radio);
    label.appendChild(span);
    divradio.appendChild(label); 
}

// Sélectionnez le conteneur pour les boutons radio (après les avoir créés)
const customRadioHolder = document.getElementById("radioContainer");

// Ajoutez "divradio" contenant les boutons radio
app.prepend(divradio);

// setCheckLists(document.querySelectorAll(".checklist"));

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete");
  deleteButton.innerText = "Supprimer les tâches terminées";
  app.appendChild(deleteButton);

  