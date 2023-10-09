// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

/**
 * Fonction pour ouvrir et fermer le menu mobile
 */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * Fonction pour ouvrir et fermer la modale
 */
// launch modal event
function launchModal() {
  modalbg.style.display = "block";
}
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
function closeModal() {
  modalbg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);

/**
 * Vérification de formulaire
 */

// DOM Elements
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const conditions = document.getElementById('checkbox1');

// Message Error
function showError(input, message){
  const error = input.parentElement;
  error.setAttribute('data-error-visible', 'true');
  error.setAttribute('data-error', message);
  return false;
}

// Message Success
function showSuccess(input){
  const error = input.parentElement;
  error.setAttribute('data-error-visible', 'false');
  return true;
}

// Function validation : Firstname
function validateFirst(first) {
    let firstRegex = /^[A-Za-z][A-Za-z\é\è\ê\-]+$/;
//	let prenomRGEX = /^[A-Z][A-Za-z\é\è\ê\-]+$/; Avec une majuscule obligatoire en première lettre
    return firstRegex.test(first);
}

// Function validation : Lastname
function validateName(last) {
    let lastRegex = /^[A-Za-z][A-Za-z\é\è\ê\-]+$/;
    return lastRegex.test(last);
}

// Function validation : E-mail
function validateEmail(email) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

// Function validation : Birthdate
function validateBirthdate(birthdate) {
  const currentYear = new Date().getFullYear(); 
  const parts = birthdate.split('/');
  const birthYear = parseInt(parts[0], 10);

  if (currentYear - birthYear < 16) {
    return false;
  } else {
    return true;
  }
}

// Formulaire : Validation
form.addEventListener('submit',function(e) {
  e.preventDefault();

  // Firstname
  if(first.value === '') {
      showError(first,'Votre Prénom est requis.');
  }else if (!validateFirst(first.value)) {
    showError(first, "Votre Prénom n'est pas valide.");
  }else {
    showSuccess(first);
  }

  // Lastname
  if(last.value === '') {
    showError(last, 'Votre Nom est requis.');
  } else if (!validateName(last.value)) {
    showError(last, "Votre Nom n'est pas valide.");
  }else {
    showSuccess(last);
  }

  // E-mail
  if(email.value === ''){
    showError(email, 'Votre E-mail est requis.');
  }else if(!validateEmail(email.value)) {
    showError(email,"Votre E-mail n'est pas valide.");
  }else {
    showSuccess(email);
  }

  // Birthdate
  if(birthdate.value === '') {
    showError(birthdate, "Votre date de Naissance est requise.");
  }else if(!validateBirthdate(birthdate.value)) {
    showError(birthdate, "Vous n'avez pas l'âge pour participer.");
  }else {
    showSuccess(birthdate);
  }

  // Function validation : Quantity
  if (quantity.value === '') {
    showError(quantity, "Un nombre est requis.");
  } else if (quantity.value > 99) {
    showError(quantity, "Le nombre ne peut pas être supérieur à 99.");
  } else {
    showSuccess(quantity);
  }

  // Function validation : Conditions
  if (conditions.checked) {
    showSuccess(conditions);
  } else {
    showError(conditions, "Veuillez accepter les conditions d'utilisation.");
    console.log(conditions);
  }

});


// const birthdateCheck = (value) => {
//     const error = document.querySelector('.birthdate');
//     let valid = false;
//     const currentYear = new Date().getFullYear();
 
//     if (!value) {
//         error.setAttribute('data-error-visible', 'true');
//         error.setAttribute('data-error-1-visible', 'false');
//     }
//     else {
//         error.setAttribute('data-error-visible', 'false');
//         const parts = value.split('/');
//         const birthYear = parseInt(parts[0], 10);
 
//         if (currentYear - birthYear < 18) {
//             console.log(error);
//             error.setAttribute('data-error-1-visible', 'true');
//         } 
//         else {
//             valid = true;
//             error.setAttribute('data-error-1-visible', 'false');
//         }
//     }
//     return valid;
// }