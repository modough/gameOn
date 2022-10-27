import { setValidMsg, setErrorMsg } from "./errorMessage.js";
import { setLettersRgxp, setEmailRgxp } from "./regex.js";

// creating DOM elements
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdayInput = document.getElementById("birthday");
const quantityInput = document.getElementById("quantity");
const radio = document.getElementById("location1");
const checkbox = document.getElementById("checkbox1");

const today = new Date();
const minDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);
const maxAge = new Date(
  today.getFullYear() - 100,
  today.getMonth(),
  today.getDate()
);

// declare a generic function for most inputs validation
const genericValidate = ({
  input,
  regex = null,
  emptyErr = "Champ vide !",
  nbErr = "Champ trop court !",
  regexErr = "Champ incorrect !",
  err = "Vous devez avoir plus de 18 ans !",
  dateErr = "date incorrect !",
  isDate = false,
  isInt = false,
}) => {
  if (input && !input.value) return setErrorMsg(input, emptyErr);
  if (input && input.value.trim() === "") return setErrorMsg(input, emptyErr);
  if (!isInt && input.value.trim().length < 2) return setErrorMsg(input, nbErr);
  if (regex && !input.value.trim().match(regex))
    return setErrorMsg(input, regexErr);

  if (
    (isDate && Date.parse(input.value) > Date.parse(today)) ||
    (isDate && Date.parse(input.value) < Date.parse(maxAge))
  )
    return setErrorMsg(input, dateErr);

  if (isDate && Date.parse(input.value) > Date.parse(minDate))
    return setErrorMsg(input, err);

  if (isInt && isNaN(input.value)) return setMsg(input, err);

  return setValidMsg(input, "");
};

// creating function for validation steps
export const validate = () => {
  //firstname validity check
  genericValidate({
    input: firstNameInput,
    regex: setLettersRgxp,
    emptyErr: "Veuillez renseigner votre prénom !",
    nbErr: "Veuillez entrer plus de 2 caractères pour le champ du prénom",
    regexErr: "Veuillez entrer des lettres",
  });

  //lastname validity check
  genericValidate({
    input: lastNameInput,
    regex: setLettersRgxp,
    emptyErr: "Veuillez renseigner votre nom !",
    nbErr: "Veuillez entrer plus de 2 caractères pour le champ du nom",
    regexErr: "Veuillez entrer des lettres",
  });

  //email validity check
  genericValidate({
    input: emailInput,
    regex: setEmailRgxp,
    emptyErr: "Veuillez renseigner votre email !",
    regexErr: "Veuillez renseigner un email valide !",
  });

  //birthday validity check
  genericValidate({
    input: birthdayInput,
    emptyErr: "Veuillez renseigner votre date de naissance !",
    err: "Vous devez avoir plus de 18 ans",
    dateErr: "Cette date n'est pas autorisée !",
    isDate: true,
  });

  //amount game validity check
  genericValidate({
    input: quantityInput,
    emptyErr: "Veuillez entrer le nombre de tournoi !",
    err: "Vous devez rentre un nombre !",
    isInt: true,
  });

  //city validity check
  if (
    Array.from(document.querySelectorAll(".checkedCity .checkbox-input")).find(
      (radio) => radio.checked
    )
  ) {
    setValidMsg(radio, "");
  } else {
    setErrorMsg(radio, "Veuillez choisir une ville !");
  }

  //agreed terms validation
  if (checkbox.checked) {
    setValidMsg(checkbox, "");
  } else {
    setErrorMsg(checkbox, "Veuillez accepter les conditions !");
  }
};
