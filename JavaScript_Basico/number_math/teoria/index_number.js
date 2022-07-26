let num1 = 1500
let num2 = 2.5
let num3 = 10.59756465

console.log(num1.toString() + num2) /* concatena */
console.log(num1.toString(2)) /* traz o binario do numero */
console.log(num3.toFixed(2)) /* arredonda as casas decimais */
console.log(Number.isInteger(num1)) /* verifica se é inteiro */

let temp = num1 * 'ola'
console.log(Number.isNaN(temp)) /* verifica se é um NaN */

console.log(100 / 0) /* vai da infinity e ainda é avaliado como True */