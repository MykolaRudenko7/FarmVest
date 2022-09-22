const dynamicButton = () => {
  // блок куди буду переносить
  const headerMenuBody = document.querySelector(".menu__body");
  // блок кнопок
  const headerActions = document.querySelector(".header__actions");
  // кнопки
  const buttons = document.querySelectorAll(".header__button");
  //  кнопку яку переноситиму
  const buttonGreen = buttons[1];
  // розмір вікна наразі
  let viewportValueWidth = document.documentElement.clientWidth;

  const smallView = (view) => {
    if (view < 767.98) {
      // якщо в кнопки немає класу "moved":
      if (!buttonGreen.classList.contains("moved")) {
        //то преношу його в кінець блоку меню
        headerMenuBody.append(buttonGreen);
        buttonGreen.classList.add("moved");
      }
    }
  };

  const bigView = (view) => {
    if (view > 767.98) {
      // якщо в кнопки є клас "moved":
      if (buttonGreen.classList.contains("moved")) {
        // видаляю клас
        buttonGreen.classList.remove("moved");
        // вертаю кнопу назад
        headerActions.insertBefore(buttonGreen, headerActions.children[1]);
      }
    }
  };

  smallView(viewportValueWidth);
  bigView(viewportValueWidth);

  //                                    прослуховування
  window.addEventListener("resize", function (e) {
    // перемінна з шириною в"юпорта без полоси прокрутки
    let viewportValueWidthNow = document.documentElement.clientWidth;

    smallView(viewportValueWidthNow);
    bigView(viewportValueWidthNow);
  });
};

export default dynamicButton;
