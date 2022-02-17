// // Armazenando um valor q esta no Span
// var currentNumberWrapper = document.getElementById('currentNumber');

// var currentNumber = 0;

// function increment(){
//     // Incrmentar a var
//     currentNumber = currentNumber + 1;
//     // innerHTML = o HTML que esta dentro da var
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement(){
//     // Incrmentar a var
//     currentNumber = currentNumber - 1;
//     // innerHTML = o HTML que esta dentro da var
//     currentNumberWrapper.innerHTML = currentNumber;
// }

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

function test() {
	kdowkdpo;
}