// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій !!!

console.log(`– створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б`)

let areaOfARectangleArrowFunction = (a: number, b: number): number => a * b;

console.log(areaOfARectangleArrowFunction(10, 5))

console.log(`– створити функцію, яка обчислює та повертає площу кола з радіусом r`)

let areaOfACircleArrowFunction = (radius: number): number => Math.PI * Math.pow(radius, 2)

console.log(areaOfACircleArrowFunction(5))

console.log(`– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r`)

let areaOfACylinderArrowFunction = (radius: number, height: number): number => 2 * Math.PI * radius * (radius + height)

console.log(areaOfACylinderArrowFunction(2, 7))

console.log(`– створити функцію, яка приймає масив та виводить кожен його елемент`)

let workWithArrowFunction = (array: IProductsArray1[]): void => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

interface IProductsArray1 {
    id: number,
    name: string,
    price: number,
    inStock: boolean,
    category: string
}

const productsArray1: IProductsArray1[] = [
    {id: 1, name: "Ноутбук Pro", price: 1499.99, inStock: true, category: "Електроніка"},
    {id: 2, name: "Смартфон X1", price: 799.00, inStock: true, category: "Електроніка"},
    {id: 3, name: "Кавоварка Retro", price: 129.50, inStock: false, category: "Побутова техніка"},
    {id: 4, name: "Килимок для йоги", price: 25.00, inStock: true, category: "Спорт"},
    {id: 5, name: "Бездротові навушники", price: 89.99, inStock: true, category: "Електроніка"},
    {id: 6, name: "Електронна книга", price: 199.99, inStock: true, category: "Книги"},
    {id: 7, name: "Набір пензлів", price: 15.00, inStock: true, category: "Хобі"},
    {id: 8, name: "Дрон SkyCam", price: 550.00, inStock: false, category: "Електроніка"},
    {id: 9, name: "Рюкзак туристичний", price: 75.50, inStock: true, category: "Спорт"},
    {id: 10, name: "LED лампа для столу", price: 35.00, inStock: true, category: "Освітлення"},
    {id: 11, name: "Портативний диск 1TB", price: 65.00, inStock: true, category: "Електроніка"},
    {id: 12, name: "Блендер KitchenMax", price: 95.99, inStock: true, category: "Побутова техніка"},
    {id: 13, name: "Спортивні кросівки", price: 110.00, inStock: false, category: "Спорт"},
    {id: 14, name: "Велосипед міський", price: 800.00, inStock: true, category: "Спорт"},
    {id: 15, name: "Набір для малювання", price: 45.00, inStock: true, category: "Хобі"},
    {id: 16, name: "Розумний годинник", price: 220.00, inStock: true, category: "Електроніка"},
    {id: 17, name: "Фен потужний", price: 45.99, inStock: true, category: "Побутова техніка"},
    {id: 18, name: "Книга: Історія кодування", price: 19.99, inStock: true, category: "Книги"},
    {id: 19, name: "Телевізор 55 дюймів", price: 999.00, inStock: false, category: "Електроніка"},
    {id: 20, name: "Настільна гра", price: 55.00, inStock: true, category: "Хобі"}
];
workWithArrowFunction(productsArray1)

console.log(`– створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент`);

let createParagraphWithTextArrowFunction = (text: string): void => document.write(`<p>${text}</p>`);

createParagraphWithTextArrowFunction('Lorem ipsum dolor sit amet, consectetur adipisicing.')

console.log(`– створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий`)

let createLiArrowFunction = (name: string): void => {
    return document.write(`<ul>
                         <li>${name}</li>
                         <li>${name}</li>
                         <li>${name}</li>
                    </ul>`)
}

createLiArrowFunction('october')

console.log(`– створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write`)

let createSomeQuantityArrowFunction = (name: string, quantity: number): void => {
    let html = `<ul>`
    for (let i = 1; i <= quantity; i++) {
        html += `<li>${name}</li>`
    }
    html += `</ul>`
    document.write(html)
}

createSomeQuantityArrowFunction('november', 9);

console.log(`– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write`)

let createListOfArrayArrowItems = (array: (string | number | boolean)[]): void => {
    let html = `<ul>`
    for (let i = 0; i < array.length; i++) {
        html += `<li>${array[i]}</li>`
    }
    html += `</ul>`
    document.write(html)
}

const literalMixedArray1: (string | number | boolean)[] = [77, -15, 4.02, 1, 1000, "Яблуко", "Осінь", "Код", "Canvas", "JavaScript", true, false, true, false, true, 555.55, "Змішаний тип", false, 99, "20-й елемент"];
createListOfArrayArrowItems(literalMixedArray1)

