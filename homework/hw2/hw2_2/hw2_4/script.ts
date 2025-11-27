// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

window.onload = function (): void {
    let div: HTMLElement | null = document.getElementById('number');

    let storedValue: string | null = localStorage.getItem('number');
    let number: number = 0;

    if (storedValue) {
        let storage: number = Number(JSON.parse(storedValue));
        if (!isNaN(storage)) {
            number = storage;
        }
    }
    let newNumber = number + 1;
    localStorage.setItem('number', newNumber.toString());
    if (div) {
        div.innerText = `${newNumber}`;
    }
}