const sliders = (slideSelector, dir, prev, next) => {
  let slideIndex = 1;
  let paused; // Нужно ли остановить автоматическое переключение слайдов
  const items = document.querySelectorAll(slideSelector);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    // slideIndex = n > items.length ? 1 : n < 1 ? items.length;

    items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    items[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);

  function changeSlide(n) {
    showSlides((slideIndex += n));
  }

  // Смена слайдов при нажатии на кнопки-стрелки
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      changeSlide(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      changeSlide(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}

  // Анимационная смена слайдов
  function activateAnimation() {
    if (dir === "vertical") {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 8000);
    } else {
      paused = setInterval(() => {
        changeSlide(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 8000);
    }
  }
  // activateAnimation();

  // Останавливаем анимацию при наведении мыши
  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

export default sliders;
