// Make Mobile Nav
const btnNavEL = document.querySelector(".btn-mobile-nav");
const HeaderEL = document.querySelector(".header");
btnNavEL.addEventListener("click", function () {
  HeaderEL.classList.toggle("nav-open");
});
