import { validate } from "./validateForm.js";
export const submitForm = () => {
  const form = document.querySelector("#form");
  const firstname = document.querySelector(".checkedFirstname");
  const lastname = document.querySelector(".checkedLastname");
  const email = document.querySelector(".checkedEmail");
  const birthday = document.querySelector(".checkedBirthday");
  const quantityTournament = document.querySelector(".checkedQuantity");
  const cityTournament = document.querySelector(".checkedCity");
  const acceptedConditions = document.querySelector(".checkedConditions");
  form.addEventListener("submit", (e) => {
    validate();
    if (
      firstname.classList.contains("error") ||
      lastname.classList.contains("error") ||
      email.classList.contains("error") ||
      birthday.classList.contains("error") ||
      quantityTournament.classList.contains("error") ||
      cityTournament.classList.contains("error") ||
      acceptedConditions.classList.contains("error")
    ) {
      e.preventDefault();
    } else {
      form.submit();
    }
  });
};
