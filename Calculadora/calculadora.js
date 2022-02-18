function calculadora(){
    const operacao =  Number(prompt('Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!');
        calculadora();
    } else {
        
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
        // Verificar se as variaveis sao validas
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!');
            calculadora();
        }else {
            // Declarar funçoes
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function sub(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function mult(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divInt(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function pot(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação: \n1 - Sim\n2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else{
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }

        // Verificador de operações
        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 1) {
        //     subtracao();
        // } else if (operacao == 2) {
        //     sub();
        // } else if (operacao == 3) {
        //     mult();
        // } else if (operacao == 4) {
        //     divReal();
        // } else if (operacao == 5) {
        //     divInt();
        // } else if (operacao == 6) {
        //     pot();
        // }
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                sub();
                break;
            case 3:
                mult();
                break;
            case 4:
                divReal();
                break;
            case 5:
                divInt();
                break;
            case 6:
                pot();
                break;
            default:
                break;
        }
    }
}
calculadora();