// ! HTML ELEMENTS

const slidesContainerEl = document.getElementById("slides-container");
const arrowTopEL = document.querySelector(".arrow-top");
const arrowBotEL = document.querySelector(".arrow-bot");
const dotsContainerEl = document.querySelector(".carosel-dots");

// ! ON LOAD
// * definisco l'arrey delle slides
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// * definisco la slide mostrata
let slideIndex = 0;

// * genero la slide
let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];

  let activeClass = i == slideIndex ? "active" : "";
  /* if (i == 0) {
    activeClass = "active";
  } else {
    activeClass = "";
  } */

  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}"/>`;
}

slidesContainerEl.innerHTML = slidesHtml;

// * genero i dots
let dotsHtml = "";
for (let i = 0; i < slides.length; i++) {
  const activeClass = i == slideIndex ? "active" : "";
  dotsHtml += `<div class="dot ${activeClass}"></div>`;
}
dotsContainerEl.innerHTML = dotsHtml;

// ! SUL CLICK DI ARROW-NEXT

arrowTopEL.addEventListener("click", function () {
  // * recupero tutte le slides
  const allSlides = document.getElementsByClassName("slide");
  const allDots = document.getElementsByClassName("dot");

  const oldDot = allDots[slideIndex];
  oldDot.classList.remove("active");

  // * elimino la classe active dalla slide attualmente mostrata
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");

  // * incremento slideIndex (indice della slide mostrata)
  if (slideIndex >= allSlides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  // * mostro la nuova slide

  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");

  const newDot = allDots[slideIndex];
  newDot.classList.add("active");
});

// ! Scorrimento automatico foto

let automaticSlider = setInterval(function () {
  arrowTopEL.click();
}, 3000);

slidesContainerEl.addEventListener("mouseover", function () {
  clearInterval(automaticSlider);
});

slidesContainerEl.addEventListener("mouseout", function () {
  automaticSlider = setInterval(function () {
    arrowTopEL.click();
  }, 3000);
});

// ! SUL CLICK DI ARROW-PREV
arrowBotEL.addEventListener("click", function () {
  // * recupero tutte le slides
  const allSlides = document.getElementsByClassName("slide");
  const allDots = document.getElementsByClassName("dot");

  // * elimino la classe active dalla slide attualmente mostrata
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");

  const oldDot = allDots[slideIndex];
  oldDot.classList.remove("active");

  // * decremento slideIndex (indice della slide mostrata)
  if (slideIndex <= 0) {
    slideIndex = allSlides.length - 1;
  } else {
    slideIndex--;
  }

  // * mostro la nuova slide

  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");

  const newDot = allDots[slideIndex];
  newDot.classList.add("active");
});
