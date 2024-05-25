const bag = document.getElementById("shop-bag");
const bagContent = document.getElementById("drop-menu");

let isBagOpen = false;

bag.addEventListener("click", () => {
  if (isBagOpen) {
    bagContent.style.transform = "translateY(-100%)";
    bagContent.style.opacity = "0";
    bagContent.style.visibility = "hidden";
  }else{
    bagContent.style.transform = "none";
    bagContent.style.opacity = "1";
    bagContent.style.visibility = "visible";
  }

  isBagOpen = !isBagOpen;
});
