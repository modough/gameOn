import { setErrorMsg, setValidMsg } from "./errorMessage.js";

// DOM elements

const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdayInput = document.getElementById("birthday");
const quantityInput = document.getElementById("quantity");
const radio1 = document.getElementById("location1");
const radio2 = document.getElementById("location2");
const radio3 = document.getElementById("location3");
const radio4 = document.getElementById("location4");
const radio5 = document.getElementById("location5");
const radio6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");
const regexp = /^[a-zA-Z]+$/;
const emailRgxp =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const today = new Date();
const minDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);
// declare a generic function for input validation
const genericValidate = ({
  input,
  regex = null,
  emptyErr = "Champ vide",
  nbErr = "Champ trop court",
  regexErr = "Champ incorrect",
  dateErr = "Vous devez avoir plus de 18 ans",
  checkDate = false,
}) => {
  if (input.value.trim() === "") return setErrorMsg(input, emptyErr);
  if (input.value.trim().length < 2) return setErrorMsg(input, nbErr);
  if (regex && !input.value.trim().match(regexp))
    return setErrorMsg(input, regexErr);
  if (checkDate && Date.parse(input.value) > Date.parse(minDate))
    return setErrorMsg(input, dateErr);
  return setValidMsg(input, "");
};

export const validate = () => {
  //firstname validity check

  genericValidate({
    input: firstNameInput,
    regex: regexp,
    emptyErr: "Veuillez renseigner votre prénom !",
    nbErr: "Veuillez entrer plus de 2 caractères pour le champ du prénom",
    regexErr: "Veuillez entrer des lettres",
  });

  /*if (firstNameInput.value.trim() === "") {
    setErrorMsg(firstNameInput, "Veuillez renseigner votre prénom !");
  } else if (firstNameInput.value.trim().length < 2) {
    setErrorMsg(
      firstNameInput,
      "Veuillez entrer plus de 2 caractères pour le champ du nom"
    );
  } else if (!firstNameInput.value.trim().match(regexp)) {
    setErrorMsg(firstNameInput, "Veuillez entrer des lettres");
  } else {
    setValidMsg(firstNameInput, "");
  }*/

  //lastname validity check
  genericValidate({
    input: lastNameInput,
    regex: regexp,
    emptyErr: "Veuillez renseigner votre nom !",
    nbErr: "Veuillez entrer plus de 2 caractères pour le champ du nom",
    regexErr: "Veuillez entrer des lettres",
  });

  /*if (lastNameInput.value.trim() === "") {
    setErrorMsg(lastNameInput, "Veuillez renseigner votre prénom !");
  } else if (lastNameInput.value.trim().length < 2) {
    setErrorMsg(
      lastNameInput,
      "Veuillez entrer plus de 2 caractères pour le champ du nom !"
    );
  } else if (!lastNameInput.value.trim().match(regexp)) {
    setErrorMsg(lastNameInput, "Veuillez entrer des lettres !");
  } else {
    setValidMsg(lastNameInput, "");
  }*/

  //email validity check

  genericValidate({
    input: emailInput,
    regex: emailRgxp,
    emptyErr: "Veuillez renseigner votre email !",
    regexErr: "Veuillez renseigner un email valide !",
  });

  /*if (emailInput.value.trim() === "") {
    setErrorMsg(emailInput, "Veuillez renseigner votre email !");
  } else if (!emailInput.value.trim().match(emailRgxp)) {
    setErrorMsg(emailInput, "Veuillez renseigner un email valide !");
  } else {
    setValidMsg(emailInput, "");
  }*/

  //birthday validity check

  genericValidate({
    input: birthdayInput,

    emptyErr: "Veuillez renseigner votre date!",
    dateErr: "Vous devez avoir plus de 18 ans",
  });

  /*if (birthdayInput.value === "") {
    setErrorMsg(birthdayInput, "Vous devez entrer votre date de naissance !");
  } else if (Date.parse(birthdayInput.value) > Date.parse(minDate)) {
    console.log(minDate);
    setErrorMsg(birthdayInput, "Vous devez avoir plus de 18 ans");
  } else {
    setValidMsg(birthdayInput, "");
  }*/

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
