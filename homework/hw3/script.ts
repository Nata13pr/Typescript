// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
//     Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
type Recepies1 = {
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
type RecepiesObj1 = {
    recipes: Recepies1[],
    limit: number,
    total: number,
    skip: number
}

type ObjProducts1 = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number
}
type ObjCarts1 = {
    discountedTotal: number,
    id: number,
    products: ObjProducts1[],
    total: number,
    totalProducts: number,
    totalQuantity: number
    userId: number,
}
type ObjectArray1 = {
    carts: ObjCarts1[],
    limit: number,
    skip: number,
    total: number
}

async function foobar<SomeType>(url: string): Promise<SomeType> {
    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status} from URL: ${url}`);
        }
        const data = await res.json();
        return data as SomeType;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

(async () => {
    try {
        const recepiesData: RecepiesObj1 = await foobar<RecepiesObj1>('https://dummyjson.com/recipes');
        const cartsData: ObjectArray1 = await foobar<ObjectArray1>('https://dummyjson.com/carts');
        console.log("Отримано об'єкт:", cartsData);
        console.log('Кількість карток', cartsData.carts.length);
        console.log("Отримано об'єкт:", recepiesData);
        console.log("Кількість рецептів:", recepiesData.recipes.length);

    } catch (error) {
        console.error("Не вдалося завантажити дані:", (error as Error).message);
    }
})();

