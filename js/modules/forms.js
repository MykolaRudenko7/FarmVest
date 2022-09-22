const forms = () => {
  // форми
  const allForms = document.querySelectorAll("form");
  // інпути
  const allInputs = document.querySelectorAll("input");
  //
  const ls = localStorage;

  // об'єкт з повідомленнями
  const message = {
    loading: "Loading...",
    success: "Success!",
    failure: "Something wrong...",
  };

  // функція очищення інтутів
  const clearInputs = () => {
    allInputs.forEach((input) => {
      input.value = "";
    });
  };

  // асинхронна ф-ція (завжди повертає проміс) відправки запросу на сервер
  const postData = async (url, data) => {
    // в створений блок повідомлення вставляю повідомлення про стан відправки
    document.querySelector(".status").textContent = message.loading;
    // в цій перемінній запрос і потім результат (норм чи не норм)
    //  поки await не виконається, інтерпритатор дж чекає
    let result = await fetch(url, {
      method: "POST",
      body: data,
    });

    //  повертаю результат у виді текссту
    return await result.text();
  };

  allForms.forEach((form) => {
    // на кожну форму дія при відправці
    form.addEventListener("submit", function (e) {
      // відміняю перезавантаження
      e.preventDefault();

      // роблю блок з повідомленням
      // створюю дів
      let statusMessage = document.createElement("div");
      // даю йому клас
      statusMessage.classList.add("status");

      // поміщаю це повідомлення всередину форми
      form.after(statusMessage);

      // збираю данні у вигляді формату FormData
      const formData = new FormData(form);

      // для конвертації форм дати
      // роблю з formData масив з масивами => робим об'єкт => робим об'єкт JSON
      // const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // юрл і данні які я хочу відправить  на сервер
      postData("../../assets/server.php", formData)
        // якщо все добре
        .then((result) => {
          // вивожу в консоль результат з серверу (текст)
          console.log(result);
          statusMessage.textContent = message.success;
        })
        // якщо помилка
        .catch(() => (statusMessage.textContent = message.failure))

        // в любому випадку
        .finally(() => {
          // очищую інпути
          clearInputs();
          //  і видаляю повідомлення чере 3 сек
          setTimeout(() => {
            statusMessage.remove();
          }, 3000);
        });
    });
  });

  //                                 зникаючий плейсхолдер

  for (const input of allForms) {
    input.Email.addEventListener("focus", function (e) {
      input.Email.placeholder = "";
    });
  }

  for (const input of allForms) {
    input.Email.addEventListener("blur", function (e) {
      input.Email.placeholder = "Enter your email";
    });
  }

  //   //                                    відправка форми
  //   allForms.forEach((el) => {
  //     el.addEventListener("submit", function (e) {
  //       if (emailTest(el.Email)) {
  //         el.parentElement.insertAdjacentHTML(
  //           "beforeend",
  //           `<div class="form__error">Введіть коректний Email</div>`
  //         );
  //         event.preventDefault();
  //       }
  //     });
  //   });

  //   //                                  Функція тесту email
  //   function emailTest(input) {
  //     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  //   }

  //                                отримую данні в обєкт
  //   for (const item of forms) {
  //     item.addEventListener("input", (e) => {
  //       // синтаксис квадратних скобокю ключ і= значення (name: value)
  //       formData[e.target.name] = event.target.value;
  //       // зберігаю в LS строкой(бо так приймає)
  //       LS.setItem("formData", JSON.stringify(formData));
  //     });
  //   }

  //               востанавлюєм дані (якщо перезагр стр при введеному тексті)
  //   if (ls.getItem("formData")) {
  //     // преобразовуєм назад в об"єкт
  //     formData = JSON.parse(ls.getItem("formData"));
  //     // вписую
  //     for (let key in formData) {
  //       forms.forEach((form) => {
  //         form.elements[key].value = formData[key];
  //       });
  //     }
  //   }
};

export default forms;
