"use strict";
let users2 = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
for (let user of users2) {
    if (user.status) {
        console.log(`Status true - has user ${user.name}`);
    }
}
for (let user of users2) {
    if (!user.status) {
        console.log(`Status false - has user ${user.name}`);
    }
}
for (let user of users2) {
    if (user.age > 30) {
        console.log(`Age more than 30 - has user ${user.name}`);
    }
}
