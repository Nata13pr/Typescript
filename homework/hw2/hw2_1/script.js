"use strict";
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.
let mainDiv = document.createElement('div');
mainDiv.classList.add('wrap');
mainDiv.classList.add('collapse');
mainDiv.classList.add('alpha');
mainDiv.classList.add('beta');
mainDiv.innerText = 'Hello World!';
mainDiv.style.backgroundColor = 'lightgreen';
mainDiv.style.color = 'grey';
mainDiv.style.fontSize = '50px';
document.body.appendChild(mainDiv);
let cloneDiv = mainDiv.cloneNode(true);
document.body.appendChild(cloneDiv);
// – Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let array = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
for (const item of array) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);
let coursesAndDurationArray4 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (let item of coursesAndDurationArray4) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = item.title;
    let p = document.createElement('p');
    p.innerText = item.monthDuration.toString();
    div.append(h2, p);
    document.body.appendChild(div);
}
let coursesAndDurationArraySecond = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (let item of coursesAndDurationArraySecond) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h2 = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerText = item.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration.toString();
    div.append(h2, p);
    document.body.appendChild(div);
}
let coursesArray1 = [
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
for (let item of coursesArray1) {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('main');
    let h2 = document.createElement('h2');
    h2.innerText = `Title - ${item.title}`;
    h2.classList.add('header');
    let firstSpan = document.createElement('span');
    firstSpan.innerText = `Month duration - ${item.monthDuration}`;
    firstSpan.classList.add('span');
    let secondSpan = document.createElement('span');
    secondSpan.innerText = `Hour duration ${item.hourDuration}`;
    secondSpan.classList.add('span');
    let ul = document.createElement('ul');
    for (const element of item.modules) {
        let li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);
    }
    mainDiv.append(h2, firstSpan, secondSpan, ul);
    document.body.appendChild(mainDiv);
}
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
let firstDiv = document.createElement('div');
firstDiv.style.backgroundColor = 'black';
firstDiv.style.width = '200px';
firstDiv.style.height = '200px';
let secondDiv = document.createElement('div');
secondDiv.style.backgroundColor = 'blue';
secondDiv.style.width = '200px';
secondDiv.style.height = '300px';
let thirdDiv = document.createElement('div');
thirdDiv.style.backgroundColor = 'green';
thirdDiv.style.width = '200px';
thirdDiv.style.height = '150px';
document.body.append(firstDiv, secondDiv, thirdDiv);
let blockOfDivs = [firstDiv, secondDiv, thirdDiv];
let biggestHeight = parseInt(blockOfDivs[0].style.height);
for (let item of blockOfDivs) {
    const height = parseInt(item.style.height);
    if (height > biggestHeight) {
        biggestHeight = height;
    }
}
firstDiv.style.height = `${biggestHeight}px`;
secondDiv.style.height = `${biggestHeight}px`;
thirdDiv.style.height = `${biggestHeight}px`;
