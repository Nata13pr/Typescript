console.log(`Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.`)
let stringArray: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

for (let i: number = 0; i < stringArray.length; i += 1) {
    console.log(stringArray[i]);
}

console.log(` Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.`)
let numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numberArray.length; i += 1) {
    console.log(numberArray[i]);
}

console.log(' Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.')
let mixedArray: (string | number | boolean)[] = [true, 4, 'spring', false, 99, 'number', 555, false, 'string', -3];

for (let i: number = 0; i < mixedArray.length; i += 1) {
    console.log(mixedArray[i]);
}

console.log('Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи')
let anotherMixedArray: (string | number | boolean)[] = ['one', true, 999, 'two', -8, 'three', false, 'spy', true, 777];

let x2: number = 0;

while (x2 < anotherMixedArray.length) {
    if (typeof anotherMixedArray[x2] === "boolean") {
        console.log(anotherMixedArray[x2]);
    }
    x2 += 1;
}

console.log('Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи')
let secondMixedArray: (string | number | boolean)[] = ['autumn', 9987, false, 'summer', 55, true, 'winter', 9, -54, false];

for (let z: number = 0; z < secondMixedArray.length; z += 1) {
    if (typeof secondMixedArray[z] === "number") {
        console.log(secondMixedArray[z]);
    }
}

console.log('Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи')
let thirdMixedArray: (string | number | boolean)[] = ['cat', false, 66, 'spy', 888, true, 'mouse', 0, false, 'dog']

let y: number = 0;

while (y < thirdMixedArray.length) {
    if (typeof thirdMixedArray[y] === "string") {
        console.log(thirdMixedArray[y]);
    }
    y += 1;
}



