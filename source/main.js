// let toggle = true;
let menuMain = document.querySelector(".main-nav");
let menuButton = document.querySelector(".page-header__toggle");
let menuImage = document.querySelector(".page-header__image");

if (menuButton.classList.contains("page-header--hidden")) {
  menuButton.classList.remove("page-header--hidden");
  menuMain.classList.add("main-nav--close-menu");
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

Array.from(document.querySelectorAll(".catalog__image"))
  .concat(Array.from(document.querySelectorAll(".catalog__item-heading")))
  .forEach((item) => (item.tabIndex = "-1"));

let elem = Array.from(document.querySelectorAll(".form-weight > label"))
  .concat(Array.from(document.querySelectorAll(".form-additionally__wrapper > label")))
  .forEach((item) => (item.tabIndex = "0"));

let sliderMobile = document.querySelector(".example__control-block");
let imagBefore = document.querySelector(".example__before");
let imageAfter = document.querySelector(".example__after");
let toggle = document.querySelector(".example__toggle");

if (sliderMobile) {
  sliderMobile.addEventListener("click", (event) => slider(event));
}

let sliderToggle = true;

function slider(event) {
  if (event.target.closest(".example__button")) {
    if (sliderToggle) {
      imagBefore.style.display = "none";
      imageAfter.style.display = "block";
      toggle.style.alignSelf = "flex-end";

      sliderToggle = !sliderToggle;
    } else {
      imagBefore.style.display = "block";
      imageAfter.style.display = "none";
      toggle.style.alignSelf = "flex-start";

      sliderToggle = !sliderToggle;
    }
  }
}
