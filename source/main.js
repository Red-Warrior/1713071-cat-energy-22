document.querySelectorAll(".catalog__item-heading").forEach((item) => (item.tabIndex = "-1"));

let menuMain = document.querySelector(".main-nav");
let menuButton = document.querySelector(".page-header__toggle");
let menuImage = document.querySelector(".page-header__image");

if (menuButton.classList.contains("page-header--hidden")) {
  menuButton.classList.remove("page-header--hidden");
  menuMain.classList.add("main-nav--close-menu");
}

function showMenu() {
  menuMain.classList.toggle("main-nav--close-menu");
  menuImage.classList.toggle("page-header--menu-icon");
}

menuButton.addEventListener("click", showMenu);

/*function calculateHeight() {
  let winWidth = document.documentElement.clientWidth;
  let imageHeight = winWidth >= 768 ? 620 : (winWidth * 73) / 100;
  let imageCustom = document.querySelector(".example__image-wrapper");
  imageCustom.style.height = imageHeight + "px";
}
calculateHeight();

window.addEventListener("resize", calculateHeight);*/

let sliderBlock = document.querySelector(".example__control-block");
let sliderBeforeButton = document.querySelector(".example__button-before");
let sliderAfterButton = document.querySelector(".example__button-after");
let imgBefore = document.querySelector(".example__before");
let imgAfter = document.querySelector(".example__after");
let toggle = document.querySelector(".example__toggle");

if (sliderBeforeButton && sliderAfterButton) {
  sliderBeforeButton.addEventListener("click", buttonBefore);
  sliderAfterButton.addEventListener("click", buttonAfter);
  sliderBlock.classList.add("listener");
}

function buttonBefore() {
  imgBefore.style.display = "block";
  imgAfter.style.display = "none";
  toggle.style.alignSelf = "flex-start";
}

function buttonAfter() {
  imgBefore.style.display = "none";
  imgAfter.style.display = "block";
  toggle.style.alignSelf = "flex-end";
}

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth > 767) {
    if (sliderBlock.classList.contains("listener")) {
      sliderBlock.classList.remove("listener");
      sliderBeforeButton.removeEventListener("click", buttonBefore);
      sliderAfterButton.removeEventListener("click", buttonAfter);
      imgBefore.style.display = "block";
      imgAfter.style.display = "block";
      toggle.style.alignSelf = "center";
    }
  } else {
    sliderBlock.classList.add("listener");
    sliderBeforeButton.addEventListener("click", buttonBefore);
    sliderAfterButton.addEventListener("click", buttonAfter);
    imgAfter.style.display = "none";
  }
});

window.onunload = () => {
  menuButton.removeEventListener("click", showMenu);
};
