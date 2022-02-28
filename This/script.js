// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Marina',
    idade: 28
}
const pessoa2 = {
    nome: 'Pedro',
    idade: 24
}
const animal = {
    nome: 'Fiona',
    idade: 18,
    raca: 'Maltes'
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(pessoa1, [30]));