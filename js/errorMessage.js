// error message function
export const setErrorMsg = (elmt, errorMessage) => {
  const parent = elmt.parentElement;
  if (parent.classList.contains("valid")) {
    parent.classList.remove("valid");
  }
  parent.classList.add("error");
  const p = parent.querySelector("p");
  p.textContent = errorMessage;
  p.style.color = "#f00";
  p.style.fontSize = "20px";
};
// valid message function
export const setValidMsg = (elmt, errorMessage) => {
  const parent = elmt.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("valid");
  const p = parent.querySelector("p");
  p.textContent = errorMessage;
};
