"use strict";
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let mainDiv11 = document.createElement("div");
let h1111 = document.createElement("h1");
h1111.innerText = 'Кошик замовлень';
mainDiv11.appendChild(h1111);
const orderFunction = (carts, parentTag, description) => {
    if (!Array.isArray(carts)) {
        throw new Error(`It's not an array`);
    }
    else {
        let mainUl = document.createElement("ol");
        carts.forEach((cart) => {
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            h2.innerText = description;
            li.appendChild(h2);
            for (let element in cart) {
                let cartElement = cart[element];
                if (!Array.isArray(cartElement)) {
                    if (element === 'thumbnail') {
                        let img = document.createElement("img");
                        img.src = cartElement;
                        li.appendChild(img);
                    }
                    else {
                        let p = document.createElement("p");
                        p.innerText = `${element} - ${cartElement}`;
                        li.appendChild(p);
                    }
                }
                else {
                    orderFunction(cartElement, li, 'Деталі');
                }
            }
            mainUl.appendChild(li);
        });
        parentTag.appendChild(mainUl);
    }
};
document.body.appendChild(mainDiv11);
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((responseObj) => orderFunction(responseObj.carts, mainDiv11, 'Замовлення'));
