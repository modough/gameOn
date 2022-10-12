function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// show and hide sidebar navigation
const faBar = document.querySelector(".fa-bars");
faBar.addEventListener("click", () => {
  editNav();
});

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close form
function closeForm() {
  modalbg.style.display = "none";
}

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  closeForm();
});

// form

const validate = () => {
  const form = document.querySelector(".formulaire");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // valide firstname

    let firstErrorMessage = document.querySelector(".firtname-msg");
    firstErrorMessage.style.color = "red";
    firstNameInput = document.getElementById("first").value;
    const RegExpFirst = /^[a-zA-Z]+$/;
    console.log(firstNameInput);
    if (firstNameInput === "") {
      firstErrorMessage.innerText = "Veuillez renseigner votre prénom !";
    } else if (!firstNameInput.trim().match(RegExpFirst)) {
      firstErrorMessage.innerText = "Veuillez entrer des lettres";
    } else if (firstNameInput.trim().length < 2) {
      firstErrorMessage.innerText =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    } else {
      firstErrorMessage.innerText = "";
    }

    // valide lastname

    lastNameInput = document.getElementById("last").value;
    console.log(lastNameInput);
    let lastErrorMessage = document.querySelector(".lastname-msg");
    lastErrorMessage.style.color = "red";
    const RegExpLast = /^[a-zA-Z]+$/;
    if (lastNameInput === "") {
      lastErrorMessage.innerText = "Veuillez renseigner votre nom !";
    } else if (!lastNameInput.trim().match(RegExpLast)) {
      lastErrorMessage.innerText = "Veuillez entrer des lettres";
    } else if (lastNameInput.trim().length < 2) {
      lastErrorMessage.innerText =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    } else {
      lastErrorMessage.innerText = "";
    }

    // valide email

    emailInput = document.getElementById("email").value;
    let emailErrorMessage = document.querySelector(".email-msg");
    emailErrorMessage.style.color = "red";
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput === "") {
      emailErrorMessage.innerText = "Veuillez renseigner votre email !";
    } else if (!emailInput.trim().match(regexEmail)) {
      emailErrorMessage.innerText = "Veuillez renseigner un email valide !";
    } else {
      emailErrorMessage.innerText = "";
    }

    // valide birthday

    birthdateInput = document.getElementById("birthdate").value;
    let birthErrorMessage = document.querySelector(".birthdate-msg");
    birthErrorMessage.style.color = "red";

    if (birthdateInput == "") {
      birthErrorMessage.innerText =
        "Vous devez entrer votre date de naissance !";
    } else {
      birthErrorMessage.innerText = "";
    }
    console.log(birthdateInput);

    // valide quantity

    // valide city

    const radio1 = document.getElementById("location1");
    const radio2 = document.getElementById("location2");
    const radio3 = document.getElementById("location3");
    const radio4 = document.getElementById("location4");
    const radio5 = document.getElementById("location5");
    const radio6 = document.getElementById("location6");
    let radioErrorMessage = document.querySelector(".radioError-msg");
    radioErrorMessage.style.color = "red";

    if (radio1.checked == true) {
      radioErrorMessage.innerText = "";
    } else if (radio2.checked == true) {
      radioErrorMessage.innerText = "";
    } else if (radio3.checked == true) {
      radioErrorMessage.innerText = "";
    } else if (radio4.checked == true) {
      radioErrorMessage.innerText = "";
    } else if (radio5.checked == true) {
      radioErrorMessage.innerText = "";
    } else if (radio6.checked == true) {
      radioErrorMessage.innerText = "";
    } else {
      radioErrorMessage.innerText = "Veuillez choisir une ville !";
    }
  });
};
validate();
