const menu = document.getElementById("pop-menu");
const showMenu = document.getElementById("show-pop");
const closePopMenu = document.getElementById("close-pop-menu");

let isMenuVisible = false;
showMenu.addEventListener("click", () => {
  console.log("here");
  if (isMenuVisible) {
    menu.style.opacity = "0";
    menu.style.visibility = "hidden";
  } else { menu.style.opacity = "1";
    menu.style.visibility = "visible";
  }
  isMenuVisible = !isMenuVisible;
});

closePopMenu.addEventListener("click", () => {
  menu.style.opacity = "0";
  menu.style.visibility = "hidden";
  isMenuVisible = !isMenuVisible;
});
