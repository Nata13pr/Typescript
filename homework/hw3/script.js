"use strict";
async function foobar(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status} from URL: ${url}`);
        }
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}
(async () => {
    try {
        const recepiesData = await foobar('https://dummyjson.com/recipes');
        const cartsData = await foobar('https://dummyjson.com/carts');
        console.log("Отримано об'єкт:", cartsData);
        console.log('Кількість карток', cartsData.carts.length);
        console.log("Отримано об'єкт:", recepiesData);
        console.log("Кількість рецептів:", recepiesData.recipes.length);
    }
    catch (error) {
        console.error("Не вдалося завантажити дані:", error.message);
    }
})();
