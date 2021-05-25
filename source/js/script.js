function showMenu() {
  menuMain.classList.toggle("main-nav--close-menu");
  menuImage.classList.toggle("page-header--menu-icon");
}

function calculateHeight() {
  if (document.querySelector(".slider__wrapper")) {
    let winWidth = document.documentElement.clientWidth;
    let imageHeight = winWidth >= 768 ? 620 : (winWidth * 73) / 100;
    let imageCustom = document.querySelector(".slider__wrapper");
    imageCustom.style.height = imageHeight + "px";
  }
}

function resolutionSettings() {
  calculateHeight();

  function imagesClipping() {
    imgBefore.style.right = "50%";
    imgAfter.style.left = "50%";
    sliderToggle.style.left = "50%";
  }

  if (document.documentElement.clientWidth < 768) {
    slider.classList.add("slider--mobile");

    if (slider.classList.contains("slider--tablet") && slider.classList.contains("slider--mobile")) {
      slider.classList.remove("slider--tablet");
      imgBefore.style.right = "0";
      imgAfter.style.left = "100%";
      sliderToggle.style.left = "0";
      sliderToggle.style.right = "auto";
    }
  }

  if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1440) {
    slider.classList.add("slider--tablet");

    if (slider.classList.contains("slider--tablet") && slider.classList.contains("slider--mobile")) {
      slider.classList.remove("slider--mobile");
      imagesClipping();
    } else if (slider.classList.contains("slider--tablet") && slider.classList.contains("slider--desktop")) {
      slider.classList.remove("slider--desktop");
      imagesClipping();
    }
  }
  if (document.documentElement.clientWidth >= 1440) {
    slider.classList.add("slider--desktop");

    if (slider.classList.contains("slider--tablet") && slider.classList.contains("slider--desktop")) {
      slider.classList.remove("slider--tablet");
      imagesClipping();
    }
  }
}

function buttonBefore() {
  imgBefore.style.right = "0%";
  imgAfter.style.left = "100%";
  sliderToggle.style.left = "0";
  sliderToggle.style.right = "auto";
}

function buttonAfter() {
  imgBefore.style.right = "100%";
  imgAfter.style.left = "0%";
  sliderToggle.style.left = "auto";
  sliderToggle.style.right = "0";
}

function pointerdown(event) {
  if (event.target.closest(".slider__toggle")) {
    sliderControl.classList.add("slider_dragging");
    document.body.style.userSelect = "none";

    let pointermove = (event) => {
      event.preventDefault();
      sliderToggle.ondragstart = () => false;
      sliderToggle.pointermove = () => false;
      sliderToggle.pointerdown = () => false;

      let left = (event.clientX - sliderControl.getBoundingClientRect().left) / sliderControl.offsetWidth;
      left < 0 ? (left = 0) : left > 1 ? (left = 1) : left;

      let leftPercent = Math.round(left * 100);
      sliderToggle.style.left = `${leftPercent}%`;

      imgBefore.style.right = 100 - leftPercent + "%";
      imgAfter.style.left = 100 - (100 - leftPercent) + "%";
    };

    let pointerup = () => {
      sliderControl.classList.remove("slider_dragging");
      document.body.style.userSelect = "auto";

      document.removeEventListener("pointermove", pointermove);
      document.removeEventListener("pointerup", pointerup);
    };

    document.addEventListener("pointermove", pointermove);
    document.addEventListener("pointerup", pointerup);
  }
}

//------------------------------------------------------------
if (document.querySelector(".page--index")) {
  calculateHeight();
  window.addEventListener("resize", resolutionSettings);
}

//Replacing the map___________________________________________
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

//Slider______________________________________________________
let slider = document.querySelector(".slider");
let sliderControl = document.querySelector(".slider__control-wrapper");
let imgBefore = document.querySelector(".slider__before");
let imgAfter = document.querySelector(".slider__after");
let sliderToggle = document.querySelector(".slider__toggle");
let sliderBeforeButton = document.querySelector(".slider__button-before");
let sliderAfterButton = document.querySelector(".slider__button-after");

if (document.querySelector(".page--index")) {
  document.addEventListener("pointerdown", (event) => pointerdown(event));
  sliderBeforeButton.addEventListener("click", buttonBefore);
  sliderAfterButton.addEventListener("click", buttonAfter);
}

//Removing handlers___________________________________________
window.onunload = () => {
  if (document.querySelector(".page--index")) {
    window.removeEventListener("resize", resolutionSettings);
    document.removeEventListener("pointerdown", pointerdown);
    menuButton.removeEventListener("click", showMenu);
    sliderBeforeButton.removeEventListener("click", buttonBefore);
    sliderAfterButton.removeEventListener("click", buttonAfter);
  }
};
