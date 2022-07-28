(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }


    const header = document.querySelector(".header");
    header.addEventListener("click", (e => {
        let target = e.target;
        if (target.closest(".icon-menu")) header.classList.toggle("menu-open");
    }));
    let scrollPos = window.scrollY;
    const scrollStart = 5;
    const addScrollClass = () => header.classList.add("header-scroll");
    const deleteScrollClass = () => header.classList.remove("header-scroll");
    window.addEventListener("scroll", (function() {
        scrollPos = window.scrollY;
        if (scrollPos > scrollStart) addScrollClass();
        if (scrollPos < scrollStart) deleteScrollClass();
    }));
    const spoilers = document.querySelectorAll(".spollers-pathway__title");
    for (const item of spoilers) item.addEventListener("click", (function() {
        if (this.parentElement.classList.contains("_spoiler-active")) this.parentElement.classList.remove("_spoiler-active"); else {
            for (const el of spoilers) el.parentElement.classList.remove("_spoiler-active");
            this.parentElement.classList.add("_spoiler-active");
        }
    }));
    spoilers.forEach((el => {
        el.addEventListener("click", (() => {
            let content = el.nextElementSibling;
            if (content.style.maxHeight) document.querySelectorAll(".spollers-pathway__body").forEach((el => el.style.maxHeight = null)); else {
                document.querySelectorAll(".spollers-pathway__body").forEach((el => el.style.maxHeight = null));
                content.style.maxHeight = content.scrollHeight + 40 + "px";
            }
        }));
    }));
    const headerMenuBody = document.querySelector(".menu__body");
    const headerActions = document.querySelector(".header__actions");
    const buttons = document.querySelectorAll(".header__button");
    const buttonGrean = buttons[1];
    const viewportValueWidth = document.documentElement.clientWidth;
    if (viewportValueWidth < 767.98) if (!buttonGrean.classList.contains("moved")) {
        headerMenuBody.append(buttonGrean);
        buttonGrean.classList.add("moved");
    }
    if (viewportValueWidth > 767.98) if (buttonGrean.classList.contains("moved")) {
        buttonGrean.classList.remove("moved");
        headerActions.insertBefore(buttonGrean, headerActions.children[1]);
    }
    window.addEventListener("resize", (function(e) {
        const viewportValueWidth = document.documentElement.clientWidth;
        if (viewportValueWidth < 767.98) if (!buttonGrean.classList.contains("moved")) {
            headerMenuBody.append(buttonGrean);
            buttonGrean.classList.add("moved");
        }
        if (viewportValueWidth > 767.98) if (buttonGrean.classList.contains("moved")) {
            buttonGrean.classList.remove("moved");
            headerActions.insertBefore(buttonGrean, headerActions.children[1]);
        }
    }));
    window["FLS"] = true;
    isWebp();
})();

// ------------------------------------------------------------------------


// кнопки зміни теми
let changeThemeButtons = document.querySelectorAll('.changeTheme');

// до кожної кнопки подія кліку
changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
		// Поміщаю в перемінну назву теми з кнопки з атрибута data-theme
        let theme = this.dataset.theme; 
		  // визов функції яка міняє і передаєм в не назву(з атр кнопки)
        applyTheme(theme); 
    });
});

function applyTheme(themeName) {
	//в пустий link, де є арибут [title="theme"] додаєм новий атрибут і в нього поміщаєм значення (шлях)
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`); 
	//  для кожної кнопки зміни події додаем стиль дисплею (показую кнопу)
	 changeThemeButtons.forEach(button => {
        button.style.display = 'block'; // Показываем все кнопки смены темы
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
    applyTheme('dark');
}