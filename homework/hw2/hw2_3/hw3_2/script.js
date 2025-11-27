"use strict";
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
let mainDiv111 = document.createElement("div");
let h11111 = document.createElement("h1");
h11111.innerHTML = "Recipes";
mainDiv111.appendChild(h11111);
const descriptionRecipesFunction = (recipes) => {
    if (!Array.isArray(recipes)) {
        throw new Error('This is not an array');
    }
    else {
        let mainOl = document.createElement("ol");
        for (let recipe of recipes) {
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            h2.innerHTML = 'Recipe';
            li.appendChild(h2);
            for (let detail in recipe) {
                let detailed = recipe[detail];
                if (!Array.isArray(detailed)) {
                    if (detail === 'image') {
                        let img = document.createElement("img");
                        img.src = recipe[detail];
                        li.appendChild(img);
                    }
                    else {
                        let p = document.createElement("p");
                        p.innerHTML = `${detail} - ${detailed}`;
                        li.appendChild(p);
                    }
                }
                else {
                    let h3 = document.createElement("h3");
                    h3.innerHTML = detail.toUpperCase();
                    let ul = document.createElement("ul");
                    li.append(h3, ul);
                    for (let item of detailed) {
                        let liList = document.createElement("li");
                        liList.innerText = item;
                        ul.appendChild(liList);
                    }
                }
            }
            mainOl.appendChild(li);
        }
        mainDiv111.appendChild(mainOl);
    }
};
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((responseObject) => {
    console.log(responseObject);
    const { recipes } = responseObject;
    descriptionRecipesFunction(recipes);
});
document.body.append(mainDiv111);
