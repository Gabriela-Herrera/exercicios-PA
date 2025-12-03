const input = require("readline-sync");
let n = input.questionInt("Digite um número: ");

let fat = 1;
for (let i = n; i >= 1; i--) {
  fat *= i;
}

console.log("Fatorial =", fat);