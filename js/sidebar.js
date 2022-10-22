// sidebar function
export const sidebar = () => {
  const x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? x.classList.add("responsive")
    : x.classList.remove("responsive");
};
