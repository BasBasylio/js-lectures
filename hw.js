
    /*
Домашка:

1.  !!! Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
    */
let gamburger = 4;
let fries = 1;
let menu = 1;

if ((gamburger >= 4 && fries >= 1) || (menu>=1 && gamburger >= 3)){
   console.log('Ми поїли')
}      
else 
   console.log('Ми йдемо в інше кафе')
    
    /*
2.  !!! Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
    */
let price = 1200;

if(price > 1000 && price < 1900){
    console.log('price allowed')
}      
else 
    console.log('price isn`t allowed')

    /*
3.  !!! Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
    */
let price1 = 901;

if(!(price1 >= 1000 && price1 <= 1900)){
    console.log('price allowed')
}      
else 
    console.log('price isn`t allowed')


    /*
4.  !!! За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
    */
let timeOfTheYear = 0;

if(timeOfTheYear == 1){
    console.log('Winter')
} else if (timeOfTheYear == 2) {
    console.log('Spring')
} else if (timeOfTheYear == 3) {
    console.log('Summer')
} else if(timeOfTheYear == 4){
    console.log('Autumn')
} else {
    console.log('index isn`t correct')
}


    /*
5.  !!! Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
    */
let a = 0;
let b = 1;
let c = 2;

if(a < b && a > c){
    console.log('a = ' + a + ' - average value')
} else if (a > b && a < c) {
    console.log('a = ' + a + ' - average value')    
} else if (a > b && b > c) {
    console.log('b = ' + b + ' - average value')
} else if (a < b && b < c) {
    console.log('b = ' + b + ' - average value')    
} else if (a > c && b < c) {
    console.log('c = ' + c + ' - average value')
} else if (a < c && b > c) {
    console.log('c = ' + c + ' - average value')    
} else {
    console.log('no average value identyfing')
}

    /*
6.  !!! Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
    */
let DayOfTheWeek = 7;

switch(DayOfTheWeek){
    case 1:
        console.log('Monday');
        break; 
    case 2:
        console.log('Tuesday');
        break; 
    case 3:
        console.log('Wednesday');
        break; 
    case 4:
        console.log('Thursday'); 
        break;        
    case 5:
        console.log('Friday');
        break; 
    case 6:
        console.log('Saturday'); 
        break;                
    case 7:
        console.log('Sunday');        
        break;
    default:
        console.log('index isn`t correct');
        break;   
}

    /*
7.  !!! За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
    */
let firstNumber = 10;
let secondNumber = 2;
let math = '/';

switch(math){
    case '+':
        console.log(firstNumber+secondNumber);
        break; 
    case '-':
        console.log(firstNumber-secondNumber);
        break; 
    case '*':
        console.log(firstNumber*secondNumber);
        break; 
    case '/':
        console.log(firstNumber/secondNumber); 
        break;        
    default:
        console.log('index isn`t correct');
        break;   
}

    /*
8.* !!! Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
    */
let str = 'EkolobasikU'
str =str.replace(/[aeiou]/gi, ''); 
                //[aeiou] - масив значень які необхідно замінити
                //g - заміна по всій STRING
                //i - не залежно від регістру
                //''- значення на яке необхідно замінити
console.log(str)

   /*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
let metr = 3055;
let km = metr/1000;
let lastMetr = metr % 10;
let lastKm = km % 10;
let metrText = '';
let kmText = '';
console.log('metr ' + metr + ', ' + 'lastMetr ' + lastMetr + ', ' + 'km ' + km + ', ' + 'lastKm ' + lastKm + '.')

let endArr = ['а'/* Дробові */, 'ів' /* <=5* + = 0 */, 'и' /*, 2, 3, 4*/]


if (metr % 1 === 0 && (lastMetr >=5 || lastMetr == 0) && lastMetr !== 1) {
    metrText = (metr + ' метр' + endArr[1]);
    console.log(metrText);
} 
if ((metr % 1 === 0 && lastMetr in[2,3,4]) && lastMetr !== 1) {
    metrText = (metr + ' метр' + endArr[2]);
    console.log(metrText);
}    
if ((metr % 1 !== 0 || lastMetr ==1) && lastMetr !== 1) {
    metrText = (metr + ' метр' + endArr[0]);
    console.log(metrText); 
}
if (lastMetr == 1) {
    metrText = (metr + ' метр');
    console.log(metrText)
}      
if (km % 1 === 0 && (lastKm >=5 || lastKm == 0) && lastKm !== 1) {
    kmText = (km + ' метр' + endArr[1]);
    console.log(kmText);
} 
if ((km % 1 === 0 && lastKm in[2,3,4]) && lastKm !== 1) {
    kmText = (km + ' метр' + endArr[2]);
    console.log(kmText);
}    
if ((km % 1 !== 0 || lastKm ==1) && lastKm !== 1) {
    kmText = (km + ' метр' + endArr[0]);
    console.log(kmText); 
}
if (lastKm == 1) {
    kmText = (km + ' метр');
    console.log(kmText)
}
console.log(metrText + ' це ' + kmText)