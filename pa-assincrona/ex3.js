const input = require("readline-sync");
let soma = 0;

for (let i = 1; i <= 5; i++) {
  let n = input.questionInt(`Número ${i}: `);
  soma += n;
}

console.log("Soma total =", soma);