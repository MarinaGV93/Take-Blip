function comparaNumeros(n1, n2){
    if (!n1 || !n2) return "Defina 2 números!";
    // const iguais = n1 === n2;
    // const soma = n1 + n2;

    // if (iguais) {
    //     return "São iguais";
    // }
    // return "Não são iguais";

    // Itenário
    // return iguais ? "São iguais" : "Não são iguais";

    // if (iguais) {
    //     alert(`O número ${n1} e ${n2} são iguais`);
    // }else{
    //     alert(`O número ${n1} e ${n2} não são iguais`);
    // }

// Funções auxiliares
    const primeiraFrase = criaPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundaFrase(n1, n2);

// Concatenar as frases
    return `\n${primeiraFrase} ${segundaFrase}`
}
// Ver se são iguais
function criaPrimeiraFrase(n1, n2) {
    let saoIguais = '';

    if (n1 !== n2) {
        saoIguais = 'não';
    }

    return `Os números ${n1} e ${n2}${saoIguais} são iguais.`
}

// Ver se a soma é > que 10 ou < que 20
function criaSegundaFrase(n1, n2){
    const soma = n1 + n2;
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (compara10) {
        resultado10 = 'maior'
    }
    if (compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(10,10));