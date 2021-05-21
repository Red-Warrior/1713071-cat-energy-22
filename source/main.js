function showMenu() {
  menuMain.classList.toggle("main-nav--close-menu");
  menuImage.classList.toggle("page-header--menu-icon");
}

function calculateHeight() {
  let winWidth = document.documentElement.clientWidth;
  let imageHeight = winWidth >= 768 ? 620 : (winWidth * 73) / 100;
  let imageCustom = document.querySelector(".example__slide-wrapper");
  imageCustom.style.height = imageHeight + "px";
}

function resolutionSettings() {
  calculateHeight();

  function imagesClipping() {
    imgBefore.style.right = "50%";
    imgAfter.style.left = "50%";
    toggle.style.left = "50%";
  }

  if (document.documentElement.clientWidth < 768) {
    sliderBlock.classList.add("mobile");

    if (sliderBlock.classList.contains("tablet") && sliderBlock.classList.contains("mobile")) {
      sliderBlock.classList.remove("tablet");
      imgBefore.style.right = "0";
      imgAfter.style.left = "100%";
      toggle.style.left = "0";
      toggle.style.right = "auto";
    }
  }

  if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1440) {
    sliderBlock.classList.add("tablet");

    if (sliderBlock.classList.contains("tablet") && sliderBlock.classList.contains("mobile")) {
      sliderBlock.classList.remove("mobile");
      imagesClipping();
    } else if (sliderBlock.classList.contains("tablet") && sliderBlock.classList.contains("desktop")) {
      sliderBlock.classList.remove("desktop");
      imagesClipping();
    }
  }
  if (document.documentElement.clientWidth >= 1440) {
    sliderBlock.classList.add("desktop");

    if (sliderBlock.classList.contains("tablet") && sliderBlock.classList.contains("desktop")) {
      sliderBlock.classList.remove("tablet");
      imagesClipping();
    }
  }
}

function buttonBefore() {
  imgBefore.style.right = "0%";
  imgAfter.style.left = "100%";
  toggle.style.left = "0";
  toggle.style.right = "auto";
}

function buttonAfter() {
  imgBefore.style.right = "100%";
  imgAfter.style.left = "0%";
  toggle.style.left = "auto";
  toggle.style.right = "0";
}

function pointerdown(event) {
  if (event.target.closest(".example__toggle")) {
    slider.classList.add("slider_dragging");
    document.body.style.userSelect = "none";

    let pointermove = (event) => {
      event.preventDefault();
      sliderToggle.ondragstart = () => false;
      sliderToggle.pointermove = () => false;
      sliderToggle.pointerdown = () => false;

      let left = (event.clientX - slider.getBoundingClientRect().left) / slider.offsetWidth;
      left < 0 ? (left = 0) : left > 1 ? (left = 1) : left;

      let leftPercent = Math.round(left * 100);
      sliderToggle.style.left = `${leftPercent}%`;

      imageBefore.style.right = 100 - leftPercent + "%";
      imageAfter.style.left = 100 - (100 - leftPercent) + "%";
    };

    let pointerup = () => {
      slider.classList.remove("slider_dragging");
      document.body.style.userSelect = "auto";

      document.removeEventListener("pointermove", pointermove);
      document.removeEventListener("pointerup", pointerup);
    };

    document.addEventListener("pointermove", pointermove);
    document.addEventListener("pointerup", pointerup);
  }
}

//------------------------------------------------------------
if (document.querySelector(".index__page")) {
  calculateHeight();
  window.addEventListener("resize", resolutionSettings);
}

//Replacing the map______________________________________________
document.querySelector(".location__info").classList.remove("location__info--no-js");
document.querySelector(".location__static-map").classList.remove("location__static-map--no-js");
document.querySelector(".location__map").classList.remove("location__map--no-js");

//Order of items on the catalog page__________________________
document.querySelectorAll(".catalog__item-heading").forEach((item) => (item.tabIndex = "-1"));

//Drop-down menu______________________________________________
let menuMain = document.querySelector(".main-nav");
let menuButton = document.querySelector(".page-header__toggle");
let menuImage = document.querySelector(".page-header__image");

if (menuButton.classList.contains("page-header--hidden")) {
  menuButton.classList.remove("page-header--hidden");
  menuMain.classList.add("main-nav--close-menu");
}
menuButton.addEventListener("click", showMenu);

//Slider buttons______________________________________________
let sliderBlock = document.querySelector(".example__control-block");
let sliderBeforeButton = document.querySelector(".example__button-before");
let sliderAfterButton = document.querySelector(".example__button-after");
let imgBefore = document.querySelector(".example__before");
let imgAfter = document.querySelector(".example__after");
let toggle = document.querySelector(".example__toggle");

if (sliderBeforeButton && sliderAfterButton) {
  sliderBeforeButton.addEventListener("click", buttonBefore);
  sliderAfterButton.addEventListener("click", buttonAfter);
}

//Slider, control (tablet, desktop)---------------------------
let slider = document.querySelector(".example__wrapper");
let sliderToggle = document.querySelector(".example__toggle");

document.addEventListener("pointerdown", (event) => pointerdown(event));

let imageBefore = document.querySelector(".example__before");
let imageAfter = document.querySelector(".example__after");

//Removing handlers___________________________________________
window.onunload = () => {
  menuButton.removeEventListener("click", showMenu);

  if (document.querySelector(".index__page")) {
    window.addEventListener("resize", resolutionSettings);
    sliderBeforeButton.addEventListener("click", buttonBefore);
    sliderAfterButton.addEventListener("click", buttonAfter);
  }
};
