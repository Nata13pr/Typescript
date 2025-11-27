// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let input:HTMLInputElement = document.createElement("input");
input.placeholder = 'Enter Your Age';
input.setAttribute("name", "age");
input.setAttribute('type', 'number');
input.setAttribute('min', '0');
let button1:HTMLButtonElement = document.createElement("button");
button1.innerText = 'Check';

let h11:HTMLHeadingElement = document.createElement('h1');
h11.classList.add('text')

document.body.append(input, button1, h11);
button1.addEventListener("click", function (ev) {
    ev.preventDefault();
    let inputValue = Number(input.value.trim());
    if (inputValue < 18) {
        h11.innerText = 'Вам ще немає 18 років';
    } else if (inputValue > 120) {
        h11.innerText = 'Не правильний вік,спробуйте ще раз'
    } else {
        h11.innerText = 'Ви повнолітній'
    }
})