// Dado um número n, para cada inteiro i no intervalo de 1 a n inclusive, 
// imprima um valor por linha da seguinte forma: 
// Se i for um múltiplo de 3 e 5, imprima FizzBuzz. 
// Se i for um múltiplo de 3 (mas não de 5), imprima Fizz. 
// Se i for um múltiplo de 5 (mas não 3), imprima Buzz. 
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.
 
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){ 
            console.log('Buzz');
        }else{
            console.log(i);
        }
     }
}fizzBuzz(15);
