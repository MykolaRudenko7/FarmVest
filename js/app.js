// import burger from "modules/burger";
// import changeTheme from "modules/changeTheme";
// import dynamicButton from "modules/dynamicButton";
// import forms from "modules/forms";
// import headerScroll from "modules/headerScroll";
// import slider from "modules/slider";
// import spoilers from "modules/spoilers";

// window.addEventListener("DOMContentLoaded", function (e) {
//   "use strict";
//   burger();
// //   changeTheme();
// //   dynamicButton();
// //   forms();
// //   headerScroll();
// //   slider();
// //   spoilers();
// });

// (() => {
//     "use strict";
//     function isWebp() {
//         function testWebP(callback) {
//             let webP = new Image;
//             webP.onload = webP.onerror = function() {
//                 callback(2 == webP.height);
//             };
//             webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//         }
//         testWebP((function(support) {
//             let className = true === support ? "webp" : "no-webp";
//             document.documentElement.classList.add(className);
//         }));
//     }
//     const header = document.querySelector(".header");
//     header.addEventListener("click", (e => {
//         let target = e.target;
//         if (target.closest(".icon-menu")) header.classList.toggle("menu-open");
//     }));
//     let scrollPos = window.scrollY;
//     const scrollStart = 5;
//     const addScrollClass = () => header.classList.add("header-scroll");
//     const deleteScrollClass = () => header.classList.remove("header-scroll");
//     window.addEventListener("scroll", (function() {
//         scrollPos = window.scrollY;
//         if (scrollPos > scrollStart) addScrollClass();
//         if (scrollPos < scrollStart) deleteScrollClass();
//     }));
//     const spoilers = document.querySelectorAll(".spollers-pathway__title");
//     for (const item of spoilers) item.addEventListener("click", (function() {
//         if (this.parentElement.classList.contains("_spoiler-active")) this.parentElement.classList.remove("_spoiler-active"); else {
//             for (const el of spoilers) el.parentElement.classList.remove("_spoiler-active");
//             this.parentElement.classList.add("_spoiler-active");
//         }
//     }));
//     spoilers.forEach((el => {
//         el.addEventListener("click", (() => {
//             let content = el.nextElementSibling;
//             if (content.style.maxHeight) document.querySelectorAll(".spollers-pathway__body").forEach((el => el.style.maxHeight = null)); else {
//                 document.querySelectorAll(".spollers-pathway__body").forEach((el => el.style.maxHeight = null));
//                 content.style.maxHeight = content.scrollHeight + 40 + "px";
//             }
//         }));
//     }));
//     const headerMenuBody = document.querySelector(".menu__body");
//     const headerActions = document.querySelector(".header__actions");
//     const buttons = document.querySelectorAll(".header__button");
//     const buttonGrean = buttons[1];
//     const viewportValueWidth = document.documentElement.clientWidth;
//     if (viewportValueWidth < 767.98) if (!buttonGrean.classList.contains("moved")) {
//         headerMenuBody.append(buttonGrean);
//         buttonGrean.classList.add("moved");
//     }
//     if (viewportValueWidth > 767.98) if (buttonGrean.classList.contains("moved")) {
//         buttonGrean.classList.remove("moved");
//         headerActions.insertBefore(buttonGrean, headerActions.children[1]);
//     }
//     window.addEventListener("resize", (function(e) {
//         const viewportValueWidth = document.documentElement.clientWidth;
//         if (viewportValueWidth < 767.98) if (!buttonGrean.classList.contains("moved")) {
//             headerMenuBody.append(buttonGrean);
//             buttonGrean.classList.add("moved");
//         }
//         if (viewportValueWidth > 767.98) if (buttonGrean.classList.contains("moved")) {
//             buttonGrean.classList.remove("moved");
//             headerActions.insertBefore(buttonGrean, headerActions.children[1]);
//         }
//     }));
//     let changeThemeButtons = document.querySelectorAll(".changeTheme");
//     changeThemeButtons.forEach((button => {
//         button.addEventListener("click", (function() {
//             let theme = this.dataset.theme;
//             applyTheme(theme);
//         }));
//     }));
//     function applyTheme(themeName) {
//         document.querySelector('[title="theme"]').setAttribute("href", `css/theme-${themeName}.css`);
//         changeThemeButtons.forEach((button => {
//             button.style.display = "block";
//         }));
//         document.querySelector(`[data-theme="${themeName}"]`).style.display = "none";
//         localStorage.setItem("theme", themeName);
//     }
//     let activeTheme = localStorage.getItem("theme");
//     if (null === activeTheme || "light" === activeTheme) applyTheme("light"); else if ("dark" === activeTheme) applyTheme("dark");
//     let script_forms = document.querySelectorAll("form");
//     let formData = {};
//     const LS = localStorage;
//     for (const item of script_forms) item.Email.addEventListener("focus", (function(e) {
//         item.Email.placeholder = "";
//     }));
//     for (const item of script_forms) item.Email.addEventListener("blur", (function(e) {
//         item.Email.placeholder = "Enter your email";
//     }));
//     script_forms.forEach((el => {
//         el.addEventListener("submit", (function(e) {
//             if (emailTest(el.Email)) event.preventDefault();
//         }));
//     }));
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
//     for (const item of script_forms) item.addEventListener("input", (e => {
//         formData[e.target.name] = event.target.value;
//         LS.setItem("formData", JSON.stringify(formData));
//     }));
//     if (LS.getItem("formData")) {
//         formData = JSON.parse(LS.getItem("formData"));
//         for (let key in formData) script_forms.forEach((form => {
//             form.elements[key].value = formData[key];
//         }));
//     }
//     const prev = document.querySelector(".btn-prev");
//     const next = document.querySelector(".btn-next");
//     const slides = document.querySelectorAll(".slider__item");
//     console.log(slides);
//     const dots = document.querySelectorAll(".slider-dots__item");
//     console.log(dots);
//     let index = 0;
//     const activeSlide = n => {
//         for (let slide of slides) slide.classList.remove("active");
//         slides[n].classList.add("active");
//     };
//     const activeDots = n => {
//         for (let dot of dots) dot.classList.remove("active");
//         dots[n].classList.add("active");
//     };
//     const prepareCurrentSlide = ind => {
//         activeSlide(ind);
//         activeDots(ind);
//     };
//     const nextSlide = () => {
//         if (index == slides.length - 1) {
//             index = 0;
//             prepareCurrentSlide(index);
//         } else {
//             index++;
//             prepareCurrentSlide(index);
//         }
//     };
//     const prevSlide = () => {
//         if (0 == index) {
//             index = slides.length - 1;
//             prepareCurrentSlide(index);
//         } else {
//             index--;
//             prepareCurrentSlide(index);
//         }
//     };
//     next.addEventListener("click", nextSlide);
//     prev.addEventListener("click", prevSlide);
//     dots.forEach(((item, indexDot) => {
//         item.addEventListener("click", (() => {
//             index = indexDot;
//             prepareCurrentSlide(index);
//         }));
//     }));
//     setInterval(nextSlide, 10e3);
//     window["FLS"] = true;
//     isWebp();
// })();
