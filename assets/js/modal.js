// Fonction pour éditer la navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const modalCloseSucess = document.querySelectorAll(".close-sucess");

// Événement de lancement de la modal
modalBtn.forEach((btn) => btn.addEventListener("click", lancerModal));
modalClose.forEach((span) => span.addEventListener("click", fermerModal));
modalCloseSucess.forEach((span) =>
  span.addEventListener("click", fermerModalSucess)
);
let popup = document.querySelector(".content");
let modalSucess = document.querySelector(".modal-sucess");
let modalSucessOverlay = document.querySelector(".modal-overlay");
// Fonction pour lancer le formulaire modal
function lancerModal() {
  popup.style.display = "block";
  modalbg.style.display = "block";
}
// Fonction pour fermer le formulaire modal
function fermerModal() {
  if (popup && modalbg) {
    popup.classList.add("close-modal");
    modalbg.classList.add("close-modal");
    setTimeout(function () {
      popup.style.display = "none";
      modalbg.style.display = "none";
      popup.classList.remove("close-modal");
      modalbg.classList.remove("close-modal");
    }, 900);
  } else {
    console.error("La modal n'a pas été trouvée.");
  }
}
function lancerModalSucess() {
  modalSucess.style.display = "flex";
  modalSucessOverlay.style.display = "block";
}
// Fonction pour fermer la fenêtre modale
function fermerModalSucess() {
  if (modalSucess && modalSucessOverlay) {
    modalSucessOverlay.classList.add("close-sucess-modal");
    modalSucess.classList.add("close-sucess-modal");
    setTimeout(function () {
      modalSucess.style.display = "none";
      modalSucessOverlay.style.display = "none";
      modalSucess.classList.remove("close-sucess-modal");
      modalSucessOverlay.classList.remove("close-sucess-modal");
    }, 900);
  } else {
    console.error("La modal n'a pas été trouvée.");
  }
}
// Récupération des données envoyées
let prenom = document.querySelector("#prenom");
let nom = document.querySelector("#nom");
let email = document.querySelector("#email");
let dateDeNaissance = document.querySelector("#birthdate");
let combienTournois = document.querySelector("#quantity");
let btnSubmit = document.querySelector(".btn-submit");
//Modal de formulaire envoyer
let successModal = document.querySelector("#modal");
let sucessModalOverlay = document.querySelector("#modal-overlay");
// Récupération de la valeur de la case à cocher
const quelTournois = document.querySelectorAll(".modal-body input[type=radio]");
console.log(quelTournois);
function recupererValeur() {
  const valeurCheckbox = this.value;
  console.log(valeurCheckbox);
  return valeurCheckbox;
}
let conditions = document.querySelector("#checkbox1");
let prevenir = document.querySelector("#checkbox2");
// Fonction pour vérifier si le champ est correct
function verifierChamp(balise) {
  if (balise.value === "") {
    showErrorMessage(balise);
  } else {
    hideErrorMessage(balise);
  }
}
let formulaire = document.querySelector("form");
// Fonction pour vérifier si l'email est valide
function verifierEmail(balise) {
  return /[a-z0-9._-]+@[a-z0-9._-]+\.[a-z._-]+/.test(balise.value);
}
// Fonction pour afficher le message d'erreur
function showErrorMessage(item) {
  const parent = item.closest(".formData");
  if (parent) {
    parent.setAttribute("data-error-visible", "true");
  }
}
// Fonction pour cacher le message d'erreur
function hideErrorMessage(item) {
  const parent = item.closest(".formData");
  if (parent) {
    parent.setAttribute("data-error-visible", "false");
  }
}
// Fonction pour afficher un message de succès
function afficherMessageSucces(message) {
  const messageSucces = document.getElementById("success-message");
  messageSucces.textContent = message;
  messageSucces.style.display = "block";
}
// Fonction pour cacher le message d'erreur sous le champ de saisie
function cacherMessageErreurChamp(champ) {
  const idMessageErreur = `${champ.toLowerCase()}-error`;
  const elementMessageErreur = document.getElementById(idMessageErreur);
  if (elementMessageErreur) {
    elementMessageErreur.textContent = "";
  }
}
// Événements qui vérifient si les champs du formulaire sont bien remplis
prenom.addEventListener("change", () => {
  verifierChamp(prenom);
});
nom.addEventListener("change", () => {
  verifierChamp(nom);
});
email.addEventListener("change", () => {
  verifierEmail(email);
});
dateDeNaissance.addEventListener("change", () => {
  verifierChamp(dateDeNaissance);
});
combienTournois.addEventListener("change", () => {
  verifierChamp(combienTournois);
});
for (let tournoi of quelTournois) {
  tournoi.addEventListener("change", () => {
    verifierChamp(tournoi);
  });
}
conditions.addEventListener("change", () => {
  verifierChamp(conditions);
});
prevenir.addEventListener("change", () => {
  console.log(prevenir.checked);
});
function resetFormulaire() {
  formulaire.reset();
}
// Événement de soumission du formulaire
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  let estValide = true;
  if (prenom.value === "") {
    showErrorMessage(prenom);
    estValide = false;
  } else {
    hideErrorMessage(prenom);
  }
  if (nom.value === "") {
    showErrorMessage(nom);
    estValide = false;
  } else {
    hideErrorMessage(nom);
  }
  if (verifierEmail(email)) {
    hideErrorMessage(email);
  } else {
    showErrorMessage(email);
    estValide = false;
  }
  if (dateDeNaissance.value === "") {
    showErrorMessage(dateDeNaissance);
    estValide = false;
  } else {
    hideErrorMessage(dateDeNaissance);
  }
  if (combienTournois.value === "") {
    showErrorMessage(combienTournois);
    estValide = false;
  } else {
    hideErrorMessage(combienTournois);
  }
  // Boucle pour vérifier l'état des cases à cocher
  console.log(quelTournois);
  let checkTournois = Array.from(quelTournois).some(
    (checkbox) => checkbox.checked
  );
  if (checkTournois) {
    hideErrorMessage(quelTournois[0]);
  } else {
    showErrorMessage(quelTournois[0]);
    estValide = false;
  }
  if (conditions.checked === false) {
    showErrorMessage(conditions);
    estValide = false;
  } else {
    hideErrorMessage(conditions);
  }
  if (estValide) {
    // Afficher le message de succès
    fermerModal();
    resetFormulaire();
    lancerModalSucess();
    console.log("Formulaire soumis !");
  } else {
    // Afficher un message d'erreur général
    console.log("Veuillez remplir tous les champs correctement.");
  }
});
