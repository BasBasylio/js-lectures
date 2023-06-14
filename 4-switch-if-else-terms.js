if(9==9){
    console.log('Цей блок виконується якщо умова істинна')
} else {
    console.log('Цей блок виконується якщо умова хибна')
}

if(9==9)
    console.log('Цей блок виконується якщо умова істинна')


if(0){
    console.log('Цей блок виконується якщо умова істинна')
} else {
    console.log('Цей блок виконується якщо умова хибна')
}

let num = 148;

if(num < 49){
    console.log('Меньше 49')
} else if (num > 100) {
    console.log('Більше 100')
} else {
    console.log('ok')
}


let number = 50;

switch(number){
    case 49:
        console.log('Value = 49');
    case 50:
        console.log('Value = 50');
    case 500:
        console.log('Value = 500');
        break;
    default:
        console.log('Default output');
        break;   

}