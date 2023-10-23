// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// DOM Elements : Vérification de formulaire
// const form = document.getElementById('form');
const form = document.querySelector('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const conditions = document.getElementById('checkbox1');

/**
 * Fonction pour ouvrir et fermer le menu mobile
 */
function editNav() {
  let btn = document.getElementById("myTopnav");
  if (btn.className === "topnav") {
    btn.className += " responsive";
  } else {
    btn.className = "topnav";
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

// Message Error
function showError(input, message) {
  const error = input.parentElement;
  error.setAttribute('data-error-visible', 'true');
  error.setAttribute('data-error', message);
  return false;
}

// Message Success
function showSuccess(input) {
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





form.addEventListener('submit', validationForm);







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
    showError(birthdate, "Vous devez entrer votre date de naissance.");
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
    showError(conditions, "Vous devez vérifier que vous acceptez les termes et conditions.");
    // console.log(conditions);
  }

  // Traitement du Formulaire
  console.log('message envoyé');

});


// DOM ELEMENTS SUBMITTED CONFIRMATION
// const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
// const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
// const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ SUBMITTED CONFIRMATION ------ //
// DISPLAY MODAL SUBMIT
// function displayModalSubmit() {
//     modalbg.style.display = 'none';
//     modalSubmit[0].style.display = 'block';
// }

// CLOSE SUBMIT
// function closeSubmit() {
//     modalSubmit[0].style.display = 'none';
//     first.style.border = 'none';
//     last.style.border = 'none';
//     email.style.border = 'none';
//     birthdate.style.border = 'none';
//     quantity.style.border = 'none';
// }

// EVENT CLOSE MODAL SUBMIT
// closeModalSubmit[0].addEventListener('click', closeSubmit);
// closeBtnConfirmation.addEventListener('click', closeSubmit);