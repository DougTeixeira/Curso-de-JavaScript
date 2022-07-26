let num1 = 9.54578

console.log(Math.floor(num1)) /* arredonda pra baixo */
console.log(Math.ceil(num1)) /* arredonda pra cima */
console.log(Math.round(num1)) /* arredonda pro mais proximo */

console.log(Math.max(1,5,10,100,1500,20,30,200)) /* pega o valor maximo */
console.log(Math.min(1,5,10,100,1500,20,30,200)) /* pega o menor valor */
console.log(Math.random()) /* pega um valor aleatorio entre 0 e 1, nunca vai ser 1 */
const aleatorio = Math.round(Math.random() * (10 - 5) + 5)
console.log(aleatorio)

console.log(Math.PI) /* numero de pi */
console.log(Math.pow(2,3)) /* 2 elevado a 3 */
console.log(2 ** 10) /* 2 elevado a 10 */
console.log(Math.sqrt(16)) /* raiz quadrada */
console.log(Math.sqrt(9,3)) /* raiz cubica */