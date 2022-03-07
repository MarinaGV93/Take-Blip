// Some todos os números de um array
// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

function somaNum(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const arr = [1, 2];

console.log(somaNum(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    }
];

const saldoDisp = 100;

console.log('-------------------------');

function calculaSaldo(saldoDisp, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisp);
}

console.log(calculaSaldo(saldoDisp, lista));