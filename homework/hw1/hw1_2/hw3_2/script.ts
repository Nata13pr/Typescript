// – За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 let array3:string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'month', 'year', 'age'];

for (let i = 0; i < array3.length; i += 1) {
    document.write(
        `<div>
         <h2>${array3[i]}-індекс-${i}</h2>
         </div>`
    )
}

