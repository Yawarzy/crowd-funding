const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
  mainNav.classList.toggle("show");
  hamburger.classList.toggle("close");
});
