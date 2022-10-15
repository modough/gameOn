import { validate } from "./validateForm.js";
import { editNav } from "./sidebar.js";

// show and hide sidebar navigation
const faBar = document.querySelector(".fa-bars");
faBar.addEventListener("click", () => {
  editNav();
});

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal function
const launchModal = () => {
  modalbg.style.display = "block";
};
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close form function with the close span
const closeForm = () => {
  modalbg.style.display = "none";
};

// close modal form
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  closeForm();
});

// submit form function
const submitForm = () => {
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
submitForm();
