const input = require("readline-sync");

let total = 0;
let valor = input.questionFloat("Valor da compra (0 para terminar): ");

while (valor !== 0) {
  total += valor;
  valor = input.questionFloat("Valor da compra (0 para terminar): ");
}

console.log("Total a pagar: R$", total);