// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void
type Obj1 = {
    name: string,
    age: number,
}
const addToLocalStorage = (arrayName: string, objToAdd: Obj1): void => {
    let array: string | null = localStorage.getItem(arrayName);
    if (array) {
        let parsedArray: Obj1[] = JSON.parse(array);
        parsedArray.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(parsedArray));
    } else {
        throw new Error(`There is no array with name ${arrayName}`);
    }
}

addToLocalStorage('buklja', {name: 'help', age: 12});
addToLocalStorage('sessionsList', {name: 'hhh', age: 15})

