"use strict";
let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let newCoursesAndDurationArray2 = coursesAndDurationArray2
    .map((item, index) => ({ id: index + 1, ...item }));
console.log(newCoursesAndDurationArray2);
let someObject = {
    name: 'John',
    age: 25,
    hobbies: ['music', 'art', 'animals', 'sport', 'theatre'],
    talk() {
        console.log(`${this.name} with age ${this.age} can talk`);
    },
    move() {
        console.log(`${this.name} with age ${this.age} can move`);
    }
};
function deepCloneObject(obj) {
    let functions = [];
    if (obj !== null && typeof obj === 'object') {
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const originalFunction = obj[key];
                functions.push({ originalFunction, key });
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.originalFunction;
        }
        return cloneObj;
    }
    else {
        throw new Error(`Очікується об'єкт.`);
    }
}
const newObject = deepCloneObject(someObject);
console.log(newObject);
newObject.talk();
newObject.move();
