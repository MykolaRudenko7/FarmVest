const slider = () => {
  // кнопки
  const prev = document.querySelector(".btn-prev");
  const next = document.querySelector(".btn-next");
  // слайди
  const slides = document.querySelectorAll(".slider__item");
  // dots
  const dots = document.querySelectorAll(".slider-dots__item");
  // перемінна активного слайду
  let index = 0;
  //                            ф-ція що ставить активн слайд
  const activeSlide = (n) => {
    // циклом убираєм у слайдів клас "active"
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    // але до теперішнього добавляєм
    slides[n].classList.add("active");
  };
  //                             ф-ція що ставить активну точку
  const activeDots = (n) => {
    // циклом убираєм у dots клас "active"
    for (let dot of dots) {
      dot.classList.remove("active");
    }
    // але до теперішнього добавляєм
    dots[n].classList.add("active");
  };
  //                                           обща
  const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDots(ind);
  };
  //                                        ф-ця + slide
  const nextSlide = () => {
    // провірить, якщо наш слайд останній (-1 бо з 0)
    if (index == slides.length - 1) {
      // то пререходим на 0(1й слайд)
      index = 0;
      prepareCurrentSlide(index);
    } else {
      // якщо не так, то збільш на 1
      index++;
      prepareCurrentSlide(index);
    }
  };
  //                                        ф-ця - slide
  const prevSlide = () => {
    // провірить, якщо наш слайд перший
    if (index == 0) {
      // то пререходим 1ший
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      // якщо не так, то збільш на 1
      index--;
      prepareCurrentSlide(index);
    }
  };
  //                                            при події
  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
  //                              при клікові на кнопку одкриваю картинку
  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });
};
export default slider;
