//  Toggle menu for mobile
const menuBtn = document.querySelector(".logo");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});