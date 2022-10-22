import { sidebar } from "./sidebar.js";
import { submitForm } from "./submitForm.js";

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// show and hide sidebar navigation
const faBar = document.querySelector(".fa-bars");
faBar.addEventListener("click", () => {
  sidebar();
});

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
submitForm();
