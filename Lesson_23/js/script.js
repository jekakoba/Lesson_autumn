"use strict";

alert("Вибачаюсь за дизайн)")

//Цикли FOR і WHILE

//Задача 1.
//Вивести в консоль числа від 1 до 5

//Спосіб 1
let numbers = 1;
for (; numbers < 6; numbers++) {
	console.log(numbers);
}

//Спосіб 2
let numBers = 1;
while (numBers < 6) {
	console.log(numBers);
	numBers++
}

//Спосіб 2 ( короткий запис)
let numb = 1;
while (numb < 6) console.log(numb++);



//Задача 3
//Переписати на while
// let num = 0;
// while (num < 3) console.log(`Число ${num++}`);



//Задача 4
//Зупинити роботу цикла №1 коли size дорівнює 1
bullet: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break bullet;
		}
		console.log(size);
	}
}

//Числа

// Задача 1. Отримати правильне значення округлення

let numOne = 1.005 + Number.EPSILON;
let numResult = Math.round(numOne * 100) / 100;
console.log(numResult);


// Задача 2. Отримати число 135.58 з рядка

let value = (parseFloat("135.58px"));
console.log(value);

// Задача 3. Побудувати правильне умовне вітвлення

let valueTwo = 58 + "Фрілансер";

if (isNaN(valueTwo)) {
	console.log('Результат виразу Nan');
}


// Задача 4. Знайти максимальне число із 10, 58, 39, -150, 0

let maxNumber = (Math.max(10, 58, 39, -150,));
console.log(maxNumber);


// Задача 5. Округлити число 58.858 до чисоа 58
console.log(Math.floor(58.858));