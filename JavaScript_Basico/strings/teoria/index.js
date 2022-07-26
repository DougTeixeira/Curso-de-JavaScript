let umastring = "um \"texto\"" /* para usar aspas duplas dentro de aspas duplas */

console.log(umastring) /**/
console.log(umastring[4])/**/
console.log(umastring.charAt(4)) /* faz a mesma coisa da de cima */
console.log(umastring.concat(' ', 'sobre', ' ', 'algo')) /* concatena */
console.log(umastring, 'sobre', 'algo') /* concatena */
console.log(umastring.concat(' ' + 'sobre' + ' ' + 'algo')) /* concatena */
console.log(umastring + ' ' + 'sobre' + ' ' + 'algo') /* concatena */
console.log(umastring.concat(` sobre algo`)) /* concatena */
console.log(`${umastring} sobre algo`) /* concatena */
console.log(umastring.indexOf('t')) /* encontra o primeiro t */
console.log(umastring.indexOf('t', 5)) /* encontra o primeiro t q vem dps do index 5 */
console.log(umastring.lastIndexOf('t', 5)) /* encontra o primeiro t q vem dps do index 5, nas de tras pra frente */
console.log(umastring.replace('um', 'outra')) /* substitui uma palavra por outra */
console.log(umastring.length) /* o tamanho da variavel */
console.log(umastring.slice(1, 7)) /* fatiamento */
console.log(umastring.slice(-10, -5)) /* fatiamento */
console.log(umastring.split(' ')) /* dividir a string por espaços */
console.log(umastring.toUpperCase()) /* tudo maiusculo */
console.log(umastring.toLowerCase()) /* tudo minusculo */