console.log(`– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.`)

let workWithObjectsInArrayArrowFunction = (array: Users4Type[]): void => {
    for (let item of array) {
        document.write(`<div>
                           <p>id-${item.id}</p>
                           <p>name-${item.name}</p>
                           <p>age-${item.age}</p>
                       </div>`)
    }
}

type Users4Type = {
    id: number,
    name: string,
    age: number,
}
const users4: Users4Type[] = [
    {id: 1, name: "Анна", age: 31},
    {id: 2, name: "Богдан", age: 45},
    {id: 3, name: "Вікторія", age: 22},
    {id: 4, name: "Денис", age: 58},
    {id: 5, name: "Олена", age: 29},
    {id: 6, name: "Федір", age: 37},
    {id: 7, name: "Іван", age: 51},
    {id: 8, name: "Марія", age: 26},
    {id: 9, name: "Олег", age: 49},
    {id: 10, name: "Юлія", age: 33},
    {id: 11, name: "Петро", age: 28},
    {id: 12, name: "Катерина", age: 39},
    {id: 13, name: "Сергій", age: 55},
    {id: 14, name: "Наталія", age: 20},
    {id: 15, name: "Вадим", age: 42},
    {id: 16, name: "Ірина", age: 30},
    {id: 17, name: "Михайло", age: 48},
    {id: 18, name: "Тетяна", age: 23},
    {id: 19, name: "Павло", age: 36},
    {id: 20, name: "Зоя", age: 53}
];
workWithObjectsInArrayArrowFunction(users4)

console.log(`– створити функцію яка повертає найменьше число з масиву`)

let smallestNumberArrowFunction = (numbers: number[]): number => {
    let smallestNumber = numbers[0];
    for (let number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number
        }
    }
    return smallestNumber;
}

const uniqueNumbersArray1: number[] = [
    9, 23, 45, 12, 7, 88, 30, 15, 61,
    92, 4, 33, 76, 18, 55, 1, 27, 6, 99, 40,
    10, 52, 8, 71, 14, 38, 5, 66, 20, 84
];

console.log(smallestNumberArrowFunction(uniqueNumbersArray1));

console.log(`– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13`)

let sumOfArrayNumbersArrowFunction = (arr: number[]): number => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const positiveNumbersArray1: number[] = [
    5, 12, 1, 8, 25, 4, 100, 3, 17, 50
];
console.log(sumOfArrayNumbersArrowFunction(positiveNumbersArray1))

console.log(`– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]`)

let changeArrayByIndexArrowFunction = (array: number[], previousIndex: number, newIndex: number): number | number[] => {

    if (previousIndex < array.length - 1 && newIndex < array.length - 1) {
        let previousArrayIndexValue = array[previousIndex];

        array[previousIndex] = array[newIndex];
        array[newIndex] = previousArrayIndexValue;

        return array;
    }
    return -Infinity;
}

let swapedArray1: number[] = [9, 23, 45, 12, 7, 88, 30, 15, 61];
console.log(swapedArray1);

console.log(changeArrayByIndexArrowFunction(swapedArray1, 5, 0));

console.log(`Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400`)

let exchangeMoneyArrowFunction = (sumUAH: number, currencyValues: IExchangeRates1[], exchangeCurrency: string): number => {
    let sum = 0;

    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            sum += item.value * sumUAH;
        }
    }
    return sum;
}

interface IExchangeRates1 {
    currency: string,
    value: number
}

const exchangeRates1: IExchangeRates1[] = [
    {currency: 'USD', value: 39.50},
    {currency: 'EUR', value: 42.80},
    {currency: 'PLN', value: 9.50},
    {currency: 'GBP', value: 48.20},
    {currency: 'JPY', value: 0.27},
    {currency: 'CAD', value: 29.00},
    {currency: 'AUD', value: 25.50},
    {currency: 'CHF', value: 44.00},
    {currency: 'CNY', value: 5.40},
    {currency: 'CZK', value: 1.70},
    {currency: 'SEK', value: 3.80},
    {currency: 'NOK', value: 3.65},
    {currency: 'HUF', value: 0.11},
    {currency: 'TRY', value: 1.25},
    {currency: 'INR', value: 0.47},
    {currency: 'ILS', value: 10.50},
    {currency: 'RUB', value: 0.40},
    {currency: 'MXN', value: 2.20},
    {currency: 'BRL', value: 7.80},
    {currency: 'ZAR', value: 2.10}
];

console.log(exchangeMoneyArrowFunction(5555, exchangeRates1, 'CAD'));