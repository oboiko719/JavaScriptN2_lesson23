//коментарии
"use strict";

//===Оператори в JAVASCRIPT. "2"+2=22
console.log('35' + - '22');

console.log('35' * '22');

//console.log('558' > 22++);

let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);

console.log(!false && 11 || 18 && !'');

let name = 0;
console.log(name ?? "Без имени")

//===IF ELSE в JAVASCRIPT. Умовний оператор "?". IF ELSE.
//Варіант1
if (1 === "1") {
  console.log('Вірно');
} else {
  console.log('Не вірно');
}

//Варіант2
if (5 == "5") {
  console.log('Вірно');
} else {
  console.log('Не вірно');
}

//Варіант3
let message = (92 > '11' && 58 < 100 ? 'Вірно' : 'Не вірно');
console.log(message);

//Варіант4
if (0) {
  console.log('Не вірно');
} else if (' ') {
  console.log('Вірно');
}

//===Цикли FOR и WHILE в JavaScript. Директиви break і continue.
//Задача1 вивести вконсоль числа 1-5
let numbOne = 1;
do {
  console.log(numbOne);
  numbOne++;
}while (numbOne <= 5);


//Задача2
let numbTwo = 8;
while (numbTwo) {
  console.log(numbTwo);
  numbTwo--;
}

//Задача3
for (let numbThree = 0; numbThree < 3; numbThree++) {
  console.log(`Число: ${numbThree}`);
}

let newNumbThree = 0;
while (newNumbThree < 3) {
  console.log(`Число: ${newNumbThree}`);
  newNumbThree++;
}

//Задача4 Завершити роботу цикла 1 коли size=1
firstFor:
for (let numbFour = 0; numbFour < 2; numbFour++){
  for (let size = 0; size < 3; size++) {
    if (size == 1) {
      break firstFor;
    }
    console.log(size);
  }
}

//===Числа в JAVASCRIPT. Тип даних number. Робота з числами=========================================
//Задача1 Отримати вірне значення округлення
let numOne = Math.round((1.005 + Number.EPSILON)* 100) / 100;
console.log(numOne);

//Задача2 Отримати число із рядка
let valueTwo = "135.58px";
console.log(parseFloat(valueTwo))

//Задача3 Побудувати вірну умову
let valueThree = 58 + "Фрилансер";
if (isNaN(valueThree)) {
  console.log('результат виразу NaN');
}

//Задача4 Знайти максимальне число 10 58 39 -150 0
console.log(Math.max(10, 58, 39, -150, 0));

//Задача5 Округлити число 58,858 до 58
let numFive = 58.858;
console.log(Math.floor(numFive));

//===Рядки в JAVASCRIPT. Тип даних string. Види лапок, пошук, регістр і отримання підрядка=========================================
//Задача2 Отримати символ з рядка
let textTwo = 'Привет! Я фрилансер';
let newTextTwo = textTwo.toLowerCase();
console.log(newTextTwo[0]);

//Задача4
let textFour = 'фрилансер';
console.log(textFour.toUpperCase());

//Задача5 отримати підрядок
let textFive = 'фрилансер';
let newTextFive = textFive.toLowerCase();
console.log(newTextFive.slice(3,6));

//Задача6 
let textSix = 'фрилансер';
console.log(textSix.includes('лан',4));