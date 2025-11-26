"use strict";
console.log(`– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone

створити пустий масив, наповнити його 10 об’єктами new User(….)`);
class User {
    constructor(_id, _name, _surname, _email, _phone) {
        this._id = _id;
        this._name = _name;
        this._surname = _surname;
        this._email = _email;
        this._phone = _phone;
    }
    getId() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    getName() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    getSurname() {
        return this._surname;
    }
    set surname(value) {
        this._surname = value;
    }
    getEmail() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    getPhone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
}
let usersArray = [];
let user1 = new User(1, 'olja', 'fedoriv', 'ola@gmail.com', '+380959481642');
usersArray.push(user1);
let user2 = new User(2, 'vasja', 'polakov', 'vasja@gmail.com', '+380959487602');
usersArray.push(user2);
let user3 = new User(3, 'kolja', 'masliak', 'kolja@gmail.com', '+380959491642');
usersArray.push(user3);
let user4 = new User(4, 'vova', 'petriv', 'vova@gmail.com', '+380959461642');
usersArray.push(user4);
let user5 = new User(5, 'andrij', 'andrijv', 'andrij@gmail.com', '+380959481842');
usersArray.push(user5);
let user6 = new User(6, 'zoja', 'lebedynets', 'zoja@gmail.com', '+380959481742');
usersArray.push(user6);
let user7 = new User(7, 'anna', 'shturba', 'anna@gmail.com', '+380959481542');
usersArray.push(user7);
let user8 = new User(8, 'lilja', 'ivaniv', 'lilja@gmail.com', '+380959481342');
usersArray.push(user8);
let user9 = new User(9, 'sveta', 'svitla', 'sveta@gmail.com', '+380959481632');
usersArray.push(user9);
let user10 = new User(10, 'oleg', 'roshevyj', 'oleg@gmail.com', '+380959481612');
usersArray.push(user10);
console.log(usersArray);
console.log(`– Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)`);
let filteredUsers = usersArray.filter(user => !(user.getId() % 2));
console.log(filteredUsers);
console.log(`– Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)`);
let sortAscending = usersArray.sort((a, b) => a.id - b.id);
console.log(sortAscending);
console.log(`– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

створити пустий масив, наповнити його 10 об’єктами Client`);
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientsArray = [
    new Client(1, 'olja', 'fedoriv', 'ola@gmail.com', '+380959481642', ['coke', 'tomato', 'orange']),
    new Client(2, 'vasja', 'polakov', 'vasja@gmail.com', '+380959487602', ['coke', 'potato', 'tomato', 'orange']),
    new Client(3, 'kolja', 'masliak', 'kolja@gmail.com', '+380959491642', ['grape', 'milk']),
    new Client(4, 'vova', 'petriv', 'vova@gmail.com', '+380959461642', ['pear', 'juice']),
    new Client(5, 'andrij', 'andrijv', 'andrij@gmail.com', '+380959481842', ['oreo', 'cookie', 'tomato', 'orange']),
    new Client(6, 'zoja', 'lebedynets', 'zoja@gmail.com', '+380959481742', ['water', 'candy']),
    new Client(7, 'anna', 'shturba', 'anna@gmail.com', '+380959481542', ['juice', 'milk', 'candy']),
    new Client(8, 'lilja', 'ivaniv', 'lilja@gmail.com', '+380959481342', ['tomato', 'banana', 'orange']),
    new Client(9, 'sveta', 'svitla', 'sveta@gmail.com', '+380959481632', ['cucumber', 'paper', 'cabbage', 'tomato', 'orange']),
    new Client(10, 'oleg', 'roshevyj', 'oleg@gmail.com', '+380959481612', ['oreo', 'cookie'])
];
console.log(clientsArray);
console.log(`– Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)`);
let sortClients = clientsArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);
class Car {
    constructor(model, manufacture, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`Модель - ${this.model};Бренд - ${this.manufacture}; Рік випуску - ${this.year}; Максимальна швидкість - ${this.maxSpeed}; Об'єм  двигуна - ${this.engineVolume}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let car = new Car('bmw', 'germany', 1960, 150, 7);
car.info();
car.drive();
console.log(car);
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
class CarWithClass {
    constructor(model, manufacture, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (let item in this) {
            console.log(`${item} - значення ${this[item]}`);
        }
    }
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0)
            this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        if (newValue > 1815)
            this.year = newValue;
    }
    addDriver(driver) {
        if (driver)
            this.driver = driver;
    }
}
let carTesla = new CarWithClass('Model S', 'Tesla', 2023, 270, 4);
console.log(carTesla);
carTesla.drive();
carTesla.info();
carTesla.increaseMaxSpeed(300);
console.log(carTesla);
carTesla.changeYear(2025);
console.log(carTesla);
carTesla.addDriver({ name: 'lion', age: 50, gender: 'male' });
console.log(carTesla);
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellasArray = [
    new Cinderella('ira', 40, 37),
    new Cinderella('inna', 30, 36.5),
    new Cinderella('anna', 28, 38.5),
    new Cinderella('katya', 26, 39.5),
    new Cinderella('alyona', 29, 37.5),
    new Cinderella('ilona', 37, 35),
    new Cinderella('anjella', 22, 36),
    new Cinderella('solomiya', 23, 39),
    new Cinderella('angelina', 25, 40),
    new Cinderella('malvina', 33, 38),
];
class Prince {
    constructor(name, age, sizeOfShoe) {
        this.name = name;
        this.age = age;
        this.sizeOfShoe = sizeOfShoe;
    }
}
let charming = new Prince('kolja', 20, 37.5);
let findACouple = function (array, prince) {
    for (let item of array) {
        if (item.footSize === prince.sizeOfShoe)
            console.log(`Попелюшка на ім'я ${item.name} повинна бути з принцом ${charming.name}`);
    }
};
findACouple(cinderellasArray, charming);
let findCinderella = cinderellasArray.find(cinderellas => cinderellas.footSize === charming.sizeOfShoe);
console.log(findCinderella);
console.log(`*Через Array.prototype. створити власний foreach, filter`);
Array.prototype.foreachUnique = function (anotherFunction) {
    for (let i = 0; i < this.length; i++) {
        anotherFunction(this[i]);
    }
};
let uniqueArray = [0, 4, 7, 44, 33, 7, 9, 3, 999];
uniqueArray.foreachUnique(item => console.log(item));
Array.prototype.myFilterFunction = function (description) {
    let newArray = [];
    for (let item of this) {
        if (description(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};
let findCinderellaWithNameParticularFeet = cinderellasArray.myFilterFunction(item => item.age < 35);
console.log(findCinderellaWithNameParticularFeet);
