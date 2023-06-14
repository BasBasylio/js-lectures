let number = 5;
const userScore = 1000;

//як не можна називати змінні
//let 5number = 5; не може починатись з цифр
//let /number = 5; не може починатись зі спецсимволів, крім $

// приклади назв
// camelCase - найбільш популярний варіант іменування змінних
// snake_case
// UPPER_SNAKE_CASE - константи
// kebab-case - зазвичай назви папок
// PascalCase - назви класів

// console.log(number);
// number = 'number';
// console.log(number);

console.log(userScore);
userScore = 2;
console.log(userScore);

const obj = {
    age: 20
}
console.log(obj);

obj.age = 30;
console.log(obj);

console.log(firstName);
var firstName = 'Taras';

let firstName2;
console.log(firstName2);

{
    var result = 70;
}
console.log(result);

alert(5);
[].push('q')


const a = 2000;
const b = 3000;

//100 lines od code

console.log('Ширина авто ' + a + ', довжина авто ' + b)


const width = 2000;
const length = 3000;

//100 lines od code

console.log('Ширина авто ' + width + ', довжина авто ' + length)



const vechileBodyWight = 2000;
const vechileBodyLength = 3000;

//100 lines od code

console.log('Ширина авто ' + vechileBodyWight + ', довжина авто ' + vechileBodyLength)


const carBodyWight = 2000;
const machineBodyLength = 3000;

//100 lines od code

console.log('Ширина авто ' + carBodyWight + ', довжина авто ' + machineBodyLength)

let rozetkaSerch = {
        "data": {
            "code": 1,
            "content": {
                "text": "noki",
                "changedText": "noki",
                "tpl_name": "one_plus_word",
                "records": {
                    "words_additions": [
                        {
                            "name": "nokia c31 чехол",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+c31+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                        },
                        {
                            "name": "nokia flip",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+flip"
                        },
                        {
                            "name": "nokia 6310",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+6310"
                        },
                        {
                            "name": "nokia g21 чехол",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21+%D1%87%D0%B5%D1%85%D0%BE%D0%BB"
                        },
                        {
                            "name": "nokia g21",
                            "href": "https://rozetka.com.ua/ua/search/?text=nokia+g21"
                        }
                    ],
                    "cats_searches": [
                        {
                            "id": "80037",
                            "top_id": "4627949",
                            "name": "в категорії <span class='bold'> Телевізори</span>",
                            "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80037&redirected=1",
                            "category_title": "Телевізори"
                        },
                        {
                            "id": "80027",
                            "top_id": "4627949",
                            "name": "в категорії <span class='bold'> Навушники</span>",
                            "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80027&redirected=1",
                            "category_title": "Навушники"
                        },
                        {
                            "id": "80003",
                            "top_id": "4627949",
                            "name": "в категорії <span class='bold'> Мобільні телефони</span>",
                            "href": "https://rozetka.com.ua/ua/search/?text=noki&section_id=80003&redirected=1",
                            "category_title": "Мобільні телефони"
                        }
                    ]
                },
                "count": 8,
                "total_count": 0,
                "page": 0,
                "start": 0,
                "sections_menu": [],
                "move_to_category": "Перейти в категорію",
                "price_with_promo": "Ціна з промокодом",
                "sudg_noth_to_find": "По вашому запиту нічого не знайдено. <nobr>Уточніть свій запит",
                "all_find_result": "Всі результати пошуку",
                "currency": "грн"
            }
        }
    
}

console.log('Перша категорія товарів з пошукової видачі: ' + rozetkaSerch.data.content.records.cats_searches[0].name)