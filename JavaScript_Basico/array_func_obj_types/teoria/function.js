function soma(x=1, y=2) {
    const resultado = x + y
    return resultado;
}

/*const raiz = function(n) {
    return n ** 0.5;
}*/

const raiz = n => n ** 0.5;

const resultado = soma(4, 2);
console.log(resultado)

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))