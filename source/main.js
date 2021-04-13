// let toggle = true;
let menuMain = document.querySelector(".main-nav");
let menuButton = document.querySelector(".page-header__toggle");
let menuImage = document.querySelector(".page-header__image");

if (menuButton.classList.contains("page-header--hidden")) {
  menuButton.classList.remove("page-header--hidden");
}

menuButton.addEventListener("click", showMenu);
window.onunload = () => {
  menuButton.removeEventListener("click", showMenu);
};

function showMenu() {
  menuMain.classList.toggle("main-nav--close-menu");
  menuImage.classList.toggle("page-header--menu-icon");
}

/*
function baseButton() {
  menuImage.setAttribute("src", "img/base-button.svg");
  menuImage.setAttribute("width", "24");
  menuImage.setAttribute("height", "16");
}

function closeButton() {
  menuImage.setAttribute("src", "img/close.svg");
  menuImage.setAttribute("width", "18");
  menuImage.setAttribute("height", "18");
}

function toggleButton() {
  menuMain.classList.toggle("main-nav--show-menu");
  toggle = !toggle;
}

if (toggle) {
   baseButton();
   toggleButton();
 } else {
   closeButton();
   toggleButton();
 }*/
