"use strict";
let array11 = [];
for (let i = 0; i < 100; i++) {
    array11.push({ id: i + 1, name: 'Kolja' });
}
let mainDiv1 = document.createElement('div');
let currentPage = 1;
let start = 0;
function circle(start, page) {
    for (let j = start; j < 10 * page; j++) {
        let h2 = document.createElement("h2");
        h2.innerText = array11[j].name;
        let p = document.createElement("p");
        p.innerText = array11[j].id.toString();
        mainDiv1.append(h2, p);
    }
}
let firstButton = document.createElement('button');
firstButton.innerText = 'Previous';
let secondButton = document.createElement('button');
secondButton.innerText = 'Next';
circle(start, currentPage);
document.body.append(mainDiv1, firstButton, secondButton);
secondButton.addEventListener('click', function () {
    if (array.length > start + 10) {
        currentPage += 1;
        start += 10;
        mainDiv.innerText = '';
        circle(start, currentPage);
    }
});
firstButton.addEventListener('click', function () {
    if (start !== 0 && currentPage !== 1) {
        currentPage -= 1;
        start -= 10;
        mainDiv.innerText = '';
        circle(start, currentPage);
    }
});
