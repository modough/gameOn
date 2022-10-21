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
const unauthorizedDate = new Date(
  today.getFullYear() - 100,
  today.getMonth(),
  today.getDate()
);

// declare a generic function for input validation
/*const genericValidate = ({
  input,
  regex = null,
  emptyErr = "Champ vide !",
  nbErr = "Champ trop court !",
  regexErr = "Champ incorrect !",
  err = "Vous devez avoir plus de 18 ans !",
  dateErr = "date incorrect !",
  checkDate = true,
}) => {
  if (input.value.trim() === "") return setErrorMsg(input, emptyErr);
  if (input.value.trim().length < 2) return setErrorMsg(input, nbErr);
  if (regex && !input.value.trim().match(regexp))
    return setErrorMsg(input, regexErr);
  if (checkDate && Date.parse(input.value) > Date.parse(minDate))
    return setErrorMsg(input, err);
  if (checkDate && Date.parse(input.value) < Date.parse(unauthorizedDate))
    return setErrorMsg(input, dateErr);

  if (!input.checked) return setErrorMsg(input, err);

  if (isNaN(input.value)) return setErrorMsg(input, err);

  return setValidMsg(input, "");
};*/

export const validate = () => {
  //firstname validity check

  /*genericValidate({
    input: firstNameInput,
    regex: regexp,
    emptyErr: "Veuillez renseigner votre prénom !",
    nbErr: "Veuillez entrer plus de 2 caractères pour le champ du prénom",
    regexErr: "Veuillez entrer des lettres",
  });*/

  if (firstNameInput.value.trim() === "") {
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
  }

  //lastname validity check
  /*genericValidate({
    input: lastNameInput,
    regex: regexp,
    emptyErr: "Veuillez renseigner votre nom !",
    nbErr: "Veuillez entrer plus de 2 caractères pour le champ du nom",
    regexErr: "Veuillez entrer des lettres",
  });*/

  if (lastNameInput.value.trim() === "") {
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
  }

  //email validity check

  /*genericValidate({
    input: emailInput,
    regex: emailRgxp,
    emptyErr: "Veuillez renseigner votre email !",
    regexErr: "Veuillez renseigner un email valide !",
  });*/

  if (emailInput.value.trim() === "") {
    setErrorMsg(emailInput, "Veuillez renseigner votre email !");
  } else if (!emailInput.value.trim().match(emailRgxp)) {
    setErrorMsg(emailInput, "Veuillez renseigner un email valide !");
  } else {
    setValidMsg(emailInput, "");
  }

  //birthday validity check

  /*genericValidate({
    input: birthdayInput,
    emptyErr: "Veuillez renseigner votre date de naissance !",
    err: "Vous devez avoir plus de 18 ans",
    dateErr: "Cette date n'est pas autorisée !",
  });*/

  if (birthdayInput.value === "") {
    setErrorMsg(birthdayInput, "Vous devez entrer votre date de naissance !");
  } else if (
    Date.parse(birthdayInput.value) < Date.parse(unauthorizedDate) ||
    Date.parse(birthdayInput.value) > Date.parse(today)
  ) {
    setErrorMsg(birthdayInput, "Cette date n'est pas valide !");
  } else if (Date.parse(birthdayInput.value) > Date.parse(minDate)) {
    setErrorMsg(birthdayInput, "Vous devez avoir plus de 18 ans");
  } else {
    setValidMsg(birthdayInput, "");
  }

  //amount game validity check
  /*genericValidate({
    input: quantityInput,
    emptyErr: "Veuillez entrer le nombre de tournoi !",
    err: "Vous devez rentre un nombre !",
  });*/

  if (quantityInput.value === "") {
    setErrorMsg(quantityInput, "Veuillez entrer le nombre de tournoi !");
  } else if (isNaN(quantityInput.value)) {
    setErrorMsg(quantityInput, "Vous devez rentrer un nombre !");
  } else if (quantityInput.value < 0 || quantityInput.value > 99) {
    setErrorMsg(
      quantityInput,
      "Ce chiffre doit avoir un valeur entre 0 et 99 !"
    );
  } else {
    setValidMsg(quantityInput, "");
  }

  //city validity check
  /*genericValidate({
    input: radio1,
    err: "Veuillez choisir une ville !",
  });*/

  if (
    radio1.checked ||
    radio2.checked ||
    radio3.checked ||
    radio4.checked ||
    radio5.checked ||
    radio6.checked
  ) {
    setValidMsg(radio1, "");
  } else {
    setErrorMsg(radio1, "Veuillez choisir une ville !");
  }

  //agree terms validity check

  /*genericValidate({
    input: checkbox,
    err: "Veuillez accepter les conditions !",
  });*/

  if (checkbox.checked) {
    setValidMsg(checkbox, "");
  } else {
    setErrorMsg(checkbox, "Veuillez accepter les conditions !");
  }
};
