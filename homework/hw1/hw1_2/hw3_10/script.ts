// – є масив [2,17,13,6,22,31,45,66,100,-18] :
//
// 1. перебрати його циклом while
//
//     2. перебрати його циклом for
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// 7. замінити кожне число, кратне 3, на слово “okten”
//
// 8. вивести масив у зворотньому порядку.
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let array5: number[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

console.log(`------------Перебір цикл while-------------`)
let i: number = 0;
while (i < array5.length) {
    console.log(array5[i]);
    i += 1;
}

console.log(`------------Перебір цикл for-------------`)
for (let h: number = 0; h < array5.length; h += 1) {
    console.log(array5[h]);
}

console.log(`------------числа тільки з непарним індексом  цикл while-------------`)
let j: number = 0;

while (j < array5.length) {

    if (j % 2) {
        console.log(`${array5[j]}-індекс ${j}`);
    }
    j += 1;
}

console.log(`------------числа тільки з непарним індексом  цикл for-------------`)
for (let z: number = 0; z < array5.length; z += 1) {

    if (z % 2) {
        console.log(`${array5[z]}-індекс ${z}`);
    }
}

console.log(`------------числа тільки парні  значення  цикл while-------------`)
let w: number = 0;

while (w < array5.length) {
    const currentItem: number | undefined = array5[w];

    if (typeof currentItem === 'number' && !isNaN(currentItem)) {
        if (currentItem % 2 === 0) {
            console.log(`${currentItem} - індекс ${w}`);
        }
    }

    w += 1;
}

console.log(`------------числа тільки парні  значення  цикл for-------------`)
for (let m: number = 0; m < array5.length; m += 1) {
    let item1: number | undefined = array5[m]
    if (typeof item1 === 'number' && !isNaN(item1)) {
        if (!(item1 % 2)) {
            console.log(`${item1} - індекс ${m}`)
        }
    }
}


console.log(`------------вивести масив у зворотньому порядку.-------------`)
let arrayNew: number[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

for (let f = arrayNew.length - 1; f >= 0; f -= 1) {
    console.log(arrayNew[f]);
}

console.log(`------------перебрати циклом while-задом наперед-------------`)
let a: number = array5.length - 1;

while (a >= 0) {
    console.log(array5[a]);
    a -= 1
}

console.log(`------------перебрати циклом for-задом наперед-------------`)
for (let l: number = array5.length - 1; l >= 0; l -= 1) {
    console.log(array5[l]);
}

console.log(`------------числа тільки з непарним індексом  цикл while-задом наперед-------------`)
let t: number = array5.length - 1;

while (t >= 0) {
    if (t % 2) {
        console.log(`індекс - ${t}`);
    }
    t -= 1;
}

console.log(`------------числа тільки з непарним індексом  цикл for-задом наперед-------------`)
for (let p: number = array5.length - 1; p >= 0; p -= 1) {
    if (p % 2) {
        console.log(`індекс - ${p}`);
    }
}

console.log(`------------числа тільки парні  значення  цикл while-задом наперед-------------`)
let k: number = array5.length - 1;

while (k >= 0) {
    let item: number | undefined = array5[k];
    if (typeof item === 'number' && !isNaN(item)) {
        if (!(item % 2)) {
            console.log(`${item}-індекс ${k}`);
        }
    }

    k -= 1;
}

console.log(`------------числа тільки парні  значення  цикл for-задом наперед-------------`)
for (let d: number = array5.length - 1; d >= 0; d -= 1) {
    let item: number | undefined = array5[d];
    if (typeof item === 'number' && !isNaN(item)) {
        if (!(item % 2)) {
            console.log(`${item}-індекс ${d}`)
        }
    }

}

console.log(`------------замінити кожне число, кратне 3, на слово “okten”-задом наперед-------------`)
for (let n: number = array5.length - 1; n >= 0; n -= 1) {
    let item: number | undefined | string = array5[n];
    if (typeof item === 'number' && !isNaN(item)) {
        if (!(item % 3)) {
            item = 'okten'
        }
    }

    console.log(`${item} - ${n}`);
}

