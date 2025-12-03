const input = require("readline-sync");
let n = input.questionInt("Digite um número: ");

let ehPrimo = true;

for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    ehPrimo = false;
    break;
  }
}

if (ehPrimo && n > 1) console.log("É primo");
else console.log("Não é primo");