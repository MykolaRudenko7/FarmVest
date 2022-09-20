const dynamicButton = () => {
  // // 								   	BUTTON MOVING
  // // блок куди буду переносить
  // const headerMenuBody = document.querySelector(".menu__body");
  // // блок кнопок
  // const headerActions = document.querySelector(".header__actions");
  // // кнопки
  // const buttons = document.querySelectorAll(".header__button");
  // //  кнопку яку переноситиму
  // const buttonGrean = buttons[1];
  // // розмір вікна наразі
  // const viewportValueWidth = document.documentElement.clientWidth;
  // // якщо ширина в"юпорта менша за 768, то
  // if (viewportValueWidth < 767.98) {
  //   // якщо в кнопки немає класу "moved":
  //   if (!buttonGrean.classList.contains("moved")) {
  //     //то преношу його в кінець блоку меню
  //     headerMenuBody.append(buttonGrean);
  //     buttonGrean.classList.add("moved");
  //   }
  // }
  // // якщо ширина в"юпорта більша 768, то
  // if (viewportValueWidth > 767.98) {
  //   // якщо в кнопки є клас "moved":
  //   if (buttonGrean.classList.contains("moved")) {
  //     // видаляю клас
  //     buttonGrean.classList.remove("moved");
  //     // вертаю кнопу назад
  //     headerActions.insertBefore(buttonGrean, headerActions.children[1]);
  //   }
  // }
  // //                                    прослуховування
  // window.addEventListener("resize", function (e) {
  //   // перемінна з шириною в"юпорта без полоси прокрутки
  //   const viewportValueWidth = document.documentElement.clientWidth;
  //   // якщо ширина в"юпорта менше 768, то
  //   if (viewportValueWidth < 767.98) {
  //     // якщо в кнопки немає класу "moved":
  //     if (!buttonGrean.classList.contains("moved")) {
  //       //то преношу його в кінець блоку меню
  //       headerMenuBody.append(buttonGrean);
  //       buttonGrean.classList.add("moved");
  //     }
  //   }
  //   // якщо ширина в"юпорта більша 768, то
  //   if (viewportValueWidth > 767.98) {
  //     // якщо в кнопки є клас "moved":
  //     if (buttonGrean.classList.contains("moved")) {
  //       // видаляю клас
  //       buttonGrean.classList.remove("moved");
  //       // вертаю кнопу назад
  //       headerActions.insertBefore(buttonGrean, headerActions.children[1]);
  //     }
  //   }
  // });
};
export default dynamicButton;
