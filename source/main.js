let toggle = true;
let menuMain = document.querySelector(".main-nav");
let menuButton = document.querySelector(".page-header__toggle");
let menuImage = menuButton.querySelector("img");

function beforeUploading() {
  menuMain.classList.remove("main-nav--show-menu");
  setTimeout(() => {
    menuMain.setAttribute("style", "transition: max-height 0.5s ease-in-out;");
  });
}

function baseButton() {
  menuImage.setAttribute("src", "img/base-button.svg");
  menuImage.setAttribute("width", "24");
  menuImage.setAttribute("height", "18");
}

function closeButton() {
  menuImage.setAttribute("src", "img/close.svg");
  menuImage.setAttribute("width", "20");
  menuImage.setAttribute("height", "20");
}

function toggleButton() {
  menuMain.classList.toggle("main-nav--show-menu");
  toggle = !toggle;
}

document.addEventListener("DOMContentLoaded", beforeUploading);
menuButton.addEventListener("click", openMenu);

window.onunload = () => {
  document.removeEventListener("DOMContentLoaded", beforeUploading);
  menuButton.removeEventListener("click", openMenu);
};

function openMenu() {
  if (toggle) {
    closeButton();
    toggleButton();
  } else {
    baseButton();
    toggleButton();
  }
}
