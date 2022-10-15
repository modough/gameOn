import { validate } from "./validateForm.js";
export const submitForm = () => {
  const form = document.querySelector("#form");
  const first = document.querySelector(".checked1");
  const second = document.querySelector(".checked2");
  const third = document.querySelector(".checked3");
  const fourth = document.querySelector(".checked4");
  const fifth = document.querySelector(".checked5");
  const sixth = document.querySelector(".checked6");
  const seventh = document.querySelector(".checked7");
  form.addEventListener("submit", (e) => {
    validate();
    if (
      first.classList.contains("error") ||
      second.classList.contains("error") ||
      third.classList.contains("error") ||
      fourth.classList.contains("error") ||
      fifth.classList.contains("error") ||
      sixth.classList.contains("error") ||
      seventh.classList.contains("error")
    ) {
      e.preventDefault();
    } else {
      form.submit();
    }
  });
};
