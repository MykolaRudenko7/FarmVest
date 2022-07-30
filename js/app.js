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



// ----------------------------------------   BURGER


   const header = document.querySelector(".header");
   header.addEventListener("click", (e => {
      let target = e.target;
      if (target.closest(".icon-menu")) header.classList.toggle("menu-open");
   }));


// ----------------------------------------   SCROLL CLASS 


   let scrollPos = window.scrollY;
   const scrollStart = 5;
   const addScrollClass = () => header.classList.add("header-scroll");
   const deleteScrollClass = () => header.classList.remove("header-scroll");
   window.addEventListener("scroll", (function() {
      scrollPos = window.scrollY;
   	if (scrollPos > scrollStart) addScrollClass();
      if (scrollPos < scrollStart) deleteScrollClass();
   }));

	if (scrollPos > scrollStart) {
		addScrollClass();
	}

// ----------------------------------------   SPOILER


   const spoilers = document.querySelectorAll(".spollers-pathway__title");
   for (const item of spoilers) 
		item.addEventListener("click", (function() {
      	if (this.parentElement.classList.contains("_spoiler-active")) this.parentElement.classList.remove("_spoiler-active"); 
			else {
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


// ----------------------------------------   BUTTON TRANSFER


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

// ----------------------------------------   THEME

// кнопки зміни теми
let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
	// до кожної кнопки подія кліку
   button.addEventListener('click', function () {
		// Поміщаю в перемінну назву теми з кнопки з атрибута data-theme=""
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
   button.style.display = 'block';
   });

	// виключаю кнопку для активноїї теми
   document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
   localStorage.setItem('theme', themeName);
}

// провіряю запис в LocalStorage для 'theme' и присвоюю його перемінній
let activeTheme = localStorage.getItem('theme');

// якщо значення не записано, або його значення 'light' приміняю світлу бему
if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
   applyTheme('light');
	// якщо 'dark' - то темну
} else if (activeTheme === 'dark') {
   applyTheme('dark');
}


// ----------------------------------------   FORMS
// всі форми (жива колекція)
// let forms = document.forms;

// або 
let forms = document.querySelectorAll('form')
// об"єкт з данними форми
let formData = {};
// куди зберігаю
const LS = localStorage;




// зникаючий плейсхолдер
for (const item of forms) {
	item.Email.addEventListener('focus', function (e) {
		item.Email.placeholder = "";
	})
}

for (const item of forms) {
	item.Email.addEventListener('blur', function (e) {
	item.Email.placeholder = "Enter your email";
	}
)}

// ------------------------

// відправка форми
forms.forEach (el => {
	el.addEventListener('submit', function (e) {
		if (emailTest(el.Email)) {
			// el.parentElement.insertAdjacentHTML(
			// 	"beforeend",
			// 	`<div class="form__error">Введіть коректний Email</div>`
			// )
			event.preventDefault()
		}
	})
})

//Функція тесту email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
};

// ----------------------------------------

// отримую данні в обєкт
for (const item of forms) {
	item.addEventListener('input', (e) => {
	// синтаксис квадратних скобокю ключ і= значення (name: value)
	formData[e.target.name] = event.target.value;
	// зберігаю в LS строкой(бо так приймає)
	LS.setItem('formData', JSON.stringify(formData));
	});
}


// востанавлюєм дані (якщо перезагр стр при введеному тексті)

if (LS.getItem('formData')) {
	// преобразовуєм назад в об"єкт
	formData = JSON.parse(LS.getItem('formData'));
	// вписую	

	for (let key in formData) {
		forms.forEach( form => {
			form.elements[key].value = formData[key];
		})
	}
}