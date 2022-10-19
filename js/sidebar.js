// sidebar function
export const editNav = () => {
  const x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? x.classList.add("responsive")
    : x.classList.remove("responsive");
};
