/*
primitivos (imutaveis) - strings, number, boolean, undefined, null (bigint, symbol)

referência (mutaveis) - arrays, object, function - passados por referência
*/

let nome = 'Douglas';
nome[0] = 'L'; // como é imutavel, n tem como mudar algum index da string
console.log(nome);

let a = 'A';
let b = a; // fez uma copia independente de a, ele pode ser alterado sem alterar b
console.log(a, b); // pois esta utilizando string e é primitivo
a = 'outra coisa';
console.log(a, b)

let c = [1, 2, 3];
let d = c; // aqui como são valores de referência, c e d apontam para o 
//mesmo local da memoria do computador, se alterar o array em um, altera nos dois
let e = [...c] // isso faz e não se referir ao mesmo local de c, mas ser apenas uma copia
console.log(c, d);
c.push(4);
console.log(c, d);
d.pop();
console.log(c, d);
e.pop();
e.push(10);
console.log(c, d, e);

const f = { // tbm acontece com objetos
    nome: 'Douglas',
    sobrenome: 'Teixeira'
};
const g = {...f}; // isso faz e não se referir ao mesmo local de c, mas ser apenas uma copia
f.nome = 'Jonathan'
console.log(g, f);