// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
const cuurentTime: Date | number = Date.now();

let storagedMoney: string | null | number = localStorage.getItem('money')

if (!storagedMoney) {
    storagedMoney = 100;
}
let storagedTime: string | null | number | Date = localStorage.getItem('time')

if (!storagedTime) {
    storagedTime = cuurentTime
}
let money: number = Number(storagedMoney)

if (cuurentTime - Number(storagedTime) >= 10000) {
    money = money + 10;
}
let div: HTMLElement | null = document.getElementById("div");

if (div) {
    div.innerText = `${money} грн `;
    document.body.appendChild(div);
    localStorage.setItem('money', JSON.stringify(money));
    localStorage.setItem('time', JSON.stringify(cuurentTime))
}

console.log(storagedMoney)
