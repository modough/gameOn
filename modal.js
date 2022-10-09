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

const Form = () => {
  let form = document.querySelector(".formulaire");
  console.log(form);

  // valide firstname
  const validFirstName = () => {
    let errorMessage = document.querySelector(".firtname-msg");
    firstNameInput = document.getElementById("first").value;
    const RegExpFirst = /^[a-zA-Z]+$/;
    console.log(firstNameInput);

    if (!firstNameInput.trim().match(RegExpFirst)) {
      errorMessage.innerText = "Veuillez entrer des lettres";
      errorMessage.style.color = "red";
    } else if (firstNameInput.trim().length < 2) {
      errorMessage.innerText =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      errorMessage.style.color = "red";
    } else {
      errorMessage.innerText = "";
    }
  };
  form.first.addEventListener("change", () => {
    validFirstName();
  });

  // valide lastname
  const validlastName = () => {
    lastNameInput = document.getElementById("last").value;
    let errorMessage = document.querySelector(".lastname-msg");
    const RegExpLast = /^[a-zA-Z]+$/;
    if (!lastNameInput.trim().match(RegExpLast)) {
      errorMessage.innerText = "Veuillez entrer des lettres";
      errorMessage.style.color = "red";
    } else if (lastNameInput.trim().length < 2) {
      errorMessage.innerText =
        "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      errorMessage.style.color = "red";
    } else {
      errorMessage.innerText = "";
    }
  };
  form.last.addEventListener("change", () => {
    validlastName();
  });

  // valide email
  const validEmail = () => {
    emailInput = document.getElementById("email").value;
    let errorMessage = document.querySelector(".email-msg");
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailInput.trim().match(regexEmail)) {
      errorMessage.innerText = "Veuillez un email valide";
      errorMessage.style.color = "red";
    } else {
      errorMessage.innerText = "";
    }
  };
  form.email.addEventListener("change", () => {
    validEmail();
  });

  // valide birthday
  const validBirth = () => {
    birthdateInput = document.getElementById("birthdate").value;
    let errorMessage = document.querySelector(".birthdate-msg");

    if (birthdateInput == "") {
      errorMessage.innerText = "Vous devez entrer votre date de naissance";
      errorMessage.style.color = "red";
    } else {
      errorMessage.innerText = "";
    }
    console.log(birthdateInput);
  };

  form.birthdate.addEventListener("change", () => {
    validBirth();
  });

  // valide quantity
};
Form();
