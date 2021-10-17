// 1.1 В цикле вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком.

let array = [1, 2, 3, 4];

const arrlength = array.length;
for (i=0; i < arrlength; i++) {
console.log(array[i]);
}

for (let item of array) {
    console.log(item);
}

// 1.2 Посчитать и вывести в консоль сумму элементов в массиве из чисел.

let sum = 0;
for (let item of array) {
    sum = sum + item;
    }
console.log(`Сумма: ${sum}`);

// 1.3 Посчитать и вывести в консоль сумму четных элементов в массиве из чисел.

let sum = 0;
for (let even of array) {
    if ( even % 2 == 0 ) sum = sum + even;
    }
console.log('Сумма чётных: ', sum); // в сафари это почему-то выглядит как Сумма чётных:  – 6. В хроме все ок Сумма чётных: 6

// 2. Определить массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let posArr = [];

for (let item of arr) {
    if ( item > 0 ) posArr.push(item);
    }
console.log(posArr)

// 3. Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами arr, но в новом должны содержаться элементы больше и равные (>=) значения переменной limit.

let arr = [5, 4, 3, 8, 0];
let limit = 5;
let limlitArr = [];

for (let item of arr) {
    if ( item >= limit ) limitArr.push(item);
    }
console.log(limitArr)

// 4. Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

let users = [
    { name: 'vasia', age: 12 }, 
    { name: 'olia', age: 8 }, 
    { name: 'kira', age: 35 }, 
    { name: 'varia', age: 5 }
];

for (let user of users) {
    if ( user.age > 10 ) console.log(user.name)
    }

// 5. Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)

let dogs = ['Mongrel Dog','Beagle','Husky','Labrador','Jack Russel'];
let dogsArr = [];

for (let dog of dogs) {
    dogsArr.push({
     word: dog, length: dog.length });
    }
    
console.log(dogsArr);

// 5.1 Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина слова", например "картошка - 8"

 dogsArr = [
     {word: "Mongrel Dog", length: 11}, 
     {word: "Beagle", length: 6}, 
     {word: "Husky", length: 5}, 
     {word: "Labrador", length: 8}, 
     {word: "Jack Russel", length: 11}
    ] 

for (let dog of dogsArr) {
    console.log(dog.word + ' – ' + dog.length);
}





    