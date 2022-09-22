const headerScroll = () => {
  // отримую к-сть прокручених пікселів в даний момент
  let scrollPos = window.scrollY;
  // let scrollPos = window.pageYOffset;
  // отримую хедер
  const header = document.querySelector("header");
  // к-сть проскролених пікселів, щоб додати клас
  const scrollStart = 5;

  // ф-ція що добавляє клас
  const addScrollClass = (scrollNow, scrollAdd) => {
    if (scrollNow > scrollAdd) {
      header.classList.add("header-scroll");
    }
  };

  // ф-ція що видаляє клас
  const deleteScrollClass = (scrollNow, scrollAdd) => {
    if (scrollNow < scrollAdd) {
      header.classList.remove("header-scroll");
    }
  };

  addScrollClass(scrollPos, scrollStart);
  deleteScrollClass(scrollPos, scrollStart);

  // подія скролу
  window.addEventListener("scroll", function () {
    scrollPos = window.scrollY;
    addScrollClass(scrollPos, scrollStart);
    deleteScrollClass(scrollPos, scrollStart);
  });
};

export default headerScroll;
