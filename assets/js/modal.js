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
let quelTournois = document.querySelectorAll("input[type=radio]");
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
    balise.classList.add("error");
  } else {
    balise.classList.remove("error");
  }
}
let formulaire = document.querySelector("form");
// Fonction pour vérifier si l'email est valide
function verifierEmail(balise) {
  let expressionReguliereEmail = new RegExp(
    "[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+"
  );
  if (expressionReguliereEmail.test(balise.value)) {
    balise.classList.remove("error");
  } else {
    balise.classList.add("error");
  }
  return expressionReguliereEmail.test(balise.value);
}
// Fonction pour afficher le message d'erreur
function afficherMessageErreur(message) {
  const messageErreur = document.getElementById("error-message");
  messageErreur.textContent = message;
  messageErreur.style.display = "block";
}
// Fonction pour cacher le message d'erreur
function cacherMessageErreur() {
  const messageErreur = document.getElementById("error-message");
  messageErreur.textContent = "";
  messageErreur.style.display = "none";
}
// Fonction pour afficher un message de succès
function afficherMessageSucces(message) {
  const messageSucces = document.getElementById("success-message");
  messageSucces.textContent = message;
  messageSucces.style.display = "block";
}
// Fonction pour afficher le message d'erreur sous le champ de saisie
function afficherMessageErreurChamp(champ, message, baliseInput) {
  const idMessageErreur = `${champ.toLowerCase()}-error`;
  let elementMessageErreur = document.getElementById(idMessageErreur);

  if (!elementMessageErreur) {
    elementMessageErreur = document.createElement("div");
    elementMessageErreur.id = idMessageErreur;
    elementMessageErreur.classList.add("error-message");
    baliseInput.parentNode.appendChild(elementMessageErreur);
  }
  elementMessageErreur.textContent = message;
  // Effacer le message d'erreur après un court délai (3000 millisecondes ou 3 secondes)
  setTimeout(() => {
    elementMessageErreur.textContent = "";
  }, 3000);
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
  cacherMessageErreurChamp("Prénom");
  console.log(prenom.value);
});
nom.addEventListener("change", () => {
  verifierChamp(nom);
  cacherMessageErreurChamp("Nom");
  console.log(nom.value);
});
email.addEventListener("change", () => {
  verifierEmail(email);
  cacherMessageErreurChamp("Email");
  console.log(email.value);
});
dateDeNaissance.addEventListener("change", () => {
  verifierChamp(dateDeNaissance);
  cacherMessageErreurChamp("Date de Naissance");
  console.log(dateDeNaissance.value);
});
combienTournois.addEventListener("change", () => {
  verifierChamp(combienTournois);
  cacherMessageErreurChamp("combien de tournois");
  console.log(combienTournois.value);
});

// Validation des cases à cocher 'quelTournois'
let auMoinsUneCheckboxTournois = false;
console.log("États actuels des cases à cocher :", quelTournois);
for (let i = 0; i < quelTournois.length; i++) {
  if (!quelTournois[i].checked) {
    auMoinsUneCheckboxTournois = true;
    break;
  }
}
function verifierCheckbox(checkbox, champ, messageErreur) {
  if (!checkbox.checked) {
    afficherMessageErreurChamp(champ, messageErreur, checkbox);
  } else {
    cacherMessageErreurChamp(champ);
  }
}
for (let i = 0; i < quelTournois.length; i++) {
  quelTournois[i].addEventListener("change", function () {
    cacherMessageErreurChamp("Quel tournois");
    const valeurCheckbox = recupererValeur.call(this);
    verifierCheckbox(this, "Quel tournois", "Vous devez choisir une option.");
  });
}
conditions.addEventListener("change", () => {
  verifierCheckbox(
    conditions,
    "Conditions d'utilisation",
    "Vous devez acceptez les termes et conditions."
  );
});
prevenir.addEventListener("change", () => {
  console.log(prevenir.checked);
});
// Fonction pour afficher le message d'erreur sous le champ de saisie
function afficherMessageErreurChamp(champ, message, baliseInput) {
  const idMessageErreur = `${champ.toLowerCase()}-error`;
  let elementMessageErreur = document.getElementById(idMessageErreur);
  if (!elementMessageErreur) {
    elementMessageErreur = document.createElement("div");
    elementMessageErreur.id = idMessageErreur;
    elementMessageErreur.classList.add("error-message");
    baliseInput.parentNode.appendChild(elementMessageErreur);
  }
  elementMessageErreur.textContent = message;
}
// Fonction pour cacher le message d'erreur sous le champ de saisie
function cacherMessageErreurChamp(champ) {
  const idMessageErreur = `${champ.toLowerCase()}-error`;
  const elementMessageErreur = document.getElementById(idMessageErreur);

  if (elementMessageErreur) {
    elementMessageErreur.textContent = "";
  }
}
function resetFormulaire() {
  formulaire.reset();
}
// Événement de soumission du formulaire
formulaire.addEventListener("submit", (event) => {
  event.preventDefault();
  let estValide = true;
  if (prenom.value === "") {
    afficherMessageErreurChamp(
      "Prénom",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
      prenom
    );
    estValide = false;
  } else {
    cacherMessageErreurChamp("Prénom");
  }
  if (nom.value === "") {
    afficherMessageErreurChamp(
      "Nom",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
      nom
    );
    estValide = false;
  } else {
    cacherMessageErreurChamp("Nom");
  }
  if (email.value === "") {
    afficherMessageErreurChamp("Email", "Ce champ est obligatoire.", email);
    estValide = false;
  } else if (!verifierEmail(email)) {
    afficherMessageErreurChamp("Email", "Adresse email invalide.", email);
    estValide = false;
  } else {
    cacherMessageErreurChamp("Email");
  }
  if (dateDeNaissance.value === "") {
    afficherMessageErreurChamp(
      "Date de Naissance",
      "Vous devez entrer votre date de naissance.",
      dateDeNaissance
    );
    estValide = false;
  } else {
    cacherMessageErreurChamp("Date de Naissance");
  }
  if (combienTournois.value === "") {
    afficherMessageErreurChamp(
      "Combien de tournois",
      "Veuillez entrer un nombre entre 0 et 99",
      combienTournois
    );
    estValide = false;
  } else {
    cacherMessageErreurChamp("Combien de tournois");
  }
  // Boucle pour vérifier l'état des cases à cocher
  let auMoinsUneCheckboxTournois = Array.from(quelTournois).some(
    (checkbox) => checkbox.checked
  );
  // Utilisation de la variable auMoinsUneCheckboxTournois plus tard dans le code
  if (!auMoinsUneCheckboxTournois) {
    afficherMessageErreurChamp(
      "Quel tournois",
      "Vous devez choisir une option.",
      quelTournois[0]
    );
    estValide = false;
  } else {
    cacherMessageErreurChamp("Quel tournois");
  }
  if (conditions.checked === false) {
    afficherMessageErreurChamp(
      "Conditions d'utilisation",
      "Vous devez vérifier acceptez les termes et conditions.",
      conditions
    );
    estValide = false;
  } else {
    cacherMessageErreurChamp("Conditions d'utilisation");
  }
  if (estValide) {
    // Le formulaire est complet et valide, masquer les messages d'erreur
    cacherMessageErreur();
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
