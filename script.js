//menu icon on small screens
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const bar = document.querySelector("#bar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  bar.classList.toggle("bi-x-circle");
  bar.classList.toggle("bi-list");
});
