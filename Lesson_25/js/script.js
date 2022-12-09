"use strict";


const cat = document.querySelector('.cat');
const formLine = document.querySelector('.form__line');
const form = document.querySelector('.form');
const formSearchButton = document.querySelector('.form__search');




document.addEventListener('click', showInput);

function showInput(e) {
	if (e.target.closest('.form__search')) {
		formLine.classList.add('_active')
		cat.classList.toggle('_active-cat')
		formSearchButton.classList.add('_no-anime')
		formSearchButton.classList.add('_left')
		formLine.classList.remove('_fast')
	}
	if (!e.target.closest('form')) {

		formLine.classList.remove('_active')
		cat.classList.remove('_active-cat')
		formSearchButton.classList.remove('_no-anime')
		formSearchButton.classList.remove('_left')
		formLine.classList.add('_fast')
	}
}

const input = document.querySelector('.form__input');
const maxLength = input.getAttribute("maxlength")
const symbolsCounter = document.querySelector('.form__symbols span');
const symbols = document.querySelector('.form__symbols');
symbolsCounter.innerHTML = maxLength


document.addEventListener("keyup", function (e) {
	if (e.code === "Escape") {
		formLine.classList.remove('_active')
		cat.classList.remove('_active-cat')
		formSearchButton.classList.remove('_no-anime')
		formSearchButton.classList.remove('_left')
		formLine.classList.add('_fast')
	}
});
input.addEventListener("keyup", txtSetSymbols);
input.addEventListener("keydown", function (e) {
	if (e.repeat) txtSetSymbols()
});

function txtSetSymbols() {
	const txtSymbolsResult = maxLength - input.value.length;
	symbolsCounter.innerHTML = txtSymbolsResult;
	if (txtSymbolsResult === 0) {
		symbolsCounter.style.color = "red"
	} else {
		symbolsCounter.style.color = "white"
	}

}
