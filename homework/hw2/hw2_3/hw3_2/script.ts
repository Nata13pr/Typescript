// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.
let mainDiv111: HTMLDivElement = document.createElement("div");
let h11111: HTMLHeadingElement = document.createElement("h1");
h11111.innerHTML = "Recipes";

mainDiv111.appendChild(h11111);

const descriptionRecipesFunction = (recipes: Recepies[]) => {

    if (!Array.isArray(recipes)) {
        throw new Error('This is not an array');
    } else {
        let mainOl: HTMLOListElement = document.createElement("ol");

        for (let recipe of recipes) {
            let li: HTMLLIElement = document.createElement("li");
            let h2: HTMLHeadingElement = document.createElement("h2");
            h2.innerHTML = 'Recipe';

            li.appendChild(h2);

            for (let detail in recipe) {
                let detailed: any = recipe[detail]
                if (!Array.isArray(detailed)) {

                    if (detail === 'image') {
                        let img: HTMLImageElement = document.createElement("img");
                        img.src = recipe[detail];

                        li.appendChild(img);
                    } else {
                        let p: HTMLParagraphElement = document.createElement("p");
                        p.innerHTML = `${detail} - ${detailed}`;

                        li.appendChild(p)
                    }

                } else {
                    let h3: HTMLHeadingElement = document.createElement("h3");
                    h3.innerHTML = detail.toUpperCase();
                    let ul: HTMLUListElement = document.createElement("ul");

                    li.append(h3, ul);

                    for (let item of detailed) {
                        let liList: HTMLLIElement = document.createElement("li");
                        liList.innerText = item;

                        ul.appendChild(liList);
                    }
                }
            }
            mainOl.appendChild(li);
        }
        mainDiv111.appendChild(mainOl);
    }

}
type Recepies = {
    caloriesPerServing: number,
    cookTimeMinutes: number
    cuisine: string,
    difficulty: string
    id: number,
    image: string
    ingredients: string[]
    instructions: string[],
    mealType: string[]
    name: string,
    prepTimeMinutes: number,
    rating: number,
    reviewCount: number,
    servings: number,
    tags: string[],
    userId: number
}
type RecepiesObj = {
    recipes: Recepies[],
    limit: number,
    total: number,
    skip: number
}
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((responseObject: RecepiesObj) => {
            const {recipes} = responseObject;
            descriptionRecipesFunction(recipes)
        }
    );

document.body.append(mainDiv111);