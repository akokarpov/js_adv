

const init = () => {
    // 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
    const inputLongText = "This is a 'long text in single quotes' that needs to be changed.";
    const outputLongText = inputLongText.replace(/'/g, '"');
    console.log(inputLongText);
    console.log(outputLongText);

    // 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
    const originalApostropheText = "These aren't legal moves. This text isn't in 'single quotes'.";
    const changedApostropheText = originalApostropheText.replace(/'(?=\W)|'(?=\s)|(?<=\W)'|(?<=\s')'/g, '"');
    console.log(originalApostropheText);
    console.log(changedApostropheText);

    // 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
    // a. Имя содержит только буквы.
    // b. Телефон имеет вид +7(000)000-0000.
    // c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
    // d. Текст произвольный.
    // e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.
    const error = document.querySelector(".error");
    const idExp = {
        "#fName": ["^[a-zA-Z][a-zA-Z\\s]*$", "Name "],
        "#fTel": ["^\\+\\d\\(\\d\\d\\d\\)\\d\\d\\d\\-\\d\\d\\d\\d$", "Phone "],
        "#fEmail": ["^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", "Email "],
    };

    document.querySelector(".fBtn").addEventListener("click", () => {

        let warning = false;
        let warningMessage = "Errors: ";
        error.classList.add("hidden");

        for (const [id, arr] of Object.entries(idExp)) {
            const selector = document.querySelector(id);
            const regex = new RegExp(arr[0], "gi");
            const test = regex.test(selector.value);
            selector.className = test ? "valid" : "invalid";
            
            if (!test) {
                warning = true;
                warningMessage += arr[1];
            }
        }

        if (warning) {
            error.textContent = warningMessage;
            error.classList.remove("hidden");
        }
    });

}

window.onload = init;