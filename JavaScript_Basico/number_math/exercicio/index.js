const numero = Number(prompt('digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `${Math.sqrt(numero)} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `Arredondado pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `Arredondado pra cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `Arredondado com duas casas decimais: ${(numero.toFixed(2))}</p>`;
