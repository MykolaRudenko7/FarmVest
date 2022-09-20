const forms = () => {
  // //                                         FORMS
  // // всі форми (жива колекція)
  // // let forms = document.forms;
  // // або
  // let forms = document.querySelectorAll("form");
  // // об"єкт з данними форми
  // let formData = {};
  // // куди зберігаю
  // const LS = localStorage;
  // //                                 зникаючий плейсхолдер
  // for (const item of forms) {
  //   item.Email.addEventListener("focus", function (e) {
  //     item.Email.placeholder = "";
  //   });
  // }
  // for (const item of forms) {
  //   item.Email.addEventListener("blur", function (e) {
  //     item.Email.placeholder = "Enter your email";
  //   });
  // }
  // // ------------------------
  // //                                    відправка форми
  // forms.forEach((el) => {
  //   el.addEventListener("submit", function (e) {
  //     if (emailTest(el.Email)) {
  //       // el.parentElement.insertAdjacentHTML(
  //       // 	"beforeend",
  //       // 	`<div class="form__error">Введіть коректний Email</div>`
  //       // )
  //       event.preventDefault();
  //     }
  //   });
  // });
  // //                                  Функція тесту email
  // function emailTest(input) {
  //   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  // }
  // //                                отримую данні в обєкт
  // for (const item of forms) {
  //   item.addEventListener("input", (e) => {
  //     // синтаксис квадратних скобокю ключ і= значення (name: value)
  //     formData[e.target.name] = event.target.value;
  //     // зберігаю в LS строкой(бо так приймає)
  //     LS.setItem("formData", JSON.stringify(formData));
  //   });
  // }
  // //               востанавлюєм дані (якщо перезагр стр при введеному тексті)
  // if (LS.getItem("formData")) {
  //   // преобразовуєм назад в об"єкт
  //   formData = JSON.parse(LS.getItem("formData"));
  //   // вписую
  //   for (let key in formData) {
  //     forms.forEach((form) => {
  //       form.elements[key].value = formData[key];
  //     });
  //   }
  // }
};
export default forms;
