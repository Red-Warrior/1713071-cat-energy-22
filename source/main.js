let toggle = true;
let menuMain = document.querySelector(".main-nav");
let menuButton = document.querySelector(".page-header__toggle");
let menuImage = menuButton.querySelector("img");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  if (toggle) {
    menuImage.setAttribute("src", "img/close.svg");
    menuImage.setAttribute("width", "20");
    menuImage.setAttribute("height", "20");
    menuMain.classList.toggle("main-nav--show-menu")
    toggle = !toggle;
  } else {
    menuImage.setAttribute("src", "img/base-button.svg");
    menuImage.setAttribute("width", "24");
    menuImage.setAttribute("height", "18");
    menuMain.classList.toggle("main-nav--show-menu")
    toggle = !toggle;
  }
}
