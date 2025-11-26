// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i:number = 0; i < 100; i += 1) {
    let stepNumber:number = i + 1;

    if (!(stepNumber % 2)) {
        console.log(`Парний крок - ${stepNumber}-індекс${i}`);
        document.write(`<h1>Парний крок - ${stepNumber}</h1>`)
    }
}