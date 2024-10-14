// -- СДЕЛАТЬ КНОПКУ ПРИ КЛИКЕ НА КОТОРОЙ ПОЯВИТСЯ ALERT "УРЯ!" --//

const buttonAlert = document.querySelector(".lesson__button");

buttonAlert.addEventListener("click", () => alert("уря"));

// -- СДЕЛАТЬ ИНПУТ КОТОРЫЙ ПРИ ПОТЕРЕ ФОКУСА ВЫДАЕТ ALERT "ЖДЕМ ВОЗВРАЩЕНИЯ" --//

const inputLesson = document.querySelector(".lesson__input");

inputLesson.addEventListener("mouseout", () => alert("ждем возвращения"), {
  once: true,
});

// -- СДЕЛАТЬ ПОЛЕ ВВОДА С КНОПКОЙ, ПРИ НАЖАТИИ НА КОТОРУЮ ТЕКСТ ИЗ ИНПУТА ПОЯВЛЯЕТСЯ В КНОПКЕ, ДЕФОЛТНЫЙ ТЕКСТ КНОПКИ "ОПУБЛИКОВАТЬ" -- //

const buttonSumbit = document.querySelector(".button-sumbit");
const inputBox = document.querySelector(".input-box");

function addText() {
  let text = inputBox.value;
  buttonSumbit.innerHTML = text;
  inputBox.value = "";
}

buttonSumbit.addEventListener("click", () => {
  addText();
});

inputBox.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    addText();
    return;
  }
  if (event.code === "Escape") {
    inputBox.value = "";
  }
});
