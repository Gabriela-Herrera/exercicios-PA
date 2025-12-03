const input = require("readline-sync");
let n = input.questionInt("Digite um número: ");

for (let i = n; i >= 0; i--) {
  console.log(i);
}