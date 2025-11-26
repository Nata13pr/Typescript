// створити масив книжок (назва, кількість сторінок, автори , жанри).
interface IBook2 {
    title: string,
    pages: number,
    authors: string[],
    genres: string[]
}

const booksArray: IBook2[] = [
    {
        title: "1984",
        pages: 328,
        authors: ["Джордж Орвелл"],
        genres: ["Антиутопія", "Політична фантастика"]
    },
    {
        title: "Убити пересмішника",
        pages: 384,
        authors: ["Гарпер Лі"],
        genres: ["Художня література", "Судовий роман"]
    },
    {
        title: "Великий Гетсбі",
        pages: 180,
        authors: ["Ф. Скотт Фіцджеральд"],
        genres: ["Модернізм", "Трагедія"]
    },
    {
        title: "Хроніки Нарнії: Лев, чаклунка та шафа",
        pages: 206,
        authors: ["К. С. Льюїс"],
        genres: ["Фентезі", "Дитяча література"]
    },
    {
        title: "Дюна",
        pages: 412,
        authors: ["Френк Герберт"],
        genres: ["Наукова фантастика", "Епічна фантастика"]
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 309,
        authors: ["Джоан К. Роулінг"],
        genres: ["Фентезі", "Молодіжна література"]
    },
    {
        title: "Сто років самотності",
        pages: 417,
        authors: ["Габріель Гарсіа Маркес"],
        genres: ["Магічний реалізм", "Роман", "Латиноамериканська література"]
    },
    {
        title: "Майстер і Маргарита",
        pages: 480,
        authors: ["Михайло Булгаков"],
        genres: ["Сатира", "Магічний реалізм", "Філософський роман"]
    },
    {
        title: "Володар перснів: Братство Персня",
        pages: 423,
        authors: ["Дж. Р. Р. Толкін"],
        genres: ["Високе фентезі", "Пригоди"]
    },
    {
        title: "Автостопом по Галактиці",
        pages: 216,
        authors: ["Дуглас Адамс"],
        genres: ["Наукова фантастика", "Комедія"]
    },
    {
        title: "Портрет Доріана Грея",
        pages: 254,
        authors: ["Оскар Уайльд"],
        genres: ["Готичний роман", "Філософський роман"]
    },
    {
        title: "Гордість і упередження",
        pages: 432,
        authors: ["Джейн Остін"],
        genres: ["Класичний роман", "Романтика"]
    },
    {
        title: "Лоліта",
        pages: 317,
        authors: ["Володимир Набоков"],
        genres: ["Сучасна література", "Психологічний роман"]
    },
    {
        title: "Тінь вітру",
        pages: 560,
        authors: ["Карлос Руїс Сафон"],
        genres: ["Готичний роман", "Детектив", "Історична проза"]
    },
    {
        title: "Алхімік",
        pages: 208,
        authors: ["Пауло Коельо"],
        genres: ["Філософський роман", "Притча"]
    },
    {
        title: "Подорожі Гуллівера",
        pages: 306,
        authors: ["Джонатан Свіфт"],
        genres: ["Сатира", "Пригоди"]
    },
    {
        title: "Дванадцять стільців",
        pages: 389,
        authors: ["Ілля Ільф", "Євген Петров"],
        genres: ["Сатира", "Комедія"]
    },
    {
        title: "Загадка 451 по Фаренгейту",
        pages: 249,
        authors: ["Рей Бредбері"],
        genres: ["Антиутопія", "Наукова фантастика"]
    },
    {
        title: "Кафка на пляжі",
        pages: 602,
        authors: ["Харукі Муракамі"],
        genres: ["Магічний реалізм", "Філософський роман"]
    },
    {
        title: "Щоденник Бріджит Джонс",
        pages: 310,
        authors: ["Гелен Філдінг"],
        genres: ["Чикліт", "Комедія"]
    }
];

console.log(`---------------знайти найбільшу книжку.--------------------`)

let theLongestBook: IBook2 | undefined = booksArray[0];
let theLongestBookPages: number = 0;

for (let book of booksArray) {
    if (book.pages > theLongestBookPages) {
        theLongestBookPages = book.pages;
        theLongestBook = book;
    }
}
console.log(`Найбільша книжка-'${theLongestBook?.title}'.Кількість сторінок-${theLongestBook?.pages}`);

console.log(`------------------------знайти книжку/ки з найбільшою кількістю жанрів------------------------`);
let theLargestQuantityOfGenres: number | undefined = booksArray[0]?.genres.length;
let bookWithTheLargestQuantityOfGenres: string = '';

for (let book of booksArray) {
    if (theLargestQuantityOfGenres) {
        if (book.genres.length > theLargestQuantityOfGenres) {
            theLargestQuantityOfGenres = book.genres.length;
        }
    }
}

for (let book of booksArray) {
    if (book.genres.length === theLargestQuantityOfGenres) {
        bookWithTheLargestQuantityOfGenres += `${book?.title};`
    }
}

console.log(`Назва книжки/книжок з найбільшою кількість жанрів - ${bookWithTheLargestQuantityOfGenres}-кількість жанрів ${theLargestQuantityOfGenres}`);

console.log(`------------------------ знайти книжку/ки з найдовшою назвою------------------------------`);
let theLongestTitle: number | undefined = booksArray[0]?.title.length;
let bookWithTheLongestTitle: IBook2 | undefined = booksArray[0];

for (let book of booksArray) {
    if (theLongestTitle) {
        if (book.title.length > theLongestTitle) {
            theLongestTitle = book.title.length;
            bookWithTheLongestTitle = book;
        }
    }
}
console.log(`Книжка з найдовшою назвою ${bookWithTheLongestTitle?.title} - довжина назви ${bookWithTheLongestTitle?.title.length}`)

console.log(`--------------------знайти книжку/ки, які писали 2 автори---------------------`);
let bookWithTwoAuthors: string = '';

for (let book of booksArray) {
    if (book.authors.length === 2) {
        bookWithTwoAuthors += `${book.title};`
    }
}
console.log(`Книжка/книжки ${bookWithTwoAuthors} - має 2-x авторів.`);

console.log(`------------------------знайти книжку/ки, які писав 1 автор-------------------`)
let bookWithOneAuthor: string = '';

for (let book of booksArray) {
    if (book.authors.length === 1) {
        bookWithOneAuthor += `${book.title};`
    }
}
console.log(`Книжка/книжки,які писав 1 автор:${bookWithOneAuthor}`)
