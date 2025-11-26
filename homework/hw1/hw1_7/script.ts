// – є масив
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
interface ICoursesAndDurationArray2 {
    title: string,
    monthDuration: number,
    id?:number
}

let coursesAndDurationArray2: ICoursesAndDurationArray2[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newCoursesAndDurationArray2 = coursesAndDurationArray2
    .map<ICoursesAndDurationArray2>((item:ICoursesAndDurationArray2, index:number) => ({id: index + 1, ...item}));

console.log(newCoursesAndDurationArray2);

// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
interface ISomeObject {
    name: string,
    age: number,
    hobbies: string [],
    talk(): void,
    move(): void,
}

let someObject:ISomeObject = {
    name: 'John',
    age: 25,
    hobbies: ['music', 'art', 'animals', 'sport', 'theatre'],
    talk() {
        console.log(`${this.name} with age ${this.age} can talk`);
    },
    move() {
        console.log(`${this.name} with age ${this.age} can move`);
    }
}

function deepCloneObject<T>(obj:T):T {

    let functions:Array<{originalFunction:Function,key:string}> = [];

    if (obj !== null && typeof obj === 'object') {
        for (const key in obj) {

            if (typeof obj[key] === 'function') {
                const originalFunction = obj[key];
                functions.push({originalFunction, key});
            }
        }

        const cloneObj:T = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            (cloneObj as any)[func.key] = func.originalFunction;
        }

        return cloneObj;

    } else {
        throw new Error(`Очікується об'єкт.`);
    }
}


const newObject = deepCloneObject(someObject);

console.log(newObject)
newObject.talk()
newObject.move()
