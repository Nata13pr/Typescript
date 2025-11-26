// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i:number = 1; i < 100; i += 2) {
    console.log(`Номер кроку - ${i+1}`);
    document.write(`<h1>Номер кроку - ${i+1}</h1>`)
}