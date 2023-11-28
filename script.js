const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    currentSlide = index;
    moveSlider();
  });
});

function moveSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
