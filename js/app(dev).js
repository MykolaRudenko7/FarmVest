



// //												BURGER



// const header = document.querySelector('.header');


// 	header.addEventListener("click", (e) => {
// 		let target = e.target;

// 		if(target.closest(".icon-menu")) {
// 			header.classList.toggle("menu-open");
// 		}
// 	});



// // 														SCROLL



// // отримую к-сть прокручених пікселів в даний момент
// let scrollPos = window.scrollY;
// // let scrollPos = window.pageYOffset;

// // отримую хедер
// // const header = document.querySelector("header");

// // к-сть проскролених пікселів, щоб додати клас 
// const scrollStart = 5;


// // ф-ція що добавляє клас 
// const addScrollClass = () => header.classList.add("header-scroll");

// // ф-ція що видаляє клас 
// const deleteScrollClass = () => header.classList.remove("header-scroll");

// // подія скролуЖ
// window.addEventListener("scroll", function () {
// 	//відслідковую подію 
// 	scrollPos = window.scrollY;
// 	// додаю і видаляю класи
// 	if(scrollPos > scrollStart) {
// 		addScrollClass();
// 	} 
// 	if(scrollPos < scrollStart) {
// 		deleteScrollClass();
// 	} 
// })



// // 												SOILER



// // отримую спойлери
// const spoilers = document.querySelectorAll(".spollers-pathway__title");


// // 1 + class

// // перебираю кнопки в колекції
// for (const item of spoilers) {
// 	// до кожної кнопки додаю подію
// 	item.addEventListener("click", function () {
// 	// якщо батько кнопки (контейнер спойлера) матиме клас 'active':
// 	if (this.parentElement.classList.contains("_spoiler-active")) {
// 		// видаляєю його (закриваю )
// 		this.parentElement.classList.remove("_spoiler-active");
	
// 		//  якщо не має
// 	} else {
// 		// перебираю кнопки
// 		for (const el of spoilers) {
// 		// видаляю клас в контейнерів кожноЇ кнопкИ
// 		el.parentElement.classList.remove("_spoiler-active");
// 		}

// 	// добавляю клас до батьківського ел при події
// 	this.parentElement.classList.add("_spoiler-active");
// 		}
// 	})
// }

// // 2 height

// spoilers.forEach((el) => {
// 	// для кожного з елементів додаю подію клік
// 	el.addEventListener('click', () => {
// 	// перемінна в якій наступний еллемент післі кнопки (текст)
// 	let content = el.nextElementSibling;

// 	// якщо в тексті є стиль maxHeight, то 
// 	if (content.style.maxHeight) {
// 	// задаю висоту кожному елементу(тексту) 0
// 	document.querySelectorAll('.spollers-pathway__body').forEach((el) => el.style.maxHeight = null)
	
// } else {
// 	// задаю висоту кожному елементу(тексту) 0
// 	document.querySelectorAll('.spollers-pathway__body').forEach((el) => el.style.maxHeight = null)
// 	// додаю до нього ширину блоку + 40 і px для css
// 	content.style.maxHeight = (content.scrollHeight + 40) + 'px';
// 	}
// 	})
// })



// // 								   	BUTTON MOVING



// // блок куди буду переносить
// const headerMenuBody = document.querySelector('.menu__body');
// // блок кнопок
// const headerActions = document.querySelector('.header__actions');
// // кнопки 
// const buttons = document.querySelectorAll('.header__button');
// //  кнопку яку переноситиму
// const buttonGrean = buttons[1];


// // розмір вікна наразі 
// const viewportValueWidth = document.documentElement.clientWidth;
// 	// якщо ширина в"юпорта менша за 768, то
// 	if (viewportValueWidth < 767.98) {
// 		// якщо в кнопки немає класу "moved":
// 		if (!buttonGrean.classList.contains("moved")) {
// 			//то преношу його в кінець блоку меню
// 			headerMenuBody.append(buttonGrean);
// 			buttonGrean.classList.add("moved");
// 		}
// 	}
// 	// якщо ширина в"юпорта більша 768, то
// 	if (viewportValueWidth > 767.98) {
// 		// якщо в кнопки є клас "moved":
// 		if (buttonGrean.classList.contains("moved")) {
// 			// видаляю клас
// 			buttonGrean.classList.remove("moved");
// 			// вертаю кнопу назад
// 			headerActions.insertBefore(buttonGrean, headerActions.children[1])
// 		}
// 	}


// //                                    прослуховування 
// 	window.addEventListener('resize', function (e) {
// 	// перемінна з шириною в"юпорта без полоси прокрутки
// 	const viewportValueWidth = document.documentElement.clientWidth;

// 	// якщо ширина в"юпорта менше 768, то
// 	if (viewportValueWidth < 767.98) {
// 		// якщо в кнопки немає класу "moved":
// 		if (!buttonGrean.classList.contains("moved")) {
// 			//то преношу його в кінець блоку меню
// 			headerMenuBody.append(buttonGrean);
// 			buttonGrean.classList.add("moved");
// 		}
// 	}

// 	// якщо ширина в"юпорта більша 768, то
// 	if (viewportValueWidth > 767.98) {
// 		// якщо в кнопки є клас "moved":
// 		if (buttonGrean.classList.contains("moved")) {
// 			// видаляю клас
// 			buttonGrean.classList.remove("moved");
// 			// вертаю кнопу назад
// 			headerActions.insertBefore(buttonGrean, headerActions.children[1])
// 		}
// 	}
// })
// // 



// //                                        THEME



