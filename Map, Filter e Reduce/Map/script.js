// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

console.log('-------------');
console.log('Com this: ');

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const num = [1, 2];

console.log('this -> maçã', mapComThis(num, maca));

console.log('this -> laranja', mapComThis(num, laranja));

console.log('-------------');
console.log('Sem this: ');

function mapSemThis(arr1){
    return arr1.map(function(item){
        return item * 2;
    });
}

const n1 = [2, 4, 6, 8, 10];

console.log(mapSemThis(n1));
