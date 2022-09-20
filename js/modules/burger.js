const burger = () => {
  function forBurger(headerSelector, iconBurger, activeClass) {
    const header = document.querySelector(headerSelector);

    header.addEventListener("click", (e) => {
      let target = e.target;
      if (target.closest(iconBurger)) {
        header.classList.toggle(activeClass);
      }
    });
  }

  forBurger(".header", ".icon-menu", "menu-open");
};

export default burger;
