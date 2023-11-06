"use strict"; // Pour les erreurs

// DOM Elements
const body = document.querySelector('body');
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".closeBtn");
const formData = document.querySelectorAll(".formData");
// const navBtn = document.querySelector(".icon");
const navBtn = document.querySelector(".dropbtn");

// DOM Elements : Vérification de formulaire
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.querySelectorAll('input[type=radio][name=location]');
const terms = document.getElementById('checkbox1');

const formValidMessage = document.querySelector('.formValidMessage');

/**
 * Fonction pour ouvrir et fermer le menu mobile
 */
// function editNav() {
//   let x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
// navBtn.addEventListener("click", editNav);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function navDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
navBtn.addEventListener("click", navDropdown);


/**
 * Fonction pour ouvrir et fermer la modale
 */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  body.style.overflow = 'hidden';
}
// modalBtn.addEventListener("click", launchModal);
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
function closeModal() {
  modalbg.style.display = "none";
  body.style.overflow = 'auto';
}
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

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

// Validation : Name
function validateName(name) {  
  let nameRegex = /^[A-Za-z][A-Za-z\é\è\ê\-\s]+$/;
  return nameRegex.test(name.trim());
}

// Validation : Firstname
// function validateFirst(first) {
//     let firstRegex = /^[A-Za-z][A-Za-z\é\è\ê\-\s]+$/;
// //	let prenomRGEX = /^[A-Z][A-Za-z\é\è\ê\-]+$/; Avec une majuscule obligatoire en première lettre
//     return firstRegex.test(first.trim());
// }

// Validation : Lastname
// function validateName(last) {  
//     let lastRegex = /^[A-Za-z][A-Za-z\é\è\ê\-\s]+$/;
//     return lastRegex.test(last.trim());
// }

// Validation : E-mail
function validateEmail(email) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

// Validation : Birthdate
function validateBirthdate(birthdate) {
  const currentYear = new Date().getFullYear(); 
  const parts = birthdate.split('/');
  const birthYear = parseInt(parts[0], 10);

  if (currentYear - birthYear < 16 || currentYear - birthYear > 125 ) { // Change here the minimum age required
    return false;
  } else {
    return true;
  }
}

// Validation : Quantity
function validateQuantity(quantity) {
  let quantityRegex = /^[0-9]+$/;
  return quantityRegex.test(quantity.trim());
}


// Formulaire : Check Form
form.addEventListener('submit',function(e) {
  let isFormOk = true;

  // Check : Firstname
  if(first.value === '') {
    showError(first,'Votre Prénom est requis.');
    isFormOk = false;
  }else if (!validateName(first.value)) {
    showError(first, "Votre Prénom n'est pas valide.");
    isFormOk = false;
  }else {
    showSuccess(first);
  }

  // Check : Lastname
  if(last.value === '') {
    showError(last, 'Votre Nom est requis.');
    isFormOk = false;
  } else if (!validateName(last.value)) {
    showError(last, "Votre Nom n'est pas valide.");
    isFormOk = false;
  }else {
    showSuccess(last);
  }

  // Check : E-mail
  if(email.value === ''){
    showError(email, 'Votre E-mail est requis.');
    isFormOk = false;
  }else if(!validateEmail(email.value)) {
    showError(email,"Votre E-mail n'est pas valide.");
    isFormOk = false;
  }else {
    showSuccess(email);
  }

  // Check : Birthdate
  if(birthdate.value === '') {
    showError(birthdate, "Vous devez entrer votre date de naissance.");
    isFormOk = false;
  }else if(!validateBirthdate(birthdate.value)) {
    showError(birthdate, "Vous n'avez pas l'âge pour participer.");
    isFormOk = false;
  }else {
    showSuccess(birthdate);
  }

  // Check : Quantity
  if (quantity.value === '' || !validateQuantity(quantity.value)) {
    showError(quantity, "Un nombre est requis.");
    isFormOk = false;
  } else if(quantity.value > 99) {
      showError(quantity, "Le nombre ne peut pas être supérieur à 99.");
      isFormOk = false;
  } else {
    showSuccess(quantity);
  }

  // Check : Location
  for (let i = 0; i < locations.length; i++) {
    if ( locations[i].checked === true ) {
      showSuccess(locations[i]);
      break;
    }else {
      showError(locations[i] , 'Vous devez choisir une option.');
      isFormOk = false;
    }
  }

  // Check : Terms
  if (terms.checked) {
    showSuccess(terms);
  } else {
    showError(terms, "Vous devez vérifier que vous acceptez les termes et conditions.");
    isFormOk = false;
  }

  // Traitement du Formulaire
  // Check : Results validation Form
  if (isFormOk) {
    form.style.display = 'none';
    formValidMessage.style.display = 'flex';
    // e.preventDefault();
  }else {
    e.preventDefault();
  }
});