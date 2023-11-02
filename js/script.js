//toogle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
hamburger.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
});
