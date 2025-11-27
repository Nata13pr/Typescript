"use strict";
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let h111 = document.createElement('h1');
h111.innerText = `Конвертер: кг → фунти (lb)`;
let input1 = document.createElement('input');
input1.setAttribute('type', 'number');
input1.setAttribute('min', '1');
input1.setAttribute('name', 'converter');
let p = document.createElement('p');
document.body.append(h111, input1, p);
input1.addEventListener('input', function () {
    let sum = Number(this.value) * 2.20462;
    p.innerText = ` ${this.value} кілограм  перевести в фунти дорівнює ${sum.toString()}`;
});
