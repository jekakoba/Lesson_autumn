"use strict";

// ====================================Функції====================================

//Задача 4

let showMessage;
if (2 > 1) {
	showMessage = function () {
		console.log('повідомлення');
	}
}
showMessage();


//==================================== Масиви====================================

//Задача 2
// Створіть масив users з елементами "Іван", та "Іштван".
// Додати "Оля" в кінець.
// Замінити значення в "Іштван" на "Петро"
// Ваш код для пошуку значення повинен працювати для масивів
// довільної довжини

// Видалити перший елемент масива і покажіть його 
// Вставте "Маша" і "Паша" на початок масива

let users = ["Іван", "Іштван",]
console.log(users);

users.push("Оля");
console.log(users);



let findName = "Іштван";
let newName = "Петро";

users.forEach((user, index) => {
	if (user === findName) {
		users.splice(index, 1, newName)
	}
});

console.log(users);

let delElement = users.shift();
console.log(delElement);

users.unshift("Маша", "Паша");
console.log(users);



//Задача 3
// Видалити елемент "Іштван" і повернути його в змінну
let arr = ["Іван", "Іштван", "Оля",];

let newArr = arr.splice(1, 1);
console.log(newArr);


//Задача 4
// Зробити з рядка масив
let str = "Іван, Іштван, Оля";
let arrThree = str.split();
console.log(arrThree);

//Задача 5
// Чому дорівнює previousValue на початку роботи метода? 

let arrr = [9, 2, 8,];

let reduceValue = arrr.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
})



//========================================= Document object model (DOM) =========================================

//Задача 1
// Отримати в змінну елемент з атрибутом data-say-hi
// та прочиатти значення цього атрибуту
let element = document.querySelector('[data-say-hi]');
console.log(element.dataset.sayHi);

//Задача 2
//Отримати в змінну елемент з текстом Йончі 
let names = document.querySelectorAll('ul li')[1];
console.log(names);

//Задача 3
// Отримати в змінну колекцію елементів з класом like
let className = document.querySelectorAll(".like");
console.log(className);




//Задача 4
// Куди добавиться <li>Текст</li>?
// (добавив клас, так як в мене вже є ul, щоб не путатися)
const listTwo = document.querySelector('.listTwo');
listTwo.insertAdjacentHTML(
	`beforeend`,
	'<li>Текст</li>'
);





//========================================= Розмір прокрутки, координати елементів на сторінці та вікна браузера =========================================

//Задача 1 
// Дізнатися ширину полоси прокрутки

const htmlElement = document.documentElement;
const mainElementWidth = htmlElement.clientWidth;
console.log(mainElementWidth);
const windowWidth = window.innerWidth;
console.log(windowWidth);

const widthScroll = windowWidth - mainElementWidth;
console.log(widthScroll);


//Задача 2 
// Змусити браузер прокрутитися на 100px сверху через секунду після відкриття сторінки

function scrollTop() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
}
setTimeout(scrollTop, 1000);




//Задача 3 
// Отримати координати будь-яких трьох елементів на сторінці

const elementFirst = document.querySelector('.element_first');

const elementSecond = document.querySelector('.element_second');

const elementThird = document.querySelector('.element_third');



const getElementOne = elementFirst.getBoundingClientRect();

const getElementSecond = elementSecond.getBoundingClientRect();

const getElementThird = elementThird.getBoundingClientRect();
