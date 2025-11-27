"use strict";
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let h1 = document.createElement("h1");
h1.innerText = 'Text with Id';
h1.setAttribute("id", 'text');
let button = document.createElement("button");
button.innerText = 'Delete';
document.body.append(h1, button);
button.addEventListener("click", function () {
    h1.remove();
});
