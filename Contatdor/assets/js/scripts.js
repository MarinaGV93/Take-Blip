// Armazenando um valor q esta no Span
var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

function increment(){
    // Incrmentar a var
    currentNumber = currentNumber + 1;
    // innerHTML = o HTML que esta dentro da var
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    // Incrmentar a var
    currentNumber = currentNumber - 1;
    // innerHTML = o HTML que esta dentro da var
    currentNumberWrapper.innerHTML = currentNumber;
}