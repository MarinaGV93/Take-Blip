console.log('Hello World');
console.log('------------------');

// Ver se eh par
function par(array) {
    // Lista auxiliar
    let num = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 ===0){
            num.push(array[i]);
        }else{
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("Os numeros pares são: ",num);
}

let array = [1, 2, 4, 5, 7, 8];

par(array);