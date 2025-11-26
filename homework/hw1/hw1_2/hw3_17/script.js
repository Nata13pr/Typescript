"use strict";
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    let stepNumber = i + 1;
    if (stepNumber % 2) {
        console.log(`Непарний крок ${stepNumber}-індекс ${i}`);
        document.write(`<h1>Непарний крок - ${stepNumber}</h1>`);
    }
}
