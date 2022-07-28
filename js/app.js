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