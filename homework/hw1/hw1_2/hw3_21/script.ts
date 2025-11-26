console.log(` – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.`)
let array7: number[] = [66, 4, 7, 96, 305, 11, 3, 554, 9, 3];

for (let number of array7) {
    if (!(number % 2)) {
        console.log(number);
    }
}

console.log(`– Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.`)
let tenNumbersArray: number[] = [
    42, 17, 99, 5, 20,
    -3, 101, 8, 30, 60
];
let newTenNumbersArray: number[] = [];

for (let i: number = 0; i < tenNumbersArray.length; i++) {
    let item: number | undefined = tenNumbersArray[i];
    if (item) {
        newTenNumbersArray[newTenNumbersArray.length] = item
    }
}
console.log(newTenNumbersArray);

console.log(`– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.`)
let lettersArray: string[] = ['a', 'b', 'c'];
let newWord: string = '';

for (let i = 0; i < lettersArray.length; i++) {
    newWord += lettersArray[i];
}
console.log(newWord);

console.log(`– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.`)
let secondNewWord: string = '';
let z: number = 0;

while (z < lettersArray.length) {
    secondNewWord += lettersArray[z];
    z += 1
}
console.log(secondNewWord);

console.log(`– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.`)
let thirdNewWord: string = '';

for (let word of lettersArray) {
    thirdNewWord += word;
}
console.log(thirdNewWord);