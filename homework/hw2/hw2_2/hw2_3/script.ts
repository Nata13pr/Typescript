// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let form: HTMLFormElement = document.createElement('form');
let inputName: HTMLInputElement = document.createElement('input');

inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'name');

let inputSurname: HTMLInputElement = document.createElement('input');
inputSurname.setAttribute('type', 'text');
inputSurname.setAttribute('name', 'surname');

let inputAge: HTMLInputElement = document.createElement('input');
inputAge.setAttribute('type', 'number');
inputAge.setAttribute('name', 'age');

let inputSubmit: HTMLInputElement = document.createElement('input');
inputSubmit.setAttribute('type', 'submit');
inputSubmit.setAttribute('name', 'submit');
inputSubmit.setAttribute('value', 'submit');


form.append(inputName, inputSurname, inputAge, inputSubmit)
document.body.appendChild(form);
type User11 = {
    name: string,
    surname: string,
    age: number,
}
form.addEventListener('submit', function (ev: SubmitEvent): void {
    ev.preventDefault();

    let user: User11 = {name: inputName.value, surname: inputSurname.value, age: Number(inputAge.value)};
    let mainDivFromBrowser: HTMLElement | null = document.getElementById('mainDiv')

    if (mainDivFromBrowser) {
        mainDivFromBrowser.remove()
    }
    let mainDiv: HTMLDivElement = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    for (let item in user) {
        let key = item as keyof typeof user;
        let p: HTMLParagraphElement = document.createElement("p");
        p.innerText = `${item} - ${user[key]} `;
        mainDiv.appendChild(p);
    }
    document.body.appendChild(mainDiv);
})
