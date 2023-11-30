function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((span) => span.addEventListener("click", closeModal));

let popup = document.querySelector(".content");

// function launch modal form
function launchModal() {
  if (popup && modalbg) {
    popup.style.display = "block";
    modalbg.style.display = "block";
  } else {
    popup.style.display = "none";
    modalbg.style.display = "none";
    popup.classList.remove("close-modal");
    modalbg.classList.remove("close-modal");
  }
}
// function Close modal form
function closeModal() {
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
// recup des données envoyer
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let dateDeNaissance = document.getElementById("birthdate");
let combienTournois = document.getElementById("quantity");
let btnSubmit = document.querySelector(".btn-submit");
// recup la value du check box
let quelTournois = document.querySelectorAll("input[type=radio]");

// function recupValue() {
//   console.log(this.value);
// }
function recupValue() {
  // Dans ce contexte, vous pouvez accéder à la valeur de la case à cocher directement
  const checkboxValue = this.value;
  console.log(checkboxValue);
  return checkboxValue;
}
let conditions = document.getElementById("checkbox1");
let prevenir = document.getElementById("checkbox2");
// function qui verifie si le champs saisie et correct et ajout une class error en cas d'erreur
function verifChamps(balise) {
  if (balise.value === "") {
    balise.classList.add("error");
  } else {
    balise.classList.remove("error");
  }
}
let form = document.querySelector("form");
// fonction qui verif si l'email et valide
function verifEmail(balise) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z._-]+\\.[a-z._-]+");
  if (emailRegExp.test(balise.value)) {
    console.log("ok");
    balise.classList.remove("error");
  } else {
    balise.classList.add("error");
  }
}
// function qui verifie si le checkbox et conditions sont cocher
function verifCheckbox(checkbox) {
  if (checkbox.checked !== undefined && checkbox.checked !== false) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
// ecouteur qui verifie si les champs du formulaire sont bien remplis
prenom.addEventListener("change", () => {
  verifChamps(prenom);
  console.log(prenom.value);
});
nom.addEventListener("change", () => {
  verifChamps(nom);
  console.log(nom.value);
});
email.addEventListener("change", () => {
  verifEmail(email);
  console.log(email.value);
});
dateDeNaissance.addEventListener("change", () => {
  verifChamps(dateDeNaissance);
  console.log(dateDeNaissance.value);
});
combienTournois.addEventListener("change", () => {
  verifChamps(combienTournois);
  console.log(combienTournois.value);
});

for (let i = 0; i < quelTournois.length; i++) {
  quelTournois[i].addEventListener("change", function () {
    const checkboxValue = recupValue.call(this);
    // Utilisez checkboxValue comme nécessaire, peut-être dans la fonction verifCheckbox
    verifCheckbox(this); // Transmettez directement la case à cocher à la fonction verifCheckbox
  });
}

conditions.addEventListener("change", () => {
  console.log(conditions.checked);
  verifCheckbox(conditions);
});
prevenir.addEventListener("change", () => {
  console.log(prevenir.checked);
});
// ecouteur lors du submit pour eviter le refresh de la page avec preventdefault
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Parcourir la NodeList quelTournois pour vérifier chaque case à cocher
  const isAnyCheckboxChecked = Array.from(quelTournois).some(
    (checkbox) => checkbox.checked
  );
  // Vérifiez si toutes les conditions sont remplies avant de permettre la soumission du formulaire
  if (
    prenom.value !== "" &&
    nom.value !== "" &&
    email.value !== "" &&
    dateDeNaissance.value !== "" &&
    combienTournois.value !== "" &&
    conditions.checked &&
    isAnyCheckboxChecked
  ) {
    // Le formulaire est complet
    btnSubmit.disabled = false;
    console.log("Formulaire soumis !");
  } else {
    // Affichez un message d'erreur
    btnSubmit.disabled = true;
    console.log(
      "Veuillez remplir tous les champs et cocher les cases nécessaires."
    );
  }
});
