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
