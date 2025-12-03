const input = require("readline-sync");
let n = input.questionInt("Digite um número: ");

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n*i}`);
}