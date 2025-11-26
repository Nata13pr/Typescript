"use strict";
// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'month', 'year', 'age'];
for (let i = 0; i < array2.length; i += 1) {
    document.write(`<div>${array2[i]}</div>`);
}
