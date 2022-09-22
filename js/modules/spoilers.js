const spoilers = (spoiler) => {
  const spoilers = document.querySelectorAll(spoiler);

  // 1 + class
  // перебираю кнопки в колекції
  for (const spoiler of spoilers) {
    // до кожної кнопки додаю подію
    spoiler.addEventListener("click", function () {
      // якщо батько кнопки (контейнер спойлера) матиме клас 'active':
      if (this.parentElement.classList.contains("_spoiler-active")) {
        // видаляєю його (закриваю )
        this.parentElement.classList.remove("_spoiler-active");
        //  якщо не має
      } else {
        // перебираю кнопки
        for (const el of spoilers) {
          // видаляю клас в контейнерів кожноЇ кнопкИ
          el.parentElement.classList.remove("_spoiler-active");
        }
        // добавляю клас до батьківського ел при події
        this.parentElement.classList.add("_spoiler-active");
      }
    });
  }

  // 2 height - варіант 2
  spoilers.forEach((el) => {
    // для кожного з елементів додаю подію клік
    el.addEventListener("click", () => {
      // перемінна в якій наступний еллемент післі кнопки (текст)
      let content = el.nextElementSibling;
      // якщо в тексті є стиль maxHeight, то
      if (content.style.maxHeight) {
        // задаю висоту кожному елементу(тексту) 0
        document
          .querySelectorAll(".spollers-pathway__body")
          .forEach((el) => (el.style.maxHeight = null));
      } else {
        // задаю висоту кожному елементу(тексту) 0
        document
          .querySelectorAll(".spollers-pathway__body")
          .forEach((el) => (el.style.maxHeight = null));
        // додаю до нього ширину блоку + 40 і px для css
        content.style.maxHeight = content.scrollHeight + 40 + "px";
      }
    });
  });
};
export default spoilers;
