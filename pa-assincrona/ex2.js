const input = require("readline-sync");
let fim = input.questionInt("Digite o número final: ");

for (let i = 1; i <= fim; i++) {
  if (i % 2 === 0) console.log(i, "par");
  else console.log(i, "ímpar");
}