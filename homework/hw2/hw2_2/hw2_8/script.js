"use strict";
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
let form1 = document.createElement('form');
let inputQuantityOfLines = document.createElement('input');
inputQuantityOfLines.setAttribute('type', 'number');
inputQuantityOfLines.setAttribute('min', '0');
inputQuantityOfLines.setAttribute('name', 'quantityOfLines');
let inputQuantityOfCells = document.createElement('input');
inputQuantityOfCells.setAttribute('type', 'number');
inputQuantityOfCells.setAttribute('min', "0");
inputQuantityOfCells.setAttribute('name', 'quantityOfCells');
let inputOfInnerText = document.createElement('input');
inputOfInnerText.setAttribute('type', 'text');
inputOfInnerText.setAttribute('name', 'innerText');
let button12 = document.createElement('button');
button12.setAttribute('type', 'submit');
button12.innerText = 'Create';
form1.append(inputQuantityOfLines, inputQuantityOfCells, inputOfInnerText, button12);
let tableContainer = document.createElement('div');
document.body.append(form1, tableContainer);
form1.addEventListener('submit', function (e) {
    e.preventDefault();
    tableContainer.innerText = '';
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (let i = 0; i < Number(inputQuantityOfLines.value); i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < Number(inputQuantityOfCells.value); j++) {
            let td = document.createElement('td');
            td.innerText = inputOfInnerText.value;
            td.style.border = '1px solid black';
            tr.appendChild(td);
        }
        table.append(tr);
    }
    tableContainer.append(table);
});
