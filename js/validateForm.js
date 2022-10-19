import { setErrorMsg, setValidMsg } from "./errorMessage.js";

// DOM elements

const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radio1 = document.getElementById("location1");
const radio2 = document.getElementById("location2");
const radio3 = document.getElementById("location3");
const radio4 = document.getElementById("location4");
const radio5 = document.getElementById("location5");
const radio6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");
const Regexp = /^[a-zA-Z]+$/;
const regexpNumber = /^[0-9]+$/;
const emailRgxp =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = () => {
  //firstname validity check
  if (firstNameInput.value.trim() === "") {
    setErrorMsg(firstNameInput, "Veuillez renseigner votre prénom !");
  } else if (firstNameInput.value.trim().length < 2) {
    setErrorMsg(
      firstNameInput,
      "Veuillez entrer plus de 2 caractères pour le champ du nom"
    );
  } else if (!firstNameInput.value.trim().match(Regexp)) {
    setErrorMsg(firstNameInput, "Veuillez entrer des lettres");
  } else {
    setValidMsg(firstNameInput, "");
  }

  //lastname validity check
  if (lastNameInput.value.trim() === "") {
    setErrorMsg(lastNameInput, "Veuillez renseigner votre prénom !");
  } else if (lastNameInput.value.trim().length < 2) {
    setErrorMsg(
      lastNameInput,
      "Veuillez entrer plus de 2 caractères pour le champ du nom !"
    );
  } else if (!lastNameInput.value.trim().match(Regexp)) {
    setErrorMsg(lastNameInput, "Veuillez entrer des lettres !");
  } else {
    setValidMsg(lastNameInput, "");
  }

  //email validity check
  if (emailInput.value.trim() === "") {
    setErrorMsg(emailInput, "Veuillez renseigner votre email !");
  } else if (!emailInput.value.trim().match(emailRgxp)) {
    setErrorMsg(emailInput, "Veuillez renseigner un email valide !");
  } else {
    setValidMsg(emailInput, "");
  }

  //birthdate validity check
  const today = new Date();
  const minDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  if (birthdateInput.value === "") {
    setErrorMsg(birthdateInput, "Vous devez entrer votre date de naissance !");
  } else if (Date.parse(birthdateInput.value) > Date.parse(minDate)) {
    console.log(minDate);
    setErrorMsg(birthdateInput, "Vous devez avoir plus de 18 ans");
  } else {
    setValidMsg(birthdateInput, "");
  }

  //amount game validity check
  if (quantityInput.value === "") {
    setErrorMsg(quantityInput, "Veuillez entrer le nombre de tournoi !");
  } else if (isNaN(quantityInput.value)) {
    setErrorMsg(quantityInput, "Vous devez rentrer un nombre !");
  } else {
    setValidMsg(quantityInput, "");
  }

  //city validity check
  if (
    radio1.checked === true ||
    radio2.checked === true ||
    radio3.checked === true ||
    radio4.checked === true ||
    radio5.checked === true ||
    radio6.checked === true
  ) {
    setValidMsg(radio1, "");
  } else {
    setErrorMsg(radio1, "Veuillez choisir une ville !");
  }

  //agree terms validity check
  if (checkbox.checked) {
    setValidMsg(checkbox, "");
  } else {
    setErrorMsg(checkbox, "Veuillez accepter les conditions !");
  }
};
