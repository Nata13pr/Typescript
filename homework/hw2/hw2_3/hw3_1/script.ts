// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let mainDiv11: HTMLDivElement = document.createElement("div");
let h1111: HTMLHeadingElement = document.createElement("h1");
h1111.innerText = 'Кошик замовлень';

mainDiv11.appendChild(h1111);

const orderFunction = (carts: ObjCarts[], parentTag: HTMLElement, description: string) => {

    if (!Array.isArray(carts)) {
        throw new Error(`It's not an array`);
    } else {
        let mainUl: HTMLOListElement = document.createElement("ol");

        carts.forEach((cart:any) => {
            let li: HTMLLIElement = document.createElement("li");
            let h2: HTMLHeadingElement = document.createElement("h2");
            h2.innerText = description;
            li.appendChild(h2);

            for (let element in cart) {

                let cartElement: any = cart[element];

                if (!Array.isArray(cartElement)) {

                    if (element === 'thumbnail') {
                        let img: HTMLImageElement = document.createElement("img");
                        img.src = cartElement;
                        li.appendChild(img);
                    } else {
                        let p: HTMLParagraphElement = document.createElement("p");
                        p.innerText = `${element} - ${cartElement}`;
                        li.appendChild(p);
                    }

                } else {
                    orderFunction(cartElement, li, 'Деталі');
                }
            }
            mainUl.appendChild(li);
        })
        parentTag.appendChild(mainUl)
    }
}

document.body.appendChild(mainDiv11);

type ObjProducts = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number
}
type ObjCarts = {
    discountedTotal: number,
    id: number,
    products: ObjProducts[],
    total: number,
    totalProducts: number,
    totalQuantity: number
    userId: number,
}
type ObjectArray = {
    carts: ObjCarts[],
    limit: number,
    skip: number,
    total: number
}
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((responseObj: ObjectArray) =>
        orderFunction(responseObj.carts, mainDiv11, 'Замовлення')
    )
