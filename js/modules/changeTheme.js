const changeTheme = (themeBtn) => {
  // перемінна з кнопками зміни теми
  let changeThemeButtons = document.querySelectorAll(themeBtn);

  // до кожної кнопки подія кліку
  changeThemeButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Поміщаю в перемінну назву теми з кнопки з атрибута data-theme=""
      let theme = this.dataset.theme;
      // визов функції яка міняє і передаєм в неї назву(з атр кнопки)
      applyTheme(theme);
    });
  });

  //   ф-ція встановлює тему
  function applyTheme(themeName) {
    //в пустий link, де є арибут [title="theme"] додаєм новий атрибут і в нього поміщаєм значення (шлях)
    document
      .querySelector('[title="theme"]')
      .setAttribute("href", `css/theme-${themeName}.css`);
    //  для кожної кнопки зміни події додаем стиль дисплею (показую кнопу)
    changeThemeButtons.forEach((button) => {
      button.style.display = "block";
    });
    // виключаю кнопку для активноїї теми
    document.querySelector(`[data-theme="${themeName}"]`).style.display =
      "none";
    // записую в пам"ять тему, що була вибрана
    localStorage.setItem("theme", themeName);
  }

  // провіряю запис в LocalStorage для 'theme' и присвоюю його перемінній
  let activeTheme = localStorage.getItem("theme");
  // якщо значення не записано, або його значення 'light' приміняю світлу тему
  if (activeTheme === null || activeTheme === "light") {
    // Если значение не записано, або воно рівне 'light' - приміняю светлу тему
    applyTheme("light");
    // якщо 'dark' - то темну
  } else if (activeTheme === "dark") {
    applyTheme("dark");
  }
};

export default changeTheme;
