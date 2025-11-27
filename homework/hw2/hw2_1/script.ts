// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

let mainDiv: HTMLDivElement = document.createElement('div');

mainDiv.classList.add('wrap')
mainDiv.classList.add('collapse');
mainDiv.classList.add('alpha');
mainDiv.classList.add('beta');

mainDiv.innerText = 'Hello World!';

mainDiv.style.backgroundColor = 'lightgreen';
mainDiv.style.color = 'grey';
mainDiv.style.fontSize = '50px';

document.body.appendChild(mainDiv);

let cloneDiv = mainDiv.cloneNode(true);

document.body.appendChild(cloneDiv)

// – Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let array: string[] = ['Main', 'Products', 'About us', 'Contacts'];

let ul: HTMLUListElement = document.createElement('ul');

for (const item of array) {
    let li: HTMLLIElement = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}

document.body.appendChild(ul);

// – Є масив
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
type CoursesAndDurationArray4Type = {
    title: string,
    monthDuration: number,
}

let coursesAndDurationArray4: CoursesAndDurationArray4Type[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let item of coursesAndDurationArray4) {
    let div: HTMLDivElement = document.createElement('div');
    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.innerText = item.title
    let p: HTMLParagraphElement = document.createElement('p');
    p.innerText = item.monthDuration.toString();
    div.append(h2, p);
    document.body.appendChild(div);
}

// – Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.
type CoursesAndDurationArraySecondType = {
    title: string,
    monthDuration: number,
}

let coursesAndDurationArraySecond: CoursesAndDurationArraySecondType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let item of coursesAndDurationArraySecond) {
    let div: HTMLDivElement = document.createElement('div');
    div.classList.add('item');
    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerText = item.title;
    let p: HTMLParagraphElement = document.createElement('p');
    p.classList.add('description');
    p.innerText = item.monthDuration.toString();
    div.append(h2, p);
    document.body.appendChild(div);
}

// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
type CoursesArrayType1 = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[]
}

let coursesArray1: CoursesArrayType1[] = [
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
    let mainDiv: HTMLDivElement = document.createElement('div');
    mainDiv.classList.add('main');
    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.innerText = `Title - ${item.title}`
    h2.classList.add('header');

    let firstSpan: HTMLSpanElement = document.createElement('span');
    firstSpan.innerText = `Month duration - ${item.monthDuration}`;
    firstSpan.classList.add('span');

    let secondSpan: HTMLSpanElement = document.createElement('span');
    secondSpan.innerText = `Hour duration ${item.hourDuration}`;
    secondSpan.classList.add('span');

    let ul: HTMLUListElement = document.createElement('ul');

    for (const element of item.modules) {
        let li = document.createElement('li');
        li.innerText = element;
        ul.appendChild(li);
    }
    mainDiv.append(h2, firstSpan, secondSpan, ul);
    document.body.appendChild(mainDiv);
}

// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.

let firstDiv: HTMLDivElement = document.createElement('div');
firstDiv.style.backgroundColor = 'black';
firstDiv.style.width = '200px';
firstDiv.style.height = '200px';
let secondDiv: HTMLDivElement = document.createElement('div');
secondDiv.style.backgroundColor = 'blue';
secondDiv.style.width = '200px';
secondDiv.style.height = '300px';
let thirdDiv: HTMLDivElement = document.createElement('div');
thirdDiv.style.backgroundColor = 'green';
thirdDiv.style.width = '200px';
thirdDiv.style.height = '150px';

document.body.append(firstDiv, secondDiv, thirdDiv);

let blockOfDivs: HTMLDivElement[] = [firstDiv, secondDiv, thirdDiv];

let biggestHeight: number = parseInt(blockOfDivs[0].style.height);


for (let item of blockOfDivs) {
    const height= parseInt(item.style.height)

    if (height > biggestHeight) {
        biggestHeight = height
    }
}

firstDiv.style.height = `${biggestHeight}px`;
secondDiv.style.height = `${biggestHeight}px`;
thirdDiv.style.height = `${biggestHeight}px`;


