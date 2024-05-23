const slideMenu = document.getElementById("slide-menu");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close-slide-menu");
const slideMenuLink = document.querySelectorAll(".nav-link");

openMenu.addEventListener("click", () => {
  slideMenu.style.transform = "none";
});

closeMenu.addEventListener("click", () => {
  slideMenu.style.transform = "translateX(100%)";
});

slideMenuLink.forEach((link) => {
  link.addEventListener("click", () => {
    slideMenu.style.transform = "translateX(100%)";
  });
});
