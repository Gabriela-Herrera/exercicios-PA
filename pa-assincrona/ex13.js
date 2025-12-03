const input = require("readline-sync");

let n = input.questionInt("Número (0 para parar): ");
let soma = 0, cont = 0;
let maior = n, menor = n;

while (n !== 0) {
  soma += n;
  cont++;

  if (cont === 1) {
    maior = menor = n;
  } else {
    if (n > maior) maior = n;
    if (n < menor) menor = n;
  }

  n = input.questionInt("Número (0 para parar): ");
}

console.log("Quantidade:", cont);
console.log("Média:", soma / cont);
console.log("Maior:", maior);
console.log("Menor:", menor);