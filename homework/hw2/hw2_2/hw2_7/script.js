"use strict";
const addToLocalStorage = (arrayName, objToAdd) => {
    let array = localStorage.getItem(arrayName);
    if (array) {
        let parsedArray = JSON.parse(array);
        parsedArray.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(parsedArray));
    }
    else {
        throw new Error(`There is no array with name ${arrayName}`);
    }
};
addToLocalStorage('buklja', { name: 'help', age: 12 });
addToLocalStorage('sessionsList', { name: 'hhh', age: 15 });
