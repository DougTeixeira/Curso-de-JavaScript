/*
const pessoa1 = { um objeto é feito de {}
    nome: 'Douglas',
    sobrenome: 'Silva',
    idade: 23
};
*/

// podem ser craidos dentro de funções

/*
function criarPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
*/

//mas pode ser abreviado para a seguinte forma

/*
function criarPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}
*/

//pode ser criado funções dentro dos objetos 
// e sem precisar utilizar a palavra function

const pessoa1 = {
    nome: 'Douglas',
    sobrenome: 'Teixeira',
    idade: 23,

    fala(){
        console.log(`ola ${this.nome} ${this.sobrenome} de ${this.idade}`);
        //para acessar as variaveis do objeto é preciso utilizar this
    },

    icrementaIdade(){
        this.idade++;
    }

}

pessoa1.fala()
pessoa1.icrementaIdade()
pessoa1.fala()
pessoa1.icrementaIdade()
pessoa1.fala()
pessoa1.icrementaIdade()