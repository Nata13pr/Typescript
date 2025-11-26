console.log(`– Знайти та вивести довжину наступних стрінгових значень

 ‘hello world’

‘lorem ipsum’

‘javascript is cool’`)

let lengthOfStringArrowFunction = (string: string): void => console.log(`Довжина строки ${string} -`, string.length)

lengthOfStringArrowFunction('hello world')
lengthOfStringArrowFunction('lorem ipsum')
lengthOfStringArrowFunction('javascript is cool')

console.log(`Перевести до великого регістру наступні стрінгові значення

      ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’`)

let convertToUpperCaseArrowFunction = (string: string): string => string.toUpperCase();

console.log(convertToUpperCaseArrowFunction('hello world'))
console.log(convertToUpperCaseArrowFunction('lorem ipsum'))
console.log(convertToUpperCaseArrowFunction('javascript is cool'))


console.log(` Перевести до нижнього регістру наступні стрінгові значення

      ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’`)

let convertToLowerCaseArrowFunction = (string: string): string => string.toLowerCase();
console.log(convertToLowerCaseArrowFunction(`HELLO WORLD`))
console.log(convertToLowerCaseArrowFunction(`LOREM IPSUM`))
console.log(convertToLowerCaseArrowFunction(`JAVASCRIPT IS COOL`))

console.log(`– Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.`)

let toDeleteExtraSpaces = (string: string): string => {
    console.log(string.length)
    let newStr = string.trim()
    console.log(newStr.length)
    return newStr
}
let strFirst = ' dirty string   '

console.log(toDeleteExtraSpaces(strFirst))

console.log(`– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    let str = ‘Ревуть воли як ясла повні’;

    let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]`)

let stringToarray = (str: string): string[] => str.split(' ');

let str = 'Ревуть воли як ясла повні';

console.log(stringToarray(str))

console.log(`– є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.`)

let arrayNumbers: number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let convertToString: string[] = arrayNumbers.map((number: number) => number.toString())

console.log(convertToString)

// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]`
console.log(`творити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.`)

let sortNums = (array: number[], direction: string): number[] => {
    let sortedArray = [...array];
    if (direction === 'ascending') {
        sortedArray.sort((a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        })
    }
    if (direction === 'descending') {
        sortedArray.sort((a, b) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        })
    }
    return sortedArray;
}

console.log(sortNums(arrayNumbers, 'ascending'))
console.log(sortNums(arrayNumbers, 'descending'))

console.log(`– є масив

 — відсортувати його за спаданням за monthDuration

 — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

 — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}`)

interface ICoursesAndDurationArray {
    title: string,
    monthDuration: number,
    id?: number
}

let coursesAndDurationArray: ICoursesAndDurationArray[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -------------------------- — відсортувати його за спаданням за monthDuration----------------------

let sortDescendingArray = coursesAndDurationArray.sort((a: ICoursesAndDurationArray, b: ICoursesAndDurationArray): number => b.monthDuration - a.monthDuration
)
console.log(sortDescendingArray)

// -------------------------- — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців-----------------

let filteredArray = coursesAndDurationArray.filter((number: ICoursesAndDurationArray): boolean => number.monthDuration > 5)

console.log(filteredArray)

// -------------------------- — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}`)--------------

let mappedArray = coursesAndDurationArray.map((number: ICoursesAndDurationArray, index: number): ICoursesAndDurationArray => {
        return {id: index + 1, ...number}
    }
)
console.log(mappedArray)

console.log(` — відсортувати його за спаданням за monthDuration

 — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

 — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration})`)

let newCoursesAndDurationArray = coursesAndDurationArray
    .sort((a: ICoursesAndDurationArray, b: ICoursesAndDurationArray): number => b.monthDuration - a.monthDuration)
    .filter((number: ICoursesAndDurationArray): boolean => number.monthDuration > 5)
    .map((number: ICoursesAndDurationArray, index: number): ICoursesAndDurationArray => ({id: index + 1, ...number}))

console.log(newCoursesAndDurationArray)

// `взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker`

type CoursesArrayType = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}
let coursesArray: CoursesArrayType[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log('–написати пошук всіх об’єктів, в яких в modules є sass');

let filterArrayWithSass = coursesArray.filter((obj: CoursesArrayType): boolean => obj.modules.includes('sass'))

console.log(filterArrayWithSass)

let filterArrayWithDocker = coursesArray.filter((obj: CoursesArrayType): boolean => obj.modules.includes('docker'))

console.log(filterArrayWithDocker)

// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }


interface ICardsProperStruction {
    spades: ICards[],
    diamonds: ICards[],
    hearts: ICards[],
    clubs: ICards []
}

interface ICards {
    cardSuit: string,
    value: string,
    color: string
}

let cardSuit: string[] = ['spade', 'diamond', 'heart', 'clubs']
let value: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
let cards: ICards[] = [];
for (let i: number = 0; i < value.length; i++) {
    for (let j = 0; j < cardSuit.length; j++) {
        if (cardSuit[j] === 'diamond' || cardSuit[j] === 'heart') {
            cards.push({cardSuit: cardSuit[j], value: value[i], color: 'red'})
        } else if (cardSuit[j] === 'clubs' || cardSuit[j] === 'spade') {
            cards.push({cardSuit: cardSuit[j], value: value[i], color: 'black'})
        } else {
            console.log('Something went wrong')
        }
    }
}
console.log(cards, 'lllllllllllllll')

console.log(` – знайти піковий туз`)

let findSpadeAce = cards.find((card: ICards): boolean => card.value === 'ace' && card.cardSuit === 'spade');

console.log(findSpadeAce)

console.log(`– всі шістки`)

let findAllSixths = cards.filter((card: ICards): boolean => card.value === '6');

console.log(findAllSixths)

console.log(` – всі червоні карти`)

let findAllRedCards = cards.filter((card: ICards): boolean => card.color === 'red');

console.log(findAllRedCards)

let findAllDiamonds = cards.filter((card: ICards): boolean => card.cardSuit === 'diamond');

console.log(findAllDiamonds)

console.log(`  – всі трефи від 9 та більше`)

let findAllClubsFromNine = cards.filter((card: ICards): boolean => card.cardSuit === 'clubs' && card.value === '9' || card.cardSuit === 'clubs' && card.value === '10' || card.cardSuit === 'clubs' && card.value === 'jack' || card.cardSuit === 'clubs' && card.value === 'queen' || card.cardSuit === 'clubs' && card.value === 'king' || card.cardSuit === 'clubs' && card.value === 'ace');

console.log(findAllClubsFromNine)

// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

let reduce = cards.reduce((accumulator: ICardsProperStruction, card: ICards) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})

console.log(reduce)