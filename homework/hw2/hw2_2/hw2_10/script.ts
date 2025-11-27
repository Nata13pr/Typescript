// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
//     При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
type Obj2 = {
    id: number,
    name: string
}
let array11: Obj2[] = [];
for (let i = 0; i < 100; i++) {
    array11.push({id: i + 1, name: 'Kolja'} as Obj2);
}

let mainDiv1: HTMLDivElement = document.createElement('div');

let currentPage: number = 1;
let start: number = 0;

function circle(start: number, page: number): void {
    for (let j = start; j < 10 * page; j++) {

        let h2: HTMLHeadingElement = document.createElement("h2");
        h2.innerText = array11[j].name;
        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText = array11[j].id.toString();
        mainDiv1.append(h2, p);
    }
}

let firstButton: HTMLButtonElement = document.createElement('button');
firstButton.innerText = 'Previous'
let secondButton: HTMLButtonElement = document.createElement('button');
secondButton.innerText = 'Next'

circle(start, currentPage)

document.body.append(mainDiv1, firstButton, secondButton);
secondButton.addEventListener('click', function (): void {

    if (array.length > start + 10) {
        currentPage += 1;
        start += 10;
        mainDiv.innerText = '';
        circle(start, currentPage)
    }
})
firstButton.addEventListener('click', function (): void {
    if (start !== 0 && currentPage !== 1) {
        currentPage -= 1;
        start -= 10;
        mainDiv.innerText = '';
        circle(start, currentPage)
    }
})
