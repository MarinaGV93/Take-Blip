// Filtre e retorne todos os números pares de um array.

function filtraPares(arr){
    return arr.filter(callbak);
}

function callbak(item){
    return item % 2 === 0;
}

const meuArray = [1, 32, 54, 67, 55, 89];

console.log(filtraPares(meuArray));