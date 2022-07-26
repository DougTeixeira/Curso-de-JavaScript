const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos[2]); // selecionar

alunos[1] = 'Eduardo';// substituir
console.log(alunos);

console.log(alunos.length); // tamanho

alunos[alunos.length] = 'Douglas'; //adicionar ao final usando o tamanho do array
console.log(alunos);

alunos.push('Jonathan'); // adiciona ao final do array
console.log(alunos);

alunos.unshift('Aldenir');
console.log(alunos); // adiciona ao inicio do array

const removido1 = alunos.pop(); //remove o ultimo elemento do array
console.log(removido1);
console.log(alunos);

const removido2 = alunos.shift(); //remove o primeiro elemento do array
console.log(removido2);
console.log(alunos);

delete alunos[1];
console.log(alunos)

console.log(alunos[50]) // vai dar undefined

console.log(alunos.slice(2,4)) // fatiamento do indice 2 ate o 3, pois o 4 n é incluido

console.log(typeof alunos) // array é um objeto
console.log(alunos instanceof Array) // para saber se a variavel é uma instancia de array