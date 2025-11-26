// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let array1: (string | number | boolean | { name: string, age: number } | number[] | string[])[] = ['name', 34, true, {
    name: 'vasya',
    age: 14
}, false, 'sky', [1, 5, 6, 8, 9], 999, ['sonya', 'leska', 'kolja'], 'super', -1111];
console.log(array1[0])
console.log(array1[1])
console.log(array1[2])
console.log(array1[3])
console.log(array1[4])
console.log(array1[5])
console.log(array1[6])
console.log(array1[7])
console.log(array1[8])
console.log(array1[array1.length - 1])

// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
type Object1Type = {
    title: string,
    pageCount: number,
    genre: string
}
let obj11: Object1Type = {
    title: 'Batman',
    pageCount: 456,
    genre: 'triller'
}
console.log(obj11)

let obj22: Object1Type = {
    title: 'Love story',
    pageCount: 800,
    genre: 'drama'
}
console.log(obj22)

let obj33: Object1Type = {
    title: 'Murder in Alabama',
    pageCount: 317,
    genre: 'horror'
}
console.log(obj33)

// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
type Authors1Type = {
    name: string,
    age: number
}

interface IBook1 {
    title: string,
    pageCount: number,
    genre: string,
    authors: Authors1Type[]
}

let book11: IBook1 = {
    title: 'Batman',
    pageCount: 456,
    genre: 'triller',
    authors: [
        {name: "Brennon", age: 60},
        {name: 'John', age: 37}
    ]
}
console.log(book11)

let book22: IBook1 = {
    title: 'Love story',
    pageCount: 800,
    genre: 'drama',
    authors: [
        {name: "James", age: 87},
        {name: 'John', age: 37},
        {name: 'Anna', age: 61},
        {name: 'Veronika', age: 34}
    ]
}
console.log(book22)

let book33: IBook1 = {
    title: 'Murder in Alabama',
    pageCount: 317,
    genre: 'horror',
    authors: [
        {name: "Archi", age: 24},
    ]
}
console.log(book33);

// Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
interface IUsers1 {
    name: string,
    username: string,
    password: number
}

let users1: IUsers1[] = [
    {name: 'vasja', username: 'vasjaK', password: 123456},
    {name: 'olia', username: 'king', password: 33343},
    {name: 'anna', username: 'lion', password: 565675},
    {name: 'kolja', username: 'killer', password: 455464},
    {name: 'nata', username: 'doll', password: 2423234},
    {name: 'oliver', username: 'kitty', password: 3353453},
    {name: 'hanna', username: 'flower', password: 999676},
    {name: 'lev', username: 'dad', password: 456436},
    {name: 'jan', username: 'great', password: 323424},
    {name: 'taras', username: 'kittyKat', password: 54564564}
]
console.log(users1[0]?.password)
console.log(users1[1]?.password)
console.log(users1[2]?.password)
console.log(users1[3]?.password)
console.log(users1[4]?.password)
console.log(users1[5]?.password)
console.log(users1[6]?.password)
console.log(users1[7]?.password)
console.log(users1[8]?.password)
console.log(users1[users1.length - 1]?.['password']);

// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
type Temperature1Type = {
    morning: number,
    noon: number,
    evening: number,
}
let temperature1: Temperature1Type[] = [
    {morning: 0, noon: +4, evening: +3},
    {morning: +5, noon: +14, evening: +8},
    {morning: +15, noon: 20, evening: 19},
    {morning: -3, noon: +2, evening: +1},
    {morning: -10, noon: -1, evening: -1},
    {morning: +9, noon: +14, evening: +8},
    {morning: +18, noon: +24, evening: +23}
]
console.log(temperature1[4]?.evening);

// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x1: number = 0;
// Перевірка
// x=1;
// x=0;
// x=-3;

if (x1 !== 0) {
    console.log('Вірно')
} else {
    console.log('Не вірно')
}

// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
let time1: number = 0;

if (time1 <= 15) {
    console.log("Це перша четверть години")
} else if (time1 > 15 && time1 <= 30) {
    console.log("Це друга четверть години")
} else if (time1 > 30 && time1 <= 45) {
    console.log("Це третя четверть години")
} else if (time1 > 45 && time1 <= 59) {
    console.log("Це четверта чверть години")
} else {
    console.log("Година введена не вірно!")
}

// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day1: number = 318;

switch (true) {
    case day1 >= 1 && day1 <= 10:
        console.log("Перша декада місяця");
        break;
    case day1 > 10 && day1 <= 20:
        console.log("Друга декада місяця");
        break;
    case day1 > 20 && day1 <= 31:
        console.log("Третя декада місяця")
        break;
    default:
        console.log('Не праильно введені данні')

}

if (day1 >= 1 && day1 <= 10) {
    console.log("Перша декада місяця");
} else if (day1 > 10 && day1 <= 20) {
    console.log("Друга декада місяця");
} else if (day1 > 20 && day1 <= 31) {
    console.log("Третя декада місяця")
} else {
    console.log('Не праильно введені данні')
}

// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayOfTheWeek1: number = 1;

switch (dayOfTheWeek1) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('Not correct number!')
}

// – Користувач вводить або має два числа.
//
//     Потрібно знайти та вивести максимальне число з тих двох .
//
//     Також потрібно врахувати, коли введені рівні числа.
let numberOne1: number = 0;
let numberTwo1: number = 0;

if (numberOne1 > numberTwo1) {
    console.log(numberOne1)
} else if (numberOne1 < numberTwo1) {
    console.log(numberTwo1)
} else if (numberOne1 === numberTwo1) {
    console.log(`${numberOne1} and ${numberTwo1} are equal.`)
} else {
    console.log('Something went wrong!')
}

// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який

// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let variableX1: any = 6;

if (variableX1 === "" || variableX1 === -0 || variableX1 === false || isNaN(variableX1) || variableX1 === 0) {
    variableX1 = 'default';
    console.log(variableX1)
} else {
    console.log(variableX1)
}

if (!variableX1) {
    variableX1 = 'default';
    console.log(variableX1)
} else {
    console.log(variableX1)
}

variableX1 = !variableX1 ? 'default' : variableX1;
console.log(variableX1)

// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
interface ICoursesAndDurationArray1 {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray1: ICoursesAndDurationArray1[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray1[0] && coursesAndDurationArray1[0]?.monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray1[0]?.monthDuration} month.`)
}

if (coursesAndDurationArray1[1] && coursesAndDurationArray1[1].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray1[0]?.monthDuration} month.`)
}

if (coursesAndDurationArray1[2] && coursesAndDurationArray1[2].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray1[0]?.monthDuration} month.`)
}

if (coursesAndDurationArray1[3] && coursesAndDurationArray1[3].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray1[0]?.monthDuration} month.`)
}

if (coursesAndDurationArray1[4] && coursesAndDurationArray1[4].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray1[0]?.monthDuration} month.`)
}

if (coursesAndDurationArray1[5] && coursesAndDurationArray1[5].monthDuration > 5) {
    console.log('Super')
} else {
    console.log(`Duration is ${coursesAndDurationArray1[0]?.monthDuration} month.`)
}


