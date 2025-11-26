// 1. Створити пустий масив та :
console.log(`--------------------a. заповнити його 50 парними числами за допомоги цикл------------------------`)
let evenArray: number[] = [];

for (let i: number = 0; i < 50; i += 1) {
    evenArray[i] = i * 2;
}
console.log(evenArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i: number = 0; i < evenArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${evenArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i: number = 0; i < evenArray.length; i++) {
    let item: number | undefined = evenArray[i];

    if (item) {
        if (!(i % 3) && !(item % 2)) {
            console.log(`Парний елемент ${evenArray[i]} - індекс${i}`)
        }
    }

}

console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newEvenArray: number[] = [];

for (let i: number = 0; i < evenArray.length; i++) {
    let item: number | undefined = evenArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            newEvenArray[newEvenArray.length] = item;
        }
    }
}
console.log(newEvenArray)


console.log(`Вивести кожен елемент масиву, сусід справа якого є парним`)

for (let i = 1; i < evenArray.length; i++) {
    let item: number | undefined = evenArray[i];

    if (item) {
        if (!(item % 2)) {
            console.log(`${evenArray[i - 1]} -сусід справа${evenArray[i]}`)
        }
    }

}

console.log(`============================================================================================`)

console.log(`---------------------------- b. заповнити його 50 непарними числами за допомоги циклу.--------------------`)
let oddArray: number[] = [];

for (let i: number = 0; i < 50; i += 1) {
    oddArray[i] = (i * 2) + 1;
}
console.log(oddArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i: number = 0; i < oddArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${oddArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i: number = 0; i < oddArray.length; i += 1) {
    let item: number | undefined = oddArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            console.log(`Елемент ${oddArray[i]} - індекс${i}`)
        } else {
            console.log(`Немає парних елементів.`)
        }
    }

}

console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newOddArray: number[] = [];

for (let i: number = 0; i < oddArray.length; i++) {
    let item: number | undefined = oddArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            newOddArray[newOddArray.length] = item;
        }
    }
}
console.log(newOddArray)

console.log(`Вивести кожен елемент масиву, сусід справа якого є парним`)

for (let i: number = 1; i < oddArray.length; i++) {
    let item: number | undefined = oddArray[i];
    if (item) {
        if (!(item % 2)) {
            console.log(`${oddArray[i - 1]} -сусід справа${oddArray[i]}`)
        }
    }
}

console.log(`============================================================================================`)

console.log(`------------------- c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)-------------------------`)
let randomNumbersArray: number[] = [];

for (let i: number = 0; i < 20; i += 1) {
    randomNumbersArray[i] = Math.round(Math.random() * 100)
}
console.log(randomNumbersArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i: number = 0; i < randomNumbersArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${randomNumbersArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i: number = 0; i < randomNumbersArray.length; i++) {
    let item: number | undefined = randomNumbersArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            console.log(`Парний елемент ${randomNumbersArray[i]} - індекс${i}`)
        }
    }
}

console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newRandomNumbersArray: number[] = [];

for (let i: number = 0; i < randomNumbersArray.length; i++) {
    let item: number | undefined = randomNumbersArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            newRandomNumbersArray[newRandomNumbersArray.length] = item;
        }
    }

}
console.log(newRandomNumbersArray)

console.log(`Вивести кожен елемент масиву, сусід справа якого є парним`)

for (let i: number = 1; i < randomNumbersArray.length; i++) {
    let item: number | undefined = randomNumbersArray[i];
    if (item) {
        if (!(item % 2)) {
            console.log(`${randomNumbersArray[i - 1]} -сусід справа${randomNumbersArray[i]}`)
        }
    }
}

console.log(`============================================================================================`)

console.log(`--d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)---`)
let randomNumbersWithMinMaxValueArray: number[] = [];

let min: number = 8;
let max: number = 732;

for (let i: number = 0; i < 20; i += 1) {
    randomNumbersWithMinMaxValueArray[i] = Math.floor((Math.random()) * (max - min) + min);
}
console.log(randomNumbersWithMinMaxValueArray);

console.log(`----2. Вивести за допомогою console.log кожен третій елемент----`)
for (let i: number = 0; i < randomNumbersWithMinMaxValueArray.length; i++) {
    if (!(i % 3)) {
        console.log(`Елемент ${randomNumbersWithMinMaxValueArray[i]} - індекс${i}`)
    }
}

console.log(`---3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.--`)
for (let i: number = 0; i < randomNumbersWithMinMaxValueArray.length; i++) {
    let item: number | undefined = randomNumbersWithMinMaxValueArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            console.log(`Парний елемент ${randomNumbersWithMinMaxValueArray[i]} - індекс${i}`)
        }
    }
}
console.log(`---------- Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив---------`)
let newRandomNumbersWithMinMaxValueArray: number[] = [];

for (let i: number = 0; i < randomNumbersWithMinMaxValueArray.length; i++) {
    let item: number | undefined = randomNumbersWithMinMaxValueArray[i];
    if (item) {
        if (!(i % 3) && !(item % 2)) {
            newRandomNumbersWithMinMaxValueArray[newRandomNumbersWithMinMaxValueArray.length] = item;
        }
    }
}
console.log(newRandomNumbersWithMinMaxValueArray)

console.log(`Вивести кожен елемент масиву, сусід справа якого є парним`)

for (let i: number = 1; i < randomNumbersWithMinMaxValueArray.length; i++) {
    let item: number | undefined = randomNumbersWithMinMaxValueArray[i];
    if (item) {
        if (!(item % 2)) {
            console.log(`${randomNumbersWithMinMaxValueArray[i - 1]} -сусід справа${randomNumbersWithMinMaxValueArray[i]}`)
        }
    }
}

console.log(`============================================================================================`)

console.log(`Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.`)
let arrayWithNumbers: number[] = [100, 250, 50, 168, 120, 345, 188];
let averageCheck: number = 0;

for (let i: number = 0; i < arrayWithNumbers.length; i++) {
    let item: number | undefined = arrayWithNumbers[i];
    if (item) {
        averageCheck += item;
    }
}
console.log(averageCheck)

console.log(`============================================================================================`)

console.log(` 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.`)

let randomSecondWithNumbersArray: number[] = [];
let differentRandomSecondWithNumbersArray: number[] = [];

for (let i = 0; i < 20; i += 1) {
    randomSecondWithNumbersArray[i] = Math.round(Math.random() * 100)
}
console.log('До множення', randomSecondWithNumbersArray)
for (let number of randomSecondWithNumbersArray) {
    differentRandomSecondWithNumbersArray[differentRandomSecondWithNumbersArray.length] = number * 5
}
console.log('Після множення у новому масиві', differentRandomSecondWithNumbersArray)

console.log(`============================================================================================`)

console.log(` 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.`)
let newIndependentMixedArray: number[] = []
let independentMixedArray: (string | number | boolean)[] = ["Проект_0", 10, true, "Canvas_3", 26, false, "Код_6", 45, true, "Масив_9",
    102, false, "Логіка_12", 78, true, "Тестування_15", 501, false, "Файл_18",
    -14, true, "Створення_21", 100, false, "Елемент_24", 43, true, "Змінна_27",
    90, false, "Завдання_30", 2, true, "Результат_33", 66, false, "Дані_36",
    1, true, "Перевірка_39", 88, false, "Консоль_42", 5, true, "JS_45",
    150, false, "Фініш_48", 19, true];

for (let item of independentMixedArray) {
    if (typeof item === "number") {
        newIndependentMixedArray[newIndependentMixedArray.length] = item
    }
}
console.log(newIndependentMixedArray)
