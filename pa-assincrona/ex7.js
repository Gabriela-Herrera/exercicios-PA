ex8.js
const input = require("readline-sync");

let n = input.questionInt("Digite um número (0 para parar): ");
let maior = n;
let menor = n;

while (n !== 0) {
  if (n > maior) maior = n;
  if (n < menor) menor = n;
  n = input.questionInt("Outro número (0 para parar): ");
}

console.log("Maior:", maior);
console.log("Menor:", menor);