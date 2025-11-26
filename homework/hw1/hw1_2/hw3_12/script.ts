console.log('Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.')
let array6:(string|number|boolean)[] = [];

array6[0] = '97';
array6[1] = false;
array6[2] = 'fall';
array6[3] = 94
array6[4] = 'dog'
array6[5] = true
array6[6] = 'doll'
array6[7] = 12
array6[8] = false
array6[9] = 33

for (let i:number = 0; i < array6.length; i += 1) {
    console.log(array6[i]);
}
