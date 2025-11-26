"use strict";
// –створити масив з:
//
//     – з 5 числових значень
//
// – з 5 стічкових значень
//
// – з 5 значень стрічкового, числового та булевого типу
//
// – та вивести його в консоль
let array4 = [1, 2, 3, 4, 5, 6, 'one', 'two', 'three', 'four', 'five', true, 'string', 13, 'number', false];
console.log(array4);
for (let i = 0; i < array4?.length; i += 1) {
    console.log(array4[i]);
}
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
let anotherArray = [];
for (let j = 0; j < 20; j += 1) {
    anotherArray[j] = j + 1;
}
console.log(anotherArray);