// //                                   кнопки зміни теми
// let changeThemeButtons = document.querySelectorAll('.changeTheme');

// changeThemeButtons.forEach(button => {
// 	// до кожної кнопки подія кліку
//    button.addEventListener('click', function () {
// 		// Поміщаю в перемінну назву теми з кнопки з атрибута data-theme=""
//       let theme = this.dataset.theme;

// 		// визов функції яка міняє і передаєм в не назву(з атр кнопки)
//       applyTheme(theme);
//    });
// });


// function applyTheme(themeName) {
// 	//в пустий link, де є арибут [title="theme"] додаєм новий атрибут і в нього поміщаєм значення (шлях)
// 	document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
	
// 	//  для кожної кнопки зміни події додаем стиль дисплею (показую кнопу)
//    changeThemeButtons.forEach(button => {
//    button.style.display = 'block';
//    });

// 	// виключаю кнопку для активноїї теми
//    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
//    localStorage.setItem('theme', themeName);
// }

// // провіряю запис в LocalStorage для 'theme' и присвоюю його перемінній
// let activeTheme = localStorage.getItem('theme');

// // якщо значення не записано, або його значення 'light' приміняю світлу бему
// if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
//    applyTheme('light');
// 	// якщо 'dark' - то темну
// } else if (activeTheme === 'dark') {
//    applyTheme('dark');
// }



// //                                         FORMS



// // всі форми (жива колекція)
// // let forms = document.forms;

// // або 
// let forms = document.querySelectorAll('form')
// // об"єкт з данними форми
// let formData = {};
// // куди зберігаю
// const LS = localStorage;




// //                                 зникаючий плейсхолдер
// for (const item of forms) {
// 	item.Email.addEventListener('focus', function (e) {
// 		item.Email.placeholder = "";
// 	})
// }

// for (const item of forms) {
// 	item.Email.addEventListener('blur', function (e) {
// 	item.Email.placeholder = "Enter your email";
// 	}
// )}

// // ------------------------

// //                                    відправка форми
// forms.forEach (el => {
// 	el.addEventListener('submit', function (e) {
// 		if (emailTest(el.Email)) {
// 			// el.parentElement.insertAdjacentHTML(
// 			// 	"beforeend",
// 			// 	`<div class="form__error">Введіть коректний Email</div>`
// 			// )
// 			event.preventDefault()
// 		}
// 	})
// })

// //                                  Функція тесту email
// function emailTest(input) {
// 	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// };

// //                                отримую данні в обєкт
// for (const item of forms) {
// 	item.addEventListener('input', (e) => {
// 	// синтаксис квадратних скобокю ключ і= значення (name: value)
// 	formData[e.target.name] = event.target.value;
// 	// зберігаю в LS строкой(бо так приймає)
// 	LS.setItem('formData', JSON.stringify(formData));
// 	});
// }


// //               востанавлюєм дані (якщо перезагр стр при введеному тексті)
// if (LS.getItem('formData')) {
// 	// преобразовуєм назад в об"єкт
// 	formData = JSON.parse(LS.getItem('formData'));
// 	// вписую	

// 	for (let key in formData) {
// 		forms.forEach( form => {
// 			form.elements[key].value = formData[key];
// 		})
// 	}
// }




// //                                       SLIDER



// // кнопки
// const prev = document.querySelector('.btn-prev');
// const next = document.querySelector('.btn-next');

// // слайди
// const slides = document.querySelectorAll('.slider__item');
// console.log(slides);
// // dots
// const dots = document.querySelectorAll('.slider-dots__item');
// console.log(dots);

// // перемінна активного слайду
// let index = 0;



// //                            ф-ція що ставить активн слайд
// const activeSlide = n => {
// 	// циклом убираєм у слайдів клас "active"
// 	for (let slide of slides) {
// 		slide.classList.remove('active');
// 	}
// 	// але до теперішнього добавляєм
// 	slides[n].classList.add('active');
// }

// //                             ф-ція що ставить активну точку
// const activeDots = n => {
// 	// циклом убираєм у dots клас "active"
// 	for (let dot of dots) {
// 		dot.classList.remove('active');
// 	}
// 	// але до теперішнього добавляєм
// 	dots[n].classList.add('active');
// }

// //                                           обща 
// const prepareCurrentSlide = ind => {
// 	activeSlide(ind);
// 	activeDots(ind);
// }




// //                                        ф-ця + slide
// const nextSlide = () => {
// 	// провірить, якщо наш слайд останній (-1 бо з 0)
// 	if(index == slides.length -1) {
// 		// то пререходим на 0(1й слайд)
// 		index = 0;
// 		prepareCurrentSlide(index)
// 	} else {
// 		// якщо не так, то збільш на 1
// 		index++
// 		prepareCurrentSlide(index)
// 	}
// }

// //                                        ф-ця - slide
// const prevSlide = () => {
// 	// провірить, якщо наш слайд перший
// 	if(index == 0) {
// 		// то пререходим 1ший
// 		index = slides.length -1
// 		prepareCurrentSlide(index)
// 	} else {
// 		// якщо не так, то збільш на 1
// 		index--;		
// 		prepareCurrentSlide(index)
// 	}
// }

// //                                            при події 
// next.addEventListener('click', nextSlide)
// prev.addEventListener('click', prevSlide)



// //                              при клікові на кнопку одкриваю картинку
// dots.forEach( (item, indexDot) => {
// 	item.addEventListener('click', () => {
// 		index = indexDot;
// 		prepareCurrentSlide(index)
// 	})
// })


// setInterval(nextSlide, 5000)