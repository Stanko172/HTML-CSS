let menu = document.getElementById("menu");
let dropdownContent = document.getElementById("dropdown-content");
menu.addEventListener("click", () => {
  dropdownContent.classList.toggle("dropdown-content-visible");
});
